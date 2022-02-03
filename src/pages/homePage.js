import React, { useEffect, useState } from "react";
import Header from "../components/header";
import PMteam from "../components/PMteam";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwt_decode(token);
      console.log(user);
      if (!user) {
        navigate("/login");
      }
    }
    else{
      navigate('/login')
    }
  },[]);

  return (
    <div style={{ backgroundColor: "#D0CFF6", height: "100vh" }}>
      <Header />
      <PMteam />
    </div>
  );
}

export default HomePage;
