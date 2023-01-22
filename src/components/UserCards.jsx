import React from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';

function UserCards({name, email, address, phone, id}) {
    let {street} = address;
  return (
    <div className="cards">
      <Card
        style={{
          width: "19rem",
          marginBottom: "30px",
          boxShadow: "1 4px 8px 0 rgba(0,1,0,0.2); ",
          
        }}
      >
        <Card.Img
          variant="top"
          src="https://cdn-icons-png.flaticon.com/512/3003/3003035.png"
        />
        <Card.Body>
          <Card.Title style={{ color: "black" }}>{name}</Card.Title>
          <Card.Subtitle style={{ color: "black" }}>{email}</Card.Subtitle>
          <Card.Text style={{ color: "black" }}>street: {street}</Card.Text>
          <Card.Footer style={{ color: "black" }}>{phone}</Card.Footer>
          <br></br> 
         <Button variant="primary">
          <Link to={`/posts/${id}`} style={{all:"unset"}}>Posts</Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default UserCards