import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './AdCard.module.scss';

const AdCard = ({ title, localization, photo }) => {
  return ( 
    <Card style={{ width: '18rem', marginBottom: '2rem' }} >
      <Card.Img variant="top"  className={`${styles.cardImage} my-2`} src={`http://localhost:8000/uploads/${ photo }`} />
      <Card.Body>
        <Card.Title>{ title }</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{ localization }</Card.Subtitle>
        <Button variant="primary" >Se(a) it!</Button>
      </Card.Body>
    </Card>
   );
}
 
export default AdCard;