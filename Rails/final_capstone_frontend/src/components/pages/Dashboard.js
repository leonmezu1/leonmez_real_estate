import { useSelector } from 'react-redux';
import LogoutButton from '../LogoutButton';

const Dashboard = () => {
  const loggedIn = useSelector(state => state.auth.loggedIn);

  const main = (
    <>
      <h1>I `&aposm;` a dashboard</h1>
      <LogoutButton />
      {`${loggedIn}`}
    </>
  );

  return <>{loggedIn ? main : null}</>;
};

export default Dashboard;
