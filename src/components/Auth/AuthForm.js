import { Button, Container, Form } from "react-bootstrap";
import { useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../store/auth-context";

const AuthForm = () => {
  const history = useHistory();
  const authCtx = useContext(AuthContext);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBX2wLipg-BCZ8_v37G_NLTvpeaUndGluI",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((response) => {
      if (response.ok) {
        localStorage.setItem("email", enteredEmail);
        history.replace("/store");
        response.json().then((data) => {
          authCtx.login(data.idToken);
        });
      } else {
        return response.json().then((data) => {
          alert(`${data.error.message}`);
        });
      }
    });}

    return (
      <Container fluid className="w-25">
        <Form onSubmit={submitHandler}>
          <Form.Group className="mt-3">
            <Form.Label>E-mail</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              ref={emailInputRef}
            />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              ref={passwordInputRef}
            />
          </Form.Group>
          <Button className="mt-3" variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </Container>
    );
  };


export default AuthForm;
