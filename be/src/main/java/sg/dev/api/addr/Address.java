package sg.dev.api.addr;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name="addresses")
public class Address {

    @Id
    @GeneratedValue
    @Column(name="address_id")
    private long id;

    @Column(name="name")
    private String name;

    @Column(name="address")
    private String address;

    @Column(name="r_date")
    private Date rDate;
}
