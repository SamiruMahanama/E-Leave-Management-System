package com.blackrock.eleavemanagementbackend.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginResponse {

    private String employeeId;

    private String name;

    private String email;

    private String department;

    private String designation;

    private String role;

}
