package org.cybercity.unternehmensregister.restapi.Model;

import com.sun.istack.NotNull;
import lombok.*;

import javax.persistence.*;

/**
 * @author Dubsky
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "user", schema = "public")
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
