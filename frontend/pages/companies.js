import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import $ from "jquery";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react"
import NoPerm from '../components/NoPerm';

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
    url: "http://185.194.217.213:8085/api/company/getAll",
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
        <td>${element.name}</td>
        <td>${element.abbrevation}</td>
        <td><button className="btn btn-primary"><a href="profiles/${element.id}">View Profile</a></button></td>
        <td><button className="btn btn-primary">CEO</button></td>
        </tr>
        `
    )
  );
};

const Companies = (props) => {
  const { data: session } = useSession()
  useEffect(() => {
    if (session) {
    getData();
    }
  });
  const router = useRouter();
  
  if (session) {
  return (
    <div>
      <Head>
        <title>CyberJobs - Companies</title>
        <meta name="description" content="Job hub for CyberCity" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id="api_check"></div>

      <div className="table-responsive">
        <table className="table table-hover">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Abbrevation</th>
              <th>Profile</th>
              <th>Ceo</th>
            </tr>
          </thead>
          <tbody id="table_body"></tbody>
        </table>
      </div>
    </div>
  );
}
return (
  <>
    <NoPerm />
  </>
)
}

export default Companies;
