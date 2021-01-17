import styled from 'styled-components';
import { useState } from 'react';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 30rem;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;

const Input = styled.input`
  margin: 1rem 0;
  border: none;
  border-bottom: 1px solid black;
  padding: 0.2rem;
`;

const Registration = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
    password_confirmation: '',
    registrationsErrors: '',
  });

  const onType = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Form>
        <Label htmlFor="email">
          Email
          <Input type="email" name="email" id="email" onChange={onType} />
        </Label>
        <Label htmlFor="password">
          Password
          <Input
            type="password"
            name="password"
            id="password"
            onChange={onType}
          />
        </Label>
        <Label htmlFor="password-confirmation">
          Password Confirmation
          <Input
            type="password"
            name="password-confirmation"
            id="password-confirmation"
            onChange={onType}
          />
        </Label>
      </Form>
    </>
  );
};

export default Registration;
