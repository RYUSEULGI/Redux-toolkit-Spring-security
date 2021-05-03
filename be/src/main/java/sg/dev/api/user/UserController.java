package sg.dev.api.user;

import io.swagger.annotations.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.java.Log;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Log @Api(tags = "users")
@RestController
@RequestMapping(name="users")
@RequiredArgsConstructor
public class UserController {

    private final UserServiceImpl userService;

    @GetMapping("/signup")
    @ApiOperation(value="${UserController.signup}")
    @ApiResponses(value={
            @ApiResponse(code=400, message = "something wrong"),
            @ApiResponse(code=403, message = "승인거절"),
            @ApiResponse(code=422, message = "중복된 username")})
    public ResponseEntity<Long> signup(@ApiParam("Signup user") @RequestBody UserDto userDto){
        return ResponseEntity.ok(userService.signup(userDto));
    }

    @PostMapping("/signup")
    public ResponseEntity<Long> join(@RequestBody User user) throws Exception {
        return ResponseEntity.ok(null);
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
    public ResponseEntity<?> all(@PathVariable String username){
        log.info("모두 접근가능");
        return ResponseEntity.ok(null);
    }

    @GetMapping("/{username}")
    public ResponseEntity<?> auth(@PathVariable String username){
        log.info("로그인한 사용자만 접근 가능");
        return ResponseEntity.ok(null);
    }

    @GetMapping("/admin")
    public ResponseEntity<?> admin(){
        log.info("관리자만 접근 가능");
        return ResponseEntity.ok(null);
    }
}
