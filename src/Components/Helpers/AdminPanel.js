import { useEffect, useState } from "react";
import { db } from "../Helpers/Firebase";
import { Button, Row, Col, Container } from "react-bootstrap";
import FeedbackCard from "../Helpers/FeedbackCard"
import ReturnTo from "./ReturnTo";
import Image from 'react-bootstrap/Image';
import logo from '../../Assets/Hotel-Gallery and Hero Images/tgv-logo.png'

let AdminPanel = (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const feedbacksSnapshot = await db.collection('feedbacks').get();
                const fetchedData = feedbacksSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setData(fetchedData);
            } catch (error) {
                console.error("Error fetching feedbacks:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="admin-panel-page">
            <div className="admin-panel-nav">
                <div className="admin-panel-back-btn"><ReturnTo></ReturnTo></div>
                <div>
                    <Image src={logo} fluid className='logo-image' />
                </div>
                <div><Button variant="danger" className="admin-sign-out-btn" onClick={() => props.handleSignOut()}>Sign Out</Button></div>
            </div>
            <Container>
                <Row>
                    <h1 className="admin-panel-title">Welcome {props.currentUser} ! Here are some latest feedbacks...</h1>
                    {data.length ? data.map(item => (<Col md={4} sm={12} xs={12} className="admin-card-item"><FeedbackCard data={item} /></Col>)) : <p> Couldnt Reach Servers Right Now 😒!!! </p>}
                </Row>
            </Container>
        </div>
    );
}

export default AdminPanel;
