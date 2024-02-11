import back from '../../Assets/logos/back-icon.png'
import Image from 'react-bootstrap/Image';

let ReturnTo = () => {
    return (
        <a className="admin-back-link" href='/'><span><Image className='back-icon' src={back}></Image></span> Back To Website</a>
    )
}

export default ReturnTo;