import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import {
  FacebookLoginButton,
  InstagramLoginButton,
} from "react-social-login-buttons";

function Forme() {
  return (
    <div>
      <div class="greet">Book your Summer Vacation </div>
      <Form>
        <FacebookLoginButton>
          <span>Login with Facebook</span>
        </FacebookLoginButton>
        <InstagramLoginButton>
          <span>Sign in with Google+</span>
        </InstagramLoginButton>
        <Row>
          <Col>
            <Form.Label>First Name</Form.Label>
            <Form.Control placeholder="First name" />
          </Col>
          <Col>
            <Form.Label>Last Name</Form.Label>
            <Form.Control placeholder="Last name" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>Check In</Form.Label>
            <Form.Control type="date" placeholder="check in " />
          </Col>
          <Col>
            <Form.Label>Check Out </Form.Label>
            <Form.Control type="date" placeholder="Check out" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>Adults</Form.Label>
            <Form.Control type="text" placeholder="Adults" />
          </Col>
          <Col>
            <Form.Label>Children</Form.Label>
            <Form.Control type="text" placeholder="Children" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>New Client?</Form.Label>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Yes" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="No" />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Forme;
