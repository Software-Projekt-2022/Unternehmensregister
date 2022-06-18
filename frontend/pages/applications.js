import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import NoPerm from "../components/NoPerm";
import ApplicationForm from "../components/ApplicationForm";
import $ from "jquery";

let rendered = false;

const getApplications = async (id) => {
  console.log("Applications for ID: " + id);
  const response = await $.ajax({
    url:
      "http://185.194.217.213:8085/api/application/getApplicationsForID/" + id,
    method: "GET",
    dataType: "json",
    success: function (data) {
      console.log(data);
      renderTable(data);
    },
  });
};

const renderTable = (data) => {
  if (!rendered) {
    let root = document.getElementById("table_body");
    data.forEach((element) =>
      root.insertAdjacentHTML(
        "beforebegin",
        `
          <tr>
          <td>${element.id}</td>
          <td>${element.job_id}</td>
          <td>${element.company_id}</td>
          </tr>
          `
      )
    );
    //rendered = true;
  }
};

export default function Applications() {
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session) {
      getApplications(router.query.id);
    }
  });

  if (!session) {
    return <NoPerm />;
  } else {
    return (
      <div className="table-responsive">
        <table className="table table-hover">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Job</th>
              <th>Employer</th>
            </tr>
          </thead>
          <tbody id="table_body"></tbody>
        </table>
      </div>
    );
  }
}
