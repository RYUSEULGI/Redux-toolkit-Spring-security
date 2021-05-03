package sg.dev.api.article;

import sg.dev.api.board.Board;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name="articles")
public class Article {

    @Id
    @GeneratedValue
    @Column(name="article_id")
    private long articleId;

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

    @ManyToOne
    @JoinColumn(name="board_id")
    private Board board;

}