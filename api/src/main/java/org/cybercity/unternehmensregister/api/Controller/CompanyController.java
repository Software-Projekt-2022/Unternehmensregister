package org.cybercity.unternehmensregister.api.Controller;

import lombok.RequiredArgsConstructor;
import org.cybercity.unternehmensregister.api.Model.Company;
import org.cybercity.unternehmensregister.api.Service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author Dubsky
 */
@RestController
@RequestMapping("/api/company")
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class CompanyController {

    private final CompanyService companyService;

    @GetMapping(path = "getAll", produces = "application/json")
    public List<Company> getAll() {
        return companyService.getAll();
    }

    @GetMapping(path = "getByID", produces = "application/json")
    public Company getByID(@RequestParam int id) {
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
