import risco from "../../img/riscom.svg";
import banner3 from "../../img/group.png";
import React from "react";
import "./Foco.css";
export default function Foco() {
  return (
    <section className="section-foco">
      <div className="container">
        <div class="container-foco ">
          <h2>
            FOCO EM SANTA CATARINA <img src={risco} alt="" class="img-foco" />
          </h2>{" "}
          <p>
            Segundo as duas empresas que unificaram as operações, a percepção da
            relevância do mercado catarinense foi uma das principais motivações
            da aquisição. Líder estadual, a A2C tem entre seus clientes algumas
            das principais marcas locais, como Senior, Ciser, Embraco, Univille,
            Ailos e Neogrid – com o reforço do portfólio nacional, que reúne
            Paris Filmes e Tecnisa, entre outras companhias. Já a BriviaDez
            mantém um carteira com 30 clientes de grande porte, como Vivo, Banco
            Carrefour, Votorantim Cimentos e KPMG. Em Santa Catarina, atua há
            mais de duas décadas, desenvolvendo soluções para organizações como
            Floripa Airport e Angeloni.{" "}
          </p>
          <p>
            {" "}
            — Estamos alinhados com o propósito do estado mais inovador do país.
            Santa Catarina é campeã na abertura e no desenvolvimento de empresas
            de tecnologia, comunicação e inovação. Aqui se formam muitos
            talentos, que aumentam substancialmente a competitividade
            catarinense. Por isso tudo, queremos reforçar nossa participação —
            destaca Anderson de Andrade, que já presidiu Associação Brasileira
            dos Agentes Digitais (ABRADi) e é investidor serial em scale-ups.{" "}
          </p>
        </div>
      </div>
      <img src={banner3} alt="" className="gruop-fotos-2" />
    </section>
  );
}
