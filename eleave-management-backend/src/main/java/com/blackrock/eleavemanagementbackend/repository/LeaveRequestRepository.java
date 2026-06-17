package com.blackrock.eleavemanagementbackend.repository;

import com.blackrock.eleavemanagementbackend.entity.LeaveRequest;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LeaveRequestRepository
        extends JpaRepository<LeaveRequest, Long> {

    List<LeaveRequest> findByStatus(String status);
    List<LeaveRequest> findByEmployeeId(
            String employeeId
    );

}


