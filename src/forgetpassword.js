import { useState } from "react";
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
export function Passwordreset({ email }) {
  const history = useHistory();
  const [resetemail, setResetemail] = useState(email);
  console.log(resetemail);
  return (
    <Card className="login">
      <h1>Reset password</h1>
      <hr />
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel>Email</FormLabel>{" "}
          <FormControl
            value={resetemail}
            onChange={(e) => {
              setResetemail(e.target.value);
            }}
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <br />
          <Button
            onClick={() => setResetemail(email)}
            type="submit"
            className="bg-warning"
          >
            Reset password
          </Button>
        </FormGroup>
        <hr />
        <Button onClick={() => history.push("/login")}>Login Now</Button>
      </Form>
    </Card>
  );
}
