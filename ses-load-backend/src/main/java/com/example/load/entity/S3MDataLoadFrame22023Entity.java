package com.example.load.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Timestamp;
import java.util.Objects;

@Entity
@Table(name = "s3m_data_load_frame_2_2023", schema = "ses", catalog = "")
@Data
@NoArgsConstructor
public class S3MDataLoadFrame22023Entity implements Serializable {
    
	private static final long serialVersionUID = -5419345600310440297L;
    @EmbeddedId
    private S3MDataLoadFrame22023EntityPK id;
    @Basic
    @Column(name = "IA_H1", nullable = true, precision = 0)
    private Double iaH1;
    @Basic
    @Column(name = "IA_H2", nullable = true, precision = 0)
    private Double iaH2;
    @Basic
    @Column(name = "IA_H3", nullable = true, precision = 0)
    private Double iaH3;
    @Basic
    @Column(name = "IA_H4", nullable = true, precision = 0)
    private Double iaH4;
    @Basic
    @Column(name = "IA_H5", nullable = true, precision = 0)
    private Double iaH5;
    @Basic
    @Column(name = "IA_H6", nullable = true, precision = 0)
    private Double iaH6;
    @Basic
    @Column(name = "IA_H7", nullable = true, precision = 0)
    private Double iaH7;
    @Basic
    @Column(name = "IA_H8", nullable = true, precision = 0)
    private Double iaH8;
    @Basic
    @Column(name = "IA_H9", nullable = true, precision = 0)
    private Double iaH9;
    @Basic
    @Column(name = "IA_H10", nullable = true, precision = 0)
    private Double iaH10;
    @Basic
    @Column(name = "IA_H11", nullable = true, precision = 0)
    private Double iaH11;
    @Basic
    @Column(name = "IA_H12", nullable = true, precision = 0)
    private Double iaH12;
    @Basic
    @Column(name = "IA_H13", nullable = true, precision = 0)
    private Double iaH13;
    @Basic
    @Column(name = "IA_H14", nullable = true, precision = 0)
    private Double iaH14;
    @Basic
    @Column(name = "IA_H15", nullable = true, precision = 0)
    private Double iaH15;
    @Basic
    @Column(name = "IA_H16", nullable = true, precision = 0)
    private Double iaH16;
    @Basic
    @Column(name = "IA_H17", nullable = true, precision = 0)
    private Double iaH17;
    @Basic
    @Column(name = "IA_H18", nullable = true, precision = 0)
    private Double iaH18;
    @Basic
    @Column(name = "IA_H19", nullable = true, precision = 0)
    private Double iaH19;
    @Basic
    @Column(name = "IA_H20", nullable = true, precision = 0)
    private Double iaH20;
    @Basic
    @Column(name = "IA_H21", nullable = true, precision = 0)
    private Double iaH21;
    @Basic
    @Column(name = "IA_H22", nullable = true, precision = 0)
    private Double iaH22;
    @Basic
    @Column(name = "IA_H23", nullable = true, precision = 0)
    private Double iaH23;
    @Basic
    @Column(name = "IA_H24", nullable = true, precision = 0)
    private Double iaH24;
    @Basic
    @Column(name = "IA_H25", nullable = true, precision = 0)
    private Double iaH25;
    @Basic
    @Column(name = "IA_H26", nullable = true, precision = 0)
    private Double iaH26;
    @Basic
    @Column(name = "IA_H27", nullable = true, precision = 0)
    private Double iaH27;
    @Basic
    @Column(name = "IA_H28", nullable = true, precision = 0)
    private Double iaH28;
    @Basic
    @Column(name = "IA_H29", nullable = true, precision = 0)
    private Double iaH29;
    @Basic
    @Column(name = "IA_H30", nullable = true, precision = 0)
    private Double iaH30;
    @Basic
    @Column(name = "IA_H31", nullable = true, precision = 0)
    private Double iaH31;
    @Basic
    @Column(name = "IB_H1", nullable = true, precision = 0)
    private Double ibH1;
    @Basic
    @Column(name = "IB_H2", nullable = true, precision = 0)
    private Double ibH2;
    @Basic
    @Column(name = "IB_H3", nullable = true, precision = 0)
    private Double ibH3;
    @Basic
    @Column(name = "IB_H4", nullable = true, precision = 0)
    private Double ibH4;
    @Basic
    @Column(name = "IB_H5", nullable = true, precision = 0)
    private Double ibH5;
    @Basic
    @Column(name = "IB_H6", nullable = true, precision = 0)
    private Double ibH6;
    @Basic
    @Column(name = "IB_H7", nullable = true, precision = 0)
    private Double ibH7;
    @Basic
    @Column(name = "IB_H8", nullable = true, precision = 0)
    private Double ibH8;
    @Basic
    @Column(name = "IB_H9", nullable = true, precision = 0)
    private Double ibH9;
    @Basic
    @Column(name = "IB_H10", nullable = true, precision = 0)
    private Double ibH10;
    @Basic
    @Column(name = "IB_H11", nullable = true, precision = 0)
    private Double ibH11;
    @Basic
    @Column(name = "IB_H12", nullable = true, precision = 0)
    private Double ibH12;
    @Basic
    @Column(name = "IB_H13", nullable = true, precision = 0)
    private Double ibH13;
    @Basic
    @Column(name = "IB_H14", nullable = true, precision = 0)
    private Double ibH14;
    @Basic
    @Column(name = "IB_H15", nullable = true, precision = 0)
    private Double ibH15;
    @Basic
    @Column(name = "IB_H16", nullable = true, precision = 0)
    private Double ibH16;
    @Basic
    @Column(name = "IB_H17", nullable = true, precision = 0)
    private Double ibH17;
    @Basic
    @Column(name = "IB_H18", nullable = true, precision = 0)
    private Double ibH18;
    @Basic
    @Column(name = "IB_H19", nullable = true, precision = 0)
    private Double ibH19;
    @Basic
    @Column(name = "IB_H20", nullable = true, precision = 0)
    private Double ibH20;
    @Basic
    @Column(name = "IB_H21", nullable = true, precision = 0)
    private Double ibH21;
    @Basic
    @Column(name = "IB_H22", nullable = true, precision = 0)
    private Double ibH22;
    @Basic
    @Column(name = "IB_H23", nullable = true, precision = 0)
    private Double ibH23;
    @Basic
    @Column(name = "IB_H24", nullable = true, precision = 0)
    private Double ibH24;
    @Basic
    @Column(name = "IB_H25", nullable = true, precision = 0)
    private Double ibH25;
    @Basic
    @Column(name = "IB_H26", nullable = true, precision = 0)
    private Double ibH26;
    @Basic
    @Column(name = "IB_H27", nullable = true, precision = 0)
    private Double ibH27;
    @Basic
    @Column(name = "IB_H28", nullable = true, precision = 0)
    private Double ibH28;
    @Basic
    @Column(name = "IB_H29", nullable = true, precision = 0)
    private Double ibH29;
    @Basic
    @Column(name = "IB_H30", nullable = true, precision = 0)
    private Double ibH30;
    @Basic
    @Column(name = "IB_H31", nullable = true, precision = 0)
    private Double ibH31;
    @Basic
    @Column(name = "IC_H1", nullable = true, precision = 0)
    private Double icH1;
    @Basic
    @Column(name = "IC_H2", nullable = true, precision = 0)
    private Double icH2;
    @Basic
    @Column(name = "IC_H3", nullable = true, precision = 0)
    private Double icH3;
    @Basic
    @Column(name = "IC_H4", nullable = true, precision = 0)
    private Double icH4;
    @Basic
    @Column(name = "IC_H5", nullable = true, precision = 0)
    private Double icH5;
    @Basic
    @Column(name = "IC_H6", nullable = true, precision = 0)
    private Double icH6;
    @Basic
    @Column(name = "IC_H7", nullable = true, precision = 0)
    private Double icH7;
    @Basic
    @Column(name = "IC_H8", nullable = true, precision = 0)
    private Double icH8;
    @Basic
    @Column(name = "IC_H9", nullable = true, precision = 0)
    private Double icH9;
    @Basic
    @Column(name = "IC_H10", nullable = true, precision = 0)
    private Double icH10;
    @Basic
    @Column(name = "IC_H11", nullable = true, precision = 0)
    private Double icH11;
    @Basic
    @Column(name = "IC_H12", nullable = true, precision = 0)
    private Double icH12;
    @Basic
    @Column(name = "IC_H13", nullable = true, precision = 0)
    private Double icH13;
    @Basic
    @Column(name = "IC_H14", nullable = true, precision = 0)
    private Double icH14;
    @Basic
    @Column(name = "IC_H15", nullable = true, precision = 0)
    private Double icH15;
    @Basic
    @Column(name = "IC_H16", nullable = true, precision = 0)
    private Double icH16;
    @Basic
    @Column(name = "IC_H17", nullable = true, precision = 0)
    private Double icH17;
    @Basic
    @Column(name = "IC_H18", nullable = true, precision = 0)
    private Double icH18;
    @Basic
    @Column(name = "IC_H19", nullable = true, precision = 0)
    private Double icH19;
    @Basic
    @Column(name = "IC_H20", nullable = true, precision = 0)
    private Double icH20;
    @Basic
    @Column(name = "IC_H21", nullable = true, precision = 0)
    private Double icH21;
    @Basic
    @Column(name = "IC_H22", nullable = true, precision = 0)
    private Double icH22;
    @Basic
    @Column(name = "IC_H23", nullable = true, precision = 0)
    private Double icH23;
    @Basic
    @Column(name = "IC_H24", nullable = true, precision = 0)
    private Double icH24;
    @Basic
    @Column(name = "IC_H25", nullable = true, precision = 0)
    private Double icH25;
    @Basic
    @Column(name = "IC_H26", nullable = true, precision = 0)
    private Double icH26;
    @Basic
    @Column(name = "IC_H27", nullable = true, precision = 0)
    private Double icH27;
    @Basic
    @Column(name = "IC_H28", nullable = true, precision = 0)
    private Double icH28;
    @Basic
    @Column(name = "IC_H29", nullable = true, precision = 0)
    private Double icH29;
    @Basic
    @Column(name = "IC_H30", nullable = true, precision = 0)
    private Double icH30;
    @Basic
    @Column(name = "IC_H31", nullable = true, precision = 0)
    private Double icH31;
    @Basic
    @Column(name = "VAB_H1", nullable = true, precision = 0)
    private Double vabH1;
    @Basic
    @Column(name = "VAB_H2", nullable = true, precision = 0)
    private Double vabH2;
    @Basic
    @Column(name = "VAB_H3", nullable = true, precision = 0)
    private Double vabH3;
    @Basic
    @Column(name = "VAB_H4", nullable = true, precision = 0)
    private Double vabH4;
    @Basic
    @Column(name = "VAB_H5", nullable = true, precision = 0)
    private Double vabH5;
    @Basic
    @Column(name = "VAB_H6", nullable = true, precision = 0)
    private Double vabH6;
    @Basic
    @Column(name = "VAB_H7", nullable = true, precision = 0)
    private Double vabH7;
    @Basic
    @Column(name = "VAB_H8", nullable = true, precision = 0)
    private Double vabH8;
    @Basic
    @Column(name = "VAB_H9", nullable = true, precision = 0)
    private Double vabH9;
    @Basic
    @Column(name = "VAB_H10", nullable = true, precision = 0)
    private Double vabH10;
    @Basic
    @Column(name = "VAB_H11", nullable = true, precision = 0)
    private Double vabH11;
    @Basic
    @Column(name = "VAB_H12", nullable = true, precision = 0)
    private Double vabH12;
    @Basic
    @Column(name = "VAB_H13", nullable = true, precision = 0)
    private Double vabH13;
    @Basic
    @Column(name = "VAB_H14", nullable = true, precision = 0)
    private Double vabH14;
    @Basic
    @Column(name = "VAB_H15", nullable = true, precision = 0)
    private Double vabH15;
    @Basic
    @Column(name = "VAB_H16", nullable = true, precision = 0)
    private Double vabH16;
    @Basic
    @Column(name = "VAB_H17", nullable = true, precision = 0)
    private Double vabH17;
    @Basic
    @Column(name = "VAB_H18", nullable = true, precision = 0)
    private Double vabH18;
    @Basic
    @Column(name = "VAB_H19", nullable = true, precision = 0)
    private Double vabH19;
    @Basic
    @Column(name = "VAB_H20", nullable = true, precision = 0)
    private Double vabH20;
    @Basic
    @Column(name = "VAB_H21", nullable = true, precision = 0)
    private Double vabH21;
    @Basic
    @Column(name = "VAB_H22", nullable = true, precision = 0)
    private Double vabH22;
    @Basic
    @Column(name = "VAB_H23", nullable = true, precision = 0)
    private Double vabH23;
    @Basic
    @Column(name = "VAB_H24", nullable = true, precision = 0)
    private Double vabH24;
    @Basic
    @Column(name = "VAB_H25", nullable = true, precision = 0)
    private Double vabH25;
    @Basic
    @Column(name = "VAB_H26", nullable = true, precision = 0)
    private Double vabH26;
    @Basic
    @Column(name = "VAB_H27", nullable = true, precision = 0)
    private Double vabH27;
    @Basic
    @Column(name = "VAB_H28", nullable = true, precision = 0)
    private Double vabH28;
    @Basic
    @Column(name = "VAB_H29", nullable = true, precision = 0)
    private Double vabH29;
    @Basic
    @Column(name = "VAB_H30", nullable = true, precision = 0)
    private Double vabH30;
    @Basic
    @Column(name = "VAB_H31", nullable = true, precision = 0)
    private Double vabH31;
    @Basic
    @Column(name = "VBC_H1", nullable = true, precision = 0)
    private Double vbcH1;
    @Basic
    @Column(name = "VBC_H2", nullable = true, precision = 0)
    private Double vbcH2;
    @Basic
    @Column(name = "VBC_H3", nullable = true, precision = 0)
    private Double vbcH3;
    @Basic
    @Column(name = "VBC_H4", nullable = true, precision = 0)
    private Double vbcH4;
    @Basic
    @Column(name = "VBC_H5", nullable = true, precision = 0)
    private Double vbcH5;
    @Basic
    @Column(name = "VBC_H6", nullable = true, precision = 0)
    private Double vbcH6;
    @Basic
    @Column(name = "VBC_H7", nullable = true, precision = 0)
    private Double vbcH7;
    @Basic
    @Column(name = "VBC_H8", nullable = true, precision = 0)
    private Double vbcH8;
    @Basic
    @Column(name = "VBC_H9", nullable = true, precision = 0)
    private Double vbcH9;
    @Basic
    @Column(name = "VBC_H10", nullable = true, precision = 0)
    private Double vbcH10;
    @Basic
    @Column(name = "VBC_H11", nullable = true, precision = 0)
    private Double vbcH11;
    @Basic
    @Column(name = "VBC_H12", nullable = true, precision = 0)
    private Double vbcH12;
    @Basic
    @Column(name = "VBC_H13", nullable = true, precision = 0)
    private Double vbcH13;
    @Basic
    @Column(name = "VBC_H14", nullable = true, precision = 0)
    private Double vbcH14;
    @Basic
    @Column(name = "VBC_H15", nullable = true, precision = 0)
    private Double vbcH15;
    @Basic
    @Column(name = "VBC_H16", nullable = true, precision = 0)
    private Double vbcH16;
    @Basic
    @Column(name = "VBC_H17", nullable = true, precision = 0)
    private Double vbcH17;
    @Basic
    @Column(name = "VBC_H18", nullable = true, precision = 0)
    private Double vbcH18;
    @Basic
    @Column(name = "VBC_H19", nullable = true, precision = 0)
    private Double vbcH19;
    @Basic
    @Column(name = "VBC_H20", nullable = true, precision = 0)
    private Double vbcH20;
    @Basic
    @Column(name = "VBC_H21", nullable = true, precision = 0)
    private Double vbcH21;
    @Basic
    @Column(name = "VBC_H22", nullable = true, precision = 0)
    private Double vbcH22;
    @Basic
    @Column(name = "VBC_H23", nullable = true, precision = 0)
    private Double vbcH23;
    @Basic
    @Column(name = "VBC_H24", nullable = true, precision = 0)
    private Double vbcH24;
    @Basic
    @Column(name = "VBC_H25", nullable = true, precision = 0)
    private Double vbcH25;
    @Basic
    @Column(name = "VBC_H26", nullable = true, precision = 0)
    private Double vbcH26;
    @Basic
    @Column(name = "VBC_H27", nullable = true, precision = 0)
    private Double vbcH27;
    @Basic
    @Column(name = "VBC_H28", nullable = true, precision = 0)
    private Double vbcH28;
    @Basic
    @Column(name = "VBC_H29", nullable = true, precision = 0)
    private Double vbcH29;
    @Basic
    @Column(name = "VBC_H30", nullable = true, precision = 0)
    private Double vbcH30;
    @Basic
    @Column(name = "VBC_H31", nullable = true, precision = 0)
    private Double vbcH31;
    @Basic
    @Column(name = "VCA_H1", nullable = true, precision = 0)
    private Double vcaH1;
    @Basic
    @Column(name = "VCA_H2", nullable = true, precision = 0)
    private Double vcaH2;
    @Basic
    @Column(name = "VCA_H3", nullable = true, precision = 0)
    private Double vcaH3;
    @Basic
    @Column(name = "VCA_H4", nullable = true, precision = 0)
    private Double vcaH4;
    @Basic
    @Column(name = "VCA_H5", nullable = true, precision = 0)
    private Double vcaH5;
    @Basic
    @Column(name = "VCA_H6", nullable = true, precision = 0)
    private Double vcaH6;
    @Basic
    @Column(name = "VCA_H7", nullable = true, precision = 0)
    private Double vcaH7;
    @Basic
    @Column(name = "VCA_H8", nullable = true, precision = 0)
    private Double vcaH8;
    @Basic
    @Column(name = "VCA_H9", nullable = true, precision = 0)
    private Double vcaH9;
    @Basic
    @Column(name = "VCA_H10", nullable = true, precision = 0)
    private Double vcaH10;
    @Basic
    @Column(name = "VCA_H11", nullable = true, precision = 0)
    private Double vcaH11;
    @Basic
    @Column(name = "VCA_H12", nullable = true, precision = 0)
    private Double vcaH12;
    @Basic
    @Column(name = "VCA_H13", nullable = true, precision = 0)
    private Double vcaH13;
    @Basic
    @Column(name = "VCA_H14", nullable = true, precision = 0)
    private Double vcaH14;
    @Basic
    @Column(name = "VCA_H15", nullable = true, precision = 0)
    private Double vcaH15;
    @Basic
    @Column(name = "VCA_H16", nullable = true, precision = 0)
    private Double vcaH16;
    @Basic
    @Column(name = "VCA_H17", nullable = true, precision = 0)
    private Double vcaH17;
    @Basic
    @Column(name = "VCA_H18", nullable = true, precision = 0)
    private Double vcaH18;
    @Basic
    @Column(name = "VCA_H19", nullable = true, precision = 0)
    private Double vcaH19;
    @Basic
    @Column(name = "VCA_H20", nullable = true, precision = 0)
    private Double vcaH20;
    @Basic
    @Column(name = "VCA_H21", nullable = true, precision = 0)
    private Double vcaH21;
    @Basic
    @Column(name = "VCA_H22", nullable = true, precision = 0)
    private Double vcaH22;
    @Basic
    @Column(name = "VCA_H23", nullable = true, precision = 0)
    private Double vcaH23;
    @Basic
    @Column(name = "VCA_H24", nullable = true, precision = 0)
    private Double vcaH24;
    @Basic
    @Column(name = "VCA_H25", nullable = true, precision = 0)
    private Double vcaH25;
    @Basic
    @Column(name = "VCA_H26", nullable = true, precision = 0)
    private Double vcaH26;
    @Basic
    @Column(name = "VCA_H27", nullable = true, precision = 0)
    private Double vcaH27;
    @Basic
    @Column(name = "VCA_H28", nullable = true, precision = 0)
    private Double vcaH28;
    @Basic
    @Column(name = "VCA_H29", nullable = true, precision = 0)
    private Double vcaH29;
    @Basic
    @Column(name = "VCA_H30", nullable = true, precision = 0)
    private Double vcaH30;
    @Basic
    @Column(name = "VCA_H31", nullable = true, precision = 0)
    private Double vcaH31;
    @Basic
    @Column(name = "VAN_H1", nullable = true, precision = 0)
    private Double vanH1;
    @Basic
    @Column(name = "VAN_H2", nullable = true, precision = 0)
    private Double vanH2;
    @Basic
    @Column(name = "VAN_H3", nullable = true, precision = 0)
    private Double vanH3;
    @Basic
    @Column(name = "VAN_H4", nullable = true, precision = 0)
    private Double vanH4;
    @Basic
    @Column(name = "VAN_H5", nullable = true, precision = 0)
    private Double vanH5;
    @Basic
    @Column(name = "VAN_H6", nullable = true, precision = 0)
    private Double vanH6;
    @Basic
    @Column(name = "VAN_H7", nullable = true, precision = 0)
    private Double vanH7;
    @Basic
    @Column(name = "VAN_H8", nullable = true, precision = 0)
    private Double vanH8;
    @Basic
    @Column(name = "VAN_H9", nullable = true, precision = 0)
    private Double vanH9;
    @Basic
    @Column(name = "VAN_H10", nullable = true, precision = 0)
    private Double vanH10;
    @Basic
    @Column(name = "VAN_H11", nullable = true, precision = 0)
    private Double vanH11;
    @Basic
    @Column(name = "VAN_H12", nullable = true, precision = 0)
    private Double vanH12;
    @Basic
    @Column(name = "VAN_H13", nullable = true, precision = 0)
    private Double vanH13;
    @Basic
    @Column(name = "VAN_H14", nullable = true, precision = 0)
    private Double vanH14;
    @Basic
    @Column(name = "VAN_H15", nullable = true, precision = 0)
    private Double vanH15;
    @Basic
    @Column(name = "VAN_H16", nullable = true, precision = 0)
    private Double vanH16;
    @Basic
    @Column(name = "VAN_H17", nullable = true, precision = 0)
    private Double vanH17;
    @Basic
    @Column(name = "VAN_H18", nullable = true, precision = 0)
    private Double vanH18;
    @Basic
    @Column(name = "VAN_H19", nullable = true, precision = 0)
    private Double vanH19;
    @Basic
    @Column(name = "VAN_H20", nullable = true, precision = 0)
    private Double vanH20;
    @Basic
    @Column(name = "VAN_H21", nullable = true, precision = 0)
    private Double vanH21;
    @Basic
    @Column(name = "VAN_H22", nullable = true, precision = 0)
    private Double vanH22;
    @Basic
    @Column(name = "VAN_H23", nullable = true, precision = 0)
    private Double vanH23;
    @Basic
    @Column(name = "VAN_H24", nullable = true, precision = 0)
    private Double vanH24;
    @Basic
    @Column(name = "VAN_H25", nullable = true, precision = 0)
    private Double vanH25;
    @Basic
    @Column(name = "VAN_H26", nullable = true, precision = 0)
    private Double vanH26;
    @Basic
    @Column(name = "VAN_H27", nullable = true, precision = 0)
    private Double vanH27;
    @Basic
    @Column(name = "VAN_H28", nullable = true, precision = 0)
    private Double vanH28;
    @Basic
    @Column(name = "VAN_H29", nullable = true, precision = 0)
    private Double vanH29;
    @Basic
    @Column(name = "VAN_H30", nullable = true, precision = 0)
    private Double vanH30;
    @Basic
    @Column(name = "VAN_H31", nullable = true, precision = 0)
    private Double vanH31;
    @Basic
    @Column(name = "VBN_H1", nullable = true, precision = 0)
    private Double vbnH1;
    @Basic
    @Column(name = "VBN_H2", nullable = true, precision = 0)
    private Double vbnH2;
    @Basic
    @Column(name = "VBN_H3", nullable = true, precision = 0)
    private Double vbnH3;
    @Basic
    @Column(name = "VBN_H4", nullable = true, precision = 0)
    private Double vbnH4;
    @Basic
    @Column(name = "VBN_H5", nullable = true, precision = 0)
    private Double vbnH5;
    @Basic
    @Column(name = "VBN_H6", nullable = true, precision = 0)
    private Double vbnH6;
    @Basic
    @Column(name = "VBN_H7", nullable = true, precision = 0)
    private Double vbnH7;
    @Basic
    @Column(name = "VBN_H8", nullable = true, precision = 0)
    private Double vbnH8;
    @Basic
    @Column(name = "VBN_H9", nullable = true, precision = 0)
    private Double vbnH9;
    @Basic
    @Column(name = "VBN_H10", nullable = true, precision = 0)
    private Double vbnH10;
    @Basic
    @Column(name = "VBN_H11", nullable = true, precision = 0)
    private Double vbnH11;
    @Basic
    @Column(name = "VBN_H12", nullable = true, precision = 0)
    private Double vbnH12;
    @Basic
    @Column(name = "VBN_H13", nullable = true, precision = 0)
    private Double vbnH13;
    @Basic
    @Column(name = "VBN_H14", nullable = true, precision = 0)
    private Double vbnH14;
    @Basic
    @Column(name = "VBN_H15", nullable = true, precision = 0)
    private Double vbnH15;
    @Basic
    @Column(name = "VBN_H16", nullable = true, precision = 0)
    private Double vbnH16;
    @Basic
    @Column(name = "VBN_H17", nullable = true, precision = 0)
    private Double vbnH17;
    @Basic
    @Column(name = "VBN_H18", nullable = true, precision = 0)
    private Double vbnH18;
    @Basic
    @Column(name = "VBN_H19", nullable = true, precision = 0)
    private Double vbnH19;
    @Basic
    @Column(name = "VBN_H20", nullable = true, precision = 0)
    private Double vbnH20;
    @Basic
    @Column(name = "VBN_H21", nullable = true, precision = 0)
    private Double vbnH21;
    @Basic
    @Column(name = "VBN_H22", nullable = true, precision = 0)
    private Double vbnH22;
    @Basic
    @Column(name = "VBN_H23", nullable = true, precision = 0)
    private Double vbnH23;
    @Basic
    @Column(name = "VBN_H24", nullable = true, precision = 0)
    private Double vbnH24;
    @Basic
    @Column(name = "VBN_H25", nullable = true, precision = 0)
    private Double vbnH25;
    @Basic
    @Column(name = "VBN_H26", nullable = true, precision = 0)
    private Double vbnH26;
    @Basic
    @Column(name = "VBN_H27", nullable = true, precision = 0)
    private Double vbnH27;
    @Basic
    @Column(name = "VBN_H28", nullable = true, precision = 0)
    private Double vbnH28;
    @Basic
    @Column(name = "VBN_H29", nullable = true, precision = 0)
    private Double vbnH29;
    @Basic
    @Column(name = "VBN_H30", nullable = true, precision = 0)
    private Double vbnH30;
    @Basic
    @Column(name = "VBN_H31", nullable = true, precision = 0)
    private Double vbnH31;
    @Basic
    @Column(name = "VCN_H1", nullable = true, precision = 0)
    private Double vcnH1;
    @Basic
    @Column(name = "VCN_H2", nullable = true, precision = 0)
    private Double vcnH2;
    @Basic
    @Column(name = "VCN_H3", nullable = true, precision = 0)
    private Double vcnH3;
    @Basic
    @Column(name = "VCN_H4", nullable = true, precision = 0)
    private Double vcnH4;
    @Basic
    @Column(name = "VCN_H5", nullable = true, precision = 0)
    private Double vcnH5;
    @Basic
    @Column(name = "VCN_H6", nullable = true, precision = 0)
    private Double vcnH6;
    @Basic
    @Column(name = "VCN_H7", nullable = true, precision = 0)
    private Double vcnH7;
    @Basic
    @Column(name = "VCN_H8", nullable = true, precision = 0)
    private Double vcnH8;
    @Basic
    @Column(name = "VCN_H9", nullable = true, precision = 0)
    private Double vcnH9;
    @Basic
    @Column(name = "VCN_H10", nullable = true, precision = 0)
    private Double vcnH10;
    @Basic
    @Column(name = "VCN_H11", nullable = true, precision = 0)
    private Double vcnH11;
    @Basic
    @Column(name = "VCN_H12", nullable = true, precision = 0)
    private Double vcnH12;
    @Basic
    @Column(name = "VCN_H13", nullable = true, precision = 0)
    private Double vcnH13;
    @Basic
    @Column(name = "VCN_H14", nullable = true, precision = 0)
    private Double vcnH14;
    @Basic
    @Column(name = "VCN_H15", nullable = true, precision = 0)
    private Double vcnH15;
    @Basic
    @Column(name = "VCN_H16", nullable = true, precision = 0)
    private Double vcnH16;
    @Basic
    @Column(name = "VCN_H17", nullable = true, precision = 0)
    private Double vcnH17;
    @Basic
    @Column(name = "VCN_H18", nullable = true, precision = 0)
    private Double vcnH18;
    @Basic
    @Column(name = "VCN_H19", nullable = true, precision = 0)
    private Double vcnH19;
    @Basic
    @Column(name = "VCN_H20", nullable = true, precision = 0)
    private Double vcnH20;
    @Basic
    @Column(name = "VCN_H21", nullable = true, precision = 0)
    private Double vcnH21;
    @Basic
    @Column(name = "VCN_H22", nullable = true, precision = 0)
    private Double vcnH22;
    @Basic
    @Column(name = "VCN_H23", nullable = true, precision = 0)
    private Double vcnH23;
    @Basic
    @Column(name = "VCN_H24", nullable = true, precision = 0)
    private Double vcnH24;
    @Basic
    @Column(name = "VCN_H25", nullable = true, precision = 0)
    private Double vcnH25;
    @Basic
    @Column(name = "VCN_H26", nullable = true, precision = 0)
    private Double vcnH26;
    @Basic
    @Column(name = "VCN_H27", nullable = true, precision = 0)
    private Double vcnH27;
    @Basic
    @Column(name = "VCN_H28", nullable = true, precision = 0)
    private Double vcnH28;
    @Basic
    @Column(name = "VCN_H29", nullable = true, precision = 0)
    private Double vcnH29;
    @Basic
    @Column(name = "VCN_H30", nullable = true, precision = 0)
    private Double vcnH30;
    @Basic
    @Column(name = "VCN_H31", nullable = true, precision = 0)
    private Double vcnH31;
    @Basic
    @Column(name = "sent_date", nullable = true)
    private Timestamp sentDate;

