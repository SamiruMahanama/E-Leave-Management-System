package com.blackrock.eleavemanagementbackend.controller;

import com.blackrock.eleavemanagementbackend.dto.LoginRequest;
import com.blackrock.eleavemanagementbackend.dto.LoginResponse;
import com.blackrock.eleavemanagementbackend.entity.Employee;
import com.blackrock.eleavemanagementbackend.repository.EmployeeRepository;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthenticationController {

    private final EmployeeRepository employeeRepository;

    public AuthenticationController(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @PostMapping("/login")
    public LoginResponse login(
            @RequestBody LoginRequest request) {

        Employee employee = employeeRepository
                .findByEmployeeId(request.getEmployeeId())
                .orElseThrow(() ->
                        new RuntimeException("Invalid credentials"));

        if (!employee.getPassword()
                .equals(request.getPassword())) {

            throw new RuntimeException("Invalid credentials");
        }

        LoginResponse response = new LoginResponse();

        response.setEmployeeId(employee.getEmployeeId());
        response.setName(employee.getName());
        response.setEmail(employee.getEmail());
        response.setDepartment(employee.getDepartment());
        response.setDesignation(employee.getDesignation());
        response.setRole(employee.getRole());

        return response;
    }
}