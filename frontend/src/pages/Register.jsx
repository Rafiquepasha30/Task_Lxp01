import { Link } from "react-router-dom";
import GoogleButton from "../components/GoogleButton";
import "./Auth.css";

function Register() {
  return (
    <div className="auth-container">
      <div className="card">

        <h1>MeetX</h1>

        <h2>Create Account</h2>

        <p>Register using your Google account</p>

        <GoogleButton />

        <p className="bottom-text">
          Already have an account?
          <Link to="/login"> Login</Link>
        </p>

      </div>
    </div>
  );
}

export default Register;