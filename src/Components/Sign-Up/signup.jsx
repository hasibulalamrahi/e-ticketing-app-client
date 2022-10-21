import { Link } from "react-router-dom";
import "../../Styles/Authentication/signUp.css";
const SignUpComponent = () => {
  return (
    <div>
      <div className="hero">
        <div className="content">
          <div className="main">
            <input type="checkbox" id="chk" aria-hidden="true" />
            <div className="signup">
              <div>
                <label for="chk" aria-hidden="true">
                  Sign Up
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required=""
                />
                <input
                  type="password"
                  name="pswd"
                  placeholder="Password"
                  required=""
                />
                <button className="auth-btn">Sign Up</button>
              </div>
            </div>
            <Link to="/sign-in">
              <div className="login">
                <div>
                  <label for="chk" aria-hidden="true">
                    Sign In
                  </label>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpComponent;
