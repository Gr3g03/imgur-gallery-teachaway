import { useSelector } from 'react-redux';
import { RootState } from '../store';

const UseGetGalery = () => {
  const currentGalery = useSelector((state: RootState) => state.galery.galery);
  if (currentGalery) {
    return currentGalery;
  }
  return null;
};

export default UseGetGalery;
