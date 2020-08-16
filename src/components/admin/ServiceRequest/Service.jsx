import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DelService } from "../../actions/index";
import { Link } from "react-router-dom";
import Sidenav from "../Sidenav";
import EditService from "./EditService";

const ServiceRequest = ({ match }) => {
  console.log(match.params.id);
  const results = useSelector((state) => state.service);
  const services = results.filter((result) => result._id === match.params.id);
  const [view, setView] = useState("noedit");
  const dispatch = useDispatch();
  const url =
    "https://crm-backend-nodejs.herokuapp.com/api/admindashboard/servicerequest";

  const delServiceRequest = (id) => {
    const token = localStorage.getItem("token");
    console.log("delete");
    const response = {
      _id: id,
    };
    console.log(response);
    fetch(url, {
      method: "DELETE",
      headers: {
        "auth-token": token,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(response),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
    dispatch(DelService(id));
  };
  const convertDate = (date) => {
    const dates = new Date(date);
    const formattedDate = Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    }).format(dates);
    console.log(formattedDate);
    return formattedDate;
  };

  return (
    <React.Fragment>
      {view === "noedit" && (
        <div className="dashboard">
          <div className="sidebar">
            <Sidenav />
          </div>
          <div className="main-content">
            <div className="header">
              <div className="title">Service Request</div>
              <Link to="/admindashboard/servicerequest/add">
                <button type="button">
                  Add <i className="material-icons">&#xe147;</i>
                </button>
              </Link>
            </div>
            <hr />
            <div className="content">
              {services.map((result) => (
                <div key={result._id} className="cards">
                  <ul>
                    <li>
                      <b>Title:</b>
                      <p>{result.title}</p>
                    </li>
                    <li>
                      <b>Client</b>
                      <p>{result.client}</p>
                    </li>
                    <li>
                      <b>Manager</b>
                      <p>{result.manager}</p>
                    </li>
                    <li>
                      <b>Expected Closing</b>
                      <p>{convertDate(result.expected_closing)}</p>
                    </li>
                    <li>
                      <b>Priority</b>
                      <p>{result.priority}</p>
                    </li>
                    <li>
                      <b>Status</b>
                      <p>{result.status}</p>
                    </li>
                    <li>
                      <b>Expected Revenue</b>
                      <p>{result.expected_revenue}</p>
                    </li>
                    <li>
                      <b>Probability</b>
                      <p>{result.probability}</p>
                    </li>
                  </ul>
                  <div className="button-container">
                    <button type="button" onClick={() => setView("edit")}>
                      Update
                      <i className="material-icons">&#xe3c9;</i>
                    </button>
                    <Link
                      onClick={() => delServiceRequest(result._id)}
                      to="/admindashboard/servicerequest"
                    >
                      <button type="button">
                        Delete
                        <i className="material-icons">&#xe872;</i>
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {view === "edit" && (
        <EditService
          id={match.params.id}
          Title={results.title}
          Client={results.client}
          Manager={results.manager}
          Closing={results.expected_closing}
          Priority={results.priority}
          Status={results.status}
          Revenue={results.expected_revenue}
          Probability={results.probability}
        />
      )}
    </React.Fragment>
  );
};

export default ServiceRequest;
