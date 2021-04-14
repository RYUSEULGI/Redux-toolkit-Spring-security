package sg.dev.api.article;

import lombok.Data;
import org.springframework.stereotype.Component;

import java.sql.Date;

@Data @Component
public class ArticleDto {
    private long id;
    private String writer;
    private String email;
    private String subject;
    private String content;
    private Date rDate;
}
