import { useEffect, useState } from "react";
import { db } from "../Helpers/Firebase";
import { Button } from "react-bootstrap";

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
            <h1>Admin Page</h1>
            {data.length ? <ul>
                {data.map(item => (
                    <li key={item.id}>{item.fullName} - {item.message}</li>
                ))}
            </ul> : <p> Couldnt Reach Servers Right Now 😒!!! </p>}
            <Button onClick={() => props.handleSignOut()}>Sign Out</Button>
        </div>
    );
}

export default AdminPanel;
