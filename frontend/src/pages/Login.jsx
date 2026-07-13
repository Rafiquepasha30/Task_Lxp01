import { Link } from "react-router-dom";
import GoogleButton from "../components/GoogleButton";
import "./Auth.css";

function Login() {
  return (
    <div className="auth-container">
      <div className="card">

        <h1>LXP</h1>

        <h2>Welcome Back</h2>

        <p>Login with your Google account</p>

        <GoogleButton />

        <p className="bottom-text">
          Don't have an account?
          <Link to="/register"> Register</Link>
        </p>

      </div>
    </div>
  );
}

export default Login;