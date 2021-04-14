package sg.dev.api.article;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name="articles")
public class Article {

    @Id
    @GeneratedValue
    @Column(name="article_id")
    private long id;

    @Column(name="writer")
    private String writer;

    @Column(name="email")
    private String email;

    @Column(name="subject")
    private String subject;

    @Column(name="content")
    private String content;

    @Column(name="r_date")
    private Date rDate;
}
