/* eslint-disable camelcase */

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import submitRegistration from '../../actions/authActions';
import {
  Button, Error, Form, Input, Label,
} from '../styledBases';

const Registration = () => {
  const loggedIn = useSelector(state => state.auth.loggedIn);
  const dispatch = useDispatch();
  const history = useHistory();

  // States
  const [data, setData] = useState({
    email: '',
    password: '',
    password_confirmation: '',
  });
  const [error, setError] = useState(false);

  // UseEffect

  useEffect(() => {
    if (loggedIn) history.push('/dashboard');

    return () => null;
  }, [loggedIn]);

  // Triggers

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
    dispatch(submitRegistration({ user: data }, 'registrations'));
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
