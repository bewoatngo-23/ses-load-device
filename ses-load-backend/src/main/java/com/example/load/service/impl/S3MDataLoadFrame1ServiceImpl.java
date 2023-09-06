package com.example.load.service.impl;

import com.example.load.entity.S3MDataLoadFrame1;
import com.example.load.entity.S3MDataLoadFrame22023Entity;
import com.example.load.mapper.S3MDataLoadFrame1Mapper;
import com.example.load.repository.S3MDataLoadFrame1Repository;
import com.example.load.request.S3MDataLoadFrame1Request;
import com.example.load.service.S3MDataLoadFrame1Service;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(rollbackFor = {Exception.class, Throwable.class} )
public class S3MDataLoadFrame1ServiceImpl implements S3MDataLoadFrame1Service {
    @Autowired
    private S3MDataLoadFrame1Repository repository;

    @Override
    public S3MDataLoadFrame1 insert(S3MDataLoadFrame1Request request) {
        S3MDataLoadFrame1 entity = S3MDataLoadFrame1Mapper.toEntity(request);
        return this.repository.save(entity);
    }

    @Override
    public List<S3MDataLoadFrame1> getData() {
        return this.repository.findAll();
    }
}
