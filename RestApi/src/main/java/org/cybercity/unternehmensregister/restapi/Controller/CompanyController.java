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

    @GetMapping(path = "getByName", produces = "application/json")
    public Company getByName(@RequestParam String input) {
        return companyService.getByName(input);
    }

    @GetMapping(path = "getByAbbreviation", produces = "application/json")
    public Company getByAbbreviation(@RequestParam String input) {
        return companyService.getByAbbreviation(input);
    }

    @GetMapping(path = "getByCeoId", produces = "application/json")
    public List<Company> getByCeoId(@RequestParam int id) {
        return companyService.getByCeoId(id);
    }

    @PostMapping(path = "setName", produces = "application/json")
    public void setName(@RequestParam long id, @RequestParam String newName) {
        companyService.setName(id, newName);
    }

    @PostMapping(path = "setAbbreviation", produces = "application/json")
    public void setAbbreviation(@RequestParam long id, @RequestParam String newAbbreviation) {
        companyService.setAbbreviation(id, newAbbreviation);
    }

    @PostMapping(path = "setCeoId", produces = "application/json")
    public void setCeoId(@RequestParam long id, @RequestParam int newCeoId) {
        companyService.setCeoId(id, newCeoId);
    }

}
