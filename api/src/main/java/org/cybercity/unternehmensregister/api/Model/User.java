package org.cybercity.unternehmensregister.api.Model;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

/**
 * @author Dubsky
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private long id;

    @NotNull
    @Column(name = "forename")
    private String forename;

    @NotNull
    @Column(name = "surname")
    private String surname;

    @NotNull
    @Column(name = "age")
    private int age;

    @Column(name = "email")
    private String email;

    @Column(name = "company_id")
    private int company_id;

    @NotNull
    @Column(name = "status")
    private String status;

}
