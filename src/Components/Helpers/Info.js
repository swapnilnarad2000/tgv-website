import Col from 'react-bootstrap/Col';
import hotelData from '../../demo-data/hotel-data.json'

let data = hotelData.config;

let Info = () => {
    return (
        <Col className='address-box'>
            <h2 className='address-header'>Visit Us Soon</h2>
            <h3 className='address-block'>
                {data.name}
            </h3>
            <div className='address-data'>
                <p className='address-detail'>
                        <b>Address:</b>
                        <br></br>
                        {data.address_1},
                        {data.address_2}, 
                        {data.address_3}
                </p>
                <p className='contact-detail'>
                    <b>Phone:</b>
                    <br></br>
                    {data.phone_1}
                </p>
                <p className='email-detail'>
                    <b>Email:</b>
                    <br></br>
                    {data.email}
                </p>
            </div>
            
        </Col>
    )
}

export default Info;