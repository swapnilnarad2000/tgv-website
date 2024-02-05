// import MapsComponent from "./Helpers/MapsComponent";
import Container from 'react-bootstrap/Container';
import Divider from './Helpers/Divider';
import Col from 'react-bootstrap/esm/Col';

let Location = () => {
    return (
        <Container id="location" className='location-block' fluid>
            <Divider />
            <h1 className='block-text-headers'>Our <span className='sub-head'>Location</span></h1>
            <Col md={12} xs={12}>            
                {/* You can also use your own Google Maps Api key for more options with Maps Javascript API */}
                {/* <MapsComponent className="location location-box"/> */}
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d546.9318525610902!2d75.90512228327674!3d22.75408665830012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39631d3d1604e413%3A0xf38961dfd71dc3f1!2sItsy%20By%20Treebo%20-%20Grand%20Vardhaman!5e0!3m2!1sen!2sin!4v1705773812048!5m2!1sen!2sin" title="the-grand-vardhaman" width="100%" height="450px" loading="async"></iframe>
            </Col>

        </Container>
    )
}

export default Location;