import $ from "jquery";
import nc from "next-connect";
import cors from "cors";

export function hi() {
  console.log("hi");
}

export async function managerGetCall(
  v_forname,
  v_surname,
  v_age,
  v_email,
  v_status
) {
  const data = JSON.stringify({
    forename: v_forname,
    surname: v_surname,
    age: v_age,
    email: v_email,
    status: v_status,
  });
  const reponse = await fetch("http://localhost:8085/api/user/newUser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
export async function newJobCall(
  title,
  lower,
  upper,
  emp
) {
  const data = JSON.stringify({
    name: title,
    lowerWage: lower,
    upperWage: upper,
    employer: emp
  });
  const reponse = await fetch("http://localhost:8085/api/job/newJob", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
export async function registerCall(
  v_forname,
  v_surname,
  v_age,
  v_email,
  v_status
) {
  const data = JSON.stringify({
    forename: v_forname,
    surname: v_surname,
    age: v_age,
    email: v_email,
    status: v_status,
  });
  const reponse = await fetch("http://localhost:8085/api/user/newUser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

const handler = nc()
  .use(cors())
  .post(async (req, res) => {
    const reponse = await fetch(remoteServerURL, config);
    res.json(reponse);
  });

export default handler;
