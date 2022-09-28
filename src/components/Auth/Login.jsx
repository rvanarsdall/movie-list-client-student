import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Endpoints } from "../Endpoints";
import { Route } from "../Routes";

function Login(props) {
  const [email, setEmail] = useState("jmiles@email.com");
  let [password, setPassword] = useState("password1234");

  async function handleSubmit(e) {
    e.preventDefault();
    // TODO: Add signin Fetch
    // TODO: Pass token to parent
    console.log("login clicked");

    let body = {
      user: {
        email: email,
        password: password,
      },
    };

    try {
      await Route.post(Endpoints.user.login, body, (data) =>
        props.updateToken(data.token)
      );
    } catch (error) {
      console.error(error);
    }
    // ex: props.updateToken(user.token)
  }

  return (
    <div>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="username">Email</Label>
          <Input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="username"
            name="username"
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
        <Button type="submit">Login</Button>
      </Form>
    </div>
  );
}

export default Login;
