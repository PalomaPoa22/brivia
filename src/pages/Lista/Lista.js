import React, { useState, useEffect } from "react";
import { deleteUser, listUser } from "../../service/api/api";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./Lista.css";
import { BiEditAlt } from "react-icons/bi";
import { AiOutlineDelete, AiOutlineUsergroupAdd } from "react-icons/ai";
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
      <Header />
      <div className="container">
        <div className="title">
          LISTA DE USUÁRIOS{" "}
          <Link to="/adicionar">
            <button>
              <AiOutlineUsergroupAdd size={25} />
            </button>
          </Link>
        </div>
        <div className="subtitle"></div>

        {usuario.map((item) => (
          <div>
            <div>
              <div className="container-label" key={item.id}>
                {item.username}{" "}
                <div className="btn-group">
                  <div>
                    <Link to={`/editar/${item.id}`}>
                      <button>
                        <BiEditAlt size={20} />
                      </button>
                    </Link>{" "}
                  </div>
                  <div>
                    <button onClick={() => handleDelete(item.id)}>
                      <AiOutlineDelete size={20} />
                    </button>
                  </div>
                </div>
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

            <br />
          </div>
        ))}
      </div>
    </>
  );
}