    @Column(name = "device_id", nullable = true)
    private Integer deviceId;

	public S3MDataLoadFrame22023EntityPK getId() {
		return id;
	}

	public void setId(S3MDataLoadFrame22023EntityPK id) {
		this.id = id;
	}

	public Double getIaH1() {
		return iaH1;
	}

	public void setIaH1(Double iaH1) {
		this.iaH1 = iaH1;
	}

	public Double getIaH2() {
		return iaH2;
	}

	public void setIaH2(Double iaH2) {
		this.iaH2 = iaH2;
	}

	public Double getIaH3() {
		return iaH3;
	}

	public void setIaH3(Double iaH3) {
		this.iaH3 = iaH3;
	}

	public Double getIaH4() {
		return iaH4;
	}

	public void setIaH4(Double iaH4) {
		this.iaH4 = iaH4;
	}

	public Double getIaH5() {
		return iaH5;
	}

	public void setIaH5(Double iaH5) {
		this.iaH5 = iaH5;
	}

	public Double getIaH6() {
		return iaH6;
	}

	public void setIaH6(Double iaH6) {
		this.iaH6 = iaH6;
	}

	public Double getIaH7() {
		return iaH7;
	}

	public void setIaH7(Double iaH7) {
		this.iaH7 = iaH7;
	}

