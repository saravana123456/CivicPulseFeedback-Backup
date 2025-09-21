package Civic_Pulse_FeedBack_Backend.demo.service;

import Civic_Pulse_FeedBack_Backend.demo.model.User;
import Civic_Pulse_FeedBack_Backend.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // Register user with all fields
    public String registerUser(User user) {
        Optional<User> existingUser = userRepository.findByEmail(user.getEmail());
        if (existingUser.isPresent()) return "Email already in use";
        userRepository.save(user);
        return "User registered successfully";
    }

    // Login with email, password, and role
    public boolean loginUser(String email, String password, String role) {
        Optional<User> user = userRepository.findByEmail(email);
        return user.map(u -> u.getPassword().equals(password) && u.getRole().equals(role)).orElse(false);
    }
}
