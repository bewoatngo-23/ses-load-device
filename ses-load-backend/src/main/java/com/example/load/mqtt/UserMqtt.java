package com.example.load.mqtt;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserMqtt {
    private String brokerUrl;

    private String clientId;

    private String username;

    private String password;

    private String defaultTopic;

    private String message;
}
