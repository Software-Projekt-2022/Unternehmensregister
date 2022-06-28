package org.cybercity.unternehmensregister.restapi.Service;

import lombok.RequiredArgsConstructor;
import org.cybercity.unternehmensregister.restapi.Model.Company;
import org.cybercity.unternehmensregister.restapi.Repositories.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
import java.util.Optional;

/**
 * @author Dubsky
 */
@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class CompanyService {

    private final CompanyRepository companyRepository;

    public Company newCompany(Company company) {
        companyRepository.save(company);
        return company;
    }

    public List<Company> getAll() {
        return companyRepository.findAll();
    }

    public Company getByID(long id) {
        Optional<Company> tmp = companyRepository.findById(id);
        return tmp.orElse(null);
    }

    public Company getByName(String input) {
        Optional<Company> tmp = companyRepository.findByName(input);
        return tmp.orElse(null);
    }

    public Company getByAbbreviation(String input) {
        Optional<Company> tmp = companyRepository.findByAbbreviation(input);
        return tmp.orElse(null);
    }

    public List<Company> getByCeoId(long id) {
        return companyRepository.findByCeoId((int)id);
    }

    public void setName(@RequestParam long id, @RequestParam String newName) {
        Company tmp = companyRepository.getById(id);
        tmp.setName(newName);
        companyRepository.save(tmp);
    }

    public void setAbbreviation(@RequestParam long id, @RequestParam String newAbbreviation) {
        Company tmp = companyRepository.getById(id);
        tmp.setAbbrevation(newAbbreviation);
        companyRepository.save(tmp);
    }

    public void setCeoId(@RequestParam long id, @RequestParam int newCeoId) {
        Company tmp = companyRepository.getById(id);
        tmp.setCeo_id(newCeoId);
        companyRepository.save(tmp);
    }

}
