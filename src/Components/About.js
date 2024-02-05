import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/esm/Container';
import Image from 'react-bootstrap/Image';
import Divider from './Helpers/Divider';
import placeholderImage from '../Assets/Placeholder.webp'
import aboutdata from '../demo-data/hotel-data.json'
 
const data = aboutdata.config;

let linkMapper = data.links.map((obj, index) => {
    return <Col className="book-logo-box" md={3} sm={6} xs={6} key={index}><a href={obj.link} target='_blank' rel="noreferrer"><Image className='book-logo' src={obj.logo} alt={obj.displayName}></Image></a></Col>
}) 

let About = () => {
    return (
        <div className='about-box' id='about'>
            <Container className='about-us-box'  fluid>
                <Divider />
                <h1 className='hotel-name-subtext'>Welcome To <span className='hotel-name'>{data.name}</span></h1>
                <Row md={12}>
                    <Col lg={5} md={12} sm={12} xs={12} className='about-image-box'>
                        {data.aboutImage ? <Image className="about-image" src={data.aboutImage} fluid alt='About Us' /> : <Image src={placeholderImage} alt='About Us' className='image-box about-image' />}
                    </Col>
                    <Col lg={6} md={12} sm={12} xs={12} className='about-text-box'>
                        <h2 className='about-text-header'>About Us</h2>
                        <h4 className='about-text-sub-header'>{data.tagline_big}</h4>
                        <div className='about-text-desc'>
                            <p >{data.aboutText}</p>
                            <p >{data.aboutTextSub}</p>
                        </div>
                        <Col md={12} as={Row} className='booking-link-block'>
                            <h5 className='book-now-head'>Book Now</h5>
                            <Row className='book-now-box'>
                                {linkMapper}
                            </Row>
                        </Col>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default About;