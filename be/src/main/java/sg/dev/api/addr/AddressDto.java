package sg.dev.api.addr;

import lombok.Data;
import org.springframework.stereotype.Component;

import java.io.Serializable;
import java.sql.Date;

@Data @Component
public class AddressDto{
    private long id;
    private String name;
    private String address;
    private Date rDate;
}
