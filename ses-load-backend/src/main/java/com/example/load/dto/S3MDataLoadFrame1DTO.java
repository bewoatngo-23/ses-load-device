package com.example.load.dto;

import com.example.load.entity.PKS3DataLoadFrame1;
import lombok.*;

import javax.validation.constraints.NotNull;
import java.sql.Timestamp;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@EqualsAndHashCode
public class S3MDataLoadFrame1DTO {
    private PKS3DataLoadFrame1 id;
//    private Long id;
//    private Long transactionDate;
    private Long deviceId;


    private Double uab;


    private Double ubc;


    private Double uca;


    private Double ull;


    private Double uan;


    private Double ubn;


    private Double ucn;


    private Double uln;


    private Double ia;


    private Double ib;


    private Double ic;


    private Double in;


    private Double ig;


    private Double iavg;

    
    private Double pa;

    
    private Double pb;

    
    private Double pc;
    
    
    private Double pTotal;

    
    private Double qa;

    
    private Double qb;

    
    private Double qc;
    
    
    private Double qTotal;

    
    private Double sa;

    
    private Double sb;

    
    private Double sc;

    
    private Double sTotal;
    
    
    private Double pfa;
    
    
    private Double pfb;
    
    
    private Double pfc;
    
    
    private Double pfavg;
    private Double f;
    private Integer ep;
    
    private Integer epR;
    
    private Integer epDr;
    
    private Integer epDrr;
    
    private Integer eq;
    
    private Integer eqR;
    
    private Integer eqDr;
    
    private Integer eqDrr;
    
    private Integer es;
    
    private Integer esR;
    
    private Integer esDr;
    
    private Integer esDrr;
    
    
    private Double t1;
    
    
    private Double t2;
    
    
    private Double t3;
    
    
    private Integer commandData1;
    
    
    private Integer commandData2;
    
    
    private Integer commandData3;
    
    
    private Integer commandData4;
    
    
    private Integer commandData5;
    
    
    private Integer commandData6;
    
    
    private Double thdIa;
    
    
    private Double thdIb;
    
    
    private Double thdIc;
    
    
    private Double thdIn;
    
    
    private Double thdIg;
    
    
    private Double thdVab;
    
    
    private Double thdVbc;
    
    
    private Double thdVca;
    
    
    private Double thdVll;
    
    
    private Double thdVan;
    
    
    private Double thdVbn;
    
    
    private Double thdVcn;
    
    
    private Double thdVln;
    
    private Timestamp sentDate;
}
