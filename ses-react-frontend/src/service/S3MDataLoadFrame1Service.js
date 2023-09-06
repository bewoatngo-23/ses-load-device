import { ConvertFrame1 } from "../utils/MessageConvert";

export const sendmessage = (data, user, device) => {
  let message = ConvertFrame1(data, {
    typeSystem: device.typeSystem,
    typeDevice: device.typeDevice,
    country: device.country,
    province: device.province,
    codeCustomer: device.codeCustomer,
    codeProject: device.codeProject,
    a1: device.a1,
    a2: device.a2,
    a3: device.a3,
    a4: device.a4,
    a5: device.a5,
    func: device.func,
    messageType: device.messageType,
    crc: device.crc,
  });
  console.log(message);
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    brokerUrl: user.url,
    username: user.username,
    password: user.password,
    clientId: user.client,
    defaultTopic: user.topic,
    message: message,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://localhost:8080/send-message", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};
