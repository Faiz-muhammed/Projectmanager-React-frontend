import React, { useEffect, useState } from "react";
import Header from "../../components/header";
import PMteam from "../../components/PMteam";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import {useSelector} from 'react-redux';
import Project from "../../components/projectHeader"

function HomePage() {
  const team = useSelector(state => state.team.value);
  const navigate = useNavigate();
  // const [team,setTeam] = useState(true);
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
      <Project />
     {team==true?<PMteam />:null}
    </div>
  );
}

export default HomePage;
