package org.cybercity.unternehmensregister.restapi.Controller;

import lombok.RequiredArgsConstructor;
import org.cybercity.unternehmensregister.restapi.Model.Job;
import org.cybercity.unternehmensregister.restapi.Service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author Clemens
 */
@RestController
@RequestMapping("/api/job")
@CrossOrigin(origins = "*")
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class JobController {

    private final JobService jobService;

    @PostMapping(path = "newJob", produces = "application/json")
    @ResponseBody
    public Job newJob(@RequestBody Job job) {
        return jobService.newJob(job);
    }
    
    @GetMapping(path = "getAll", produces = "application/json")
    @ResponseBody
    public List<Job> getJobs() {
        return jobService.getJobs();
    }

    @PostMapping(path = "setWage/{id}", produces = "application/json")
    public void setWage(@PathVariable long id, @RequestParam int lowerWage, @RequestParam int upperWage) {
        jobService.setWage(id, lowerWage, upperWage);
    }

    @PostMapping(path = "setEmployer/{id}", produces = "application/json")
    public void setWage(@PathVariable long id, @RequestParam long id_employer) {
        jobService.setEmployer(id, id_employer);
    }

    @PostMapping(path = "setName/{id}", produces = "application/json")
    public void setWage(@PathVariable long id, @RequestParam String newName) {
        jobService.newName(id, newName);
    }

    @DeleteMapping(path = "deleteJob/{id}", produces = "application/json")
    public void setWage(@PathVariable long id) {
        jobService.deleteJob(id);
    }

}
