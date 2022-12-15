import { useSelector } from "react-redux";
import { getAdById } from "../../redux/adsRedux";
import { useParams, Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { IMGS_URL } from '../../config';
import styles from './Ad.module.scss';

const Ad = () => {
  const adId = useParams().id;
  const ad = useSelector(getAdById(adId));
  
  if(!ad) return null;

  const {title, content, date, photo, localization, price, user} = ad

  console.log('AD', ad)

  return (
    <div>
      <Row>
        <Col sm={4} ><img src={IMGS_URL + photo } className={styles.image}/></Col>
        <Col sm={4}>
          <ListGroup variant="flush">
            <ListGroup.Item className="h2">{ title }</ListGroup.Item>
            <ListGroup.Item variant="light">Where: { localization }</ListGroup.Item>
            <ListGroup.Item className={`h3 ${ styles.price }`}>Price: { price } USD</ListGroup.Item>
            <ListGroup.Item variant="light">Date added: { date }</ListGroup.Item>
            <ListGroup.Item variant="light">By: { user.login }</ListGroup.Item>
          </ListGroup>
          <div className="col border-end  d-flex justify-content-center align-items-center">
            <Link to={`${ process.env.PUBLIC_URL }/edit-ad/${ adId }`}>
            <Button variant="success" >
              Edit your notice
            </Button>
            </Link>
          </div>
        </Col>    
       
      </Row>
      <Row className="p-3 m-2">{ content }</Row>
    </div>
    );
}
 
export default Ad;