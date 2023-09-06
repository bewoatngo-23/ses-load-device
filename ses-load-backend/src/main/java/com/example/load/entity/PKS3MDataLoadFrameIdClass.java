package com.example.load.entity;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@AllArgsConstructor
@Data
@EqualsAndHashCode
@NoArgsConstructor
public class PKS3MDataLoadFrameIdClass implements Serializable {
    private Long id;
    private Long transactionDate;

    public PKS3MDataLoadFrameIdClass(Long transactionDate) {
        this.transactionDate = transactionDate;
    }
}
