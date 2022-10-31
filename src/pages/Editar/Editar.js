import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./editar.css";
import { useParams, Link } from "react-router-dom";
import api from "../../service/config/config";
import { mask, unMask } from "remask";
import {redirectTo}from 'react-router-dom'
import Header from "../../components/Header/Header";
import Footer2 from "../../components/Footer2/Footer2";
const schema = yup
  .object({
    name: yup.string().required("* Campo nome obrigatório"),
    email: yup.string().required("* Campo email obrigatório"),
    phone: yup.string().required("* Campo telefone obrigatório"),
    website: yup.string().required("* Campo website obrigatório"),
  })
  .required();

export default function Editar() {
  const [usuario, setUsuario] = useState([]);
  
  const { id } = useParams();
  console.log(usuario);
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
        alert("cadastrado com sucesso");
      
      })
      .catch(() => {
        alert("Erro no processo ");
       
      });
  return (
    <>
    <Header/>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="container">
        <div className="title">EDITAR USUÁRIOS</div>

        <div className="container">
          <div className="formulario">
            <div className="container-label">
              ID:{id}
              <Link to={`/lista`} className="menu">
                {" "}
                CANCELAR
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
            <input type="text" className="inputForm" {...register("website")} />
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
              >
                Salvar usuário
              </button>
            </div>
          </div>
        </div>
        <br />
      </div>
      <br />
      <br />
    </form>
    <Footer2/>
    </>
  );
}
