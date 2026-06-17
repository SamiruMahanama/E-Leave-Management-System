package com.blackrock.eleavemanagementbackend.controller;

import com.blackrock.eleavemanagementbackend.entity.Employee;
import com.blackrock.eleavemanagementbackend.repository.EmployeeRepository;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/employees")
public class EmployeeController {

    private final EmployeeRepository employeeRepository;

    public EmployeeController(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @PostMapping
    public Employee createEmployee(@RequestBody Employee employee) {

        return employeeRepository.save(employee);

    }
}