	public Double getIaH8() {
		return iaH8;
	}

	public void setIaH8(Double iaH8) {
		this.iaH8 = iaH8;
	}

	public Double getIaH9() {
		return iaH9;
	}

	public void setIaH9(Double iaH9) {
		this.iaH9 = iaH9;
	}

	public Double getIaH10() {
		return iaH10;
	}

	public void setIaH10(Double iaH10) {
		this.iaH10 = iaH10;
	}

	public Double getIaH11() {
		return iaH11;
	}

	public void setIaH11(Double iaH11) {
		this.iaH11 = iaH11;
	}

	public Double getIaH12() {
		return iaH12;
	}

	public void setIaH12(Double iaH12) {
		this.iaH12 = iaH12;
	}

	public Double getIaH13() {
		return iaH13;
	}

	public void setIaH13(Double iaH13) {
		this.iaH13 = iaH13;
	}

	public Double getIaH14() {
		return iaH14;
	}

	public void setIaH14(Double iaH14) {
		this.iaH14 = iaH14;
	}

	public Double getIaH15() {
		return iaH15;
	}

	public void setIaH15(Double iaH15) {
		this.iaH15 = iaH15;
	}

	public Double getIaH16() {
		return iaH16;
	}

	public void setIaH16(Double iaH16) {
		this.iaH16 = iaH16;
	}

