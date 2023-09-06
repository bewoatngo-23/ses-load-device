package com.example.load.controller;

import com.example.load.entity.S3MDataLoadFrame1;
import com.example.load.mapper.S3MDataLoadFrame1Mapper;
import com.example.load.mapper.S3MDataLoadFrame2Mapper;
import com.example.load.message.ConvertMessage;
import com.example.load.mqtt.MqttConfig;
import com.example.load.mqtt.MqttSub;
import com.example.load.mqtt.UserMqtt;
import com.example.load.request.RequestMessageFrame1AndFrame2;
import com.example.load.request.S3MDataLoadFrame1Request;
import com.example.load.request.S3MDataLoadFrame2Request;
import com.example.load.responses.S3MDataLoadFrame1Response;
import com.example.load.responses.S3MDataLoadFrame2Response;
import com.example.load.service.S3MDataLoadFrame1Service;
import com.example.load.service.S3MDataLoadFrame2Service;
import org.eclipse.paho.client.mqttv3.MqttException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;


@RestController
@CrossOrigin("*")
public class MainController {
    @Autowired
    private S3MDataLoadFrame1Service s3MDataLoadFrame1Service;
    @Autowired
    S3MDataLoadFrame2Service s3MDataLoadFrame2Service;

    @PostMapping("/insert")
    public S3MDataLoadFrame1Response insert1(@Valid @RequestBody S3MDataLoadFrame1Request request) throws MqttException {
        return new S3MDataLoadFrame1Response(S3MDataLoadFrame1Mapper.toDTO(this.s3MDataLoadFrame1Service.insert(request)));
    }
    @PostMapping("/insert1")
    public S3MDataLoadFrame2Response insert2(@RequestBody S3MDataLoadFrame2Request request) throws MqttException {
        return new S3MDataLoadFrame2Response(S3MDataLoadFrame2Mapper.toDTO(this.s3MDataLoadFrame2Service.insert(request)));
    }
    @GetMapping("view-data")
    public S3MDataLoadFrame1Response getAllData() {
        return new S3MDataLoadFrame1Response(S3MDataLoadFrame1Mapper.toListDTO(this.s3MDataLoadFrame1Service.getData()));
    }


    @PostMapping("/send-message")
    public String sendmessage(@RequestBody UserMqtt user) throws MqttException {
            MqttSub mqttSub = new MqttSub(user.getBrokerUrl(), user.getClientId(), user.getUsername(), user.getPassword(), user.getDefaultTopic());
            mqttSub.connect();
            mqttSub.publish(user.getDefaultTopic(), user.getMessage());
            return "Message sent: " + user.getMessage();
    }


}
