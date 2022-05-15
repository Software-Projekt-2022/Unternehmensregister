package org.cybercity.unternehmensregister.restapi.Repositories;

import org.cybercity.unternehmensregister.restapi.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * @author Dubsky
 */
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
}
