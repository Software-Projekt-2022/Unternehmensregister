package org.cybercity.unternehmensregister.restapi.Service;

import lombok.RequiredArgsConstructor;
import org.cybercity.unternehmensregister.restapi.Model.Job;
import org.cybercity.unternehmensregister.restapi.Repositories.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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

    public void setWage(long id, int lowerWage, int upperWage) {
        Optional<Job> tmp = jobRepository.findById((int)id);
        if (tmp.isPresent()) {
            tmp.get().setWageLower(lowerWage);
            tmp.get().setWageUpper(upperWage);
        }
    }
}
