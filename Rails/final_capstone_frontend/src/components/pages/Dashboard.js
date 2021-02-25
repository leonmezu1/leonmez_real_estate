import { useSelector } from 'react-redux';

const Dashboard = () => {
  const loggedIn = useSelector(state => state.auth.loggedIn);

  const main = (
    <>
      <h1>I&apos;m a dashboard</h1>
      {`${loggedIn}`}
    </>
  );

  return <>{main}</>;
};

export default Dashboard;
