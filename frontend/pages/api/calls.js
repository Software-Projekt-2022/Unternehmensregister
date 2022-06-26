import $ from "jquery";
import nc from "next-connect";
import cors from "cors";

export const URL = "https://unternehmensregister.cyber-city.systems/api/"

export const sendApplication = async (job_id, emp_id, applicant_id, text) => {
    console.log(job_id, emp_id, applicant_id, text)
    const res = await fetch(URL+'/api/application/newApplication', {
        method: 'POST',
        body: JSON.stringify({
            "applicant_id": applicant_id,
            "job_id": job_id,
            "company_id": emp_id,
            "text": text
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const success = await res.json();
      console.log(success)
    }

const handler = nc()
  .use(cors())
  .post(async (req, res) => {
    const reponse = await fetch(remoteServerURL, config);
    res.json(reponse);
  });

export default handler;