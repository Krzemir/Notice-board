import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAdRequest } from '../../redux/adsRedux';
import { useNavigate } from 'react-router-dom'

const AdForm = () => {
  const[name, setName] = useState('');
  const[price, setPrice] = useState('');
  const[localization, setLocalization] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addAdRequest({name, price, localization}))
    setName('');
    setPrice('');
    setLocalization('');
    navigate('/');
  }


  return ( 
    
    <Form className='col-12 col-sm-3 mx-auto' onSubmit={handleSubmit}>
      <h1 style={{ color: '#111947' }}>New Notice</h1>

      <Form.Label>What are you selling?</Form.Label>
        <Form.Control className="mb-3 text-muted" type="text" placeholder="Name your boat" value={name} onChange={ (e) => setName(e.target.value) } />    
      <Form.Label>What is the price?</Form.Label>
        <Form.Control className="mb-3 text-muted" type="text" placeholder="Name your price" value={price} onChange={ (e) => setPrice(e.target.value)} />  
      <Form.Label>Where she's moored?</Form.Label>
        <Form.Control className="mb-3 text-muted" type="text" placeholder="Name your harbour" value={localization} onChange={ (e) => setLocalization(e.target.value)}/>  
        <Form.Label>What about a nice photo?</Form.Label>
        <Form.Control type="file" className="mb-3 text-muted" />
      <Button variant="secondary" type="submit">
        Add your notice!
      </Button>
    </Form>
    
   );
}
 
export default AdForm;