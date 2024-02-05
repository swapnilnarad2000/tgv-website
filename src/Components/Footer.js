import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import footerData from '../demo-data/hotel-data.json'

let footerLinks = footerData.config.footer_data;

let footerLinksMapper = footerLinks.map((obj, index) => {
  return <Col md={1} sm={1} xs={1} key={index} className='link'><a  href={obj.src} role="button" target='_blank' rel="noreferrer"><img src={obj.icon} alt={obj.name} width="50px"></img></a></Col>
})

let Footer = () => {
    return (
    <Container fluid className='footer footer-box'> 
      <Row className='footer-links'>
        <h4 className='footer-copyright'>Follow us on</h4>
        {footerLinksMapper}
      </Row>
      <p className='footer-artist'>Made with ❤️ by Swapnil Narad</p>
      <p className='footer-copyright'>©️ {footerData.config.name}. All rights reserved.</p>
      <p className='disclaimer'>This website is solely made for {footerData.config.name}.</p>
    </Container>
    )
}

export default Footer;