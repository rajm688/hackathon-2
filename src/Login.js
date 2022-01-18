import {
  Button,
  Card,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";

function handleSubmit(event) {
  event.preventDefault();
}

export function Login({ email, password, setPassword, setEmail, setUser }) {
  const history = useHistory();
  return (
    <Card className="login">
      <h1>Log in</h1>
      <hr />
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel>Email</FormLabel>{" "}
          <FormControl
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <br />
          <FormLabel>Password</FormLabel>
          <FormControl
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="Password"
            name="password"
            placeholder="Password"
            required
          />
          <br />
          <Button
            onClick={() => setUser({ email, password })}
            type="submit"
            className="bg-success"
          >
            Log in
          </Button>
        </FormGroup>
        <hr />
        <Button className="bg-danger" onClick={() => history.push("/forgetpassword")}>
          Forget Password?
        </Button>
      </Form>
      <hr />
    </Card>
  );
}
