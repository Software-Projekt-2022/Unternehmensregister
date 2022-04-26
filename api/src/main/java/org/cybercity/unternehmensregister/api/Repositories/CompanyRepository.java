package org.cybercity.unternehmensregister.api.Repositories;

import org.cybercity.unternehmensregister.api.Model.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CompanyRepository extends JpaRepository<Company, Long> {
}
