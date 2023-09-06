package com.example.load.service;

import com.example.load.entity.S3MDataLoadFrame1;
import com.example.load.request.S3MDataLoadFrame1Request;
import org.springframework.stereotype.Service;

import java.util.List;

public interface S3MDataLoadFrame1Service {
    S3MDataLoadFrame1 insert(S3MDataLoadFrame1Request entity);
    List<S3MDataLoadFrame1>  getData();
}
