package sg.dev.api.board;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name="boards")
public class Board {

    @Id
    @GeneratedValue
    @Column(name="board_id")
    private long id;

    @Column(name="title")
    private String title;
}
