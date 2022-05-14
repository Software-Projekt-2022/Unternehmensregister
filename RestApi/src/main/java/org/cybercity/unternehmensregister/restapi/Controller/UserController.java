package org.cybercity.unternehmensregister.restapi.Controller;

import lombok.RequiredArgsConstructor;
import org.cybercity.unternehmensregister.restapi.Model.User;
import org.cybercity.unternehmensregister.restapi.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author Dubsky
 */
@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = "localhost")
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class UserController {

    private final UserService userService;

    @ResponseBody
    @PostMapping(path = "newUser", consumes = "application/json", produces = "application/json")
    public User newUser(@RequestBody User user) {
        return userService.newUser(user);
    }

    @ResponseBody
    @GetMapping(path = "getUsers", produces = "application/json")
    public List<User> getUsers() {
        return userService.getUsers();
    }

    @ResponseBody
    @GetMapping(path = "getUserByID/{id}", produces = "application/json")
    public User getUser(@PathVariable long id) {
        return userService.getUser(id);
    }

    @ResponseBody
    @PostMapping(path = "setForename", produces = "application/json")
    public void setForename(@RequestParam long id, @RequestParam String newName) {
        userService.setForename(id, newName);
    }

    @ResponseBody
    @PostMapping(path = "setSurname", produces = "application/json")
    public void setSurname(@RequestParam long id, @RequestParam String newName) {
        userService.setSurname(id, newName);
    }

    @ResponseBody
    @PostMapping(path = "setAge", produces = "application/json")
    public void setAge(@RequestParam long id, @RequestParam int newAge) {
        userService.setAge(id, newAge);
    }

    @ResponseBody
    @PostMapping(path = "setEmail", produces = "application/json")
    public void setEmail(@RequestParam long id, @RequestParam String newEmail) {
        userService.setEmail(id, newEmail);
    }

    @ResponseBody
    @PostMapping(path = "setCompany", produces = "application/json")
    public void setCompany(@RequestParam long id, @RequestParam int newCompany) {
        userService.setCompany(id, newCompany);
    }

    @ResponseBody
    @PostMapping(path = "setStatus", produces = "application/json")
    public void setStatus(@RequestParam long id, @RequestParam String newStatus) {
        userService.setStatus(id, newStatus);
    }

}
