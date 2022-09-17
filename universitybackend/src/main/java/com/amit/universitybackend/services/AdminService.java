package com.miraz.universitybackend.services;

import com.miraz.universitybackend.models.Admin;
import com.miraz.universitybackend.models.Student;
import com.miraz.universitybackend.repository.AdminRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@Component
public class AdminService {
    @Autowired
    private AdminRepo adminRepo;

    public Admin addOrUpdateAdmin(Admin admin){
        return adminRepo.save(admin);
    }

    public List<Admin> findAll(){
        return adminRepo.findAll();
    }

    public List<Optional<Admin>> findByUsername(String userName){
        return adminRepo.findByUserNameStartingWith(userName);
    }

    public Optional<Admin> delete(String userName){
        Optional<Admin> admin = adminRepo.findById(userName);
        adminRepo.deleteById(userName);
        return  admin;
    }

    public  Optional<Admin> findUser(String userName){
        return adminRepo.findById(userName);
    }


}
