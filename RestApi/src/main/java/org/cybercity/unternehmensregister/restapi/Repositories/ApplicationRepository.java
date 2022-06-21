package org.cybercity.unternehmensregister.restapi.Repositories;

import org.cybercity.unternehmensregister.restapi.Model.Application;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ApplicationRepository extends JpaRepository<Application, Long> {

    @Query(value = "SELECT a FROM Application a WHERE a.company_id = :employer_id")
    List<Application> getApplicationsForCompanyID(int employer_id);

    @Query(value = "SELECT a FROM Application a WHERE a.applicant_id = :applicant_id")
    List<Application> getApplicationsForApplicantID(int applicant_id);

}