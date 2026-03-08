package com.yourpackage.backend.model;

import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;

/**
 * Represents a bus that can share live location
 */
@Getter
@Setter
@Entity
public class Bus extends BaseEntity {

    private String busNumber;

    private String routeNumber;

    private String startDestination;

    private String endDestination;

    private Double currentLatitude;

    private Double currentLongitude;

    private String status;

}
