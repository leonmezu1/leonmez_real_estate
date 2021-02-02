import { useParams } from 'react-router-dom';

const Homes = () => {
  const { id } = useParams();
  return (
    <>
      <div>{`Homes ${id ? `${id}` : '(params not receiveed)'}`}</div>
    </>
  );
};

export default Homes;
