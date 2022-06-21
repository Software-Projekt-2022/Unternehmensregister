package org.cybercity.unternehmensregister.restapi.Service;

import lombok.RequiredArgsConstructor;
import org.cybercity.unternehmensregister.restapi.Model.Job;
import org.cybercity.unternehmensregister.restapi.Model.User;
import org.cybercity.unternehmensregister.restapi.Repositories.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * @author Clemens
 */
@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class JobService {

    private final JobRepository jobRepository;

    public List<Job> getJobs() {
        return jobRepository.findAll();
    }

    public Job getJobByID(int id) {
        Optional<Job> tmp = jobRepository.findById(id);
        return tmp.orElse(null);
    }

    public Job newJob(Job newJob) {
        jobRepository.save(newJob);
        return newJob;
    }

    public void setWage(long id, int lowerWage, int upperWage) {
        Job obj = jobRepository.getById((int) id);
        obj.setWageLower(lowerWage);
        obj.setWageUpper(upperWage);
        jobRepository.save(obj);
    }

    public void setEmployer(long id, long id_employer) {
        Job obj = jobRepository.getById((int) id);
        obj.setEmployer((int) id_employer);
        jobRepository.save(obj);
    }

    public void newName(long id, String newName) {
        Job obj = jobRepository.getById((int) id);
        obj.setName(newName);
        jobRepository.save(obj);
    }

    public void deleteJob(long id) {
        Job obj = jobRepository.getById((int) id);
        jobRepository.delete(obj);
    }

}
