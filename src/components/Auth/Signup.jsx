import React, { useState } from "react";
import "./Signup.css";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Endpoints } from "../Endpoints";

function Signup(props) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("signup clicked");
    // TODO add fetch to signup
    // TODO pass the token to the parent component
    // ex: props.updateToken(user.token)

    let bodyObject = JSON.stringify({
      user: {
        email: email,
        password: password,
        firstName: firstname,
        lastName: lastname,
      },
    });

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: bodyObject,
    };

    try {
      const response = await fetch(Endpoints.user.signup, requestOptions);
      const data = await response.json();
      console.log(data.token);
      props.updateToken(data.token);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h1>Sign Up</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="firstname">First Name</Label>
          <Input
            onChange={(e) => {
              setFirstname(e.target.value);
            }}
            placeholder="First Name"
            name="firstname"
            value={firstname}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="lastname">Last Name</Label>
          <Input
            onChange={(e) => {
              setLastname(e.target.value);
            }}
            placeholder="Last Name"
            name="lastname"
            value={lastname}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="Email">Email</Label>
          <Input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="text"
            placeholder="Email"
            name="email"
            value={email}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="password"
            name="password"
            value={password}
          />
        </FormGroup>
        <Button type="submit">Signup</Button>
      </Form>
    </div>
  );
}

export default Signup;
