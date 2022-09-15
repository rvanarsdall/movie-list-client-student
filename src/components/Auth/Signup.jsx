import React, { useState } from "react";
import "./Signup.css";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

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
