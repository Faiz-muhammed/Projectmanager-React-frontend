import "./App.css";
import ManagerSignup from "./components/ManagerSignup";
import HomePage from "./pages/Homepage/homePage";
import ManagerLogin from "./pages/managerLogin/ManagerLogin";
import MemberLogin from "./pages/Memberlogin/memberLogin";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<ManagerSignup />} path="/signUp" />
        <Route element={<HomePage />} path="/" />
        <Route element={<ManagerLogin />} path="/login" />
        <Route element={<MemberLogin />} path="/invite/:id" />
      </Routes>
    </div>
  );
}

export default App;
