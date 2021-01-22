import Login from '../auth/Login';
import Registration from '../auth/Registration';
import LogoutButton from '../LogoutButton';

const Home = () => (
  <>
    <h1>HOME</h1>
    <Registration />
    <Login />
    <LogoutButton>Log out</LogoutButton>
  </>
);

export default Home;