	public Double getIaH17() {
		return iaH17;
	}

	public void setIaH17(Double iaH17) {
		this.iaH17 = iaH17;
	}

	public Double getIaH18() {
		return iaH18;
	}

	public void setIaH18(Double iaH18) {
		this.iaH18 = iaH18;
	}

	public Double getIaH19() {
		return iaH19;
	}

	public void setIaH19(Double iaH19) {
		this.iaH19 = iaH19;
	}

	public Double getIaH20() {
		return iaH20;
	}

	public void setIaH20(Double iaH20) {
		this.iaH20 = iaH20;
	}

	public Double getIaH21() {
		return iaH21;
	}

	public void setIaH21(Double iaH21) {
		this.iaH21 = iaH21;
	}

	public Double getIaH22() {
		return iaH22;
	}

	public void setIaH22(Double iaH22) {
		this.iaH22 = iaH22;
	}

	public Double getIaH23() {
		return iaH23;
	}

	public void setIaH23(Double iaH23) {
		this.iaH23 = iaH23;
	}

	public Double getIaH24() {
		return iaH24;
	}

	public void setIaH24(Double iaH24) {
		this.iaH24 = iaH24;
	}

	public Double getIaH25() {
		return iaH25;
	}

	public void setIaH25(Double iaH25) {
		this.iaH25 = iaH25;
	}

	public Double getIaH26() {
		return iaH26;
	}

	public void setIaH26(Double iaH26) {
		this.iaH26 = iaH26;
	}

	public Double getIaH27() {
		return iaH27;
	}

	public void setIaH27(Double iaH27) {
		this.iaH27 = iaH27;
	}

	public Double getIaH28() {
		return iaH28;
	}

	public void setIaH28(Double iaH28) {
		this.iaH28 = iaH28;
	}

	public Double getIaH29() {
		return iaH29;
	}

	public void setIaH29(Double iaH29) {
		this.iaH29 = iaH29;
	}

	public Double getIaH30() {
		return iaH30;
	}

	public void setIaH30(Double iaH30) {
		this.iaH30 = iaH30;
	}

	public Double getIaH31() {
		return iaH31;
	}

	public void setIaH31(Double iaH31) {
		this.iaH31 = iaH31;
	}

	public Double getIbH1() {
		return ibH1;
	}

	public void setIbH1(Double ibH1) {
		this.ibH1 = ibH1;
	}

	public Double getIbH2() {
		return ibH2;
	}

	public void setIbH2(Double ibH2) {
		this.ibH2 = ibH2;
	}

	public Double getIbH3() {
		return ibH3;
	}

	public void setIbH3(Double ibH3) {
		this.ibH3 = ibH3;
	}

	public Double getIbH4() {
		return ibH4;
	}

	public void setIbH4(Double ibH4) {
		this.ibH4 = ibH4;
	}

	public Double getIbH5() {
		return ibH5;
	}

	public void setIbH5(Double ibH5) {
		this.ibH5 = ibH5;
	}

	public Double getIbH6() {
		return ibH6;
	}

	public void setIbH6(Double ibH6) {
		this.ibH6 = ibH6;
	}

	public Double getIbH7() {
		return ibH7;
	}

	public void setIbH7(Double ibH7) {
		this.ibH7 = ibH7;
	}

	public Double getIbH8() {
		return ibH8;
	}

	public void setIbH8(Double ibH8) {
		this.ibH8 = ibH8;
	}

