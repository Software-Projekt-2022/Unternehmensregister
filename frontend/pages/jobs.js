import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import $ from "jquery";
import React, { useState, useEffect } from "react";
import JobListing from "../components/JobListing";

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

const getData = async () => {
  const response = await $.ajax({
    url: "http://185.194.217.213:8085/api/job/getAll",
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
  console.log("Getting job list");
  let root = document.getElementById("table_body");
  data.forEach((element) =>
    root.insertAdjacentHTML(
      "beforebegin",
      `
        <tr>
        <td>${element.id}</td>
        <td>${element.name}</td>
        <td>${element.wageLower}</td>
        <td>${element.wageUpper}</td>
        <td><button class="btn btn-primary" onClick=routing(${element.id})>View Profile</button></td>
        </tr>
        `
    )
  );
};

const Jobs = (props) => {
  const router = useRouter();

  const routing = () => {
    router.push({ pathname: "/profile", query: { id: id } }, "/profile");
  };

  useEffect(() => {
    getData();
  });

  return (
    <>
      <Head>
        <title>CyberJobs - Jobs</title>
        <meta name="description" content="Job hub for CyberCity" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <JobListing id="1" name="Lokführer" wageLower="40k" wageUpper="60k" />

      <div className="text-center mb-5">
        <h3>Open Jobs</h3>
      </div>
      <div className="container">
        <div id="api_check"></div>
        <div className="table-responsive">
          <table className="table table-hover">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Min. Wage</th>
                <th>Max. Wage</th>
                <th>Employer</th>
              </tr>
            </thead>
            <tbody id="table_body"></tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Jobs;
