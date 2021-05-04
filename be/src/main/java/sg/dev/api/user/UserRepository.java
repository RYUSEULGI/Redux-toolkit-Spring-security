package sg.dev.api.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{
    String signup(UserDto userDto);
    boolean existsByUsername(String username);
    User findByUsername(String username);

    @Query(value="select user_id, username from users where users.username=:username and users.password=:password", nativeQuery = true)
    User signin(@Param("username") String username, @Param("password") String password);
}