	public Double getIbH9() {
		return ibH9;
	}

	public void setIbH9(Double ibH9) {
		this.ibH9 = ibH9;
	}

	public Double getIbH10() {
		return ibH10;
	}

	public void setIbH10(Double ibH10) {
		this.ibH10 = ibH10;
	}

	public Double getIbH11() {
		return ibH11;
	}

	public void setIbH11(Double ibH11) {
		this.ibH11 = ibH11;
	}

	public Double getIbH12() {
		return ibH12;
	}

	public void setIbH12(Double ibH12) {
		this.ibH12 = ibH12;
	}

	public Double getIbH13() {
		return ibH13;
	}

	public void setIbH13(Double ibH13) {
		this.ibH13 = ibH13;
	}

	public Double getIbH14() {
		return ibH14;
	}

	public void setIbH14(Double ibH14) {
		this.ibH14 = ibH14;
	}

	public Double getIbH15() {
		return ibH15;
	}

	public void setIbH15(Double ibH15) {
		this.ibH15 = ibH15;
	}

	public Double getIbH16() {
		return ibH16;
	}

	public void setIbH16(Double ibH16) {
		this.ibH16 = ibH16;
	}

	public Double getIbH17() {
		return ibH17;
	}

	public void setIbH17(Double ibH17) {
		this.ibH17 = ibH17;
	}

	public Double getIbH18() {
		return ibH18;
	}

	public void setIbH18(Double ibH18) {
		this.ibH18 = ibH18;
	}

	public Double getIbH19() {
		return ibH19;
	}

	public void setIbH19(Double ibH19) {
		this.ibH19 = ibH19;
	}

	public Double getIbH20() {
		return ibH20;
	}

	public void setIbH20(Double ibH20) {
		this.ibH20 = ibH20;
	}

	public Double getIbH21() {
		return ibH21;
	}

	public void setIbH21(Double ibH21) {
		this.ibH21 = ibH21;
	}

	public Double getIbH22() {
		return ibH22;
	}

	public void setIbH22(Double ibH22) {
		this.ibH22 = ibH22;
	}

	public Double getIbH23() {
		return ibH23;
	}

	public void setIbH23(Double ibH23) {
		this.ibH23 = ibH23;
	}

	public Double getIbH24() {
		return ibH24;
	}

	public void setIbH24(Double ibH24) {
		this.ibH24 = ibH24;
	}

	public Double getIbH25() {
		return ibH25;
	}

	public void setIbH25(Double ibH25) {
		this.ibH25 = ibH25;
	}

	public Double getIbH26() {
		return ibH26;
	}

	public void setIbH26(Double ibH26) {
		this.ibH26 = ibH26;
	}

	public Double getIbH27() {
		return ibH27;
	}

	public void setIbH27(Double ibH27) {
		this.ibH27 = ibH27;
	}

	public Double getIbH28() {
		return ibH28;
	}

	public void setIbH28(Double ibH28) {
		this.ibH28 = ibH28;
	}

	public Double getIbH29() {
		return ibH29;
	}

	public void setIbH29(Double ibH29) {
		this.ibH29 = ibH29;
	}

	public Double getIbH30() {
		return ibH30;
	}

	public void setIbH30(Double ibH30) {
		this.ibH30 = ibH30;
	}

	public Double getIbH31() {
		return ibH31;
	}

	public void setIbH31(Double ibH31) {
		this.ibH31 = ibH31;
	}

	public Double getIcH1() {
		return icH1;
	}

	public void setIcH1(Double icH1) {
		this.icH1 = icH1;
	}

	public Double getIcH2() {
		return icH2;
	}

	public void setIcH2(Double icH2) {
		this.icH2 = icH2;
	}

	public Double getIcH3() {
		return icH3;
	}

	public void setIcH3(Double icH3) {
		this.icH3 = icH3;
	}

	public Double getIcH4() {
		return icH4;
	}

	public void setIcH4(Double icH4) {
		this.icH4 = icH4;
	}

	public Double getIcH5() {
		return icH5;
	}

	public void setIcH5(Double icH5) {
		this.icH5 = icH5;
	}

	public Double getIcH6() {
		return icH6;
	}

	public void setIcH6(Double icH6) {
		this.icH6 = icH6;
	}

	public Double getIcH7() {
		return icH7;
	}

	public void setIcH7(Double icH7) {
		this.icH7 = icH7;
	}

	public Double getIcH8() {
		return icH8;
	}

	public void setIcH8(Double icH8) {
		this.icH8 = icH8;
	}

	public Double getIcH9() {
		return icH9;
	}

	public void setIcH9(Double icH9) {
		this.icH9 = icH9;
	}

	public Double getIcH10() {
		return icH10;
	}

	public void setIcH10(Double icH10) {
		this.icH10 = icH10;
	}

	public Double getIcH11() {
		return icH11;
	}

	public void setIcH11(Double icH11) {
		this.icH11 = icH11;
	}

	public Double getIcH12() {
		return icH12;
	}

	public void setIcH12(Double icH12) {
		this.icH12 = icH12;
	}

	public Double getIcH13() {
		return icH13;
	}

	public void setIcH13(Double icH13) {
		this.icH13 = icH13;
	}

	public Double getIcH14() {
		return icH14;
	}

	public void setIcH14(Double icH14) {
		this.icH14 = icH14;
	}

	public Double getIcH15() {
		return icH15;
	}

	public void setIcH15(Double icH15) {
		this.icH15 = icH15;
	}

	public Double getIcH16() {
		return icH16;
	}

	public void setIcH16(Double icH16) {
		this.icH16 = icH16;
	}

	public Double getIcH17() {
		return icH17;
	}

	public void setIcH17(Double icH17) {
		this.icH17 = icH17;
	}

	public Double getIcH18() {
		return icH18;
	}

	public void setIcH18(Double icH18) {
		this.icH18 = icH18;
	}

	public Double getIcH19() {
		return icH19;
	}

	public void setIcH19(Double icH19) {
		this.icH19 = icH19;
	}

	public Double getIcH20() {
		return icH20;
	}

	public void setIcH20(Double icH20) {
		this.icH20 = icH20;
	}

	public Double getIcH21() {
		return icH21;
	}

	public void setIcH21(Double icH21) {
		this.icH21 = icH21;
	}

	public Double getIcH22() {
		return icH22;
	}

	public void setIcH22(Double icH22) {
		this.icH22 = icH22;
	}

	public Double getIcH23() {
		return icH23;
	}

	public void setIcH23(Double icH23) {
		this.icH23 = icH23;
	}

	public Double getIcH24() {
		return icH24;
	}

	public void setIcH24(Double icH24) {
		this.icH24 = icH24;
	}

	public Double getIcH25() {
		return icH25;
	}

	public void setIcH25(Double icH25) {
		this.icH25 = icH25;
	}

	public Double getIcH26() {
		return icH26;
	}

	public void setIcH26(Double icH26) {
		this.icH26 = icH26;
	}

	public Double getIcH27() {
		return icH27;
	}

	public void setIcH27(Double icH27) {
		this.icH27 = icH27;
	}

	public Double getIcH28() {
		return icH28;
	}

	public void setIcH28(Double icH28) {
		this.icH28 = icH28;
	}

	public Double getIcH29() {
		return icH29;
	}

	public void setIcH29(Double icH29) {
		this.icH29 = icH29;
	}

	public Double getIcH30() {
		return icH30;
	}

	public void setIcH30(Double icH30) {
		this.icH30 = icH30;
	}

	public Double getIcH31() {
		return icH31;
	}

	public void setIcH31(Double icH31) {
		this.icH31 = icH31;
	}

	public Double getVabH1() {
		return vabH1;
	}

	public void setVabH1(Double vabH1) {
		this.vabH1 = vabH1;
	}

	public Double getVabH2() {
		return vabH2;
	}

	public void setVabH2(Double vabH2) {
		this.vabH2 = vabH2;
	}

	public Double getVabH3() {
		return vabH3;
	}

	public void setVabH3(Double vabH3) {
		this.vabH3 = vabH3;
	}

	public Double getVabH4() {
		return vabH4;
	}

	public void setVabH4(Double vabH4) {
		this.vabH4 = vabH4;
	}

	public Double getVabH5() {
		return vabH5;
	}

	public void setVabH5(Double vabH5) {
		this.vabH5 = vabH5;
	}

	public Double getVabH6() {
		return vabH6;
	}

	public void setVabH6(Double vabH6) {
		this.vabH6 = vabH6;
	}

	public Double getVabH7() {
		return vabH7;
	}

	public void setVabH7(Double vabH7) {
		this.vabH7 = vabH7;
	}

	public Double getVabH8() {
		return vabH8;
	}

	public void setVabH8(Double vabH8) {
		this.vabH8 = vabH8;
	}

	public Double getVabH9() {
		return vabH9;
	}

	public void setVabH9(Double vabH9) {
		this.vabH9 = vabH9;
	}

	public Double getVabH10() {
		return vabH10;
	}

	public void setVabH10(Double vabH10) {
		this.vabH10 = vabH10;
	}

	public Double getVabH11() {
		return vabH11;
	}

	public void setVabH11(Double vabH11) {
		this.vabH11 = vabH11;
	}

