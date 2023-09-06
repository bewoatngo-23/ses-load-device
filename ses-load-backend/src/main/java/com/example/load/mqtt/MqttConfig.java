package com.example.load.mqtt;


import com.example.load.entity.PKS3DataLoadFrame1;
import com.example.load.entity.S3MDataLoadFrame22023EntityPK;
import com.example.load.mapper.S3MDataLoadFrame1Mapper;
import com.example.load.request.S3MDataLoadFrame1Request;
import com.example.load.request.S3MDataLoadFrame2Request;
import com.example.load.service.S3MDataLoadFrame1Service;
import com.example.load.service.S3MDataLoadFrame2Service;
import lombok.Data;
import org.eclipse.paho.client.mqttv3.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Random;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
@Data
@Configuration
public class MqttConfig {
    @Autowired
    S3MDataLoadFrame1Service service;

    @Autowired
    S3MDataLoadFrame2Service service2;

    Logger LOGGER = LoggerFactory.getLogger(MqttConfig.class);

    @Value("${mqtt.broker-url}")
    private String brokerUrl;

    @Value("${mqtt.client-id}")
    private String clientId;

    @Value("${mqtt.username:}")
    private String username;

    @Value("${mqtt.password:}")
    private String password;

    @Value("${mqtt.default-topic}")
    private String defaultTopic;

    private MqttClient mqttClient;

//    @Bean
    public void connect() throws MqttException {
        mqttClient = new MqttClient(brokerUrl, clientId);
        MqttConnectOptions options = new MqttConnectOptions();
        if (!username.isEmpty()) {
            options.setUserName(username);
            options.setPassword(password.toCharArray());
        }
        mqttClient.connect(options);
        mqttClient.setCallback(new MqttCallback() {
            @Override
            public void connectionLost(Throwable cause) {

            }

            @Override
            public void messageArrived(String topic, MqttMessage message1) throws Exception {
                // Xử lý message gửi về;
                String mes = new String(message1.getPayload());
                System.out.println("Recive" + mes);
                String regex1 = "\\@\\d+\\*\\d+\\*\\d+\\*\\d+/\\d+/\\d+\\s\\d+\\:\\d+\\:\\d+\\*\\d+\\*\\d+\\*\\S+";
                String regex2 = "\\@\\[\\d+\\*\\d+\\*\\d+\\*\\d+\\*\\d+\\*\\d+\\*\\d+\\.\\d+\\.\\d+\\.\\d+\\*\\d+\\]\\*\\d" +
                        "+\\/\\d+\\/\\d+\\s\\d+\\:\\d+\\:\\d+\\*\\d+\\*\\d+\\*\\S+";
                if (mes.matches(regex1) == true) {
                    List<List<String>> result = extractCharacters(new String(message1.getPayload()));
                    List<String> elements = extractElements(mes);
                    service.insert(setRequestS3MDataLoadFrame1(result, elements));
                }
                if (mes.matches(regex2) == true) {
                    List<List<String>> result = extractCharacters(new String(message1.getPayload()));
                    List<String> elements = extractElements(mes);
                    service2.insert(setFrame2Request(result, elements));
                }
            }

            @Override
            public void deliveryComplete(IMqttDeliveryToken token) {

            }
        });
        subscribe(defaultTopic);
    }
    public String getDefaultTopic() {
		return defaultTopic;
	}
	public void setDefaultTopic(String defaultTopic) {
		this.defaultTopic = defaultTopic;
	}
	public void subscribe(String topic) throws MqttException {
        mqttClient.subscribe(topic, (topic1, message) -> {
            System.out.println("mesage" + new String(message.getPayload()));
            String mes = new String(message.getPayload());
            String regex1 = "\\@\\d+\\*\\d+\\*\\d+\\*\\d+/\\d+/\\d+\\s\\d+\\:\\d+\\:\\d+\\*\\d+\\*\\d+\\*\\S+";
            String regex2 = "\\@\\[\\d+\\*\\d+\\*\\d+\\*\\d+\\*\\d+\\*\\d+\\*\\d+\\.\\d+\\.\\d+\\.\\d+\\*\\d+\\]\\*\\d" +
                    "+\\/\\d+\\/\\d+\\s\\d+\\:\\d+\\:\\d+\\*\\d+\\*\\d+\\*\\S+";
            if (mes.matches(regex1) == true) {
                List<List<String>> result = extractCharacters(new String(message.getPayload()));
                List<String> elements = extractElements(mes);
                service.insert(setRequestS3MDataLoadFrame1(result, elements));
            }
            if (mes.matches(regex2) == true) {
                List<List<String>> result = extractCharacters(new String(message.getPayload()));
                List<String> element = extractElements(mes);
                service2.insert(setFrame2Request(result,element));
            }
        });
    }

