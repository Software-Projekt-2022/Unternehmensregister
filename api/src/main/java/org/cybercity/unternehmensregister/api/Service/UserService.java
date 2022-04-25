package org.cybercity.unternehmensregister.api.Service;

import lombok.RequiredArgsConstructor;
import org.cybercity.unternehmensregister.api.Model.User;
import org.cybercity.unternehmensregister.api.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class UserService {

    private final UserRepository userRepository;

    public List<User> getUsers() {
        return userRepository.findAll();
    }

    public User getUser(long id) {
        Optional<User> tmp = userRepository.findById(id);
        return tmp.orElse(null);
    }

}
