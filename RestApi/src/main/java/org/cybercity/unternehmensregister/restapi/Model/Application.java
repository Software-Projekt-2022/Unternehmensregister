package org.cybercity.unternehmensregister.restapi.Model;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "applications", schema = "public")
public class Application {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "application_id")
    @NotNull
    private Long id;

    @Column(name = "applicant_id")
    @NotNull
    private int applicant_id;

    @Column(name = "job_id")
    @NotNull
    private int job_id;

    @Column(name = "employer_id")
    @NotNull
    private int company_id;

    @Column(name = "text")
    private String text;
}