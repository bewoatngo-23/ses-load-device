package com.example.load.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Data
@Embeddable
@NoArgsConstructor
public class S3MDataLoadFrame22023EntityPK implements Serializable {
    private static final long serialVersionUID = 5419345600310440297L;
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private long id;
    @Column(name = "transaction_date", nullable = false)
    private long transactionDate;
}
