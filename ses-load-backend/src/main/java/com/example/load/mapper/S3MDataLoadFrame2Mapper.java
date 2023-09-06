package com.example.load.mapper;

import com.example.load.dto.S3MDataLoadFrame2DTO;
import com.example.load.entity.S3MDataLoadFrame22023Entity;
import com.example.load.request.S3MDataLoadFrame1Request;
import com.example.load.request.S3MDataLoadFrame2Request;
import org.modelmapper.ModelMapper;

import java.io.Serializable;

public class S3MDataLoadFrame2Mapper implements Serializable {
    public static S3MDataLoadFrame22023Entity toEntity(S3MDataLoadFrame2Request request) {
        ModelMapper mapper = new ModelMapper();
        return mapper.map(request, S3MDataLoadFrame22023Entity.class);
    }
    public static S3MDataLoadFrame2DTO toDTO(S3MDataLoadFrame22023Entity entity) {
        ModelMapper mapper = new ModelMapper();
        return mapper.map(entity, S3MDataLoadFrame2DTO.class);
    }

}
