import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./editar.css";
import { useParams, Link } from "react-router-dom";
import api from "../../service/config/config";
import { mask, unMask } from "remask";
import Header from "../../components/Header/Header";
import { IoMdArrowRoundBack } from "react-icons/io";
const schema = yup
  .object({
    name: yup
      .string()
      .min(3, "Minimo de 3 caracteres ")
      .required("* Campo nome obrigatório"),
    email: yup.string().email().required("* Campo email obrigatório"),
    phone: yup
      .string()
      .min(12, "Minimo de 12 caracteres")
      .required("* Campo telefone obrigatório"),
    website: yup.string().url().required("* Campo website obrigatório"),
  })
  .required();

export default function Editar() {
  const [usuario, setUsuario] = useState([]);

  const { id } = useParams();
  const [isDisplay, setIsDisplay] = useState(false);
  const [isDisplay1, setIsDisplay1] = useState(false);

  useEffect(() => {
    api.get(`users/${id}`).then((response) => {
      reset(response.data);
    });
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) =>
    api
      .put(`users/${id}`, data)
      .then(() => {
        setIsDisplay(true);
        setIsDisplay1(false);
      })
      .catch(() => {
        setIsDisplay(false);
        setIsDisplay1(true);
      });
  const handleClick = (event) => {
    setIsDisplay1((current) => !current);
    setIsDisplay((current) => current);
  };

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container">
          <div className="title">EDITAR USUÁRIOS</div>

          <div className="container">
            <div className="formulario">
              <div className="container-label">
                ID:{id}
                <Link to={`/lista`} className="menu">
                  <button>
                    <IoMdArrowRoundBack size={20} />
                  </button>
                </Link>
              </div>
            </div>

            <form>
              <div variant="h6" className="p">
                Nome :
              </div>
              <input type="text" className="inputForm" {...register("name")} />
              <p className="erro">{errors.name?.message}</p>
              <div variant="h6" className="p">
                E-mail :
              </div>
              <input type="text" className="inputForm" {...register("email")} />
              <p className="erro">{errors.email?.message}</p>
              <div variant="h6" className="p">
                Phone :
              </div>
              <input
                type="text"
                className="inputForm"
                {...register("phone")}
                onChange={(e) => {
                  const { value } = e.target;
                  e.target.value = mask(unMask(e.target.value), [
                    "99 9999-9999",
                    "99 99999-9999",
                  ]);
                }}
              />
              <p className="erro">{errors.phone?.message}</p>
              <div variant="h6" className="p">
                Site :
              </div>
              <input
                type="text"
                className="inputForm"
                {...register("website")}
              />
              <p className="erro">{errors.website?.message}</p>
            </form>

            <br />
            <br />
            <div>
              <strong className="ponto">*</strong> Todos os campos são
              obrigatórios
            </div>
            <div className="container">
              <div className="btn">
                <button
                  variant="contained"
                  color="primary"
                  className="btnFooter"
                  type="submit"
                  onClick={handleClick}
                >
                  Salvar usuário
                </button>
              </div>
            </div>
          </div>
          <br />
          <div className="content">
            <input
              value="Usuário salvo com sucesso!"
              type="text"
              className="labelFormSucesso"
              style={{ display: isDisplay ? "block" : "none" }}
            />
            <div></div>
            <br />
            <div>
              <input
                type="text"
                className="labelFormErro"
                value="Erro ao salvar!"
                id="erro"
                style={{ display: isDisplay1 ? "block" : "none" }}
              />
            </div>
          </div>
        </div>
        <br />
        <br />
      </form>
    </>
  );
}