	public Double getVabH12() {
		return vabH12;
	}

	public void setVabH12(Double vabH12) {
		this.vabH12 = vabH12;
	}

	public Double getVabH13() {
		return vabH13;
	}

	public void setVabH13(Double vabH13) {
		this.vabH13 = vabH13;
	}

	public Double getVabH14() {
		return vabH14;
	}

	public void setVabH14(Double vabH14) {
		this.vabH14 = vabH14;
	}

	public Double getVabH15() {
		return vabH15;
	}

	public void setVabH15(Double vabH15) {
		this.vabH15 = vabH15;
	}

	public Double getVabH16() {
		return vabH16;
	}

	public void setVabH16(Double vabH16) {
		this.vabH16 = vabH16;
	}

	public Double getVabH17() {
		return vabH17;
	}

	public void setVabH17(Double vabH17) {
		this.vabH17 = vabH17;
	}

	public Double getVabH18() {
		return vabH18;
	}

	public void setVabH18(Double vabH18) {
		this.vabH18 = vabH18;
	}

	public Double getVabH19() {
		return vabH19;
	}

	public void setVabH19(Double vabH19) {
		this.vabH19 = vabH19;
	}

	public Double getVabH20() {
		return vabH20;
	}

	public void setVabH20(Double vabH20) {
		this.vabH20 = vabH20;
	}

	public Double getVabH21() {
		return vabH21;
	}

	public void setVabH21(Double vabH21) {
		this.vabH21 = vabH21;
	}

	public Double getVabH22() {
		return vabH22;
	}

	public void setVabH22(Double vabH22) {
		this.vabH22 = vabH22;
	}

	public Double getVabH23() {
		return vabH23;
	}

	public void setVabH23(Double vabH23) {
		this.vabH23 = vabH23;
	}

	public Double getVabH24() {
		return vabH24;
	}

	public void setVabH24(Double vabH24) {
		this.vabH24 = vabH24;
	}

	public Double getVabH25() {
		return vabH25;
	}

	public void setVabH25(Double vabH25) {
		this.vabH25 = vabH25;
	}

	public Double getVabH26() {
		return vabH26;
	}

	public void setVabH26(Double vabH26) {
		this.vabH26 = vabH26;
	}

	public Double getVabH27() {
		return vabH27;
	}

	public void setVabH27(Double vabH27) {
		this.vabH27 = vabH27;
	}

	public Double getVabH28() {
		return vabH28;
	}

	public void setVabH28(Double vabH28) {
		this.vabH28 = vabH28;
	}

	public Double getVabH29() {
		return vabH29;
	}

	public void setVabH29(Double vabH29) {
		this.vabH29 = vabH29;
	}

	public Double getVabH30() {
		return vabH30;
	}

	public void setVabH30(Double vabH30) {
		this.vabH30 = vabH30;
	}

	public Double getVabH31() {
		return vabH31;
	}

	public void setVabH31(Double vabH31) {
		this.vabH31 = vabH31;
	}

	public Double getVbcH1() {
		return vbcH1;
	}

	public void setVbcH1(Double vbcH1) {
		this.vbcH1 = vbcH1;
	}

	public Double getVbcH2() {
		return vbcH2;
	}

	public void setVbcH2(Double vbcH2) {
		this.vbcH2 = vbcH2;
	}

	public Double getVbcH3() {
		return vbcH3;
	}

	public void setVbcH3(Double vbcH3) {
		this.vbcH3 = vbcH3;
	}

	public Double getVbcH4() {
		return vbcH4;
	}

	public void setVbcH4(Double vbcH4) {
		this.vbcH4 = vbcH4;
	}

	public Double getVbcH5() {
		return vbcH5;
	}

	public void setVbcH5(Double vbcH5) {
		this.vbcH5 = vbcH5;
	}

	public Double getVbcH6() {
		return vbcH6;
	}

	public void setVbcH6(Double vbcH6) {
		this.vbcH6 = vbcH6;
	}

	public Double getVbcH7() {
		return vbcH7;
	}

	public void setVbcH7(Double vbcH7) {
		this.vbcH7 = vbcH7;
	}

	public Double getVbcH8() {
		return vbcH8;
	}

	public void setVbcH8(Double vbcH8) {
		this.vbcH8 = vbcH8;
	}

	public Double getVbcH9() {
		return vbcH9;
	}

	public void setVbcH9(Double vbcH9) {
		this.vbcH9 = vbcH9;
	}

	public Double getVbcH10() {
		return vbcH10;
	}

	public void setVbcH10(Double vbcH10) {
		this.vbcH10 = vbcH10;
	}

	public Double getVbcH11() {
		return vbcH11;
	}

	public void setVbcH11(Double vbcH11) {
		this.vbcH11 = vbcH11;
	}

	public Double getVbcH12() {
		return vbcH12;
	}

	public void setVbcH12(Double vbcH12) {
		this.vbcH12 = vbcH12;
	}

	public Double getVbcH13() {
		return vbcH13;
	}

	public void setVbcH13(Double vbcH13) {
		this.vbcH13 = vbcH13;
	}

	public Double getVbcH14() {
		return vbcH14;
	}

	public void setVbcH14(Double vbcH14) {
		this.vbcH14 = vbcH14;
	}

	public Double getVbcH15() {
		return vbcH15;
	}

	public void setVbcH15(Double vbcH15) {
		this.vbcH15 = vbcH15;
	}

	public Double getVbcH16() {
		return vbcH16;
	}

	public void setVbcH16(Double vbcH16) {
		this.vbcH16 = vbcH16;
	}

	public Double getVbcH17() {
		return vbcH17;
	}

	public void setVbcH17(Double vbcH17) {
		this.vbcH17 = vbcH17;
	}

	public Double getVbcH18() {
		return vbcH18;
	}

	public void setVbcH18(Double vbcH18) {
		this.vbcH18 = vbcH18;
	}

	public Double getVbcH19() {
		return vbcH19;
	}

	public void setVbcH19(Double vbcH19) {
		this.vbcH19 = vbcH19;
	}

	public Double getVbcH20() {
		return vbcH20;
	}

	public void setVbcH20(Double vbcH20) {
		this.vbcH20 = vbcH20;
	}

	public Double getVbcH21() {
		return vbcH21;
	}

	public void setVbcH21(Double vbcH21) {
		this.vbcH21 = vbcH21;
	}

	public Double getVbcH22() {
		return vbcH22;
	}

	public void setVbcH22(Double vbcH22) {
		this.vbcH22 = vbcH22;
	}

	public Double getVbcH23() {
		return vbcH23;
	}

	public void setVbcH23(Double vbcH23) {
		this.vbcH23 = vbcH23;
	}

	public Double getVbcH24() {
		return vbcH24;
	}

	public void setVbcH24(Double vbcH24) {
		this.vbcH24 = vbcH24;
	}

	public Double getVbcH25() {
		return vbcH25;
	}

	public void setVbcH25(Double vbcH25) {
		this.vbcH25 = vbcH25;
	}

	public Double getVbcH26() {
		return vbcH26;
	}

	public void setVbcH26(Double vbcH26) {
		this.vbcH26 = vbcH26;
	}

	public Double getVbcH27() {
		return vbcH27;
	}

	public void setVbcH27(Double vbcH27) {
		this.vbcH27 = vbcH27;
	}

	public Double getVbcH28() {
		return vbcH28;
	}

	public void setVbcH28(Double vbcH28) {
		this.vbcH28 = vbcH28;
	}

	public Double getVbcH29() {
		return vbcH29;
	}

	public void setVbcH29(Double vbcH29) {
		this.vbcH29 = vbcH29;
	}

	public Double getVbcH30() {
		return vbcH30;
	}

	public void setVbcH30(Double vbcH30) {
		this.vbcH30 = vbcH30;
	}

	public Double getVbcH31() {
		return vbcH31;
	}

	public void setVbcH31(Double vbcH31) {
		this.vbcH31 = vbcH31;
	}

	public Double getVcaH1() {
		return vcaH1;
	}

	public void setVcaH1(Double vcaH1) {
		this.vcaH1 = vcaH1;
	}

	public Double getVcaH2() {
		return vcaH2;
	}

	public void setVcaH2(Double vcaH2) {
		this.vcaH2 = vcaH2;
	}

	public Double getVcaH3() {
		return vcaH3;
	}

	public void setVcaH3(Double vcaH3) {
		this.vcaH3 = vcaH3;
	}

	public Double getVcaH4() {
		return vcaH4;
	}

	public void setVcaH4(Double vcaH4) {
		this.vcaH4 = vcaH4;
	}

	public Double getVcaH5() {
		return vcaH5;
	}

	public void setVcaH5(Double vcaH5) {
		this.vcaH5 = vcaH5;
	}

	public Double getVcaH6() {
		return vcaH6;
	}

	public void setVcaH6(Double vcaH6) {
		this.vcaH6 = vcaH6;
	}

	public Double getVcaH7() {
		return vcaH7;
	}

	public void setVcaH7(Double vcaH7) {
		this.vcaH7 = vcaH7;
	}

	public Double getVcaH8() {
		return vcaH8;
	}

	public void setVcaH8(Double vcaH8) {
		this.vcaH8 = vcaH8;
	}

	public Double getVcaH9() {
		return vcaH9;
	}