    public S3MDataLoadFrame1Request setRequestS3MDataLoadFrame1(List<List<String>> str, List<String> str2) throws ParseException {
        if(str.size() <=0) {
            System.out.println("Mảng rỗng");
            return null;
        }

        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy hh:mm:ss");
        Date date = sdf.parse(str2.get(3));
        S3MDataLoadFrame1Request request = new S3MDataLoadFrame1Request();
        request.setUab(Double.valueOf(str.get(0).get(0)));
        request.setUbc(Double.valueOf(str.get(0).get(1)));
        request.setUca(Double.valueOf(str.get(0).get(2)));

        request.setUll(Double.valueOf(str.get(1).get(0)));
        request.setUan(Double.valueOf(str.get(1).get(1)));
        request.setUbn(Double.valueOf(str.get(1).get(2)));
        request.setUcn(Double.valueOf(str.get(1).get(3)));
        request.setUln(Double.valueOf(str.get(1).get(4)));

        request.setIa(Double.valueOf(str.get(2).get(0)));
        request.setIb(Double.valueOf(str.get(2).get(1)));
        request.setIc(Double.valueOf(str.get(2).get(2)));
        request.setIn(Double.valueOf(str.get(2).get(3)));
        request.setIg(Double.valueOf(str.get(2).get(4)));
        request.setIavg(Double.valueOf(str.get(2).get(5)));

        request.setPa(Double.valueOf(str.get(3).get(0)));
        request.setPb(Double.valueOf(str.get(3).get(1)));
        request.setPc(Double.valueOf(str.get(3).get(2)));
//        request.setpTotal(Double.valueOf(str.get(3).get(3)));

        request.setQa(Double.valueOf(str.get(4).get(0)));
        request.setQb(Double.valueOf(str.get(4).get(1)));
        request.setQc(Double.valueOf(str.get(4).get(2)));
//        request.setqTotal(Double.valueOf(str.get(4).get(3)));

        request.setSa(Double.valueOf(str.get(5).get(0)));
        request.setSb(Double.valueOf(str.get(5).get(1)));
        request.setSc(Double.valueOf(str.get(5).get(2)));
//        request.setsTotal(Double.valueOf(str.get(5).get(3)));

        request.setPfa(Double.valueOf(str.get(6).get(0)));
        request.setPfb(Double.valueOf(str.get(6).get(1)));
        request.setPfc(Double.valueOf(str.get(6).get(2)));
        request.setPfavg(Double.valueOf(str.get(6).get(3)));

        request.setEp(Integer.valueOf(str.get(7).get(0)));
        request.setEpR(Integer.valueOf(str.get(7).get(1)));
        request.setEpDr(Integer.valueOf(str.get(7).get(2)));
        request.setEpDrr(Integer.valueOf(str.get(7).get(3)));

        request.setEq(Integer.valueOf(str.get(8).get(0)));
        request.setEqR(Integer.valueOf(str.get(8).get(1)));
        request.setEqDr(Integer.valueOf(str.get(8).get(2)));
        request.setEqDrr(Integer.valueOf(str.get(8).get(3)));

        request.setEs(Integer.valueOf(str.get(9).get(0)));
        request.setEsR(Integer.valueOf(str.get(9).get(1)));
        request.setEsDr(Integer.valueOf(str.get(9).get(2)));
        request.setEsDrr(Integer.valueOf(str.get(9).get(3)));

        request.setT1(Double.valueOf(str.get(10).get(0)));
        request.setT2(Double.valueOf(str.get(10).get(1)));
        request.setT3(Double.valueOf(str.get(10).get(2)));

        request.setCommandData1(Integer.valueOf(str.get(11).get(0)));
        request.setCommandData2(Integer.valueOf(str.get(11).get(1)));
        request.setCommandData3(Integer.valueOf(str.get(11).get(2)));
        request.setCommandData4(Integer.valueOf(str.get(11).get(3)));
        request.setCommandData5(Integer.valueOf(str.get(11).get(4)));
        request.setCommandData6(Integer.valueOf(str.get(11).get(5)));

        request.setThdIa(Double.valueOf(str.get(12).get(0)));
        request.setThdIb(Double.valueOf(str.get(12).get(1)));
        request.setThdIc(Double.valueOf(str.get(12).get(2)));
        request.setThdIg(Double.valueOf(str.get(12).get(3)));
        request.setThdIn(Double.valueOf(str.get(12).get(4)));

        request.setThdVab(Double.valueOf(str.get(13).get(0)));
        request.setThdVbc(Double.valueOf(str.get(13).get(1)));
        request.setThdVca(Double.valueOf(str.get(13).get(2)));
        request.setThdVll(Double.valueOf(str.get(13).get(3)));
        request.setThdVan(Double.valueOf(str.get(13).get(4)));
        request.setThdVbn(Double.valueOf(str.get(13).get(5)));
        request.setThdVcn(Double.valueOf(str.get(13).get(6)));
        request.setThdVln(Double.valueOf(str.get(13).get(7)));
        request.setF(Double.valueOf(str2.get(6)));
        request.setId(new PKS3DataLoadFrame1(new Random().nextLong(), new Long(date.getTime() / 1000)));
        request.setDeviceId(123l);
        request.setSentDate(new Timestamp(date.getTime()));
        return request;
    }

