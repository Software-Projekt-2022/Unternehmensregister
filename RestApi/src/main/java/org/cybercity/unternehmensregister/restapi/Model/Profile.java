package org.cybercity.unternehmensregister.restapi.Model;

import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "profile")
public class Profile {
    @Id
    @Column(name = "user_id", nullable = false)
    private int id;

    @Column(name = "aboutme", length = 199)
    private String aboutme;

    @Column(name = "certificates")
    private String certificates;

}