import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const ContactUs = () => {
  const [userInput, setUserInput] = useState({
    enteredName: "",
    enterdEmail: "",
    enteredNumber: "",
  });

  const nameChangeHandler = (event) => {
    setUserInput(() => {
      return {
        ...userInput,
        enteredName: event.target.value,
      };
    });
  };
  const emailChangeHandler = (event) => {
    setUserInput(() => {
      return {
        ...userInput,
        enterdEmail: event.target.value,
      };
    });
  };
  const numberChangeHandler = (event) => {
    setUserInput(() => {
      return {
        ...userInput,
        enteredNumber: event.target.value,
      };
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const userInputData = {
      name: userInput.enteredName,
      email: userInput.enterdEmail,
      number: userInput.enteredNumber,
    };
    setUserInput({
      enteredName: "",
      enterdEmail: "",
      enteredNumber: "",
    });

    const response = await fetch("https://e-commerce-website-50482-default-rtdb.firebaseio.com/users.json", {
        method: "POST",
        body: JSON.stringify(userInputData),
        headers: {
            "Content-Type" : "application/json",
        }
    });
    if(response.ok) console.log("Added to firebase");
    
  };

  return (
    <Container className="mt-3">
      <Form onSubmit={submitHandler}>
        <Form.Group className="mt-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            onChange={nameChangeHandler}
            value={userInput.enteredName}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mt-3">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter e-mail"
            onChange={emailChangeHandler}
            value={userInput.enterdEmail}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mt-3">
          <Form.Label>Phone number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter phone number"
            onChange={numberChangeHandler}
            value={userInput.enteredNumber}
          ></Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default ContactUs;
