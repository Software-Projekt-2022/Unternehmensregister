package org.cybercity.unternehmensregister.restapi.Controller;

import lombok.RequiredArgsConstructor;
import org.cybercity.unternehmensregister.restapi.Model.Application;
import org.cybercity.unternehmensregister.restapi.Service.ApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author Clemens
 */
@RestController
@RequestMapping("/api/application")
@CrossOrigin(origins = "*")
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class ApplicationController {

    private final ApplicationService applicationService;

    @GetMapping(path = "getAll", produces = "application/json")
    @ResponseBody
    public List<Application> getJobs() {
        return applicationService.getApplications();
    }

    @GetMapping(path = "getApplicationsForID/{id}", produces = "application/json")
    @ResponseBody
    public List<Application> getJobByID(@PathVariable long id) {
        return applicationService.getApplicationsForID(id);
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
