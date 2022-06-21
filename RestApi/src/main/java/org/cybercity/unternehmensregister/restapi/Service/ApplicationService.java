package org.cybercity.unternehmensregister.restapi.Service;

import lombok.RequiredArgsConstructor;
import org.cybercity.unternehmensregister.restapi.Model.Application;
import org.cybercity.unternehmensregister.restapi.Repositories.ApplicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

/**
 * @author Clemens
 */
@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class ApplicationService {

    private final ApplicationRepository applicationRepository;

    public List<Application> getApplications() {
        return applicationRepository.findAll();
    }

    public List<Application> getApplicationsForCompanyID(long id) {
        return applicationRepository.getApplicationsForCompanyID((int) id);
    }

    public List<Application> getApplicationsForApplicantID(long id) {
        return applicationRepository.getApplicationsForApplicantID((int) id);
    }

    public Application newApplication(Application newApplication) {
        applicationRepository.save(newApplication);
        return newApplication;
    }

    public void deleteApplication(long id) {
        Application obj = applicationRepository.getById(id);
        applicationRepository.delete(obj);
    }

}
