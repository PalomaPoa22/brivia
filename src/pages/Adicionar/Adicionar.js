import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import "./Adicionar.css";
import { useParams, Link } from "react-router-dom";
import api from "../../service/config/config";
import {mask,unMask} from 'remask'
import {deleteUser,listUser} from "../../service/api/api";
import axios from "axios";
const schema = yup.object({
  name: yup.string().required('* Campo nome obrigatório'),
 email: yup.string().required('* Campo email obrigatório'),
 phone:yup.string().min(12,'esta faltando numeros').required('* Campo phone obrigatório'),
 website:yup.string().required('* Campo website obrigatório'),
}).required();


export default function Adicionar() {
  const [usuario, setUsuario] = useState([]);
  const { id } = useParams();
  console.log(usuario);

  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = data => api.post('users/',data)
  .then(()=>{
alert('cadastrado com sucesso')
}).catch(()=>{
  alert('Erro de cadastrado ')
  
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* <div className='content'> */}
      <div className="container">
        <div className="title">ADICIONAR USUÁRIO </div>

        <div className="container">
          <div className="formulario">
            <div className="container-label">
              ID:{usuario.id}{" "}
              <Link to={`/`} className="menu">
                {" "}
                CANCELAR
              </Link>
            </div>
          </div>
          {/* <div className="container"> */}
          {/* <div className="formulario"> */}
          <form>
            <div variant="h6" className="p">
              Nome :
            </div>
            <input type="text" className="inputForm"  {...register('name')}/>
            <p className='err'>{errors.name?.message}</p>
            <div variant="h6" className="p">
              E-mail :
            </div>
            <input type="text" className="inputForm"  {...register('email')}/>
            <p className='err'>{errors.email?.message}</p>
            <div variant="h6" className="p">
              Phone :
            </div>
            <input type="text" className="inputForm" {...register('phone')} onChange={(e) => {
              const { value } = e.target;
              e.target.value = mask(unMask(e.target.value), [
                "99 9999-9999",
                "99 99999-9999",
              ]);
            }}/>
            <p className='err'>{errors.phone?.message}</p>
            <div variant="h6" className="p">
              Site :
            </div>
            <input type="text" className="inputForm"  {...register( 'website')}/>
            <p className='err'>{errors.website?.message}</p>
          </form>
          {/* </div> */}
          {/* </div> */}
          <br />
          <br />
          <div>
            <strong className="ponto">*</strong> Todos os campos são
            obrigatórios
          </div>
         <div className="container">
         <div className="btn">
            <button variant="contained" color="primary" className="btnFooter" type='submit'>
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
            
          />
          <div></div>
          <br />
          <div>
            <input
              type="text"
              className="labelFormErro"
              value="Erro ao salvar!"
            />
          </div>
        </div>
      </div>
    </form>
  );
}
