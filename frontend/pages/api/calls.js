import $ from "jquery";
import nc from "next-connect";
import cors from "cors";

export const URL = "https://unternehmensregisterba.cyber-city.systems";

export const sendApplication = async (job_id, emp_id, applicant_id, text) => {
  console.log(job_id, emp_id, applicant_id, text);
  const res = await fetch(URL + "/api/application/newApplication", {
    method: "POST",
    body: JSON.stringify({
      applicant_id: applicant_id,
      job_id: job_id,
      company_id: emp_id,
      text: text,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const deleteApplication = async (appId) => {
  const res = await fetch(URL + "/api/application/deleteApplication/" + appId, {
    method: "DELETE",
  });
};

export const sendProfileUpdate = async (
  id,
  forename,
  surname,
  age,
  email,
  company_id,
  status,
  image
) => {
  const res = await fetch(URL + "/api/user/updateUser/" + id, {
    method: "POST",
    body: JSON.stringify({
      id: id,
      forename: forename,
      surname: surname,
      age: age,
      email: email,
      company_id: company_id,
      status: status,
      image: image,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const handler = nc()
  .use(cors())
  .post(async (req, res) => {
    const reponse = await fetch(remoteServerURL, config);
    res.json(reponse);
  });

export default handler;
