import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/esm/Row';
import React from 'react';
import Divider from './Helpers/Divider';
import placeholderImage from '../Assets/Placeholder.webp'
import "yet-another-react-lightbox/styles.css";
import { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import 'react-image-lightbox/style.css'; 
import images from "../demo-data/gallery-data.json"

let imageArray = images.gallery;

const rotateArray = (arr, k) => arr.concat(arr).slice(k, k+arr.length);

let Gallery = () => {
    let [isOpen, setIsOpen] = useState(false);
    let [index, setIndex] = useState(0);

    let updateState = (i) => {
        setIsOpen(true);
        setIndex(i)
    }

    let GalleryMapper = imageArray.map((imgSrc, index) => {
        return <Col className="gallery-image" xs={12} md={4} key={index} onClick={() => updateState(index)}><Image className="image-box" src={imgSrc ? imgSrc : placeholderImage} fluid/><div className='image-box-overlay'></div></Col>
    })

    return (
        <div className='gallery' id='gallery'>
            <Divider />
            <h1 className='block-text-headers'>Our <span className='sub-head'>Gallery</span></h1>
            <Row className='gallery-box'>
                {GalleryMapper}
                <Lightbox
                    open={isOpen}
                    close={() => setIsOpen(false)}
                    slides={rotateArray(imageArray.map((img)=>{
                        return {src: img}
                    }), index)}
                />
            </Row>
        </div>    
    )
}

export default Gallery;