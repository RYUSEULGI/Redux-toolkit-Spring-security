package sg.dev.api.user;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import org.springframework.stereotype.Component;

import java.util.List;

@Data @Component
public class UserDto{
    @ApiModelProperty(position = 0)
    private long id;

    @ApiModelProperty(position = 1)
    private String username;

    @ApiModelProperty(position = 2)
    private String password;

    @ApiModelProperty(position = 3)
    private String email;

    @ApiModelProperty(position = 4)
    private String name;

    @ApiModelProperty(position = 5)
    private String token;

    @ApiModelProperty(position = 6)
    private List<Role> roles;
}