    public S3MDataLoadFrame2Request setFrame2Request(List<List<String>> ls, List<String> ls2) throws ParseException {
        S3MDataLoadFrame2Request request = new S3MDataLoadFrame2Request();
        if (ls.size() == 0) {
            System.out.println("Mảng rỗng");
            return null;
        }
        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy hh:mm:ss");
        Date date = sdf.parse(ls2.get(8));
//        request.setId(new S3MDataLoadFrame22023EntityPK(new Random().nextLong(), new Long(date.getTime() / 1000)));
//        request.
//        request.setSentDate(new Timestamp(date.getTime()));
//		
//        request.setVanH1(Double.valueOf(ls.get(0).get(0)));
//        request.setVanH2(Double.valueOf(ls.get(0).get(1)));
//        request.setVanH3(Double.valueOf(ls.get(0).get(2)));
//        request.setVanH4(Double.valueOf(ls.get(0).get(3)));
//        request.setVanH5(Double.valueOf(ls.get(0).get(4)));
//        request.setVanH6(Double.valueOf(ls.get(0).get(5)));
//        request.setVanH7(Double.valueOf(ls.get(0).get(6)));
//        request.setVanH8(Double.valueOf(ls.get(0).get(7)));
//        request.setVanH9(Double.valueOf(ls.get(0).get(8)));
//        request.setVanH10(Double.valueOf(ls.get(0).get(9)));
//        request.setVanH11(Double.valueOf(ls.get(0).get(10)));
//        request.setVanH12(Double.valueOf(ls.get(0).get(11)));
//        request.setVanH13(Double.valueOf(ls.get(0).get(12)));
//        request.setVanH14(Double.valueOf(ls.get(0).get(13)));
//        request.setVanH15(Double.valueOf(ls.get(0).get(14)));
//        request.setVanH16(Double.valueOf(ls.get(0).get(15)));
//        request.setVanH17(Double.valueOf(ls.get(0).get(16)));
//        request.setVanH18(Double.valueOf(ls.get(0).get(17)));
//        request.setVanH19(Double.valueOf(ls.get(0).get(18)));
//        request.setVanH20(Double.valueOf(ls.get(0).get(19)));
//        request.setVanH21(Double.valueOf(ls.get(0).get(20)));
//        request.setVanH22(Double.valueOf(ls.get(0).get(21)));
//        request.setVanH23(Double.valueOf(ls.get(0).get(22)));
//        request.setVanH24(Double.valueOf(ls.get(0).get(23)));
//        request.setVanH25(Double.valueOf(ls.get(0).get(24)));
//        request.setVanH26(Double.valueOf(ls.get(0).get(25)));
//        request.setVanH27(Double.valueOf(ls.get(0).get(26)));
//        request.setVanH28(Double.valueOf(ls.get(0).get(27)));
//        request.setVanH29(Double.valueOf(ls.get(0).get(28)));
//        request.setVanH30(Double.valueOf(ls.get(0).get(29)));
//        request.setVanH31(Double.valueOf(ls.get(0).get(30)));
//
//        request.setVbnH1(Double.valueOf(ls.get(1).get(0)));
//        request.setVbnH2(Double.valueOf(ls.get(1).get(1)));
//        request.setVbnH3(Double.valueOf(ls.get(1).get(2)));
//        request.setVbnH4(Double.valueOf(ls.get(1).get(3)));
//        request.setVbnH5(Double.valueOf(ls.get(1).get(4)));
//        request.setVbnH6(Double.valueOf(ls.get(1).get(5)));
//        request.setVbnH7(Double.valueOf(ls.get(1).get(6)));
//        request.setVbnH8(Double.valueOf(ls.get(1).get(7)));
//        request.setVbnH9(Double.valueOf(ls.get(1).get(8)));
//        request.setVbnH10(Double.valueOf(ls.get(1).get(9)));
//        request.setVbnH11(Double.valueOf(ls.get(1).get(10)));
//        request.setVbnH12(Double.valueOf(ls.get(1).get(11)));
//        request.setVbnH13(Double.valueOf(ls.get(1).get(12)));
//        request.setVbnH14(Double.valueOf(ls.get(1).get(13)));
//        request.setVbnH15(Double.valueOf(ls.get(1).get(14)));
//        request.setVbnH16(Double.valueOf(ls.get(1).get(15)));
//        request.setVbnH17(Double.valueOf(ls.get(1).get(16)));
//        request.setVbnH18(Double.valueOf(ls.get(1).get(17)));
//        request.setVbnH19(Double.valueOf(ls.get(1).get(18)));
//        request.setVbnH20(Double.valueOf(ls.get(1).get(19)));
//        request.setVbnH21(Double.valueOf(ls.get(1).get(20)));
//        request.setVbnH22(Double.valueOf(ls.get(1).get(21)));
//        request.setVbnH23(Double.valueOf(ls.get(1).get(22)));
//        request.setVbnH24(Double.valueOf(ls.get(1).get(23)));
//        request.setVbnH25(Double.valueOf(ls.get(1).get(24)));
//        request.setVbnH26(Double.valueOf(ls.get(1).get(25)));
//        request.setVbnH27(Double.valueOf(ls.get(1).get(26)));
//        request.setVbnH28(Double.valueOf(ls.get(1).get(27)));
//        request.setVbnH29(Double.valueOf(ls.get(1).get(28)));
//        request.setVbnH30(Double.valueOf(ls.get(1).get(29)));
//        request.setVbnH31(Double.valueOf(ls.get(1).get(30)));
//
//        request.setVcnH1(Double.valueOf(ls.get(2).get(0)));
//        request.setVcnH2(Double.valueOf(ls.get(2).get(1)));
//        request.setVcnH3(Double.valueOf(ls.get(2).get(2)));
//        request.setVcnH4(Double.valueOf(ls.get(2).get(3)));
//        request.setVcnH5(Double.valueOf(ls.get(2).get(4)));
//        request.setVcnH6(Double.valueOf(ls.get(2).get(5)));
//        request.setVcnH7(Double.valueOf(ls.get(2).get(6)));
//        request.setVcnH8(Double.valueOf(ls.get(2).get(7)));
//        request.setVcnH9(Double.valueOf(ls.get(2).get(8)));
//        request.setVcnH10(Double.valueOf(ls.get(2).get(9)));
//        request.setVcnH11(Double.valueOf(ls.get(2).get(10)));
//        request.setVcnH12(Double.valueOf(ls.get(2).get(11)));
//        request.setVcnH13(Double.valueOf(ls.get(2).get(12)));
//        request.setVcnH14(Double.valueOf(ls.get(2).get(13)));
//        request.setVcnH15(Double.valueOf(ls.get(2).get(14)));
//        request.setVcnH16(Double.valueOf(ls.get(2).get(15)));
//        request.setVcnH17(Double.valueOf(ls.get(2).get(16)));
//        request.setVcnH18(Double.valueOf(ls.get(2).get(17)));
//        request.setVcnH19(Double.valueOf(ls.get(2).get(18)));
//        request.setVcnH20(Double.valueOf(ls.get(2).get(19)));
//        request.setVcnH21(Double.valueOf(ls.get(2).get(20)));
//        request.setVcnH22(Double.valueOf(ls.get(2).get(21)));
//        request.setVcnH23(Double.valueOf(ls.get(2).get(22)));
//        request.setVcnH24(Double.valueOf(ls.get(2).get(23)));
//        request.setVcnH25(Double.valueOf(ls.get(2).get(24)));
//        request.setVcnH26(Double.valueOf(ls.get(2).get(25)));
//        request.setVcnH27(Double.valueOf(ls.get(2).get(26)));
//        request.setVcnH28(Double.valueOf(ls.get(2).get(27)));
//        request.setVcnH29(Double.valueOf(ls.get(2).get(28)));
//        request.setVcnH30(Double.valueOf(ls.get(2).get(29)));
//        request.setVcnH31(Double.valueOf(ls.get(2).get(30)));
//
//        request.setIaH1(Double.valueOf(ls.get(3).get(0)));
//        request.setIaH2(Double.valueOf(ls.get(3).get(1)));
//        request.setIaH3(Double.valueOf(ls.get(3).get(2)));
//        request.setIaH4(Double.valueOf(ls.get(3).get(3)));
//        request.setIaH5(Double.valueOf(ls.get(3).get(4)));
//        request.setIaH6(Double.valueOf(ls.get(3).get(5)));
//        request.setIaH7(Double.valueOf(ls.get(3).get(6)));
//        request.setIaH8(Double.valueOf(ls.get(3).get(7)));
//        request.setIaH9(Double.valueOf(ls.get(3).get(8)));
//        request.setIaH10(Double.valueOf(ls.get(3).get(9)));
//        request.setIaH11(Double.valueOf(ls.get(3).get(10)));
//        request.setIaH12(Double.valueOf(ls.get(3).get(11)));
//        request.setIaH13(Double.valueOf(ls.get(3).get(12)));
//        request.setIaH14(Double.valueOf(ls.get(3).get(13)));
//        request.setIaH15(Double.valueOf(ls.get(3).get(14)));
//        request.setIaH16(Double.valueOf(ls.get(3).get(15)));
//        request.setIaH17(Double.valueOf(ls.get(3).get(16)));
//        request.setIaH18(Double.valueOf(ls.get(3).get(17)));
//        request.setIaH19(Double.valueOf(ls.get(3).get(18)));
//        request.setIaH20(Double.valueOf(ls.get(3).get(19)));
//        request.setIaH21(Double.valueOf(ls.get(3).get(20)));
//        request.setIaH22(Double.valueOf(ls.get(3).get(21)));
//        request.setIaH23(Double.valueOf(ls.get(3).get(22)));
//        request.setIaH24(Double.valueOf(ls.get(3).get(23)));
//        request.setIaH25(Double.valueOf(ls.get(3).get(24)));
//        request.setIaH26(Double.valueOf(ls.get(3).get(25)));
//        request.setIaH27(Double.valueOf(ls.get(3).get(26)));
//        request.setIaH28(Double.valueOf(ls.get(3).get(27)));
//        request.setIaH29(Double.valueOf(ls.get(3).get(28)));
//        request.setIaH30(Double.valueOf(ls.get(3).get(29)));
//        request.setIaH31(Double.valueOf(ls.get(3).get(30)));
//
//        request.setIbH1(Double.valueOf(ls.get(4).get(0)));
//        request.setIbH2(Double.valueOf(ls.get(4).get(1)));
//        request.setIbH3(Double.valueOf(ls.get(4).get(2)));
//        request.setIbH4(Double.valueOf(ls.get(4).get(3)));
//        request.setIbH5(Double.valueOf(ls.get(4).get(4)));
//        request.setIbH6(Double.valueOf(ls.get(4).get(5)));
//        request.setIbH7(Double.valueOf(ls.get(4).get(6)));
//        request.setIbH8(Double.valueOf(ls.get(4).get(7)));
//        request.setIbH9(Double.valueOf(ls.get(4).get(8)));
//        request.setIbH10(Double.valueOf(ls.get(4).get(9)));
//        request.setIbH11(Double.valueOf(ls.get(4).get(10)));
//        request.setIbH12(Double.valueOf(ls.get(4).get(11)));
//        request.setIbH13(Double.valueOf(ls.get(4).get(12)));
//        request.setIbH14(Double.valueOf(ls.get(4).get(13)));
//        request.setIbH15(Double.valueOf(ls.get(4).get(14)));
//        request.setIbH16(Double.valueOf(ls.get(4).get(15)));
//        request.setIbH17(Double.valueOf(ls.get(4).get(16)));
//        request.setIbH18(Double.valueOf(ls.get(4).get(17)));
//        request.setIbH19(Double.valueOf(ls.get(4).get(18)));
//        request.setIbH20(Double.valueOf(ls.get(4).get(19)));
//        request.setIbH21(Double.valueOf(ls.get(4).get(20)));
//        request.setIbH22(Double.valueOf(ls.get(4).get(21)));
//        request.setIbH23(Double.valueOf(ls.get(4).get(22)));
//        request.setIbH24(Double.valueOf(ls.get(4).get(23)));
//        request.setIbH25(Double.valueOf(ls.get(4).get(24)));
//        request.setIbH26(Double.valueOf(ls.get(4).get(25)));
//        request.setIbH27(Double.valueOf(ls.get(4).get(26)));
//        request.setIbH28(Double.valueOf(ls.get(4).get(27)));
//        request.setIbH29(Double.valueOf(ls.get(4).get(28)));
//        request.setIbH30(Double.valueOf(ls.get(4).get(29)));
//        request.setIbH31(Double.valueOf(ls.get(4).get(30)));
//
//        request.setIcH1(Double.valueOf(ls.get(5).get(0)));
//        request.setIcH2(Double.valueOf(ls.get(5).get(1)));
//        request.setIcH3(Double.valueOf(ls.get(5).get(2)));
//        request.setIcH4(Double.valueOf(ls.get(5).get(3)));
//        request.setIcH5(Double.valueOf(ls.get(5).get(4)));
//        request.setIcH6(Double.valueOf(ls.get(5).get(5)));
//        request.setIcH7(Double.valueOf(ls.get(5).get(6)));
//        request.setIcH8(Double.valueOf(ls.get(5).get(7)));
//        request.setIcH9(Double.valueOf(ls.get(5).get(8)));
//        request.setIcH10(Double.valueOf(ls.get(5).get(9)));
//        request.setIcH11(Double.valueOf(ls.get(5).get(10)));
//        request.setIcH12(Double.valueOf(ls.get(5).get(11)));
//        request.setIcH13(Double.valueOf(ls.get(5).get(12)));
//        request.setIcH14(Double.valueOf(ls.get(5).get(13)));
//        request.setIcH15(Double.valueOf(ls.get(5).get(14)));
//        request.setIcH16(Double.valueOf(ls.get(5).get(15)));
//        request.setIcH17(Double.valueOf(ls.get(5).get(16)));
//        request.setIcH18(Double.valueOf(ls.get(5).get(17)));
//        request.setIcH19(Double.valueOf(ls.get(5).get(18)));
//        request.setIcH20(Double.valueOf(ls.get(5).get(19)));
//        request.setIcH21(Double.valueOf(ls.get(5).get(20)));
//        request.setIcH22(Double.valueOf(ls.get(5).get(21)));
//        request.setIcH23(Double.valueOf(ls.get(5).get(22)));
//        request.setIcH24(Double.valueOf(ls.get(5).get(23)));
//        request.setIcH25(Double.valueOf(ls.get(5).get(24)));
//        request.setIcH26(Double.valueOf(ls.get(5).get(25)));
//        request.setIcH27(Double.valueOf(ls.get(5).get(26)));
//        request.setIcH28(Double.valueOf(ls.get(5).get(27)));
//        request.setIcH29(Double.valueOf(ls.get(5).get(28)));
//        request.setIcH30(Double.valueOf(ls.get(5).get(29)));
//        request.setIcH31(Double.valueOf(ls.get(5).get(30)));
        return request;
    }
//
    public void publish(String topic, String payload) throws MqttException {
        MqttMessage message = new MqttMessage(payload.getBytes());
        mqttClient.publish(topic, message);
    }


    public void disconnect() throws MqttException {
        mqttClient.disconnect();
    }

    public static List<List<String>> extractCharacters(String input) {
        List<List<String>> result = new ArrayList<>();
        Pattern pattern = Pattern.compile("\\((.*?)\\)");
        Matcher matcher = pattern.matcher(input);
        while (matcher.find()) {
            String group = matcher.group(1);
            String[] items = group.split(",");
            List<String> itemList = new ArrayList<>();
            for (String item : items) {
                if (item.equals("-")) {
                    itemList.add("0");
                } else {
                    itemList.add(item);
                }

            }

            result.add(itemList);
        }

        return result;
    }

    public static List<String> extractElements(String input) {
        String[] tokens = input.split("\\*");
        List<String> elements = new ArrayList<>();

        for (String token : tokens) {
            String trimmedToken = token.trim();
            if (!trimmedToken.isEmpty() && !trimmedToken.startsWith("(")) {
                elements.add(trimmedToken);
            }
        }

        return elements;
    }

}
