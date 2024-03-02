import React, { Fragment, useState } from "react";
import { Button, Table } from "react-bootstrap";
import Employees from "./Employees";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  let navigate = useNavigate();

  const handelDelete = (id) => {
    var index = Employees.map(function (e) {
      return e.id;
    }).indexOf(id);
    Employees.splice(index, 1);
    navigate("/");
  };

  const handelEdit = (id, name, email, age) => {
    localStorage.setItem("Name", name);
    localStorage.setItem("Email", email);
    localStorage.setItem("Age", age);
    localStorage.setItem("Id", id);
  };

  return (
    <Fragment>
      <div
        style={{
          margin: "10rem",
        }}
      >
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Actions </th>
            </tr>
          </thead>
          <tbody>
            {Employees && Employees.length > 0
              ? Employees.map((item) => {
                  return (
                    <>
                      <tr>
                        <td>{item.Name}</td>
                        <td>{item.Email}</td>
                        <td>{item.Age}</td>
                        <td>
                          <Link to={"/edit"}>
                            <Button
                              onClick={() =>
                                handelEdit(
                                  item.id,
                                  item.Name,

                                  item.Email,
                                  item.Age
                                )
                              }
                            >
                              Edit
                            </Button>
                          </Link>
                          <Button onClick={() => handelDelete(item.id)}>
                            Delete
                          </Button>
                        </td>
                      </tr>
                    </>
                  );
                })
              : "No data to show"}
          </tbody>
        </Table>
        <br></br>
        <Link className="d-grid gap-2" to="/create">
          <Button size="lg" onClick={() => handleCreate(id)}>
            Create
          </Button>
        </Link>
      </div>
    </Fragment>
  );
}

export default Home;
