package sg.dev.api.file;

import javax.persistence.*;

@Entity
@Table(name="files")
public class FileVo {

    @Id
    @Column(name="file_id")
    private long id;

    @Column(name="of_name")
    private String ofName;

    @Column(name="sf_name")
    private String sfName;

    @Column(name="f_size")
    private long fSize;
}
