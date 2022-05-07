package org.cybercity.unternehmensregister.api.Repositories;

import org.cybercity.unternehmensregister.api.Model.Profile;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProfileRepository extends JpaRepository<Profile, Integer> {
}