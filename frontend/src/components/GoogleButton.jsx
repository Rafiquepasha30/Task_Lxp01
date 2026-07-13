import { GoogleLogin } from "@react-oauth/google";

function GoogleButton() {
  const handleSuccess = (credentialResponse) => {
    console.log("Google Login Success");
    console.log(credentialResponse);

    // Later we'll send this token to FastAPI
  };

  const handleError = () => {
    console.log("Login Failed");
  };

  return (
    <GoogleLogin
      onSuccess={handleSuccess}
      onError={handleError}
      width="330"
    />
  );
}

export default GoogleButton;