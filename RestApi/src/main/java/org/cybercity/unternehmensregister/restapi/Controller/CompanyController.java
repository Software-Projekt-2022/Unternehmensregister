package org.cybercity.unternehmensregister.restapi.Controller;

import lombok.RequiredArgsConstructor;
import org.cybercity.unternehmensregister.restapi.Model.Company;
import org.cybercity.unternehmensregister.restapi.Service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author Dubsky
 */
@RestController
@RequestMapping("/api/company")
@CrossOrigin(origins = "localhost")
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class CompanyController {

    private final CompanyService companyService;

    @ResponseBody
    @PostMapping(path = "newCompany", consumes = "application/json", produces = "application/json")
    public Company newCompany(@RequestBody Company company) {
        return companyService.newCompany(company);
    }

    @GetMapping(path = "getAll", produces = "application/json")
    public List<Company> getAll() {
        return companyService.getAll();
    }

    @GetMapping(path = "getByID/{id}", produces = "application/json")
    public Company getByID(@PathVariable int id) {
        return companyService.getByID(id);
    }

    @GetMapping(path = "getByName/{input}", produces = "application/json")
    public Company getByName(@PathVariable String input) {
        return companyService.getByName(input);
    }

    @GetMapping(path = "getByAbbreviation/{input}", produces = "application/json")
    public Company getByAbbreviation(@PathVariable String input) {
        return companyService.getByAbbreviation(input);
    }

    @GetMapping(path = "getByCeoId/{id}", produces = "application/json")
    public List<Company> getByCeoId(@PathVariable int id) {
        return companyService.getByCeoId(id);
    }

    @PostMapping(path = "setName/{id}", produces = "application/json")
    public void setName(@PathVariable long id, @RequestParam String newName) {
        companyService.setName(id, newName);
    }

    @PostMapping(path = "setAbbreviation/{id}", produces = "application/json")
    public void setAbbreviation(@PathVariable long id, @RequestParam String newAbbreviation) {
        companyService.setAbbreviation(id, newAbbreviation);
    }

    @PostMapping(path = "setCeoId/{id}", produces = "application/json")
    public void setCeoId(@PathVariable long id, @RequestParam int newCeoId) {
        companyService.setCeoId(id, newCeoId);
    }

}
