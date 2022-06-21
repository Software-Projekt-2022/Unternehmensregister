package org.cybercity.unternehmensregister.restapi.Controller;

import lombok.*;
import org.cybercity.unternehmensregister.restapi.Model.Application;
import org.cybercity.unternehmensregister.restapi.Model.Company;
import org.cybercity.unternehmensregister.restapi.Model.Job;
import org.cybercity.unternehmensregister.restapi.Model.User;
import org.cybercity.unternehmensregister.restapi.Service.ApplicationService;
import org.cybercity.unternehmensregister.restapi.Service.CompanyService;
import org.cybercity.unternehmensregister.restapi.Service.JobService;
import org.cybercity.unternehmensregister.restapi.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

/**
 * @author Clemens
 */
@RestController
@RequestMapping("/api/application")
@CrossOrigin(origins = "*")
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class ApplicationController {

    @Getter
    @Setter
    @Data
    @ToString
    @NoArgsConstructor
    @AllArgsConstructor
    class ResponseForm {
        User user;
        Company company;
        Job job;
    }

    private final ApplicationService applicationService;
    private final UserService userService;
    private final JobService jobService;
    private final CompanyService companyService;

    @GetMapping(path = "getAll", produces = "application/json")
    @ResponseBody
    public List<ResponseForm> getJobs() {
        ArrayList<ResponseForm> res = new ArrayList<>();
        for (Application application : applicationService.getApplications()) {
            ResponseForm newRes = new ResponseForm();
            newRes.setUser(userService.getUser(application.getApplicant_id()));
            newRes.setCompany(companyService.getByID(application.getCompany_id()));
            newRes.setJob(jobService.getJobByID(application.getJob_id()));
            res.add(newRes);
        }
        return res;
    }

    @GetMapping(path = "getApplicationsForCompanyID/{id}", produces = "application/json")
    @ResponseBody
    public List<ResponseForm> getApplicationsForCompanyID(@PathVariable long id) {
        ArrayList<ResponseForm> res = new ArrayList<>();
        for (Application application : applicationService.getApplicationsForCompanyID(id)) {
            ResponseForm newRes = new ResponseForm();
            newRes.setUser(userService.getUser(application.getApplicant_id()));
            newRes.setCompany(companyService.getByID(application.getCompany_id()));
            newRes.setJob(jobService.getJobByID(application.getJob_id()));
            res.add(newRes);
        }
        return res;
    }

    @GetMapping(path = "getApplicationsForApplicantID/{id}", produces = "application/json")
    @ResponseBody
    public ArrayList<ResponseForm> getApplicationsForApplicantID(@PathVariable long id) {
        ArrayList<ResponseForm> res = new ArrayList<>();
        for (Application application : applicationService.getApplicationsForApplicantID(id)) {
            ResponseForm newRes = new ResponseForm();
            newRes.setUser(userService.getUser(application.getApplicant_id()));
            newRes.setCompany(companyService.getByID(application.getCompany_id()));
            newRes.setJob(jobService.getJobByID(application.getJob_id()));
            res.add(newRes);
        }
        return res;
    }

    @PostMapping(path = "newApplication", consumes = "application/json", produces = "application/json")
    @ResponseBody
    public Application newApplication(@RequestBody Application newApplication) {
        return applicationService.newApplication(newApplication);
    }

    @DeleteMapping(path = "deleteApplication/{id}")
    public void deleteApplication(@PathVariable long id) {
        applicationService.deleteApplication(id);
    }

    @PostMapping(path = "returner", consumes = "application/json", produces = "application/json")
    @ResponseBody
    public Application returner(@RequestBody Application newApplication) {
        return newApplication;
    }

}
