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
@CrossOrigin(origins = "*")
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class UserController {

    private final UserService userService;

    @GetMapping(path = "getAll", produces = "application/json")
    @ResponseBody
    public List<User> getUsers() {
        return userService.getUsers();
    }

    @GetMapping(path = "getUserByID/{id}", produces = "application/json")
    @ResponseBody
    public User getUser(@PathVariable long id) {
        return userService.getUser(id);
    }

    @PostMapping(path = "newUser", consumes = "application/json", produces = "application/json")
    @ResponseBody
    public User newUser(@RequestBody User user) {
        return userService.newUser(user);
    }

    @PostMapping(path = "setForename/{id}")
    public void setForename(@PathVariable long id, @RequestParam String newName) {
        userService.setForename(id, newName);
    }

    @ResponseBody
    @PostMapping(path = "setSurname/{id}")
    public void setSurname(@PathVariable long id, @RequestParam String newName) {
        userService.setSurname(id, newName);
    }

    @ResponseBody
    @PostMapping(path = "setAge/{id}")
    public void setAge(@PathVariable long id, @RequestParam int newAge) {
        userService.setAge(id, newAge);
    }

    @ResponseBody
    @PostMapping(path = "setEmail/{id}")
    public void setEmail(@PathVariable long id, @RequestParam String newEmail) {
        userService.setEmail(id, newEmail);
    }

    @ResponseBody
    @PostMapping(path = "setCompany/{id}")
    public void setCompany(@PathVariable long id, @RequestParam int newCompany) {
        userService.setCompany(id, newCompany);
    }

    @ResponseBody
    @PostMapping(path = "setStatus/{id}")
    public void setStatus(@PathVariable long id, @RequestParam String newStatus) {
        userService.setStatus(id, newStatus);
    }

}
