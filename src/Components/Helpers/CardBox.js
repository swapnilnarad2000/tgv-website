// import placeholderImage from '../../Assets/Placeholder.webp'
import Card from 'react-bootstrap/Card';

let CardBox = (props) => {
    let img = encodeURI(props.imgSrc);
    return (
        <Card  className='card card-box'>
            <Card.Body>
                {/* <Card.Img variant="top" src={placeholderImage} className='card-image'/> */}
                <div className='card-content' style={{height:"380px", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundImage: `url(${img})`}}>
                    <Card.Title className='card-title'>
                        <h3>
                            {props.title}
                        </h3>
                        <hr className='card-divider'></hr>
                    </Card.Title>
                    <div className="card-overlay">
                    <Card.Title className='card-title-overlay'>
                        <h3>
                            {props.title}
                        </h3>
                        <hr className='card-divider-overlay'></hr>
                    </Card.Title>
                    <Card.Text className='card-text'>
                        {props.description}
                    </Card.Text>
                </div>
                </div>
            </Card.Body>
        </Card>
    )
}

export default CardBox;