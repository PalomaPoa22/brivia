import React from "react";
import "./Header.css";
import logo from "../../img/logo.png";
import botao from "../../img/home.svg";
import botao1 from "../../img/btn.svg";
import mobile from "../../img/banner-mobile.png";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <div class="banner">
        <img src={logo} alt="banner grande" />
        <Link to="/" className="lk-acesse">
          <img src={botao} alt="link de acesso" />
        </Link>
        <Link to="/" className="lk-acesse-mobile">
          <img src={botao1} alt="link de acesso" />
        </Link>
      </div>
      <div class="banner-mobile">
        <img src={mobile} alt="banner pequeno" />
      </div>
    </>
  );
}
