import React from "react";
import "./style.css";
import SocialFollow from "./SocialFollow" 

export default function App() {
  return (
    <div classname="main-div">
      <div classname="sub-div">
        <h1 id='name-header'>Hello, I'm Chethana</h1>
        <p>I am a graduate student pursuing a masters degree in Computer Science from SUNY Binghamton.</p>
        <SocialFollow />
      </div>
    </div>
  );
}
