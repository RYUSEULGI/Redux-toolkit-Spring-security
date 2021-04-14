package sg.dev.api.board;

import lombok.Data;
import org.springframework.stereotype.Component;

import java.io.Serializable;

@Data @Component
public class BoardDto {
    private long id;
    private String title;
}
