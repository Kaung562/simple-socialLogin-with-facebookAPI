package com.asstwo.xyzCar.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.asstwo.xyzCar.entity.LoginRequest;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class LoginController {

	private final AuthenticationManager authenticationManager;

    @Autowired
    public LoginController(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }
    @PostMapping("/api/login")
    public ResponseEntity<String> login(@RequestBody LoginRequest loginRequest) {
        try {
            Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword())
            );
            SecurityContextHolder.getContext().setAuthentication(authentication);

            return ResponseEntity.ok("Login successful");
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred during authentication.");
        }
    }
    
    @GetMapping("/login/facebook")
    public String facebookLogin() {
        return "redirect:/oauth2/authorization/facebook";
    }
 
    @GetMapping("/login/facebook/callback")
    public ResponseEntity<?> facebookLoginCallback(Authentication authentication) {
        if (authentication instanceof OAuth2AuthenticationToken) {
            OAuth2AuthenticationToken oauthToken = (OAuth2AuthenticationToken) authentication;

            // Extract user details from OAuth2User
            OAuth2User oauth2User = oauthToken.getPrincipal();
            String userId = oauth2User.getAttribute("id");
            String name = oauth2User.getAttribute("name");
            String email = oauth2User.getAttribute("email");

            // You can extract other user details as needed from oauth2User

            // Construct a JSON response containing user details
            Map<String, Object> responseBody = new HashMap<>();
            responseBody.put("userId", userId);
            responseBody.put("name", name);
            responseBody.put("email", email);
            // Add other user details to the response as needed

            // Return the JSON response with user details and appropriate status
            return ResponseEntity.ok(responseBody);
        }

        // Return an error response if authentication is not OAuth2
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized");
    }
   
}