	public void setVcaH9(Double vcaH9) {
		this.vcaH9 = vcaH9;
	}

	public Double getVcaH10() {
		return vcaH10;
	}

	public void setVcaH10(Double vcaH10) {
		this.vcaH10 = vcaH10;
	}

	public Double getVcaH11() {
		return vcaH11;
	}

	public void setVcaH11(Double vcaH11) {
		this.vcaH11 = vcaH11;
	}

	public Double getVcaH12() {
		return vcaH12;
	}

	public void setVcaH12(Double vcaH12) {
		this.vcaH12 = vcaH12;
	}

	public Double getVcaH13() {
		return vcaH13;
	}

	public void setVcaH13(Double vcaH13) {
		this.vcaH13 = vcaH13;
	}

	public Double getVcaH14() {
		return vcaH14;
	}

	public void setVcaH14(Double vcaH14) {
		this.vcaH14 = vcaH14;
	}

	public Double getVcaH15() {
		return vcaH15;
	}

	public void setVcaH15(Double vcaH15) {
		this.vcaH15 = vcaH15;
	}

	public Double getVcaH16() {
		return vcaH16;
	}

	public void setVcaH16(Double vcaH16) {
		this.vcaH16 = vcaH16;
	}

	public Double getVcaH17() {
		return vcaH17;
	}

	public void setVcaH17(Double vcaH17) {
		this.vcaH17 = vcaH17;
	}

	public Double getVcaH18() {
		return vcaH18;
	}

	public void setVcaH18(Double vcaH18) {
		this.vcaH18 = vcaH18;
	}

	public Double getVcaH19() {
		return vcaH19;
	}

	public void setVcaH19(Double vcaH19) {
		this.vcaH19 = vcaH19;
	}

	public Double getVcaH20() {
		return vcaH20;
	}

	public void setVcaH20(Double vcaH20) {
		this.vcaH20 = vcaH20;
	}

	public Double getVcaH21() {
		return vcaH21;
	}

	public void setVcaH21(Double vcaH21) {
		this.vcaH21 = vcaH21;
	}

	public Double getVcaH22() {
		return vcaH22;
	}

	public void setVcaH22(Double vcaH22) {
		this.vcaH22 = vcaH22;
	}

	public Double getVcaH23() {
		return vcaH23;
	}

	public void setVcaH23(Double vcaH23) {
		this.vcaH23 = vcaH23;
	}

	public Double getVcaH24() {
		return vcaH24;
	}

	public void setVcaH24(Double vcaH24) {
		this.vcaH24 = vcaH24;
	}

	public Double getVcaH25() {
		return vcaH25;
	}

	public void setVcaH25(Double vcaH25) {
		this.vcaH25 = vcaH25;
	}

	public Double getVcaH26() {
		return vcaH26;
	}

	public void setVcaH26(Double vcaH26) {
		this.vcaH26 = vcaH26;
	}

	public Double getVcaH27() {
		return vcaH27;
	}

	public void setVcaH27(Double vcaH27) {
		this.vcaH27 = vcaH27;
	}

	public Double getVcaH28() {
		return vcaH28;
	}

	public void setVcaH28(Double vcaH28) {
		this.vcaH28 = vcaH28;
	}

	public Double getVcaH29() {
		return vcaH29;
	}

	public void setVcaH29(Double vcaH29) {
		this.vcaH29 = vcaH29;
	}

	public Double getVcaH30() {
		return vcaH30;
	}

	public void setVcaH30(Double vcaH30) {
		this.vcaH30 = vcaH30;
	}

	public Double getVcaH31() {
		return vcaH31;
	}

	public void setVcaH31(Double vcaH31) {
		this.vcaH31 = vcaH31;
	}

	public Double getVanH1() {
		return vanH1;
	}

	public void setVanH1(Double vanH1) {
		this.vanH1 = vanH1;
	}

	public Double getVanH2() {
		return vanH2;
	}

	public void setVanH2(Double vanH2) {
		this.vanH2 = vanH2;
	}

	public Double getVanH3() {
		return vanH3;
	}

	public void setVanH3(Double vanH3) {
		this.vanH3 = vanH3;
	}

	public Double getVanH4() {
		return vanH4;
	}

	public void setVanH4(Double vanH4) {
		this.vanH4 = vanH4;
	}

	public Double getVanH5() {
		return vanH5;
	}

	public void setVanH5(Double vanH5) {
		this.vanH5 = vanH5;
	}

	public Double getVanH6() {
		return vanH6;
	}

	public void setVanH6(Double vanH6) {
		this.vanH6 = vanH6;
	}

	public Double getVanH7() {
		return vanH7;
	}

	public void setVanH7(Double vanH7) {
		this.vanH7 = vanH7;
	}

	public Double getVanH8() {
		return vanH8;
	}

	public void setVanH8(Double vanH8) {
		this.vanH8 = vanH8;
	}

	public Double getVanH9() {
		return vanH9;
	}

	public void setVanH9(Double vanH9) {
		this.vanH9 = vanH9;
	}

	public Double getVanH10() {
		return vanH10;
	}

	public void setVanH10(Double vanH10) {
		this.vanH10 = vanH10;
	}

	public Double getVanH11() {
		return vanH11;
	}

	public void setVanH11(Double vanH11) {
		this.vanH11 = vanH11;
	}

	public Double getVanH12() {
		return vanH12;
	}

	public void setVanH12(Double vanH12) {
		this.vanH12 = vanH12;
	}

	public Double getVanH13() {
		return vanH13;
	}

	public void setVanH13(Double vanH13) {
		this.vanH13 = vanH13;
	}

	public Double getVanH14() {
		return vanH14;
	}

	public void setVanH14(Double vanH14) {
		this.vanH14 = vanH14;
	}

	public Double getVanH15() {
		return vanH15;
	}

	public void setVanH15(Double vanH15) {
		this.vanH15 = vanH15;
	}

	public Double getVanH16() {
		return vanH16;
	}

	public void setVanH16(Double vanH16) {
		this.vanH16 = vanH16;
	}

	public Double getVanH17() {
		return vanH17;
	}

	public void setVanH17(Double vanH17) {
		this.vanH17 = vanH17;
	}

	public Double getVanH18() {
		return vanH18;
	}

	public void setVanH18(Double vanH18) {
		this.vanH18 = vanH18;
	}

	public Double getVanH19() {
		return vanH19;
	}

	public void setVanH19(Double vanH19) {
		this.vanH19 = vanH19;
	}

	public Double getVanH20() {
		return vanH20;
	}

	public void setVanH20(Double vanH20) {
		this.vanH20 = vanH20;
	}

	public Double getVanH21() {
		return vanH21;
	}

	public void setVanH21(Double vanH21) {
		this.vanH21 = vanH21;
	}

	public Double getVanH22() {
		return vanH22;
	}

	public void setVanH22(Double vanH22) {
		this.vanH22 = vanH22;
	}

	public Double getVanH23() {
		return vanH23;
	}

	public void setVanH23(Double vanH23) {
		this.vanH23 = vanH23;
	}

	public Double getVanH24() {
		return vanH24;
	}

	public void setVanH24(Double vanH24) {
		this.vanH24 = vanH24;
	}

	public Double getVanH25() {
		return vanH25;
	}

	public void setVanH25(Double vanH25) {
		this.vanH25 = vanH25;
	}

	public Double getVanH26() {
		return vanH26;
	}

	public void setVanH26(Double vanH26) {
		this.vanH26 = vanH26;
	}

	public Double getVanH27() {
		return vanH27;
	}

	public void setVanH27(Double vanH27) {
		this.vanH27 = vanH27;
	}

	public Double getVanH28() {
		return vanH28;
	}

	public void setVanH28(Double vanH28) {
		this.vanH28 = vanH28;
	}

	public Double getVanH29() {
		return vanH29;
	}

	public void setVanH29(Double vanH29) {
		this.vanH29 = vanH29;
	}

	public Double getVanH30() {
		return vanH30;
	}

	public void setVanH30(Double vanH30) {
		this.vanH30 = vanH30;
	}

	public Double getVanH31() {
		return vanH31;
	}

	public void setVanH31(Double vanH31) {
		this.vanH31 = vanH31;
	}

	public Double getVbnH1() {
		return vbnH1;
	}

	public void setVbnH1(Double vbnH1) {
		this.vbnH1 = vbnH1;
	}

	public Double getVbnH2() {
		return vbnH2;
	}

	public void setVbnH2(Double vbnH2) {
		this.vbnH2 = vbnH2;
	}

	public Double getVbnH3() {
		return vbnH3;
	}

	public void setVbnH3(Double vbnH3) {
		this.vbnH3 = vbnH3;
	}

	public Double getVbnH4() {
		return vbnH4;
	}

	public void setVbnH4(Double vbnH4) {
		this.vbnH4 = vbnH4;
	}

	public Double getVbnH5() {
		return vbnH5;
	}

	public void setVbnH5(Double vbnH5) {
		this.vbnH5 = vbnH5;
	}

	public Double getVbnH6() {
		return vbnH6;
	}

	public void setVbnH6(Double vbnH6) {
		this.vbnH6 = vbnH6;
	}

	public Double getVbnH7() {
		return vbnH7;
	}

