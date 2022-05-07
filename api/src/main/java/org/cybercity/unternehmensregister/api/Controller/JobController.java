package org.cybercity.unternehmensregister.api.Controller;

import lombok.RequiredArgsConstructor;
import org.cybercity.unternehmensregister.api.Model.Job;
import org.cybercity.unternehmensregister.api.Service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @author Clemens
 */
@RestController
@RequestMapping("/api/job")
@CrossOrigin(origins = "localhost")
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class JobController {

    private final JobService jobService;

    @GetMapping(path = "getAll")
    public List<Job> getJobs() {
        return jobService.getJobs();
    }

}
