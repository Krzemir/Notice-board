import Row from 'react-bootstrap/Row';
import AdCard from './AdCard';

const AdList = ( props ) => {
  console.log('ADLIST PROPS', props)

  const ads = props.ads;
  
  return ( 
    <div>
      <Row className='justify-content-between my-4'>
        { ads.map( ad => (
          <AdCard key={ ad._id } title={ ad.title } localization={ ad.localization } photo={ ad.photo } />
        )) }
        </Row>     

      
    </div>
   );
}
 
export default AdList;