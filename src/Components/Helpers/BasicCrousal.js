import Carousel from 'react-bootstrap/Carousel';
import Divider from './Divider'

let BasicCrousal = (props) => {
    return (
        <Carousel.Item ><img src={props.imgSrc} alt='Crousal' className='crousal-image'></img>
            <div className='overlay'></div>
            <Carousel.Caption className='crousal-text'>
                <h1 className='crousal-header'>{props.header}</h1>
                <h2 className='crousal-sub-header'>{props.subheader}</h2>
                <Divider />
                <p>{props.text}</p>
            </Carousel.Caption>
        </Carousel.Item>
    )
}

export default BasicCrousal;