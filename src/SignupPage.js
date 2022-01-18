//signup page to get firstname,lastname,email, password,
import {
  Button,
  Card,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export function SignupPage() {
  const [users, setUsers] = useState([]);//getting firstname,lastname,password,email and storing it in a user array of objects
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  console.log(users);
  // console.log(firstname,lastname,email,password)
  return (
    <div>
      <Card className="signup">
        <Row>
          <Col>
            <h1>Sign Up</h1>
            <hr />
            <Form>
              <FormGroup>
                <FormLabel>First Name</FormLabel>
                <FormControl
                  onChange={(e) => setFirstname(e.target.value)}
                  value={firstname}
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                />
                <br />
                <FormLabel>Last Name</FormLabel>
                <FormControl
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                />
                <br />

                <FormLabel>Email</FormLabel>
                <FormControl
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  name="email"
                  placeholder="Email"
                />
                <br />

                <FormLabel>Password</FormLabel>
                <FormControl
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="Password"
                  name="password"
                  placeholder="Password"
                />
                <br />

                <Button
                  onClick={() => {
                    const user = { firstname, lastname, email, password };
                    setUsers([...users, user]);
                  }}
                >
                  Sign UP
                </Button>
              </FormGroup>
              <hr />
              <Button className="bg-success" onClick={() => history.push("/login")}>Login Now</Button>
            </Form>
          </Col>
        </Row>
      </Card>
    </div>
  );
}
