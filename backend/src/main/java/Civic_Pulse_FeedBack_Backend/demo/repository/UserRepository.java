package Civic_Pulse_FeedBack_Backend.demo.repository;

import Civic_Pulse_FeedBack_Backend.demo.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}
