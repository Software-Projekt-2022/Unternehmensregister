package org.cybercity.unternehmensregister.restapi.Service;

import lombok.RequiredArgsConstructor;
import net.minidev.json.JSONObject;
import net.minidev.json.parser.JSONParser;
import net.minidev.json.parser.ParseException;
import nonapi.io.github.classgraph.json.JSONSerializer;
import org.cybercity.unternehmensregister.restapi.Model.Profile;
import org.cybercity.unternehmensregister.restapi.Repositories.ProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * @author Dubsky
 */
@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class ProfileService {

    private final ProfileRepository profileRepository;

    public Profile newProfile(Profile profile) {
        profileRepository.save(profile);
        return profile;
    }

    public List<Profile> getProfiles() {
        return profileRepository.findAll();
    }

    public Profile getProfile(int id) {
        Optional<Profile> tmp = profileRepository.findById(id);
        return tmp.orElse(null);
    }

    public void setAboutMe(int id, String newInfo) {
        Profile obj = profileRepository.getById(id);
        obj.setAboutme(newInfo);
        profileRepository.save(obj);
    }

    public void addCertificate(int id, String newCert) {
        Profile obj = profileRepository.getById(id);
        obj.setCertificates(obj.getCertificates() + newCert);
        profileRepository.save(obj);
    }

    public void deleteProfile(int id) {
        Profile obj = profileRepository.getById(id);
        profileRepository.delete(obj);
    }
}
