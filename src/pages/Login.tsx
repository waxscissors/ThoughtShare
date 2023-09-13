import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";

export default function Login() {
  const signIn = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
  };

  return (
    <div className="p-5">
      <div className="container p-5 border">
        <h1>
          Login to post{" "}
          <i style={{ textDecoration: "underline", color: "blue" }}>Thoughts</i>
        </h1>
        <button className="btn btn-primary" onClick={signIn}>
          Login with a google account
        </button>
      </div>
    </div>
  );
}
