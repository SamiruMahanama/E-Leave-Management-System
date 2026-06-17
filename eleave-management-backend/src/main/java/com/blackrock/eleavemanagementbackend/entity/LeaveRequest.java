package com.blackrock.eleavemanagementbackend.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Table(name = "leave_requests")
@Getter
@Setter
public class LeaveRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String employeeId;

    private String leaveType;

    private LocalDate startDate;

    private LocalDate endDate;

    private Integer numberOfDays;

    private String reason;

    private String status;

    private String managerRemarks;
}