package sg.dev.api.file;

import lombok.Data;
import org.springframework.stereotype.Component;

@Data @Component
public class FileDto {
    private long id;
    private String ofName;
    private String sfName;
    private long fSize;
}
