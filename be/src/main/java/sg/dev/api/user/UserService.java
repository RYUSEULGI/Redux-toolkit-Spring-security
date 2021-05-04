package sg.dev.api.user;

public interface UserService {
    String signup(User user);
    UserDto signin(User user);
}
