import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/esm/Container';
import Divider from './Helpers/Divider'
import hotelData from '../demo-data/hotel-data.json'
import crousalImages from '../demo-data/crousal-data.json'
import placeholderImage from '../Assets/Placeholder.webp'

const imageArray = crousalImages.crousal_images;         

const data = hotelData.config;

let CrousalCode = imageArray.map((imgSrc, index)=>{
    return <Carousel.Item key={index}><img src={imageArray[index] ? imageArray[index] : placeholderImage} alt='Crousal' className='crousal-image'></img>
                <div className='overlay'></div>
                <Carousel.Caption className='crousal-text'>
                    <h1 className='crousal-header'>{data.name}</h1>
                    <h2 className='crousal-sub-header'>{data.tagline}</h2>
                    <Divider />
                    <p className='crousal-sub-text'>{data.subtag}</p>
                </Carousel.Caption>
            </Carousel.Item>
})

let About = () => {
    return (
        <Container fluid className="image-crousal-box" id="home">
            <Carousel fade data-bs-theme="dark">
                {CrousalCode}
            </Carousel>
        </Container>
    )
}

export default About;