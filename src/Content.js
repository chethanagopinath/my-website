import React from "react";
import Emoji from "./Emoji";

export default function Content(){
  return(
      <div className="sub-div">
        <h1>Hello, I'm Chethana <Emoji symbol = "🌈" label = "rainbow"/> 
        <Emoji symbol = "✨" label = "sparkles"/>
        </h1>
        <div id="resume-div">
          <a id="resume-link" href = "https://drive.google.com/drive/folders/1Iu9BAvvmFJpdzwZa8i-kkv3J58JJPBYk?usp=sharing" download> Resume </a>
        </div>
        <p>
        I am a CS grad student at SUNY Binghamton, an aspiring software engineer, a problem-solver and a baker. My skills include Ruby, Rails, Python, Java, Javascript, HTML, CSS, MySQL and Git. I have had industry experience in automated testing using Selenium, a bit of Java and Cucumber at <a className = "links" href = "https://www.wkelmsolutions.com/">Wolters Kluwer ELM Solutions</a> where I worked with clients like Walmart, JPMorgan Chase, Nissan and NCR.
        </p>
        <p>
        Being a budding open-source contributor, I spend my weekends working on beginner-friendly issues in shf-project from AgileVentures, publiclab and other repositories on GitHub to build up the confidence to contribute more - find out more about my Hacktoberfest 2020 journey <a className = "links" href="https://dev.to/chethanagopinath/i-did-it-5be1"> here</a>!
        </p>
        <p>
        I am a mini-founder at <a className = "links" href = "https://linktr.ee/breakingbarriers">Breaking Barriers in Tech</a>, a nurturing and inclusive community which aims to combat obstacles faced by minorities in tech. We are building a strong unified community through informative workshops, fun events and such. I am a slack moderator at <a className = "links" href = "https://www.womenwhocode.com/python">Women Who Code Python</a> by beginning a new initiative called "Pythonic days" where I share tips and nuances about Python to drum up technical discussions and keep conversation flowing amongst members every week. I also volunteer at <a className = "links" href = "https://www.womenwhocode.com/nyc"> Women Who Code NYC </a> and occasionally help with behind-the-scenes event moderation.
        </p>
        <p>
        During my free time, I work on cool side projects to solve problems that I face every day. Currently, I am working on building a Chrome extension called TinyNotes, which is a basic note-taking app that would stay on my new tab window built using Javascript, HTML and CSS. I try to add value to young, aspiring tech enthusiasts such as myself by writing out tiny technical posts at <a className = "links" href="https://dev.to/">dev.to</a>.
        </p>
        <p>
        Please reach out to me through my socials below if you are interested in knowing more about me and my work. Thank you for visiting my website! Take care and stay healthy!
        </p>
      </div>
  );
}