import React from 'react';
import styled from 'styled-components';
import Input from '@venuex/web/ui/elements/form/Input';
import Password from '@venuex/web/ui/elements/form/Password';
import Button from '@venuex/web/ui/elements/buttons/Button';

const LoginForm = (props) => {
  const { login, password, onSubmit } = props;

  return (
    <div>
      <Input label="name" value={login} />
      <Password label="name" value={password} />
      <Button onClick={onSubmit}>Login</Button>
    </div>
  );
};

export default LoginForm;
