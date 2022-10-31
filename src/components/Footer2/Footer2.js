import React from "react";
import "./Footer2.css";
import logo from "../../img/btnfooter.svg";
import log from "../../img/btnfooter2.svg";
import youtube from "../../img/youtube.svg";
import instagram from "../../img/instagram.svg";
import facebook from "../../img/facebook.svg";
import linkdin from "../../img/inkedin.svg";
import {Link} from 'react-router-dom'
export default function Footer2() {
  return (
   <div className="footer">
     <div className="group-footer">
      <img src={log} alt="" className="logo"/>
      
      <ul>
        <li>
          
          <Link to='#'> <img src={facebook} alt="" className="grpup-footer-img"/></Link>
        </li>
        <li>
          {" "}
          <Link to='#'> <img src={instagram} alt="" className="grpup-footer-img"/></Link>
          
        </li>
        <li>
        
          <Link to='#'><img src={linkdin} alt=""className="grpup-footer-img" /></Link>
        </li>
        <li>
          {" "}
          <Link to='#'><img src={youtube} alt="" className="grpup-footer-img"/></Link>
          
        </li>
      </ul>
          <Link to='#' class="lk-acesse-footer"> <img src={logo} alt="" /></Link>
     
    </div>
    
   </div>
  );
}
