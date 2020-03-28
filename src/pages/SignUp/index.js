import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'A senha deve conter no mínimo 6 dígitos/caracteres')
    .required('A senha é obrigatória'),
});
export default function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }
  return (
    <>
      <img src={logo} alt="Logo GoBarber" />
      <Form schema={schema} onSubmit={handleSubmit} autocomplete="off">
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="Seu nome completo"
        />
        <Input type="email" name="email" id="email" placeholder="Seu e-mail" />
        <Input
          type="password"
          name="password"
          id="passwor"
          placeholder="Sua senha secreta"
        />

        <button type="submit">Cadastrar</button>
        <Link to="/">Já sou cadastrado</Link>
      </Form>
    </>
  );
}
