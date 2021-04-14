package sg.dev.api.user;

import lombok.Data;
import org.springframework.stereotype.Component;

@Data @Component
public class UserDto{
    private long id;
    private String username;
    private String password;
    private String email;
}
