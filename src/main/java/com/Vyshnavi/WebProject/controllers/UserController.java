package com.Vyshnavi.WebProject.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Vyshnavi.WebProject.model.User;
import com.Vyshnavi.WebProject.services.UserService;

@RestController
@RequestMapping("/api/users")
public class UserController {
    
    @Autowired
    UserService UserService;

    @GetMapping
    public ResponseEntity<List<User>> getAll(){
        return ResponseEntity.ok(UserService.getAllUsers());
    }
}