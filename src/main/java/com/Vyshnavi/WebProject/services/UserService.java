package com.Vyshnavi.WebProject.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.Vyshnavi.WebProject.model.User;

@Service
public class UserService {
    private final List<User> allUsers;

    public UserService(){
        allUsers = new ArrayList<>();
        allUsers.add(new User("Vyshnavi", "image/jane.png", "Female", 0));
        allUsers.add(new User("Sandeep", "image/john.png", "Male", 1));
    }

    public void addUser(String name, String gender, String image){
        User newUser = new User(name, image, gender, allUsers.size());
        allUsers.add(newUser);
    }

    public List<User> getAllUsers(){
        return allUsers;
    }

    public User getSingleUser(Integer id){
        return allUsers.get(id);
    }

    public void updateUser(String name, String gender, String image, int id){
        User updUser = new User(name, image, gender, id);
        allUsers.set(id, updUser);
    }

    public void deleteUser(int id){
        allUsers.remove(id);
    }
}