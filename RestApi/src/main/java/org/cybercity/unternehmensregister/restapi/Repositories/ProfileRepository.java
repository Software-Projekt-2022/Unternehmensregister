package org.cybercity.unternehmensregister.restapi.Repositories;

import org.cybercity.unternehmensregister.restapi.Model.Profile;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProfileRepository extends JpaRepository<Profile, Integer> {
}