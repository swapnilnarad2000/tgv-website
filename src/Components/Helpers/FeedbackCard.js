import Card from 'react-bootstrap/Card';

let FeedbackCard = (props) => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>Name: {props.data.fullName}</Card.Title>
                Feedback: <Card.Subtitle className="mb-2 text-muted">{props.data.message}</Card.Subtitle>
                Contact: <Card.Link href="#">{props.data.phone}</Card.Link>
                <Card.Link href={`mailto:` + props.data.email}>{props.data.email}</Card.Link>
            </Card.Body>
        </Card>
    );
}


export default FeedbackCard;