import React from "react";
import Ac2 from "../../components/Ac2/Ac2";
import Foco from "../../components/Foco/Foco";
import Nomade from "../../components/Nomade/Nomade";
import Footer from '../../components/Footer2/Footer2'
import Header from '../../components/Header2/Header'
export default function Home() {
  return (
    <>
    <Header/>
      <Ac2 />
      <Foco />
      <Nomade />
      <Footer/>
    </>
  );
}
