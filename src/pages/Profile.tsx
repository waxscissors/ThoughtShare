import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Profile() {
  const [user] = useAuthState(auth);

  return (
    <div>
      <div className="container p-3">
        <div className="card" style={{ width: "fit-content" }}>
          <div className="card-body">
            <h1 className="card-title">Profile</h1>
            <img
              className="card-image"
              src={user?.photoURL || ""}
              alt=""
              style={{ width: "100px", padding: "15px" }}
            />
            <h6 className="card-subtitle mb-2 text-muted">
              Name: <b>{user?.displayName}</b>
            </h6>
            <h6 className="card-subtitle mb-2 text-muted">
              Created at: <b>{user?.metadata.creationTime}</b>
            </h6>
            <h6 className="card-subtitle mb-2 text-muted">
              G-Mail: <b>{user?.email}</b>
            </h6>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
