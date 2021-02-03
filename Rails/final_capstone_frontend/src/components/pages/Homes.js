import { useParams } from 'react-router-dom';

const Homes = () => {
  const { id } = useParams();
  return (
    <>
      <div>{`Homes ${id ? `${id}` : '(params not received)'}`}</div>
    </>
  );
};

export default Homes;
