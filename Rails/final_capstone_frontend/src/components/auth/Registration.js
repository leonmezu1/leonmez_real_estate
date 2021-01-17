/* eslint-disable camelcase */

import styled from 'styled-components';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import submitRegistration from '../../actions/authActions';

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

const Button = styled.button`
  border: 1px solid black;
  background-color: white;
  padding: 1rem;
  width: 33%;
  text-align: center;
  margin: auto;
  &:hover {
    background-color: lightgray;
  }
`;

const Error = styled.div`
  max-width: 30rem;
  border: 1px solid red;
  padding: 1rem;
  color: red;
  text-align: center;
`;

const Registration = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
    password_confirmation: '',
  });
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const onType = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const submitRegistrationForm = e => {
    e.preventDefault();
    const { email, password, password_confirmation } = data;
    if ([email, password, password_confirmation].some(ele => ele === '')) {
      setError(true);
      return;
    }
    setError(false);
    dispatch(submitRegistration({ user: data }));
  };

  return (
    <>
      {error ? <Error>Submited data has errors</Error> : null}
      <Form onSubmit={submitRegistrationForm}>
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
        <Label htmlFor="password_confirmation">
          Password Confirmation
          <Input
            type="password"
            name="password_confirmation"
            id="password_confirmation"
            onChange={onType}
          />
        </Label>
        <Button type="submit">Register</Button>
      </Form>
    </>
  );
};

export default Registration;
