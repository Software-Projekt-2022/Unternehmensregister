package org.cybercity.unternehmensregister.api.Model;

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
@Table(name = "company", schema = "public")
public class Company {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "company_id")
    private long id;

    @NotNull
    @Column(name = "name")
    private String name;

    @Column(name = "abbreviation")
    private String abbrevation;

    @Column(name = "ceo_id")
    private int ceo_id;

}
