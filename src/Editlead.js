import { useParams } from "react-router-dom";
import { useState } from "react";
import {
    Button,
    Card,
    Form,
    FormControl,
    FormGroup,
    FormLabel
  } from "react-bootstrap";
  import { useEffect } from "react";
  import { useHistory } from "react-router-dom";
export function Editlead() {
  const { id } = useParams();
  const [leads, setlead] = useState(null);
  const getlead = () => {
    fetch(`https://61c412fdf1af4a0017d99285.mockapi.io/crmleads/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((ld) => setlead(ld));
  };
  useEffect(getlead, [data,ld]);
  return leads ? <Updatelead leads={leads} /> : "";
}
function Updatelead({ leads }) {
  const [lead, setlead] = useState(leads.lead);
  const [Phoneno, setphoneno] = useState(leads.Phoneno);
  const [email, setemail] = useState(leads.email);
  const [leadsource, setleadsource] = useState(leads.leadsource);
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
                value={lead}
                onChange={(e) => setlead(e.target.value)} />
              <FormLabel>First Name</FormLabel>
              <FormControl
                value={Phoneno}
                className="input"
                onChange={(e) => setphoneno(e.target.value)} />
              <FormLabel>First Name</FormLabel>
              <FormControl
                value={email}
                className="input"
                onChange={(e) => setemail(e.target.value)} />
              <FormLabel>First Name</FormLabel>
              <FormControl
                className="input"
                value={leadsource}
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
