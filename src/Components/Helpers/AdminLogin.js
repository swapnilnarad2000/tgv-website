import Image from 'react-bootstrap/Image';
import logo from '../../Assets/Hotel-Gallery and Hero Images/tgv-logo.jpg'
import data from '../../demo-data/hotel-data.json'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReturnTo from './ReturnTo';
let hotelPrefix = data.config.name_prefix;
let hotelBrand = data.config.name_brand;

let AdminLogin = (props) => {
    return (
        <Row className='admin-login-page'>
            <Col className="admin-login-banner-block" md={6} sm={12} xs={12}>
                <ReturnTo />
                <div className='logo'>
                    <Image src={logo} fluid className='logo-image' />
                    <div className='logo-text'>
                        <div className='logo-text-pre-head'>{hotelPrefix}</div>
                        <div className='logo-text-head'>{hotelBrand}</div>
                    </div>
                </div>
            </Col>
            <Col className="admin-login-button-block" md={6} sm={12} xs={12}>
            <h1 className='hotel-name-subtext'>Welcome To Admin Panel</h1>
                <img className="google-login-icon" src='https://developers.google.com/static/identity/images/branding_guideline_sample_lt_rd_lg.svg' alt='login with google' onClick={() => {
                    props.handleSignIn();
                }}></img>
            </Col>
        </Row>
    )
}

export default AdminLogin;