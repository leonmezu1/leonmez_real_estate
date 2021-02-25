import { useParams } from 'react-router-dom';
import HomesGrid from './HomesGrid';

const Homes = () => {
  const { id } = useParams();
  return (
    <>
      {id ? (
        `${id}`
      ) : (
        <>
          <HomesGrid />
        </>
      )}
    </>
  );
};

export default Homes;
