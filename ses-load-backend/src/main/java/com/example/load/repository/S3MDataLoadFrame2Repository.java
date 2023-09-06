package com.example.load.repository;

import com.example.load.entity.S3MDataLoadFrame22023Entity;
import com.example.load.entity.S3MDataLoadFrame22023EntityPK;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface S3MDataLoadFrame2Repository extends JpaRepository<S3MDataLoadFrame22023Entity, S3MDataLoadFrame22023EntityPK> {
}
