package sg.dev.api.user;

import java.util.List;

public interface UserService {
    String signup(User user);
    UserDto signin(User user);
    List<User> findAll();
}
