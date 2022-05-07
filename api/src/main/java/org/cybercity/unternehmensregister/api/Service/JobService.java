package org.cybercity.unternehmensregister.api.Service;

import lombok.RequiredArgsConstructor;
import org.cybercity.unternehmensregister.api.Model.Job;
import org.cybercity.unternehmensregister.api.Repositories.JobRepository;
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

}