	public void setVbnH7(Double vbnH7) {
		this.vbnH7 = vbnH7;
	}

	public Double getVbnH8() {
		return vbnH8;
	}

	public void setVbnH8(Double vbnH8) {
		this.vbnH8 = vbnH8;
	}

	public Double getVbnH9() {
		return vbnH9;
	}

	public void setVbnH9(Double vbnH9) {
		this.vbnH9 = vbnH9;
	}

	public Double getVbnH10() {
		return vbnH10;
	}

	public void setVbnH10(Double vbnH10) {
		this.vbnH10 = vbnH10;
	}

	public Double getVbnH11() {
		return vbnH11;
	}

	public void setVbnH11(Double vbnH11) {
		this.vbnH11 = vbnH11;
	}

	public Double getVbnH12() {
		return vbnH12;
	}

	public void setVbnH12(Double vbnH12) {
		this.vbnH12 = vbnH12;
	}

	public Double getVbnH13() {
		return vbnH13;
	}

	public void setVbnH13(Double vbnH13) {
		this.vbnH13 = vbnH13;
	}

	public Double getVbnH14() {
		return vbnH14;
	}

	public void setVbnH14(Double vbnH14) {
		this.vbnH14 = vbnH14;
	}

	public Double getVbnH15() {
		return vbnH15;
	}

	public void setVbnH15(Double vbnH15) {
		this.vbnH15 = vbnH15;
	}

	public Double getVbnH16() {
		return vbnH16;
	}

	public void setVbnH16(Double vbnH16) {
		this.vbnH16 = vbnH16;
	}

	public Double getVbnH17() {
		return vbnH17;
	}

	public void setVbnH17(Double vbnH17) {
		this.vbnH17 = vbnH17;
	}

	public Double getVbnH18() {
		return vbnH18;
	}

	public void setVbnH18(Double vbnH18) {
		this.vbnH18 = vbnH18;
	}

	public Double getVbnH19() {
		return vbnH19;
	}

	public void setVbnH19(Double vbnH19) {
		this.vbnH19 = vbnH19;
	}

	public Double getVbnH20() {
		return vbnH20;
	}

	public void setVbnH20(Double vbnH20) {
		this.vbnH20 = vbnH20;
	}

	public Double getVbnH21() {
		return vbnH21;
	}

	public void setVbnH21(Double vbnH21) {
		this.vbnH21 = vbnH21;
	}

	public Double getVbnH22() {
		return vbnH22;
	}

	public void setVbnH22(Double vbnH22) {
		this.vbnH22 = vbnH22;
	}

	public Double getVbnH23() {
		return vbnH23;
	}

	public void setVbnH23(Double vbnH23) {
		this.vbnH23 = vbnH23;
	}

	public Double getVbnH24() {
		return vbnH24;
	}

	public void setVbnH24(Double vbnH24) {
		this.vbnH24 = vbnH24;
	}

	public Double getVbnH25() {
		return vbnH25;
	}

	public void setVbnH25(Double vbnH25) {
		this.vbnH25 = vbnH25;
	}

	public Double getVbnH26() {
		return vbnH26;
	}

	public void setVbnH26(Double vbnH26) {
		this.vbnH26 = vbnH26;
	}

	public Double getVbnH27() {
		return vbnH27;
	}

	public void setVbnH27(Double vbnH27) {
		this.vbnH27 = vbnH27;
	}

	public Double getVbnH28() {
		return vbnH28;
	}

	public void setVbnH28(Double vbnH28) {
		this.vbnH28 = vbnH28;
	}

	public Double getVbnH29() {
		return vbnH29;
	}

	public void setVbnH29(Double vbnH29) {
		this.vbnH29 = vbnH29;
	}

	public Double getVbnH30() {
		return vbnH30;
	}

	public void setVbnH30(Double vbnH30) {
		this.vbnH30 = vbnH30;
	}

	public Double getVbnH31() {
		return vbnH31;
	}

	public void setVbnH31(Double vbnH31) {
		this.vbnH31 = vbnH31;
	}

	public Double getVcnH1() {
		return vcnH1;
	}

	public void setVcnH1(Double vcnH1) {
		this.vcnH1 = vcnH1;
	}

	public Double getVcnH2() {
		return vcnH2;
	}

	public void setVcnH2(Double vcnH2) {
		this.vcnH2 = vcnH2;
	}

	public Double getVcnH3() {
		return vcnH3;
	}

	public void setVcnH3(Double vcnH3) {
		this.vcnH3 = vcnH3;
	}

	public Double getVcnH4() {
		return vcnH4;
	}

	public void setVcnH4(Double vcnH4) {
		this.vcnH4 = vcnH4;
	}

	public Double getVcnH5() {
		return vcnH5;
	}

	public void setVcnH5(Double vcnH5) {
		this.vcnH5 = vcnH5;
	}

	public Double getVcnH6() {
		return vcnH6;
	}

	public void setVcnH6(Double vcnH6) {
		this.vcnH6 = vcnH6;
	}

	public Double getVcnH7() {
		return vcnH7;
	}

	public void setVcnH7(Double vcnH7) {
		this.vcnH7 = vcnH7;
	}

	public Double getVcnH8() {
		return vcnH8;
	}

	public void setVcnH8(Double vcnH8) {
		this.vcnH8 = vcnH8;
	}

	public Double getVcnH9() {
		return vcnH9;
	}

	public void setVcnH9(Double vcnH9) {
		this.vcnH9 = vcnH9;
	}

	public Double getVcnH10() {
		return vcnH10;
	}

	public void setVcnH10(Double vcnH10) {
		this.vcnH10 = vcnH10;
	}

	public Double getVcnH11() {
		return vcnH11;
	}

	public void setVcnH11(Double vcnH11) {
		this.vcnH11 = vcnH11;
	}

	public Double getVcnH12() {
		return vcnH12;
	}

	public void setVcnH12(Double vcnH12) {
		this.vcnH12 = vcnH12;
	}

	public Double getVcnH13() {
		return vcnH13;
	}

	public void setVcnH13(Double vcnH13) {
		this.vcnH13 = vcnH13;
	}

	public Double getVcnH14() {
		return vcnH14;
	}

	public void setVcnH14(Double vcnH14) {
		this.vcnH14 = vcnH14;
	}

	public Double getVcnH15() {
		return vcnH15;
	}

	public void setVcnH15(Double vcnH15) {
		this.vcnH15 = vcnH15;
	}

	public Double getVcnH16() {
		return vcnH16;
	}

	public void setVcnH16(Double vcnH16) {
		this.vcnH16 = vcnH16;
	}

	public Double getVcnH17() {
		return vcnH17;
	}

	public void setVcnH17(Double vcnH17) {
		this.vcnH17 = vcnH17;
	}

	public Double getVcnH18() {
		return vcnH18;
	}

	public void setVcnH18(Double vcnH18) {
		this.vcnH18 = vcnH18;
	}

	public Double getVcnH19() {
		return vcnH19;
	}

	public void setVcnH19(Double vcnH19) {
		this.vcnH19 = vcnH19;
	}

	public Double getVcnH20() {
		return vcnH20;
	}

	public void setVcnH20(Double vcnH20) {
		this.vcnH20 = vcnH20;
	}

	public Double getVcnH21() {
		return vcnH21;
	}

	public void setVcnH21(Double vcnH21) {
		this.vcnH21 = vcnH21;
	}

	public Double getVcnH22() {
		return vcnH22;
	}

	public void setVcnH22(Double vcnH22) {
		this.vcnH22 = vcnH22;
	}

	public Double getVcnH23() {
		return vcnH23;
	}

	public void setVcnH23(Double vcnH23) {
		this.vcnH23 = vcnH23;
	}

	public Double getVcnH24() {
		return vcnH24;
	}

	public void setVcnH24(Double vcnH24) {
		this.vcnH24 = vcnH24;
	}

	public Double getVcnH25() {
		return vcnH25;
	}

	public void setVcnH25(Double vcnH25) {
		this.vcnH25 = vcnH25;
	}

	public Double getVcnH26() {
		return vcnH26;
	}

	public void setVcnH26(Double vcnH26) {
		this.vcnH26 = vcnH26;
	}

	public Double getVcnH27() {
		return vcnH27;
	}

	public void setVcnH27(Double vcnH27) {
		this.vcnH27 = vcnH27;
	}

	public Double getVcnH28() {
		return vcnH28;
	}

	public void setVcnH28(Double vcnH28) {
		this.vcnH28 = vcnH28;
	}

	public Double getVcnH29() {
		return vcnH29;
	}

	public void setVcnH29(Double vcnH29) {
		this.vcnH29 = vcnH29;
	}

	public Double getVcnH30() {
		return vcnH30;
	}

	public void setVcnH30(Double vcnH30) {
		this.vcnH30 = vcnH30;
	}

	public Double getVcnH31() {
		return vcnH31;
	}

	public void setVcnH31(Double vcnH31) {
		this.vcnH31 = vcnH31;
	}

	public Timestamp getSentDate() {
		return sentDate;
	}

	public void setSentDate(Timestamp sentDate) {
		this.sentDate = sentDate;
	}

	public Integer getDeviceId() {
		return deviceId;
	}

	public void setDeviceId(Integer deviceId) {
		this.deviceId = deviceId;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
    
}
