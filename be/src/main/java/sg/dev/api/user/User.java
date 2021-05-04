package sg.dev.api.user;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.List;

@Data
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue
    @Column(name="user_id")
    private long userId;

    @Column(nullable = false, unique = true)
    private String username;

    @Column(nullable = false)
    @Size(min=8, message = "8자리 이상 입력하세요")
    private String password;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String name;

    @ElementCollection(fetch = FetchType.EAGER)
    List<Role> roles;
}
