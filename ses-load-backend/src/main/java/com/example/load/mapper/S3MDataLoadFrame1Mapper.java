package com.example.load.mapper;

import com.example.load.dto.S3MDataLoadFrame1DTO;
import com.example.load.dto.S3MDataLoadFrame2DTO;
import com.example.load.entity.S3MDataLoadFrame1;
import com.example.load.entity.S3MDataLoadFrame22023Entity;
import com.example.load.request.S3MDataLoadFrame1Request;
import org.modelmapper.ModelMapper;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class S3MDataLoadFrame1Mapper implements Serializable {

    public static S3MDataLoadFrame1 toEntity(S3MDataLoadFrame1Request request) {
        ModelMapper modelMapper = new ModelMapper();
        return modelMapper.map(request, S3MDataLoadFrame1.class);
    }
    public static S3MDataLoadFrame1DTO toDTO(S3MDataLoadFrame1 entity) {
        ModelMapper modelMapper = new ModelMapper();
        return modelMapper.map(entity, S3MDataLoadFrame1DTO.class);
    }
    public static List<S3MDataLoadFrame1DTO> toListDTO(List<S3MDataLoadFrame1> listEntity) {
        List<S3MDataLoadFrame1DTO> ls = new ArrayList<>();
        for (S3MDataLoadFrame1 entity: listEntity
             ) {
            ls.add(toDTO(entity));
        }
        return ls;
    }


}
