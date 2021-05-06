package sg.dev.api.user;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.modelmapper.ModelMapper;

import sg.dev.api.security.domain.SecurityProvider;
import sg.dev.api.security.exception.SecurityRuntimeException;

import java.util.ArrayList;
import java.util.List;


@Slf4j @Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{

    private final UserRepository userRepo;
    private final PasswordEncoder passwordEncoder;
    private final SecurityProvider provider;
    private final AuthenticationManager manager;
    private final ModelMapper modelMapper;

    @Override
    public String signup(User user) {
        if(!userRepo.existsByUsername(user.getUsername())){
            user.setPassword(passwordEncoder.encode(user.getPassword()));
            List<Role> list = new ArrayList<>();
            list.add(Role.USER);
            user.setRoles(list);
            userRepo.save(user);
            return provider.createToken(user.getUsername(), user.getRoles());
        }else{
            throw new SecurityRuntimeException("중복된 username", HttpStatus.UNPROCESSABLE_ENTITY);
        }
    }

    @Override
    public UserDto signin(User user) {
        try{
            User loginedUser = userRepo.signin(user.getUsername(), user.getPassword());
            UserDto userDto = modelMapper.map(user, UserDto.class);
            String token = provider.createToken(user.getUsername(), userRepo.findByUsername(user.getUsername()).getRoles());
            log.info("*******ISSUED TOKEN********", token);
            userDto.setToken(token);

            return userDto;
        }catch(Exception e){
            throw new SecurityRuntimeException("유효하지 않은 아이디 / 비밀번호", HttpStatus.UNPROCESSABLE_ENTITY);
        }
    }

    @Override
    public List<User> findAll() {
        return userRepo.findAll();
    }
}
