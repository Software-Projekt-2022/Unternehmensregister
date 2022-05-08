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

    @GetMapping(path = "getAll", produces = "application/json")
    public List<Job> getJobs() {
        return jobService.getJobs();
    }

    @PostMapping(path = "newJob", produces = "application/json")
    @ResponseBody
    public Job newJob(@RequestBody Job job) {
        return jobService.newJob(job);
    }

}
