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
      {!isSubmitted ? (
        <Container>
          <Row>
            <Col md={6}>
              <Form name='contact' method='POST' data-netlify='true' data-netlify-honeypot='bot-field' onSubmit={handleSubmit}>
                <input type='hidden' name='form-name' value='contact' />
                <Row className='mb-3'>
                  <Form.Group as={Col} controlId='formGridName'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control placeholder='Enter your name' name='name' required />
                  </Form.Group>
                  <Form.Group as={Col} controlId='formGridEmail'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' placeholder='Enter email' name='email' required />
                  </Form.Group>
                </Row>
                <Button type='submit'>Let's do this</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      ) : (
        <div>
          <p>Thank you. I will get back to you as soon as possible.</p>
        </div>
      )}
    </>
  );
};

export default ContactForm
