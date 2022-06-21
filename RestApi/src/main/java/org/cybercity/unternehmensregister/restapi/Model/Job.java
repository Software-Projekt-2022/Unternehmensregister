package org.cybercity.unternehmensregister.restapi.Model;

import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "jobs")
public class Job {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "job_id", nullable = false)
    private int id;

    @Column(name = "name", nullable = false, length = 50)
    private String name;

    @Column(name = "wage_lower")
    private Integer wageLower;

    @Column(name = "wage_upper")
    private Integer wageUpper;

    @Column(name = "employer")
    private Integer employer;
}