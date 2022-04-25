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

    @GetMapping(path = "/getUserByID", produces = "application/json")
    public User getUser(@RequestParam long id) {
        return userService.getUser(id);
    }

    @GetMapping(path = "/setForename", produces = "application/json")
    public void setForename(@RequestParam long id, @RequestParam String newName) {
        userService.setForename(id, newName);
    }

    @GetMapping(path = "/setSurname", produces = "application/json")
    public void setSurname(@RequestParam long id, @RequestParam String newName) {
        userService.setSurname(id, newName);
    }

    @GetMapping(path = "/setAge", produces = "application/json")
    public void setAge(@RequestParam long id, @RequestParam int newAge) {
        userService.setAge(id, newAge);
    }

    @GetMapping(path = "/setEmail", produces = "application/json")
    public void setEmail(@RequestParam long id, @RequestParam String newEmail) {
        userService.setEmail(id, newEmail);
    }

    @GetMapping(path = "/setCompany", produces = "application/json")
    public void setCompany(@RequestParam long id, @RequestParam int newCompany) {
        userService.setCompany(id, newCompany);
    }

    @GetMapping(path = "/setStatus", produces = "application/json")
    public void setStatus(@RequestParam long id, @RequestParam String newStatus) {
        userService.setStatus(id, newStatus);
    }

}
