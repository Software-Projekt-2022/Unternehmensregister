package org.cybercity.unternehmensregister.api.Model;

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
    private Integer id;

    @MapsId
    @OneToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(name = "aboutme", length = 199)
    private String aboutme;

}