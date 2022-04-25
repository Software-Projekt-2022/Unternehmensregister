package org.cybercity.unternehmensregister.api.Controller;

import lombok.RequiredArgsConstructor;
import org.cybercity.unternehmensregister.api.Model.User;
import org.cybercity.unternehmensregister.api.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

/**
 * @author Dubsky
 */
@Controller
@RequestMapping("/api/user")
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class UserController {

    private final UserService userService;

    @GetMapping(path = "/getUsers", produces = "application/json")
    public List<User> getUsers() {
        return userService.getUsers();
    }

    @GetMapping(path = "/getUser", produces = "application/json")
    public User getUser(@RequestParam long id) {
        return userService.getUser(id);
    }

}
