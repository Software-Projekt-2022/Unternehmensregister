package org.cybercity.unternehmensregister.api.Service;

import lombok.RequiredArgsConstructor;
import org.cybercity.unternehmensregister.api.Model.Company;
import org.cybercity.unternehmensregister.api.Repositories.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author Dubsky
 */
@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class CompanyService {

    private final CompanyRepository companyRepository;

    public List<Company> getAll() {
        return companyRepository.findAll();
    }

}
