package com.blackrock.eleavemanagementbackend.controller;

import com.blackrock.eleavemanagementbackend.entity.LeaveRequest;
import com.blackrock.eleavemanagementbackend.repository.LeaveRequestRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/leave-requests")
public class LeaveRequestController {

    private final LeaveRequestRepository leaveRequestRepository;

    public LeaveRequestController(
            LeaveRequestRepository leaveRequestRepository) {

        this.leaveRequestRepository = leaveRequestRepository;
    }

    @PostMapping
    public LeaveRequest applyLeave(
            @RequestBody LeaveRequest leaveRequest) {

        leaveRequest.setStatus("Pending");
        leaveRequest.setManagerRemarks("");

        return leaveRequestRepository.save(leaveRequest);
    }

    @GetMapping
    public List<LeaveRequest> getAllLeaveRequests() {

        return leaveRequestRepository.findAll();
    }

    @GetMapping("/pending")
    public List<LeaveRequest> getPendingRequests() {

        return leaveRequestRepository.findByStatus("Pending");

    }

    @PutMapping("/{id}/approve")
    public LeaveRequest approveLeave(
            @PathVariable Long id,
            @RequestParam String remarks) {

        LeaveRequest leaveRequest =
                leaveRequestRepository.findById(id)
                        .orElseThrow(() ->
                                new RuntimeException("Leave request not found"));

        leaveRequest.setStatus("Approved");
        leaveRequest.setManagerRemarks(remarks);

        return leaveRequestRepository.save(leaveRequest);
    }

    @PutMapping("/{id}/reject")
    public LeaveRequest rejectLeave(
            @PathVariable Long id,
            @RequestParam String remarks) {

        LeaveRequest leaveRequest =
                leaveRequestRepository.findById(id)
                        .orElseThrow(() ->
                                new RuntimeException("Leave request not found"));

        leaveRequest.setStatus("Rejected");
        leaveRequest.setManagerRemarks(remarks);

        return leaveRequestRepository.save(leaveRequest);
    }

    @GetMapping("/employee/{employeeId}")
    public List<LeaveRequest> getEmployeeLeaves(
            @PathVariable String employeeId) {

        return leaveRequestRepository
                .findByEmployeeId(employeeId);

    }
}