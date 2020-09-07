import React, { useState } from "react";
import Sidenav from "../Sidenav";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddForm = () => {
  const [title, setTitle] = useState("");
  const [client, setClient] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const token = localStorage.getItem("token");

  const url =
    "https://crm-backend-nodejs.herokuapp.com/api/managerdashboard/contact";

  const successNotify = () => toast.success("Succesfully Added");
  const failedNotify = (message) => toast.error(message);

  const addContact = (e) => {
    e.preventDefault();
    const response = {
      title: title,
      client: client,
      number: number,
      email: email,
      address: address,
    };
    fetch(url, {
      method: "POST",
      headers: {
        "auth-token": token,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(response),
    })
      .then((response) => {
        response.json();
        if (response.status === 200) {
          successNotify();
        } else if (response.status === 400) {
          failedNotify("Please fill out all the fields");
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <React.Fragment>
      <ToastContainer />
      <div className="dashboard">
        <div className="sidebar">
          <Sidenav />
        </div>
        <div className="main-content">
          <div className="header">
            <div className="title">Contact</div>
          </div>
          <hr />
          <div className="content">
            <div className="add-form">
              <input
                type="text"
                name="title"
                placeholder="title"
                onChange={(e) => setTitle(e.target.value)}
              />
              <input
                type="text"
                name="client"
                placeholder="client"
                onChange={(e) => setClient(e.target.value)}
              />
              <input
                type="number"
                name="number"
                placeholder="number"
                onChange={(e) => setNumber(e.target.value)}
              />
              <input
                type="email"
                name="email"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                name="address"
                placeholder="address"
                onChange={(e) => setAddress(e.target.value)}
              />
              <div className="button-container">
                <button onClick={(e) => addContact(e)}>Add Contact</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AddForm;
