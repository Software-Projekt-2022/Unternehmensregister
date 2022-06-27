package org.cybercity.unternehmensregister.restapi.Service;

import lombok.RequiredArgsConstructor;
import org.cybercity.unternehmensregister.restapi.Model.Profile;
import org.cybercity.unternehmensregister.restapi.Model.User;
import org.cybercity.unternehmensregister.restapi.Repositories.ProfileRepository;
import org.cybercity.unternehmensregister.restapi.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * @author Dubsky
 */
@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class UserService {

    private final UserRepository userRepository;
    private final ProfileService profileService;

    public User newUser(User user) {
        userRepository.save(user);
        profileService.newProfile(new Profile((int)user.getId(), "", ""));
        return user;
    }

    public List<User> getUsers() {
        return userRepository.findAll();
    }

    public User getUser(long id) {
        Optional<User> tmp = userRepository.findById(id);
        return tmp.orElse(null);
    }

    public void setForename(long id, String newName) {
        User obj = userRepository.getById(id);
        obj.setForename(newName);
        userRepository.save(obj);
    }

    public void setSurname(long id, String newName) {
        User obj = userRepository.getById(id);
        obj.setSurname(newName);
        userRepository.save(obj);
    }

    public void setAge(long id, int newAge) {
        User obj = userRepository.getById(id);
        obj.setAge(newAge);
        userRepository.save(obj);
    }

    public void setEmail(long id, String newEmail) {
        User obj = userRepository.getById(id);
        obj.setEmail(newEmail);
        userRepository.save(obj);
    }

    public void setCompany(long id, int newCompany) {
        User obj = userRepository.getById(id);
        obj.setCompany_id(newCompany);
        userRepository.save(obj);
    }

    public void setStatus(long id, String newStatus) {
        User obj = userRepository.getById(id);
        obj.setStatus(newStatus);
        userRepository.save(obj);
    }

    public void setImage(long id, String newImage) {
        User obj = userRepository.getById(id);
        obj.setImage(newImage);
        userRepository.save(obj);
    }
}
