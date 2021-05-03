package sg.dev.api.security.exception;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

@Getter
@RequiredArgsConstructor
public class SecurityRunnerException extends RuntimeException{
    private static final long SerializableUID = 1L;

    private final String msg;
    private final HttpStatus status;
}