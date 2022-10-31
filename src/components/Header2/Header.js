import React from "react";
import './Header.css'
import logo from "../../img/logo.png"
import botao from "../../img/usuario.svg"
import botao1 from "../../img/btn.svg"
import log from "../../img/btnfooter2.svg";
import mobile from "../../img/banner-mobile.png"
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
    <div class="banner">
    <img src={logo} /> 
    <Link to='/lista'className="lk-acesse"><img src={botao} alt="" /></Link>
    <Link to='/lista'className="lk-acesse-mobile"><img src={botao1} alt="" /></Link>
</div>
<div class="banner-mobile">
    <img src={mobile} />
</div>
    </>
  );
}
