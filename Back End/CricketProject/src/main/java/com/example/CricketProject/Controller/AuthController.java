package com.example.CricketProject.Controller;

import com.example.CricketProject.Model.UserModel;
import com.example.CricketProject.Service.AuthService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/auth")
@CrossOrigin("http://localhost:5173")
public class AuthController {

    @Autowired
    private AuthService userService;

    @PostMapping("/signup")
    public ResponseEntity<String> registerUser(@RequestBody UserModel user) {
        userService.registerUser(user);
        return ResponseEntity.ok("Registration successful.");
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody UserModel user) {
        boolean isAuthenticated = userService.authenticateUser(user.getEmail(), user.getPassword());
        if (isAuthenticated) {
            return ResponseEntity.ok("Login successful.");
        } else {
            return ResponseEntity.status(401).body("Invalid email or password.");
        }
    }
}
