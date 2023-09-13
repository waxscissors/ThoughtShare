import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/main/Home";
import Login from "./pages/Login";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./pages/Profile";
import Create from "./pages/create-post/Create";
import Help from "./pages/Help";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Login />} path="/login" />
        <Route element={<Profile />} path="/profile" />
        <Route element={<Create />} path="/createpost" />
        <Route element={<Help />} path="/help" />
      </Routes>
    </Router>
  );
}

export default App;
