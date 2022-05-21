package org.cybercity.unternehmensregister.restapi.Controller;

import lombok.RequiredArgsConstructor;
import org.cybercity.unternehmensregister.restapi.Model.Profile;
import org.cybercity.unternehmensregister.restapi.Service.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author Dubsky
 */
@RestController
@RequestMapping("/api/profile")
@CrossOrigin(origins = "*")
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class ProfileController {

    private final ProfileService profileService;

    @GetMapping(path = "getAll", produces = "application/json")
    @ResponseBody
    public List<Profile> getProfiles() {
        return profileService.getProfiles();
    }

    @GetMapping(path = "getProfileByID/{id}", produces = "application/json")
    @ResponseBody
    public Profile getProfile(@PathVariable int id) {
        return profileService.getProfile(id);
    }

    @PostMapping(path = "newProfile", consumes = "application/json", produces = "application/json")
    @ResponseBody
    public Profile newProfile(@RequestBody Profile Profile) {
        return profileService.newProfile(Profile);
    }

    @PostMapping(path = "setAboutMe/{id}")
    public void setAboutMe(@PathVariable int id, @RequestParam String newInfo) {
        profileService.setAboutMe(id, newInfo);
    }

    @PostMapping(path = "addCertificate/{id}")
    public void addCertificate(@PathVariable int id, @RequestParam String newCert) {
        profileService.addCertificate(id, newCert);
    }

    @DeleteMapping(path = "deleteProfile/{id]")
    public void deleteProfile(@PathVariable int id) {
        profileService.deleteProfile(id);
    }

}
