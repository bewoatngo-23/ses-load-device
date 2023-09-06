package com.example.load.responses;

import com.example.load.dto.S3MDataLoadFrame1DTO;
import com.example.load.entity.S3MDataLoadFrame1;

import java.util.List;

public class S3MDataLoadFrame1Response extends BaseResponse<S3MDataLoadFrame1DTO>{
    public S3MDataLoadFrame1Response() {
        super();
    }

    public S3MDataLoadFrame1Response(S3MDataLoadFrame1DTO data) {
        super(data);
    }
    public S3MDataLoadFrame1Response(List<S3MDataLoadFrame1DTO> toList) {
        super(toList);
    }
}
