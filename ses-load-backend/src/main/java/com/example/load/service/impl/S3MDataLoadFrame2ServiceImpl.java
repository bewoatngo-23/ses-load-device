package com.example.load.service.impl;

import com.example.load.entity.S3MDataLoadFrame22023Entity;
import com.example.load.mapper.S3MDataLoadFrame1Mapper;
import com.example.load.mapper.S3MDataLoadFrame2Mapper;
import com.example.load.repository.S3MDataLoadFrame2Repository;
import com.example.load.request.S3MDataLoadFrame2Request;
import com.example.load.service.S3MDataLoadFrame2Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(rollbackFor = {Exception.class, Throwable.class} )
public class S3MDataLoadFrame2ServiceImpl implements S3MDataLoadFrame2Service {

    @Autowired
    S3MDataLoadFrame2Repository repository;
    @Override
    public S3MDataLoadFrame22023Entity insert(S3MDataLoadFrame2Request request) {
        S3MDataLoadFrame22023Entity entity = S3MDataLoadFrame2Mapper.toEntity(request);
        return this.repository.save(entity);
    }
}
