import { useHistory } from "react-router-dom";
import {Breadcrumb} from "react-bootstrap";
import { useEffect, useState } from "react";
import {
  Button,
  ListGroup,
  Card,
  ButtonGroup
} from "react-bootstrap";

export function Dashboard() {
  const history = useHistory();
  const [leads, setLead] = useState([]);
  const url = "https://61c412fdf1af4a0017d99285.mockapi.io/crmleads";
  const getlead = () => fetch(url)
    .then((data) => data.json())
    .then((res) => setLead(res));
  useEffect(getlead, []);
  return (
    <div className="dashboard">
      <div>
        <h1>Dashboard</h1>
        <hr />

        <div className="editbuttons">
        <Breadcrumb>
  <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
  <Breadcrumb.Item active href="#">Lead</Breadcrumb.Item>
  <Breadcrumb.Item href="#" >Contact</Breadcrumb.Item>
</Breadcrumb>
          <div>
            <ButtonGroup aria-label="Basic example">
              <Button onClick={() => history.push("/createLead")}>
                Create Lead
              </Button>
              <Button onClick={() => history.push("/")}> Log out</Button>
            </ButtonGroup>
          </div>
        </div>
      </div>
      <hr />

      <div className="leadcard">
        {leads.map(({ lead, id, Phoneno, email, leadsource }) => (
          <LeadCard
            lead={lead}
            id={id}
            Phoneno={Phoneno}
            email={email}
            leadsource={leadsource} 
            edit = {<Button onClick={()=>history.push(`/editlead/${id}`)}>Edit</Button>}
            deletelead={
              <Button
              className="bg-danger"
                onClick={() => {
                  fetch(
                    `https://61c412fdf1af4a0017d99285.mockapi.io/crmleads/${id}`,
                    { method: "DELETE" }
                  )
                    .then((data) => data.json())
                    .then(() => getlead());
                }}
              >Delete
              </Button>
            }/>
        ))}
      </div>
    </div>
  );
}
function LeadCard({ lead, Phoneno, email, leadsource,edit,deletelead }) {
  return (
    <Card style={{ width: "18rem" }}>
      <ListGroup variant="flush">
        <ListGroup.Item>Name : {lead}</ListGroup.Item>
        <ListGroup.Item>Phone Number : {Phoneno}</ListGroup.Item>
        <ListGroup.Item>Email : {email}</ListGroup.Item>
        <ListGroup.Item>Source : {leadsource}</ListGroup.Item>
        <ListGroup.Item>{edit} {deletelead}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}
