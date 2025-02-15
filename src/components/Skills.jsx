import React from "react";
import "./Skills.css"
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaPhp, FaLaravel, FaDatabase } from 'react-icons/fa';

const Skills= () =>{

return (



<div className="skill">






<ul>

<div className="html">
<li ><FaHtml5 /> </li>
<label className="label">HTML</label>
</div>

<div className="css">
<li ><FaCss3Alt /> </li>
<label className="label">CSS</label>
</div>

<div className="js">
<li ><FaJsSquare /> </li>
<label className="label">JavaScript</label>
</div>

<div className="react">
<li ><FaReact /></li>
<label className="label">React</label>
</div>

<div className="php">
<li ><FaPhp />  </li>
<label className="label">PHP</label>
</div>

<div className="sql">
<li ><FaDatabase /> </li>
<label className="label"> MySQL</label>
</div>
      
      

    </ul>


</div>
)


}



export default Skills;