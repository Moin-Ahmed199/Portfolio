import React from "react";
import myimage from "/public/logo.webp";
import "./Banner.css";
import { FaBriefcase, FaDownload } from "react-icons/fa";



const handleResumeDownload = () => {
  const resumeUrl = "/cv.pdf"; 

  fetch(resumeUrl)
    .then((response) => response.blob()) 
    .then((blob) => {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob); 
      link.download = "cv.pdf"; 

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      URL.revokeObjectURL(link.href);
    })
    .catch((error) => console.error("Error downloading file:", error));
};





const hiremelink = () => {
  window.open("https://wa.link/ju3gzh", "_blank");}

const Banner = () => {
    return (
      
    
<div className="Banner">

<div className="Banner-left">
<h1><span className="Name-tag">M</span>oin <span className="Name-tag">A</span>hmed ⇝</h1>
    
    <div className="Banner-p ">
        <p>Full-Stack Developer 💻<br></br>
Proficient in HTML, CSS, JavaScript, React.js, and PHP.
Passionate ✨  about delivering innovative, user-friendly solutions.
⚡ Currently diving into Node.js backend development for dynamic web apps!
        </p>
    </div>

    <div className="Banner-button ">

    <button className="" onClick={hiremelink}>
        <FaBriefcase className="button-icon" />
        Hire Me
      </button>

      <button className="" onClick={handleResumeDownload}>
        <FaDownload className="button-icon" />
        Download Resume
      </button>
    </div>
</div>


<div className="Banner-right">
    <div className="image">
        <img src={myimage} alt="Moin Ahmed"/>
    </div>
</div>
</div>


    
    
    );};

    export default Banner;