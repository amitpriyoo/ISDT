package com.miraz.universitybackend.repository;

import com.miraz.universitybackend.models.Student;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface StudentRepo extends MongoRepository<Student, Integer> {
//    List<Optional<Student>> findByIdStartingWith(int id);

//    List<Student> findAllOrderByIdAsc();

    List<Optional<Student>> findByName(String name);
    List<Optional<Student>> findByNameStartingWith(String name);
}
