package com.miraz.universitybackend.controllers;

import com.miraz.universitybackend.models.Admin;
import com.miraz.universitybackend.services.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @PostMapping("/add")
    public ResponseEntity<Admin> addAdmin(@RequestBody Admin admin){
        return new ResponseEntity<>(adminService.addOrUpdateAdmin(admin), HttpStatus.OK);
    }

    @GetMapping("/find/all")
    public ResponseEntity<List<Admin>> findAll(){
        return new ResponseEntity<>(adminService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/find/username/{userName}")
    public ResponseEntity<List<Optional<Admin>>> findByUsername(@PathVariable("userName") String userName){
        return  new ResponseEntity<>(adminService.findByUsername(userName), HttpStatus.OK);
    }

    @PostMapping("/login")
    public ResponseEntity<Optional<Admin>> login(@RequestBody Admin admin){
        Optional<Admin> user = adminService.findUser(admin.getUserName());
        if(user.isPresent() && user.get().getPassword().equals(admin.getPassword())){
            return new ResponseEntity<>(user, HttpStatus.OK);
        }
        return  null;
    }

    @DeleteMapping("/delete/{userName}")
    public ResponseEntity<Optional<Admin>> delete(@PathVariable("userName") String userName){
        return  new ResponseEntity<>(adminService.delete(userName), HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<Admin> updateAdmin(@RequestBody Admin admin){
        return  new ResponseEntity<>(adminService.addOrUpdateAdmin(admin), HttpStatus.OK);
    }

}
