package com.miraz.universitybackend.services;

import com.miraz.universitybackend.models.Course;
import com.miraz.universitybackend.models.Student;
import com.miraz.universitybackend.repository.CourseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class CourseService {

    @Autowired
    private CourseRepo courseRepo;

    public Course addOrUpdateCourse(Course course){
        courseRepo.save(course);
        return course;
    }

    public List<Course> getAllCourse(){
        return  courseRepo.findAll();
    }

    public Optional<Course> deleteCourse(String code){
        Optional<Course> course = courseRepo.findById(code);
        courseRepo.deleteById(code);
        return course;
    }

    public List<Optional<Course>> findByCode(String code){
        return courseRepo.findByCodeStartingWith(code);
    }
}
