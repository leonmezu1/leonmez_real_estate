import { useSelector } from 'react-redux';

const Dashboard = () => {
  const loggedIn = useSelector(state => state.auth.loggedIn);

  const main = (
    <>
      <h1>I `&aposm;` a dashboard</h1>
      {`${loggedIn}`}
    </>
  );

  return <>{loggedIn ? main : null}</>;
};

export default Dashboard;
