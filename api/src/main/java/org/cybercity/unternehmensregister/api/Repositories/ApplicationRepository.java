package org.cybercity.unternehmensregister.api.Repositories;

import org.cybercity.unternehmensregister.api.Model.Application;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ApplicationRepository extends JpaRepository<Application, Long> {
}