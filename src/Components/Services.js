import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardBox from './Helpers/CardBox';
import Divider from './Helpers/Divider';
import data from '../demo-data/services-data.json'
import placeholderImage from '../Assets/Placeholder.webp'

let cardDetails = data.services;

let CardMapper = cardDetails.map((obj, index) => {
    return <Col xs={12} md={6} key={index} className='card-box-col'><CardBox title={obj.title} imgSrc={obj.image ? obj.image : placeholderImage} description={obj.desc} /></Col>
})


let Services = () => {
    return (
        <div className='services-box' id='services'>
            <Container >
                <Divider />
                <h1 className='block-text-headers'>Our <span className='sub-head'>Hospitality Services</span></h1>
                <Row>
                    {CardMapper}
                </Row>
            </Container>
        </div>
    )
}

export default Services;