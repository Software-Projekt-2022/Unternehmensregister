package org.cybercity.unternehmensregister.api.Repositories;

import org.cybercity.unternehmensregister.api.Model.Job;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobRepository extends JpaRepository<Job, Integer> {
}