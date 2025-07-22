import signupImg from "../assets/Images/signup.png"
import Template from "../components/core/Auth/Template"

function Signup() {
  return (
    <Template
      title="Đăng ký tài khoản"
      description1="Xây dựng kỹ năng của bạn với các khóa học trực tuyến chất lượng cao."
      description2="Đăng ký ngay để bắt đầu hành trình học tập của bạn!"
      image={signupImg}
      formType="signup"
    />
  )
}

export default Signup