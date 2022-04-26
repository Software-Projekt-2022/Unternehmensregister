package org.cybercity.unternehmensregister.api.Repositories;

import org.cybercity.unternehmensregister.api.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * @author Dubsky
 */
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
}
