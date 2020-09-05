import React from "react";
import "./style.css";
import SocialFollow from "./SocialFollow" 

export default function App() {
  return (
    <div classname="main-div">
      <div classname="sub-div">
        <h1 id='name-header'>Hello, I'm Chethana</h1>
        <p>I am a graduate student pursuing a masters degree in Computer Science from SUNY Binghamton. I have both academic and industry experience in CS of about 8 years in Computer Science in both software development and testing. My skills include Ruby, Rails, Python, Java, Javascript, HTML, CSS, MySQL and Git. I have also had industry experience in automated testing at Wolters Kluwer ELM Solutions. I've worked with clients like Walmart, JPMorgan Chase, Nissan and NCR.
        </p>
        <p>I am a budding open source contributor at shf-project from AgileVentures, ifme project etc which have beginner-friendly issues for me to build up the confidence to contribute more (waiting eagerly for HacktoberFest!) I am also part of Breaking Barriers in Tech, a very nurturing and inclusive community which aims to combat obstacles faced by minorities in tech. We are building a strong unified community through informative workshops, fun events etc. I am also a registered mentor at the mentorship program at LotusSTEMM, an organization that is working to provide a networking and leadership platform for South Asian women in Science, Technology, Engineering, Math and Medicine (hence, STEMM). Also, my GitHub - https://github.com/chethanagopinath/ where I build cool things during my free time. Currently, I'm working on building my website and a cool Chrome extension.
        </p>
        <SocialFollow />
      </div>
    </div>
  );
}
