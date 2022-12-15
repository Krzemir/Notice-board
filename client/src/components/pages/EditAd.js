import AdForm from '../features/AdForm';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAdById } from '../../redux/adsRedux';

const EditAd = () => {
  const adId = useParams().id;
  const ad = useSelector(getAdById(adId));
  
  if(!ad) return null;


  return ( 
    <div>
      <h1 className='col-12 col-sm-3 mx-auto' style={{ color: '#111947' }}>Edit your notice</h1>
      <AdForm ad={ad}/>
    </div>
   );
}
 
export default EditAd;