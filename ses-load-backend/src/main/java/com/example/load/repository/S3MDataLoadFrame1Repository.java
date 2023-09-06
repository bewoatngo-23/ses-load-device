package com.example.load.repository;

import com.example.load.entity.PKS3DataLoadFrame1;
import com.example.load.entity.S3MDataLoadFrame1;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface S3MDataLoadFrame1Repository extends JpaRepository<S3MDataLoadFrame1, PKS3DataLoadFrame1> {


}
