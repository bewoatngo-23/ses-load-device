package com.example.load.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@Data
@NoArgsConstructor
@EqualsAndHashCode
@Embeddable
public class PKS3DataLoadFrame1 implements Serializable {
    private static final long serialVersionUID = 5419345600310440297L;
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    @Column(name = "transaction_date")
    private Long transactionDate;
    public PKS3DataLoadFrame1(Long transactionDate) {
        this.transactionDate = transactionDate;
    }
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Long getTransactionDate() {
		return transactionDate;
	}
	public void setTransactionDate(Long transactionDate) {
		this.transactionDate = transactionDate;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	public PKS3DataLoadFrame1(Long id, Long transactionDate) {
		super();
		this.id = id;
		this.transactionDate = transactionDate;
	}
    
    
}
