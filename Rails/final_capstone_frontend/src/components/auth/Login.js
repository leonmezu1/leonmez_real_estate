/* eslint-disable camelcase */

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import submitLogin from '../../actions/authActions';
import {
  Button, Error, Form, Input, Label,
} from '../styledBases';

const Login = () => {
  const loggedIn = useSelector(state => state.auth.loggedIn);
  const dispatch = useDispatch();
  const history = useHistory();
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(false);

  useEffect(() => {
    if (loggedIn) history.push('/dashboard');

    return () => null;
  }, [loggedIn]);

  const onType = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const submitLoginForm = e => {
    e.preventDefault();
    const { email, password, password_confirmation } = data;
    if ([email, password, password_confirmation].some(ele => ele === '')) {
      setError(true);
      return;
    }
    setError(false);
    dispatch(submitLogin({ user: data }, 'login'));
  };

  return (
    <>
      {error ? <Error>Submited data has errors</Error> : null}
      <Form onSubmit={submitLoginForm}>
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
        <Button type="submit">Log in</Button>
      </Form>
    </>
  );
};

export default Login;
