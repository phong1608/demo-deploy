
const { VNPay, HashAlgorithm, VnpLocale } = require('vnpay');
const mailSender = require('../utils/mailSender');
const { courseEnrollmentEmail } = require('../mail/templates/courseEnrollmentEmail');
require('dotenv').config();

const User = require('../models/user');
const Course = require('../models/course');
const CourseProgress = require("../models/courseProgress")


const { default: mongoose } = require('mongoose')


// ================ capture the payment and Initiate the 'Rajorpay order' ================
exports.capturePayment = async (req, res) => {

    // extract courseId & userId
    const { coursesId } = req.body;
    // console.log('coursesId = ', typeof (coursesId))
    // console.log('coursesId = ', coursesId)

    const userId = req.user.id;
    const vnpay = new VNPay({
            tmnCode: process.env.VNPAY_TMN_CODE,
            hashAlgorithm:HashAlgorithm.SHA512 ,
            vnpayHost: process.env.VNPAY_HOST_URL,
            testMode: true,
            secureSecret: process.env.VNPAY_SECRET,
        })
    
    if (coursesId.length === 0) {
        return res.json({ success: false, message: "Please provide Course Id" });
    }

    let totalAmount = 0;

    for (const course_id of coursesId) {
        let course;
        try {
            // valid course Details
            course = await Course.findById(course_id);
            if (!course) {
                return res.status(404).json({ success: false, message: "Could not find the course" });
            }

            // check user already enrolled the course
            const uid = new mongoose.Types.ObjectId(userId);
            if (course.studentsEnrolled.includes(uid)) {
                return res.status(400).json({ success: false, message: "Student is already Enrolled" });
            }

            totalAmount += course.price;
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({ success: false, message: error.message });
        }
    }

   
    const paymentUrl = vnpay.buildPaymentUrl({
            vnp_Amount: totalAmount ,
            vnp_TxnRef: Math.random(Date.now()).toString(),
            vnp_OrderInfo: Math.random(Date.now()).toString(),
            vnp_Locale: VnpLocale.VN,
            vnp_ReturnUrl: process.env.VNPAY_RETURN_URL,
            vnp_IpAddr: req.ip,
    })
    try {
        res.json({url: paymentUrl})

    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, mesage: "Could not Initiate Order" });
    }

}



// ================ verify the payment ================
exports.verifyPayment = async (req,res,next) => {

    const courses = req.body?.coursesId;
    const userId = req.user.id;
    // console.log(' req.body === ', req.body)
        try{
            const {vnp_OrderInfo,vnp_TransactionStatus} = req.query

            if(vnp_TransactionStatus ==='00'&&vnp_OrderInfo)
            {
                await enrollStudents(courses, userId, res);
                return res.status(200).json({ success: true, message: "Payment Verified" });
            }
        }
        catch(err) 
        {
            next(err)
        }

}


// ================ enroll Students to course after payment ================
const enrollStudents = async (courses, userId, res) => {

    if (!courses || !userId) {
        return res.status(400).json({ success: false, message: "Please Provide data for Courses or UserId" });
    }

    for (const courseId of courses) {
        try {
            const enrolledCourse = await Course.findOneAndUpdate(
                { _id: courseId },
                { $push: { studentsEnrolled: userId } },
                { new: true },
            )

            if (!enrolledCourse) {
                return res.status(500).json({ success: false, message: "Course not Found" });
            }
            // console.log("Updated course: ", enrolledCourse)

            // Initialize course preogres with 0 percent
            const courseProgress = await CourseProgress.create({
                courseID: courseId,
                userId: userId,
                completedVideos: [],
            })

            // Find the student and add the course to their list of enrolled courses
            const enrolledStudent = await User.findByIdAndUpdate(
                userId,
                {
                    $push: {
                        courses: courseId,
                        courseProgress: courseProgress._id,
                    },
                },
                { new: true }
            )


            const emailResponse = await mailSender(
                enrolledStudent.email,
                `Successfully Enrolled into ${enrolledCourse.courseName}`,
                courseEnrollmentEmail(enrolledCourse.courseName, `${enrolledStudent.firstName}`)
            )
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({ success: false, message: error.message });
        }
    }

}



exports.sendPaymentSuccessEmail = async (req, res) => {
    const { orderId, paymentId, amount } = req.body;

    const userId = req.user.id;

    if (!orderId || !paymentId || !amount || !userId) {
        return res.status(400).json({ success: false, message: "Please provide all the fields" });
    }

    try {
        // find student
        const enrolledStudent = await User.findById(userId);
        await mailSender(
            enrolledStudent.email,
            `Payment Recieved`,
            paymentSuccessEmail(`${enrolledStudent.firstName}`,
                amount / 100, orderId, paymentId)
        )
    }
    catch (error) {
        console.log("error in sending mail", error)
        return res.status(500).json({ success: false, message: "Could not send email" })
    }
}


