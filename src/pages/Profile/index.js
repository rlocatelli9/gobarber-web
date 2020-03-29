import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { updateProfileRequest } from '~/store/modules/user/actions';

import AvatarInput from './AvatarInput';

import { Container } from './styles';

export default function Profile() {
  const profile = useSelector((state) => state.user.profile);
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />

        <Input type="text" name="name" id="name" placeholder="Nome completo" />
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Seu endereço de e-mail"
        />

        <hr />

        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Sua senha atual"
        />
        <Input
          type="password"
          name="oldPassword"
          id="oldPassword"
          placeholder="Sua nova senha"
        />
        <Input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Confirmação de senha"
        />

        <button type="submit">Atualizar Perfil</button>
      </Form>

      <button type="button">Sair do GoBarber</button>
    </Container>
  );
}
