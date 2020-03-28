import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import logo from '~/assets/logo.svg';

export default function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }
  return (
    <>
      <img src={logo} alt="Logo GoBarber" />
      <Form onSubmit={handleSubmit}>
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
