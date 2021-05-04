package sg.dev.api.board;

import sg.dev.api.article.Article;
import sg.dev.api.item.Item;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="boards")
public class Board {

    @Id
    @GeneratedValue
    @Column(name="board_id")
    private long boardId;

    @Column(name="title")
    private String title;

    @OneToMany(mappedBy = "board")
    List<Article> articles = new ArrayList<>();

    @OneToMany(mappedBy = "board")
    List<Item> items = new ArrayList<>();
}
