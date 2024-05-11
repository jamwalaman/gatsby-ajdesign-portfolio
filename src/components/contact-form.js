import React, { useState } from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'

const ContactForm = () => {

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        setIsSubmitted(true);
      })
      .catch((error) => alert(error));
  };

  return (
    <>
      <div className='form-wrapper py-5'>
        <Container>
          <Row className='justify-content-md-center'>
            <Col md={9}>
              {!isSubmitted ? (
                <Form name='contact' method='POST' data-netlify='true' data-netlify-honeypot='bot-field' onSubmit={handleSubmit}>
                  <input type='hidden' name='form-name' value='contact' />
                  <Row className='mb-3'>
                    <Form.Group as={Col} md='6' controlId='formGridFirstName'>
                      <Form.Label>First Name <span>*</span></Form.Label>
                      <Form.Control name='firstname' required />
                    </Form.Group>
                    <Form.Group as={Col} md='6' controlId='formGridLastName'>
                      <Form.Label>Last Name <span>*</span></Form.Label>
                      <Form.Control name='lastname' required />
                    </Form.Group>
                  </Row>
                  <Row className='mb-3'>
                    <Form.Group as={Col} md='6' controlId='formGridEmail'>
                      <Form.Label>Email <span>*</span></Form.Label>
                      <Form.Control type='email' name='email' required />
                    </Form.Group>
                    <Form.Group as={Col} md='6' controlId='formGridContactNumber'>
                      <Form.Label>Contact number</Form.Label>
                      <Form.Control name='contactnumber' />
                    </Form.Group>
                  </Row>
                  <Row className='mb-3'>
                    <Form.Group controlId='formGridmessage'>
                      <Form.Label>Message <span>*</span></Form.Label>
                      <Form.Control as="textarea" rows={4} />
                    </Form.Group>
                  </Row>
                  <Button type='submit'>Send message</Button>
                </Form>
              ) : (
                <div>
                  <p>Thank you. I will get back to you as soon as possible.</p>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ContactForm
