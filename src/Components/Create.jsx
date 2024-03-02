import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import Employees from "./Employees";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";

function Create() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [id, setId] = useState("");

  let navigate = useNavigate();

  var index = Employees.map(function (e) {
    return e.id;
  }).indexOf(id);
  

  const handleSubmit = (e) => {
    e.preventDefault();

    const ids = uuid();
    let uniqueId = ids.slice(0, 8);

    let a = name,
      b = age;
    Employees.push({
      id: uniqueId,
      Name: a,
      Age: b,
    });
    navigate("/");
  };

  useEffect(() => {
    setName(localStorage.getItem("Name"));
    setAge(localStorage.getItem("Age"));
    setId(localStorage.getItem("Id"));
  }, []);

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
            type="number"
            placeholder="Enter AGE"
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
