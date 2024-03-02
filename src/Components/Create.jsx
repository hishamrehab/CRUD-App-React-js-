import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import Employees from "./Employees";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";

function Create() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const ids = uuid();
    let uniqueId = ids.slice(0, 8);

    let a = name,
      b = age,
    c = email;
    Employees.push({
      id: uniqueId,
      Name: a,
      Age: b,
      Email: c,
    });
    navigate("/");
  };

  return (
    <div>
      <Form
        className="d-grid gap-2"
        style={{
          margin: "15rem",
        }}
      >
        <Form.Group className="mb-3" controlId="formName">
          <Form.Control
            type="text"
            placeholder="Enter Name..."
            required
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>

          <Form.Control
            type="email"
            placeholder="Enter Email..."
            required
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>

          <Form.Control
            type="number"
            placeholder="Enter Age..."
            required
            onChange={(e) => setAge(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" onClick={(e) => handleSubmit(e)}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Create;
