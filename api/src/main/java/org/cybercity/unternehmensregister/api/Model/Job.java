package org.cybercity.unternehmensregister.api.Model;

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
    private Integer id;

    @Column(name = "name", nullable = false, length = 50)
    private String name;

    @Column(name = "wage_lower")
    private Integer wageLower;

    @Column(name = "wage_upper")
    private Integer wageUpper;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "employer", nullable = false)
    private Company employer;
}