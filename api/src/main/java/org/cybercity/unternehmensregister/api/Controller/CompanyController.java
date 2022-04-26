package org.cybercity.unternehmensregister.api.Controller;

import lombok.RequiredArgsConstructor;
import org.cybercity.unternehmensregister.api.Model.Company;
import org.cybercity.unternehmensregister.api.Service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

}
