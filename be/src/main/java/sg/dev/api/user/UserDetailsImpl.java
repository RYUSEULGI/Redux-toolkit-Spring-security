package sg.dev.api.user;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Getter
@RequiredArgsConstructor
public class UserDetailsImpl implements UserDetails {

    private final long actorId;
    private final String username;
    private final String email;
    private final String name;

    @JsonIgnore
    private final String password;
    private final Collection<? extends GrantedAuthority> authorities;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    public static  UserDetailsImpl build(User user){
        List<GrantedAuthority> authories = user.getRoles().stream()
                .map(role -> new SimpleGrantedAuthority((role.getAuthority())))
                .collect(Collectors.toList());
        return new UserDetailsImpl(user.getUserId(), user.getUsername(), user.getName(), user.getEmail(), user.getPassword(), authories);
    }
}
