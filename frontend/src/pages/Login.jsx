import loginImg from "../assets/Images/login.png"
import Template from "../components/core/Auth/Template"

function Login() {
  return (
    <Template
      title="Chào mừng trở lại"
      description1="Đăng nhập để tiếp tục hành trình học tập của bạn."
      description2="Nếu bạn chưa có tài khoản, hãy đăng ký ngay!"
      image={loginImg}
      formType="login"
    />
  )
}

export default Login