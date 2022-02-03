import "./App.css";
import ManagerSignup from "./components/ManagerSignup";
import HomePage from "./pages/homePage";
import ManagerLogin from "./pages/ManagerLogin";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<ManagerSignup />} path="/signUp" />
        <Route element={<HomePage />} path="/" />
        <Route element={<ManagerLogin />} path="/login" />
      </Routes>
    </div>
  );
}

export default App;
