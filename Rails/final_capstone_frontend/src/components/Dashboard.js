import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import LogoutButton from './LogoutButton';

const Dashboard = () => {
  const loggedIn = useSelector(state => state.auth.loggedIn);

  const main = (
    <>
      <h1>I &aposm; a dashboard</h1>
      <LogoutButton />
      {`${loggedIn}`}
    </>
  );

  const redirect = <Redirect to="/" />;

  return <>{loggedIn ? main : redirect}</>;
};

export default Dashboard;
