package org.cybercity.unternehmensregister.restapi.Service;

import lombok.RequiredArgsConstructor;
import org.cybercity.unternehmensregister.restapi.Model.Job;
import org.cybercity.unternehmensregister.restapi.Repositories.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class JobService {

    private final JobRepository jobRepository;

    public List<Job> getJobs() {
        return jobRepository.findAll();
    }

    public Job newJob(Job newJob) {
        jobRepository.save(newJob);
        return newJob;
    }

}
