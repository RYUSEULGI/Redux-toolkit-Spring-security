package sg.dev.api.security.config;

import lombok.RequiredArgsConstructor;
import org.springframework.security.config.annotation.SecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.DefaultSecurityFilterChain;
import sg.dev.api.security.aop.SecurityFilter;
import sg.dev.api.security.domain.SecurityProvider;


@RequiredArgsConstructor
public class SecurityConfig extends SecurityConfigurerAdapter<DefaultSecurityFilterChain, HttpSecurity> {
    private final SecurityProvider provider;  //concern

    @Override
    public void configure(HttpSecurity httpSecurity) throws Exception {
        SecurityFilter filter = new SecurityFilter(provider);
        httpSecurity.csrf().disable();
    }
}
