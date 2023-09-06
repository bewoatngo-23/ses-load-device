package com.example.load.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@ToString
public class RequestMessageFrame1AndFrame2 {
    private S3MDataLoadFrame1Request frame1Request;
    private S3MDataLoadFrame2Request frame2Request;
	public S3MDataLoadFrame1Request getFrame1Request() {
		return frame1Request;
	}
	public void setFrame1Request(S3MDataLoadFrame1Request frame1Request) {
		this.frame1Request = frame1Request;
	}
	public S3MDataLoadFrame2Request getFrame2Request() {
		return frame2Request;
	}
	public void setFrame2Request(S3MDataLoadFrame2Request frame2Request) {
		this.frame2Request = frame2Request;
	}
	public RequestMessageFrame1AndFrame2() {
		super();
	}
    
}
