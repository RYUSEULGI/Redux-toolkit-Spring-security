package sg.dev.api.user;

import io.swagger.annotations.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.java.Log;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Log
@CrossOrigin(origins = "*", allowedHeaders = "*")
@Api(tags="users") @RequiredArgsConstructor
@RestController @RequestMapping("/users")
public class UserController {

    private final UserServiceImpl userService;
    private final ModelMapper modelMapper;

    @PostMapping("/signup")
    @ApiOperation(value="${UserController.signup}")
    @ApiResponses(value={
            @ApiResponse(code=400, message = "something wrong"),
            @ApiResponse(code=403, message = "승인거절"),
            @ApiResponse(code=422, message = "중복된 username")})
    public ResponseEntity<String> signup(@ApiParam("Signup user") @RequestBody UserDto userDto){
        log.info("회원가입 시도");
        return ResponseEntity.ok(userService.signup(modelMapper.map(userDto, User.class)));
    }

    @PostMapping("/signin")
    @ApiOperation(value="${UserController.signin}")
    @ApiResponses(value={
            @ApiResponse(code=400, message = "something wrong"),
            @ApiResponse(code=422, message = "유효하지 않은 아이디 / 비밀번호")})
    public ResponseEntity<UserDto> signin(@RequestBody UserDto userDto){
        return ResponseEntity.ok(userService.signin(modelMapper.map(userDto, User.class)));
    }

    @PostMapping("")
    public ResponseEntity<Long> join(@RequestBody User user) throws Exception {
        return ResponseEntity.ok(null);
    }

    @GetMapping("/findAll")
    public ResponseEntity<List<User>> fetchAll(){
        return ResponseEntity.ok(userService.findAll());
    }

    @PutMapping("")
    public ResponseEntity<Long> update(@RequestBody User user){
        return ResponseEntity.ok(null);
    }

    @DeleteMapping("")
    public ResponseEntity<Long> delete(@RequestBody User user){
        return ResponseEntity.ok(null);
    }

    @GetMapping("/all")
    public ResponseEntity<List<User>> all(){
        log.info("모두 접근가능");
        return ResponseEntity.ok(null);
    }

    @PostMapping("/{username}")
    public ResponseEntity<?> auth(@PathVariable String username){
        log.info("로그인한 사용자만 접근 가능");
        return ResponseEntity.ok(null);
    }

    @PostMapping("/admin")
    public ResponseEntity<?> admin(){
        log.info("관리자만 접근 가능");
        return ResponseEntity.ok(null);
    }
}
