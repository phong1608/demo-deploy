import { toast } from "react-hot-toast";
// import { studentEndpoints } from "../apis";
// import { apiConnector } from "../apiConnector";
// import rzpLogo from "../../assets/Logo/rzp_logo.png"
// import { setPaymentLoading } from "../../slices/courseSlice";
// import { resetCart } from "../../slices/cartSlice";
import { apiConnector } from "../apiConnector";
// const { COURSE_PAYMENT_API, COURSE_VERIFY_API, SEND_PAYMENT_SUCCESS_EMAIL_API } = studentEndpoints;

// ================ buyCourse ================ 
export async function buyCourse(courseId,token) {
    const toastId = toast.loading("Loading...");

    try {
       
    const res = await apiConnector(
        "POST",
        `${import.meta.env.VITE_APP_BASE_URL}/payment/capturePayment`,
        { coursesId: courseId },
        {
          Authorization: `Bearer ${token}`,
        }
      );
    if (res.data.url) {
      window.location.href = res.data.url;
    } else {
      console.error('Không lấy được URL thanh toán');
    }

    }
    catch (error) {
        console.log("PAYMENT API ERROR.....", error);
        toast.error(error.response?.data?.message);
        // toast.error("Could not make Payment");
    }
    toast.dismiss(toastId);
}


// ================ send Payment Success Email ================
// async function sendPaymentSuccessEmail(response, amount, token) {
//     try {
//         await apiConnector("POST", SEND_PAYMENT_SUCCESS_EMAIL_API, {
//             orderId: response.razorpay_order_id,
//             paymentId: response.razorpay_payment_id,
//             amount,
//         }, {
//             Authorization: `Bearer ${token}`
//         })
//     }
//     catch (error) {
//         console.log("PAYMENT SUCCESS EMAIL ERROR....", error);
//     }
// }


// // ================ verify payment ================
// async function verifyPayment(bodyData, token, navigate, dispatch) {
//     const toastId = toast.loading("Verifying Payment....");
//     dispatch(setPaymentLoading(true));

//     try {
//         const response = await apiConnector("POST", COURSE_VERIFY_API, bodyData, {
//             Authorization: `Bearer ${token}`,
//         })

//         if (!response.data.success) {
//             throw new Error(response.data.message);
//         }
//         toast.success("payment Successful, you are addded to the course");
//         navigate("/dashboard/enrolled-courses");
//         dispatch(resetCart());
//     }
//     catch (error) {
//         console.log("PAYMENT VERIFY ERROR....", error);
//         toast.error("Could not verify Payment");
//     }
//     toast.dismiss(toastId);
//     dispatch(setPaymentLoading(false));
// }