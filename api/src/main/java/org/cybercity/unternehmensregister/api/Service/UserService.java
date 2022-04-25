package org.cybercity.unternehmensregister.api.Service;

import lombok.RequiredArgsConstructor;
import org.cybercity.unternehmensregister.api.Model.User;
import org.cybercity.unternehmensregister.api.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class UserService {

    private final UserRepository userRepository;

    public List<User> getUsers() {
        return userRepository.findAll();
    }

}
