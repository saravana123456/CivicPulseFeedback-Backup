package Civic_Pulse_FeedBack_Backend.demo.controller;

import Civic_Pulse_FeedBack_Backend.demo.model.User;
import Civic_Pulse_FeedBack_Backend.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserService userService;

    // Register endpoint
    @PostMapping("/register")
    public String registerUser(@RequestBody User user) {
        return userService.registerUser(user);
    }

    // Login endpoint (checks email + password + role)
    @PostMapping("/login")
    public String loginUser(@RequestBody User user) {
        boolean success = userService.loginUser(user.getEmail(), user.getPassword(), user.getRole());
        return success ? "Login successful" : "Login failed";
    }
}
