package com.blackrock.eleavemanagementbackend.repository;

import com.blackrock.eleavemanagementbackend.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    Optional<Employee> findByEmployeeId(String employeeId);

}