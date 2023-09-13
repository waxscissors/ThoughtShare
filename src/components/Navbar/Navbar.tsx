import { NavLink } from "react-router-dom";
import { auth } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import Header from "./Header";

export default function Navbar() {
  const [user] = useAuthState(auth);
  const signOutUser = async () => {
    return await signOut(auth);
  };

  return (
    <div>
      <Header />
      <nav className="navbar navbar-expand-sm bg-light navbar-light m-10 sticky-top">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <NavLink className="nav-link" to="/profile">
              <img
                src={user?.photoURL || ""}
                alt=""
                style={{ width: "40px", borderRadius: "50px" }}
              />
            </NavLink>
            {!user ? (
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  style={{ textDecoration: "none", color: "black" }}
                  to="/login">
                  Login
                </NavLink>
              </li>
            ) : (
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  style={{ textDecoration: "none", color: "black" }}
                  to="/createpost">
                  Create
                </NavLink>
              </li>
            )}

            <li className="nav-item">
              <NavLink
                className="nav-link"
                style={{ textDecoration: "none", color: "black" }}
                to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                style={{ textDecoration: "none", color: "black" }}
                to="/help">
                Help
              </NavLink>
            </li>
            <li className="nav-item">
              {user && (
                <button className="btn btn-primary" onClick={signOutUser}>
                  Log Out
                </button>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
