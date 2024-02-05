import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Divider from './Helpers/Divider';
import Pin from '../Assets/logos/pin.png'
import Reviews from '../demo-data/review-data.json'

let reviews = Reviews.reviews;

let testimonyMapper = reviews.map((obj, index) => {
    return <Col lg={3} md={6} sm={6} xs={12} key={index} className='testimony-card'>
        <Card>
            <Card.Header className='review-head'>
                <h3 className='header'>
                    <span className='review-pin-icon'><img src={Pin} alt='pin-icon'></img></span>
                    {obj.title}
                </h3>
            </Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <footer className="blockquote-footer">{obj.name} <i>On {obj.vendor}</i></footer>
                    <p className='review-text'>{obj.review}</p>
                </blockquote>
            </Card.Body>
        </Card>
    </Col>
})

let Testimony = () => {
    return (
        <div className='testimony-box'>
            <Container id='testimony' className='testimony-block' fluid>
                <Divider />
                <h1 className='block-text-headers'>Our <span className='sub-head'>Testomonials</span> Our <span className='sub-head'>Treasure...</span></h1>
                <Row className='testimony-content'>
                        {testimonyMapper}
                </Row>
            </Container>
        </div>

    );
}

export default Testimony;