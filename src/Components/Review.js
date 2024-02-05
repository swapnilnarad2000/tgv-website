import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Info from './Helpers/Info';
import Divider from './Helpers/Divider';
import Alert from 'react-bootstrap/Alert';
import * as formik from 'formik';
import * as yup from 'yup';
import { useState } from 'react';
import {db} from './Helpers/Firebase';


let Review = () => {
    let [successShow, setSuccessShow] = useState(false);
    let [errorShow, setErrorShow] = useState(false);


    const { Formik } = formik;
    const schema = yup.object().shape({
        fullName: yup.string().required("Required Field!"),
        email: yup.string().email("Invalid Email!").required("Required Field!"),
        phone: yup.number("Must be a number").min(1000000000, "Not a valid phone number").max(9999999999, "Not a valid phone number").required("Required Field!"),
        message: yup.string().required("Required Field!")
    });



    let sendData = (data) => {

        setSuccessShow(false);
        setErrorShow(false);

        // Try Data Submit
        // Use Firebase Api
        db.collection('feedbacks').add(
            data
        ).then(() => {
            setSuccessShow(true);
        }).catch((error)=>{
            console.log(error.message);
            setErrorShow(true);
        })

        
        // let success = (Math.ceil(Math.random() * 10) < 6 ? true : false);
        // if (success) {
        //     setErrorShow(true);
        // }
        // else {
        //     setSuccessShow(true);
        // }
        
    }

    return (
        <Container id='review' fluid>
            <Row className='review-address-block'>
                <Divider />
                <Col md={5} sm={12} className='review-box'>
                    {successShow ? <Alert variant="success" onClose={() => setSuccessShow(false)} dismissible><Alert.Heading>Review Submitted Successfully!</Alert.Heading><p>Thanks for your feedback.</p></Alert> : <></>}
                    {errorShow ? <Alert variant="danger" onClose={() => setErrorShow(false)} dismissible>
                        <Alert.Heading>An error occured!</Alert.Heading>
                        <p>
                            Sorry we couldn't send your review at this moment.
                        </p>
                    </Alert> : <></>}
                    <h2 className='review-header'>Leave Us A Message</h2>
                    <Formik
                        validationSchema={schema}
                        initialValues={{
                            fullName: '',
                            email: '',
                            phone: '',
                            message: ''
                        }}
                    >
                        {({ handleSubmit, handleChange, values, touched, errors, isValid, dirty, resetForm }) => (

                            <Form className='review-form' as={Row} noValidate>
                                <Form.Group className="mb-3" controlId="validationFormik01">
                                    <Form.Control type="text"
                                        placeholder="Name"
                                        name="fullName"
                                        value={values.fullName}
                                        onChange={handleChange}
                                        isValid={touched.fullName && !errors.fullName}
                                        isInvalid={errors.fullName} />
                                    <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type='invalid'>{errors.fullName}</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="validationFormik02">
                                    <Form.Control 
                                        placeholder="Email" 
                                        name="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        isValid={touched.email && !errors.email}
                                        isInvalid={errors.email} />
                                    <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type='invalid'>{errors.email}</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="validationFormik03">
                                    <Form.Control 
                                        placeholder="Contact Number"
                                        name="phone" 
                                        value={values.phone} 
                                        onChange={handleChange}
                                        isValid={touched.phone && !errors.phone}
                                        isInvalid={errors.phone} />
                                    <Form.Control.Feedback type="valid">Looks Good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type='invalid'>{errors.phone}</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="validationFormik04">
                                    <Form.Control 
                                        placeholder="Your Message Here"
                                        name="message"
                                        as="textarea" 
                                        rows={3} 
                                        value={values.message} 
                                        onChange={handleChange}
                                        isValid={touched.message && !errors.message}
                                        isInvalid={errors.message} />
                                    <Form.Control.Feedback type="valid">Looks Good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type='invalid'>{errors.message}</Form.Control.Feedback>
                                </Form.Group>
                                <Col>
                                    <Col md={3}></Col>
                                    <Col>
                                        <Button md={6} disabled={!(isValid && dirty)} className='submit-btn' type='submit' onClick={() => { sendData(values); resetForm()}}>Submit</Button>
                                    </Col>
                                    <Col md={3}></Col>
                                </Col>
                            </Form>
                        )}
                    </Formik>
                </Col>
                <Col md={5} sm={12}>
                    <Info />
                </Col>
            </Row>


        </Container>
    )
}

export default Review;