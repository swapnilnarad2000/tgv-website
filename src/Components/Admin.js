import { useState, useEffect } from "react";
import AdminLogin from "./Helpers/AdminLogin";
import AdminPanel from "./Helpers/AdminPanel";
import Footer from "./Footer";
import { Alert } from "react-bootstrap";
import { auth, provider } from "./Helpers/Firebase";
import '../App.css';

let Admin = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [showMsg, setShowMsg] = useState("");

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                // User is signed in
                setIsLogin(true);
            } else {
                // No user is signed in
                setIsLogin(false);
            }
        });

        // Cleanup function to unsubscribe from the auth state listener
        return () => unsubscribe();
    }, [isLogin]);

    // Function to handle sign-in
    const handleSignIn = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                // Sign-in successful, do something if needed
            })
            .catch((error) => {
                // Handle sign-in errors
                console.error("Sign-in error:", error);
                setShowMsg(error.message);
            });
    };

        // Function to handle sign-out
        const handleSignOut = () => {
            auth.signOut()
                .then(() => {
                    // Sign-out successful, do something if needed
                })
                .catch((error) => {
                    // Handle sign-out errors
                    console.error("Sign-out error:", error);
                });
        };

    return (
        <div className="App">
            {showMsg ? <Alert className="admin-error-modal" variant="danger" onClose={() => setShowMsg("")} dismissible>
                        <Alert.Heading>An error occured!</Alert.Heading>
                        <p>
                            {showMsg}
                        </p>
                    </Alert> : <></>}
            {isLogin ? <AdminPanel handleSignOut={handleSignOut}/> : <AdminLogin handleSignIn={handleSignIn} />}
            <div className="admin-page-footer">
                <Footer />
            </div>
        </div>
    );
}

export default Admin;
