import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import { getAdById } from '../../redux/adsRedux';
// import { getUser } from '../../redux/usersRedux';
import { currentDate } from '../../utils.js/getDate';
import { API_URL } from '../../config';

const AdForm = ({ad}) => {
  console.log('AD: ', ad)

  const[name, setName] = useState(ad.title || '');
  const[price, setPrice] = useState(ad.price || '');
  const[localization, setLocalization] = useState(ad.localization || '');
  const[photo, setPhoto] = useState(null);
  const[status, setStatus] = useState(null);


  const handleSubmit = (event) => {
    console.log(name, price, localization, photo)
    event.preventDefault();

    const date = currentDate
    const fd = new FormData();
    fd.append('title', name);
    fd.append('price', price);
    fd.append('localization', localization);
    fd.append('photo', photo);
    fd.append('date', date);

    let options = {};
    let endpoint = '';
    if (!ad) {
      options = {
        method: 'POST',
        body: fd,
      };
      endpoint = 'api/ads';
    } else {
      options = {
        method: 'PUT',
        body: fd,
      };
      endpoint = `api/ads/${ad._id}`;
    }

    console.log('OPTIONS: ', options)

    setStatus('loading');
    fetch(`${API_URL}/${endpoint}`, options)
    .then(res => {
      if (res.status === 201) {
        setStatus('success');
      } else if (res.status === 400) {
        setStatus('clientError');
      } else {
        setStatus('serverError');
      }
    })
    .catch(err => {
      console.log(err);
      setStatus('serverError');
    });
  }

  return ( 
    
    <Form className='col-12 col-sm-3 mx-auto' onSubmit={handleSubmit}>
      

      {/* ******* Alerts ******* */}
      {status === 'success' && (
          <Alert variant='success' >
            <Alert.Heading>Success</Alert.Heading>
            <p>You notis is added!</p>
          </Alert>
        )}

        {status === 'serverError' && (
          <Alert variant='danger' >
            <Alert.Heading>Something went wrong...</Alert.Heading>
            <p>Unexpected error... Try again!</p>
          </Alert>
        )}

        {status === 'clientError' && (
          <Alert variant='warning' >
            <Alert.Heading>Not enough data</Alert.Heading>
            <p>You have to fill all the fields</p>
          </Alert>
        )}

        {/* ****** Spinner ******* */}
        
        {status === 'loading' && (
        <Spinner animation='border' variant='secondary' role='status'>
            <span className='visually-hidden'>Loading...</span>
        </Spinner>
        )}

        {/* ****** Form fields ******* */}

      <Form.Group className='mb-3' controlId='formLogin'>
        <Form.Label>What are you selling?</Form.Label>
        <Form.Control className="mb-3 text-muted" type="text" placeholder="Name your boat" value={name} onChange={ (e) => setName(e.target.value) } />   
      </Form.Group> 

      <Form.Group className='mb-3' controlId='formLogin'>
        <Form.Label>What is the price?</Form.Label>
        <Form.Control className="mb-3 text-muted" type="text" placeholder="Name your price" value={price} onChange={ (e) => setPrice(e.target.value)} />  
      </Form.Group>

      <Form.Group className='mb-3' controlId='formLogin'>
        <Form.Label>Where she's moored?</Form.Label>
        <Form.Control className="mb-3 text-muted" type="text" placeholder="Name your harbour" value={localization} onChange={ (e) => setLocalization(e.target.value)}/>  
      </Form.Group>
      
      <Form.Group className='mb-3' controlId='formLogin'>
        <Form.Label>What about a nice photo?</Form.Label>
        <Form.Control type="file" className="mb-3 text-muted" onChange={ e => setPhoto(e.target.files[0]) }/>
      </Form.Group>
      
      <Button variant="secondary" type="submit">
        Submit!
      </Button>

    </Form>
    
   );
}
 
export default AdForm;