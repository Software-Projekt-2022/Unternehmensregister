import { useRouter } from "next/router";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import $ from "jquery";
import { managerGetCall } from "./api/api_calls.js";
import React, { useState, useEffect } from "react";

const id = 1;

const showWarning = () => {
  let root = document.getElementById("api_check");
  root.insertAdjacentHTML(
    "beforebegin",
    `
    <div className="alert alert-danger">
    <strong>Connection error!</strong> Could not connect to the API
    </div>
        `
  );
};

const getApplications = async () => {
  const response = await $.ajax({
    url: "http://localhost:8085/api/application/getApplicationsForID/1",
    method: "GET",
    dataType: "json",
    success: function (data) {
      renderTable(data);
    },
    error: function (data) {
      showWarning();
    },
  });
};

const renderTable = (data) => {
  console.log("Getting company list");
  let root = document.getElementById("table_body");
  data.forEach((element) =>
    root.insertAdjacentHTML(
      "beforebegin",
      `
        <tr>
        <td>${element.id}</td>
        <td>${element.applicant_id}</td>
        <td>${element.job_id}</td>
        <td><button className="btn btn-primary"><a href="application/${element.id}">Open Application</a></button></td>
        </tr>
        `
    )
  );
};

const Manager = (props) => {
  useEffect(() => {
    getApplications();
  });

  return (
    <div>
      <div id="api_check"></div>
      <div className="table-responsive">
        <table className="table table-hover">
          <thead className="table-dark">
            <tr>
              <th>Application ID</th>
              <th>Applicant</th>
              <th>Job</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody id="table_body"></tbody>
        </table>
      </div>
    </div>
  );
};

export default Manager;
