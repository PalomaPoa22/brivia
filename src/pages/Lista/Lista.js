import React, { useState, useEffect } from "react";
import { deleteUser, listUser } from "../../service/api/api";
import { Link } from "react-router-dom";
import Footer from '../../components/Footer2/Footer2'
import Header from '../../components/Header/Header'
import "./Lista.css";

export default function Usuario() {
  const [usuario, setUsuario] = useState([]);
  console.log(usuario);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await listUser();
        setUsuario(response.data);
      } catch (error) {
        alert("Erro no banco de dados lista");
      }
    };
    getData();
  }, [setUsuario]);

  const handleDelete = (id) => {
    deleteUser(id);
    alert("Apagado com sucesso");
    setUsuario((usuario) => {
      return [...usuario.filter((usuario) => usuario.id !== id)];
        });
  };
  return (
    <>
    <Header/>
    <div className="container">
      <div className="title">LISTA DE USUÁRIOS</div>
      <div className="subtitle">
        <Link to="/adicionar">
          <button className="menu-top">Adicionar usuário</button>
        </Link>
      </div>

      {usuario.map((item) => (
        <div>
          <div>
            <div className="container-label" key={item.id}>
              {item.username}{" "}
              <Link to={`/editar/${item.id}`} className="menu">
                {" "}
                Editar
              </Link>{" "}
              
            </div>
          </div>

          <div className="labelName">
            <div> Nome</div>{" "}
            <div>
              <strong className="labelRes"> {item.name} </strong>
            </div>
          </div>
          <div className="labelName">
            Email
            <strong className="labelRes">{item.email} </strong>
          </div>
          <div>
          <button onClick={() => handleDelete(item.id)} className="menu">
                Excluir
              </button>
          </div>
          <br/>
        </div>
      ))}
    </div>
    <Footer/>
    </>
  );
}
