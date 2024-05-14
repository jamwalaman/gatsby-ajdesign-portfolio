import React, { useState } from 'react'
import { Container, Row, Col, Button, Form, Alert } from 'react-bootstrap'

const ContactForm = ({ formWrapper = '', formHeading }) => {

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target)
    const newErrors = {}

    if (!formData.get('firstname')) {
      newErrors.firstname = 'First Name is required'
    }
    if (!formData.get('lastname')) {
      newErrors.lastname = 'Last Name is required'
    }
    if (!formData.get('email')) {
      newErrors.email = 'Email is required'
    }
    if (!formData.get('message')) {
      newErrors.message = 'Message is required'
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        setIsSubmitted(true);
        setErrors({});
        event.target.reset();
      })
      .catch((error) => alert(error));
  };

  return (
    <>
      <div className={formWrapper}>
        <Container>
          <Row className='justify-content-md-center'>
            <Col md={9}>

              {formHeading && <h2>{formHeading}</h2>}

              <Form name='contact' method='POST' data-netlify='true' data-netlify-honeypot='bot-field' noValidate onSubmit={handleSubmit}>
                <input type='hidden' name='form-name' value='contact' />
                <Row className='mb-3'>
                  <Form.Group as={Col} md='6' controlId='formGridFirstName'>
                    <Form.Label>First Name <span>*</span></Form.Label>
                    <Form.Control name='firstname' required isInvalid={errors.firstname ? true : false} />
                    <Form.Control.Feedback type='invalid'>{errors.firstname}</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md='6' controlId='formGridLastName'>
                    <Form.Label>Last Name <span>*</span></Form.Label>
                    <Form.Control name='lastname' required isInvalid={errors.lastname ? true : false} />
                    <Form.Control.Feedback type='invalid'>{errors.lastname}</Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className='mb-3'>
                  <Form.Group as={Col} md='6' controlId='formGridEmail'>
                    <Form.Label>Email <span>*</span></Form.Label>
                    <Form.Control type='email' name='email' required isInvalid={errors.email ? true : false} />
                    <Form.Control.Feedback type='invalid'>{errors.email}</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md='6' controlId='formGridContactNumber'>
                    <Form.Label>Contact number</Form.Label>
                    <Form.Control type='tel' name='contactnumber' />
                  </Form.Group>
                </Row>
                <Row className='mb-3'>
                  <Form.Group controlId='formGridmessage'>
                    <Form.Label>Message <span>*</span></Form.Label>
                    <Form.Control as="textarea" name='message' rows={4} required isInvalid={errors.message ? true : false} />
                    <Form.Control.Feedback type='invalid'>{errors.message}</Form.Control.Feedback>

                  </Form.Group>
                </Row>
                <Button type='submit'>Send message</Button>
              </Form>

              {isSubmitted && (
                <Alert variant='primary' dismissible>
                  <p>Thank you. I will get back to you as soon as possible.</p>
                </Alert>
              )}

            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ContactForm
