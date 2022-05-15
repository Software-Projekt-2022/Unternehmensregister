package org.cybercity.unternehmensregister.restapi.Repositories;

import org.cybercity.unternehmensregister.restapi.Model.Job;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobRepository extends JpaRepository<Job, Integer> {
}