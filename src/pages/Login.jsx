import '../styles/login.css'

function Login() {
  return (
    <div className="login">
      <div className="wrapper">
        <h2>Log in to your account</h2>
        <form action="">
          <div className="input__option">
            <input type="text" placeholder="Enter Your Email" />
          </div>
          <div className="input__option">
            <input type="text" placeholder="Enter Your Password" />
          </div>
          <button className="login__button">Log in</button>
        </form>
      </div>
    </div>
  )
}
export default Login