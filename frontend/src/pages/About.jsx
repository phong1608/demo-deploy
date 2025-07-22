import React from "react"

import FoundingStory from "../assets/Images/FoundingStory.png"
import BannerImage1 from "../assets/Images/aboutus1.webp"
import BannerImage2 from "../assets/Images/aboutus2.webp"
import BannerImage3 from "../assets/Images/aboutus3.webp"

import Footer from "../components/common/Footer"
import ContactFormSection from "../components/core/AboutPage/ContactFormSection"
import LearningGrid from "../components/core/AboutPage/LearningGrid"
import Quote from "../components/core/AboutPage/Quote"
import StatsComponenet from "../components/core/AboutPage/Stats"
import HighlightText from "../components/core/HomePage/HighlightText"
import Img from "../components/common/Img"
import ReviewSlider from './../components/common/ReviewSlider';

import { motion } from 'framer-motion';
import { fadeIn } from "../components/common/motionFrameVarients"





const About = () => {
  return (
    <div>
      <section className="bg-richblack-700">
        <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white">
          <motion.header
            className="mx-auto py-20 text-4xl font-semibold lg:w-[70%]"
          >
            <motion.p
              variants={fadeIn('down', 0.1)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.1 }}
            > Thúc đẩy đổi mới trong giáo dục trực tuyến cho một
              <HighlightText text={"Tương lai sáng lạng"} />
            </motion.p>

            <motion.p
              variants={fadeIn('up', 0.1)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.1 }}
              className="mx-auto mt-3 text-center text-base font-medium text-richblack-300 lg:w-[95%]">
              Chúng tôi là một nền tảng học tập trực tuyến tận tâm cung cấp các khóa học chất lượng cao, được thiết kế để đáp ứng nhu cầu và sở thích đa dạng của người học. Sứ mệnh của chúng tôi là trao quyền cho mọi người từ mọi tầng lớp xã hội để phát huy hết tiềm năng của họ thông qua giáo dục.
            </motion.p>
          </motion.header>

          <div className="sm:h-[70px] lg:h-[150px]"></div>

          <div className=" absolute bottom-0 left-[50%] grid w-[100%] translate-x-[-50%] translate-y-[30%] grid-cols-3 gap-3 lg:gap-5">
            <Img src={BannerImage1} alt="" />
            <Img src={BannerImage2} alt="" />
            <Img src={BannerImage3} alt="" />
          </div>
        </div>
      </section>

      <section className="border-b border-richblack-700">
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="h-[100px] "></div>
          <Quote />
        </div>
      </section>

      <section>
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
            <motion.div
              variants={fadeIn('right', 0.1)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.1 }}
              className="my-24 flex lg:w-[50%] flex-col gap-10">
              <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Câu chuyện thành lập của chúng tôi
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                Nền tảng học tập trực tuyến của chúng tôi ra đời từ tầm nhìn chung và niềm đam mê chuyển đổi giáo dục. Tất cả bắt đầu từ một nhóm nhà giáo dục, chuyên gia công nghệ và những người học tập suốt đời, những người nhận ra nhu cầu về các cơ hội học tập dễ tiếp cận, linh hoạt và chất lượng cao trong một thế giới kỹ thuật số đang phát triển nhanh chóng.
              </p>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                Là những nhà giáo dục giàu kinh nghiệm, chúng tôi đã tận mắt chứng kiến những hạn chế và thách thức của hệ thống giáo dục truyền thống. Chúng tôi tin rằng giáo dục không nên bị giới hạn trong
bức tường lớp học hay bị giới hạn bởi ranh giới địa lý. Chúng tôi hình dung ra một nền tảng có thể thu hẹp những khoảng cách này và trao quyền cho
mọi cá nhân từ mọi tầng lớp xã hội để phát huy hết
tiềm năng của họ.
              </p>
            </motion.div>

            <motion.div
             variants={fadeIn('left', 0.1)}
             initial='hidden'
             whileInView={'show'}
             viewport={{ once: false, amount: 0.1 }}
            >
              <Img
                src={FoundingStory}
                alt="FoundingStory"
                className="shadow-[0_0_20px_0] shadow-[#FC6767]"
              />
            </motion.div>
          </div>

          <div className="flex flex-col items-center lg:gap-10 lg:flex-row justify-between">
            <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Tầm nhìn của chúng tôi
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                Tầm nhìn của chúng tôi là tạo ra một nền tảng học tập trực tuyến toàn diện, nơi mọi người có thể tiếp cận các khóa học chất lượng cao, được thiết kế để đáp ứng nhu cầu và sở thích đa dạng. Chúng tôi muốn phá vỡ rào cản truyền thống trong giáo dục và cung cấp cho người học những công cụ và nguồn lực cần thiết để thành công trong thế giới kỹ thuật số.
              </p>
            </div>

            <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%] ">
                Sứ mệnh của chúng tôi
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                Sứ mệnh của chúng tôi là cung cấp một nền tảng học tập trực tuyến dễ sử dụng, nơi người học có thể khám phá, phát triển và phát huy hết tiềm năng của mình. Chúng tôi cam kết cung cấp các khóa học chất lượng cao, được thiết kế bởi các chuyên gia trong ngành và được hỗ trợ bởi công nghệ tiên tiến để mang lại trải nghiệm học tập tốt nhất có thể.
              </p>
            </div>
          </div>
        </div>
      </section>

      <StatsComponenet />

      <section className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white">
        <LearningGrid />
        <ContactFormSection />
      </section>

      {/* Reviws from Other Learner */}
      <div className=" my-20 px-5 text-white ">
        <h1 className="text-center text-4xl font-semibold mt-8">
          Đánh giá từ những người học khác
        </h1>
        <ReviewSlider />
      </div>

      {/* footer */}
      <Footer />
    </div>
  )
}

export default About