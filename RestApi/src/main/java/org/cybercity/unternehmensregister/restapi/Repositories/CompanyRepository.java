package org.cybercity.unternehmensregister.restapi.Repositories;

import org.cybercity.unternehmensregister.restapi.Model.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CompanyRepository extends JpaRepository<Company, Long> {

    @Query(value = "SELECT c FROM Company c WHERE c.name =: name")
    Optional<Company> findByName(@Param("name") String name);

    @Query(value = "SELECT x FROM Company x WHERE x.abbrevation =: abbrevation")
    Optional<Company> findByAbbreviation(@Param("abbrevation") String abbrevation);

    @Query(value = "SELECT c FROM Company c WHERE c.ceo_id =: Ceo_id")
    List<Company> findByCeoId(@Param("id") long Ceo_id);

}
