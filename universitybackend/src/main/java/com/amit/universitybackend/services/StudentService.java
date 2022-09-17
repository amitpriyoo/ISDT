package com.miraz.universitybackend.services;

import com.miraz.universitybackend.models.Student;
import com.miraz.universitybackend.repository.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;


@Component
public class StudentService {

    @Autowired
    private StudentRepo repo;

    public Student addOrUpdateStudent(Student student){
        repo.save(student);
        return student;
    }

    public List<Student> getAllStudents(){
        return  repo.findAll();
    }

    public Optional<Student> deleteStudent(int id){
        Optional<Student> student = repo.findById(id);
        repo.deleteById(id);
        return student;
    }

    public Optional<Student> findById(int id){
        return repo.findById(id);
    }

    public List<Optional<Student>> findByName(String name){
        return repo.findByNameStartingWith(name);
    }
}
