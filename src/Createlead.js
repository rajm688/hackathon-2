import { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Button,
  Card,
  Form,
  FormControl,
  FormGroup,
  FormLabel
} from "react-bootstrap";

export function Createlead() {
  const [lead, setlead] = useState("");
  const [Phoneno, setphoneno] = useState("");
  const [email, setemail] = useState("");
  const [leadsource, setleadsource] = useState("");
  const history = useHistory();
  return (
    <>
      <div id="inputs">
        <Card className="addcard">
          <Form>
            <h1>Add lead</h1>
            <hr />
            <FormGroup>
              <FormLabel>First Name</FormLabel>
              <FormControl
                className="input"
                onChange={(e) => setlead(e.target.value)} />
              <FormLabel>First Name</FormLabel>
              <FormControl
                className="input"
                onChange={(e) => setphoneno(e.target.value)} />
              <FormLabel>First Name</FormLabel>
              <FormControl
                className="input"
                onChange={(e) => setemail(e.target.value)} />
              <FormLabel>First Name</FormLabel>
              <FormControl
                className="input"
                onChange={(e) => setleadsource(e.target.value)} />
              <hr />
              <Button
                className="bg-primary"
                onClick={() => {
                  const newlead = { lead, Phoneno, email, leadsource };
                  fetch(
                    "https://61c412fdf1af4a0017d99285.mockapi.io/crmleads",
                    {
                      method: "POST",
                      body: JSON.stringify(newlead),
                      headers: { "Content-Type": "application/json" },
                    }
                  )
                    .then((data) => data.json())
                    .then(() => history.push("/dashboard"));
                }}
                variant="contained"
              >
                Add lead
              </Button>
            </FormGroup>
          </Form>
        </Card>
      </div>
    </>
  );
}
