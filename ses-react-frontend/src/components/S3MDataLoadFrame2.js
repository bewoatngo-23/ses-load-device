import { Button, Card, DatePicker, Input, Switch } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import InputMinMax from "./InputMinMax";
import S3MDataLoadFrame2Entity from "../entities/S3MDataLoadFrame2Entity";
import { sendmessageframe2 } from "../service/S3MDataLoadFrame2Service";
import FormReceive from "./FormReceive";
import FormDevice from "./FormDevice";
import Context from "../store/Context";
import { updatestatus2 } from "../store/Actions";

export default function S3MDataLoadFrame2(props) {
  function formatDateToDDMMYYYYHHMMSS(date) {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  }
  const [state, dispatch] = useContext(Context);
  const [timerId, setTimerId] = useState(null);
  const [disabled, setDisable] = useState(false);
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [frequency, setFrequency] = useState(3000);
  // const [url, setUrl] = useState("");
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [client, setClient] = useState("");
  // const [topic, setToppics] = useState("");
  // const [typeSystem, setTypeSystem] = useState("");
  // const [province, setProvince] = useState("");
  // const [codeCustomer, setCodeCustomer] = useState("");
  // const [typeDevice, setTypeDevice] = useState("");
  // const [codeProject, setCodeProject] = useState("");
  // const [a1, setA1] = useState("");
  // const [a2, setA2] = useState("");
  // const [a3, setA3] = useState("");
  // const [a4, setA4] = useState("");
  // const [a5, setA5] = useState("");
  // const [func, setFunc] = useState("");
  // const [messageType, setMessageType] = useState("");
  // const [crc, setCrc] = useState("");
  // const [country, setCountry] = useState("");

  const [url, setUrl] = useState("tcp://localhost:1883");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [client, setClient] = useState("client-sub");
  const [topic, setToppics] = useState("loadTopic");
  const [typeSystem, setTypeSystem] = useState("1");
  const [province, setProvince] = useState("HAN");
  const [codeCustomer, setCodeCustomer] = useState("0989");
  const [typeDevice, setTypeDevice] = useState("2");
  const [codeProject, setCodeProject] = useState("[01]");
  const [a1, setA1] = useState("192");
  const [a2, setA2] = useState("168");
  const [a3, setA3] = useState("100");
  const [a4, setA4] = useState("5");
  const [a5, setA5] = useState("255");
  const [func, setFunc] = useState("01");
  const [messageType, setMessageType] = useState("[1]");
  const [crc, setCrc] = useState("");
  const [country, setCountry] = useState("84");

  const handelChangeInputTime = (event) => {
    if (event.target.value === "") {
      setFrequency(3000);
    }
    setFrequency(event.target.value);
  };
  const handelCkickStop = () => {
    updateStatus({ key: props.data, status: false });
    clearInterval(timerId);
  };
  const random = (min, max) => {
    return parseFloat(
      Math.random() * (parseInt(max) - parseInt(min) + 1) + parseInt(min)
    );
  };
  const handelCkickRun = () => {
    if (validationForm() === true) {
      updateStatus({ key: props.data, status: true });
      const timer = setInterval(() => {
        const e = new S3MDataLoadFrame2Entity(
          Math.floor(random(1, 10000)),
          random(minIAH1, maxIAH1).toFixed(2),
          random(minIAH2, maxIAH2).toFixed(2),
          random(minIAH3, maxIAH3).toFixed(2),
          random(minIAH4, maxIAH4).toFixed(2),
          random(minIAH5, maxIAH5).toFixed(2),
          random(minIAH6, maxIAH6).toFixed(2),
          random(minIAH7, maxIAH7).toFixed(2),
          random(minIAH8, maxIAH8).toFixed(2),
          random(minIAH9, maxIAH9).toFixed(2),
          random(minIAH10, maxIAH10).toFixed(2),
          random(minIAH11, maxIAH11).toFixed(2),
          random(minIAH12, maxIAH12).toFixed(2),
          random(minIAH13, maxIAH13).toFixed(2),
          random(minIAH14, maxIAH14).toFixed(2),
          random(minIAH15, maxIAH15).toFixed(2),
          random(minIAH16, maxIAH16).toFixed(2),
          random(minIAH17, maxIAH17).toFixed(2),
          random(minIAH18, maxIAH18).toFixed(2),
          random(minIAH19, maxIAH19).toFixed(2),
          random(minIAH20, maxIAH20).toFixed(2),
          random(minIAH21, maxIAH21).toFixed(2),
          random(minIAH22, maxIAH22).toFixed(2),
          random(minIAH23, maxIAH23).toFixed(2),
          random(minIAH24, maxIAH24).toFixed(2),
          random(minIAH25, maxIAH25).toFixed(2),
          random(minIAH26, maxIAH26).toFixed(2),
          random(minIAH27, maxIAH27).toFixed(2),
          random(minIAH28, maxIAH28).toFixed(2),
          random(minIAH29, maxIAH29).toFixed(2),
          random(minIAH30, maxIAH30).toFixed(2),
          random(minIAH31, maxIAH31).toFixed(2),
          random(minIBH1, maxIBH1).toFixed(2),
          random(minIBH2, maxIBH2).toFixed(2),
          random(minIBH3, maxIBH3).toFixed(2),
          random(minIBH4, maxIBH4).toFixed(2),
          random(minIBH5, maxIBH5).toFixed(2),
          random(minIBH6, maxIBH6).toFixed(2),
          random(minIBH7, maxIBH7).toFixed(2),
          random(minIBH8, maxIBH8).toFixed(2),
          random(minIBH9, maxIBH9).toFixed(2),
          random(minIBH10, maxIBH10).toFixed(2),
          random(minIBH11, maxIBH11).toFixed(2),
          random(minIBH12, maxIBH12).toFixed(2),
          random(minIBH13, maxIBH13).toFixed(2),
          random(minIBH14, maxIBH14).toFixed(2),
          random(minIBH15, maxIBH15).toFixed(2),
          random(minIBH16, maxIBH16).toFixed(2),
          random(minIBH17, maxIBH17).toFixed(2),
          random(minIBH18, maxIBH18).toFixed(2),
          random(minIBH19, maxIBH19).toFixed(2),
          random(minIBH20, maxIBH20).toFixed(2),
          random(minIBH21, maxIBH21).toFixed(2),
          random(minIBH22, maxIBH22).toFixed(2),
          random(minIBH23, maxIBH23).toFixed(2),
          random(minIBH24, maxIBH24).toFixed(2),
          random(minIBH25, maxIBH25).toFixed(2),
          random(minIBH26, maxIBH26).toFixed(2),
          random(minIBH27, maxIBH27).toFixed(2),
          random(minIBH28, maxIBH28).toFixed(2),
          random(minIBH29, maxIBH29).toFixed(2),
          random(minIBH30, maxIBH30).toFixed(2),
          random(minIBH31, maxIBH31).toFixed(2),
          random(minICH1, maxICH1).toFixed(2),
          random(minICH2, maxICH2).toFixed(2),
          random(minICH3, maxICH3).toFixed(2),
          random(minICH4, maxICH4).toFixed(2),
          random(minICH5, maxICH5).toFixed(2),
          random(minICH6, maxICH6).toFixed(2),
          random(minICH7, maxICH7).toFixed(2),
          random(minICH8, maxICH8).toFixed(2),
          random(minICH9, maxICH9).toFixed(2),
          random(minICH10, maxICH10).toFixed(2),
          random(minICH11, maxICH11).toFixed(2),
          random(minICH12, maxICH12).toFixed(2),
          random(minICH13, maxICH13).toFixed(2),
          random(minICH14, maxICH14).toFixed(2),
          random(minICH15, maxICH15).toFixed(2),
          random(minICH16, maxICH16).toFixed(2),
          random(minICH17, maxICH17).toFixed(2),
          random(minICH18, maxICH18).toFixed(2),
          random(minICH19, maxICH19).toFixed(2),
          random(minICH20, maxICH20).toFixed(2),
          random(minICH21, maxICH21).toFixed(2),
          random(minICH22, maxICH22).toFixed(2),
          random(minICH23, maxICH23).toFixed(2),
          random(minICH24, maxICH24).toFixed(2),
          random(minICH25, maxICH25).toFixed(2),
          random(minICH26, maxICH26).toFixed(2),
          random(minICH27, maxICH27).toFixed(2),
          random(minICH28, maxICH28).toFixed(2),
          random(minICH29, maxICH29).toFixed(2),
          random(minICH30, maxICH30).toFixed(2),
          random(minICH31, maxICH31).toFixed(2),
          random(minVABH1, maxVABH1).toFixed(2),
          random(minVABH2, maxVABH2).toFixed(2),
          random(minVABH3, maxVABH3).toFixed(2),
          random(minVABH4, maxVABH4).toFixed(2),
          random(minVABH5, maxVABH5).toFixed(2),
          random(minVABH6, maxVABH6).toFixed(2),
          random(minVABH7, maxVABH7).toFixed(2),
          random(minVABH8, maxVABH8).toFixed(2),
          random(minVABH9, maxVABH9).toFixed(2),
          random(minVABH10, maxVABH10).toFixed(2),
          random(minVABH11, maxVABH11).toFixed(2),
          random(minVABH12, maxVABH12).toFixed(2),
          random(minVABH13, maxVABH13).toFixed(2),
          random(minVABH14, maxVABH14).toFixed(2),
          random(minVABH15, maxVABH15).toFixed(2),
          random(minVABH16, maxVABH16).toFixed(2),
          random(minVABH17, maxVABH17).toFixed(2),
          random(minVABH18, maxVABH18).toFixed(2),
          random(minVABH19, maxVABH19).toFixed(2),
          random(minVABH20, maxVABH20).toFixed(2),
          random(minVABH21, maxVABH21).toFixed(2),
          random(minVABH22, maxVABH22).toFixed(2),
          random(minVABH23, maxVABH23).toFixed(2),
          random(minVABH24, maxVABH24).toFixed(2),
          random(minVABH25, maxVABH25).toFixed(2),
          random(minVABH26, maxVABH26).toFixed(2),
          random(minVABH27, maxVABH27).toFixed(2),
          random(minVABH28, maxVABH28).toFixed(2),
          random(minVABH29, maxVABH29).toFixed(2),
          random(minVABH30, maxVABH30).toFixed(2),
          random(minVABH31, maxVABH31).toFixed(2),
          random(minVBCH1, maxVBCH1).toFixed(2),
          random(minVBCH2, maxVBCH2).toFixed(2),
          random(minVBCH3, maxVBCH3).toFixed(2),
          random(minVBCH4, maxVBCH4).toFixed(2),
          random(minVBCH5, maxVBCH5).toFixed(2),
          random(minVBCH6, maxVBCH6).toFixed(2),
          random(minVBCH7, maxVBCH7).toFixed(2),
          random(minVBCH8, maxVBCH8).toFixed(2),
          random(minVBCH9, maxVBCH9).toFixed(2),
          random(minVBCH10, maxVBCH10).toFixed(2),
          random(minVBCH11, maxVBCH11).toFixed(2),
          random(minVBCH12, maxVBCH12).toFixed(2),
          random(minVBCH13, maxVBCH13).toFixed(2),
          random(minVBCH14, maxVBCH14).toFixed(2),
          random(minVBCH15, maxVBCH15).toFixed(2),
          random(minVBCH16, maxVBCH16).toFixed(2),
          random(minVBCH17, maxVBCH17).toFixed(2),
          random(minVBCH18, maxVBCH18).toFixed(2),
          random(minVBCH19, maxVBCH19).toFixed(2),
          random(minVBCH20, maxVBCH20).toFixed(2),
          random(minVBCH21, maxVBCH21).toFixed(2),
          random(minVBCH22, maxVBCH22).toFixed(2),
          random(minVBCH23, maxVBCH23).toFixed(2),
          random(minVBCH24, maxVBCH24).toFixed(2),
          random(minVBCH25, maxVBCH25).toFixed(2),
          random(minVBCH26, maxVBCH26).toFixed(2),
          random(minVBCH27, maxVBCH27).toFixed(2),
          random(minVBCH28, maxVBCH28).toFixed(2),
          random(minVBCH29, maxVBCH29).toFixed(2),
          random(minVBCH30, maxVBCH30).toFixed(2),
          random(minVBCH31, maxVBCH31).toFixed(2),
          random(minVCAH1, maxVCAH1).toFixed(2),
          random(minVCAH2, maxVCAH2).toFixed(2),
          random(minVCAH3, maxVCAH3).toFixed(2),
          random(minVCAH4, maxVCAH4).toFixed(2),
          random(minVCAH5, maxVCAH5).toFixed(2),
          random(minVCAH6, maxVCAH6).toFixed(2),
          random(minVCAH7, maxVCAH7).toFixed(2),
          random(minVCAH8, maxVCAH8).toFixed(2),
          random(minVCAH9, maxVCAH9).toFixed(2),
          random(minVCAH10, maxVCAH10).toFixed(2),
          random(minVCAH11, maxVCAH11).toFixed(2),
          random(minVCAH12, maxVCAH12).toFixed(2),
          random(minVCAH13, maxVCAH13).toFixed(2),
          random(minVCAH14, maxVCAH14).toFixed(2),
          random(minVCAH15, maxVCAH15).toFixed(2),
          random(minVCAH16, maxVCAH16).toFixed(2),
          random(minVCAH17, maxVCAH17).toFixed(2),
          random(minVCAH18, maxVCAH18).toFixed(2),
          random(minVCAH19, maxVCAH19).toFixed(2),
          random(minVCAH20, maxVCAH20).toFixed(2),
          random(minVCAH21, maxVCAH21).toFixed(2),
          random(minVCAH22, maxVCAH22).toFixed(2),
          random(minVCAH23, maxVCAH23).toFixed(2),
          random(minVCAH24, maxVCAH24).toFixed(2),
          random(minVCAH25, maxVCAH25).toFixed(2),
          random(minVCAH26, maxVCAH26).toFixed(2),
          random(minVCAH27, maxVCAH27).toFixed(2),
          random(minVCAH28, maxVCAH28).toFixed(2),
          random(minVCAH29, maxVCAH29).toFixed(2),
          random(minVCAH30, maxVCAH30).toFixed(2),
          random(minVCAH31, maxVCAH31).toFixed(2),

          random(minVANH1, maxVANH1).toFixed(2),
          random(minVANH2, maxVANH2).toFixed(2),
          random(minVANH3, maxVANH3).toFixed(2),
          random(minVANH4, maxVANH4).toFixed(2),
          random(minVANH5, maxVANH5).toFixed(2),
          random(minVANH6, maxVANH6).toFixed(2),
          random(minVANH7, maxVANH7).toFixed(2),
          random(minVANH8, maxVANH8).toFixed(2),
          random(minVANH9, maxVANH9).toFixed(2),
          random(minVANH10, maxVANH10).toFixed(2),
          random(minVANH11, maxVANH11).toFixed(2),
          random(minVANH12, maxVANH12).toFixed(2),
          random(minVANH13, maxVANH13).toFixed(2),
          random(minVANH14, maxVANH14).toFixed(2),
          random(minVANH15, maxVANH15).toFixed(2),
          random(minVANH16, maxVANH16).toFixed(2),
          random(minVANH17, maxVANH17).toFixed(2),
          random(minVANH18, maxVANH18).toFixed(2),
          random(minVANH19, maxVANH19).toFixed(2),
          random(minVANH20, maxVANH20).toFixed(2),
          random(minVANH21, maxVANH21).toFixed(2),
          random(minVANH22, maxVANH22).toFixed(2),
          random(minVANH23, maxVANH23).toFixed(2),
          random(minVANH24, maxVANH24).toFixed(2),
          random(minVANH25, maxVANH25).toFixed(2),
          random(minVANH26, maxVANH26).toFixed(2),
          random(minVANH27, maxVANH27).toFixed(2),
          random(minVANH28, maxVANH28).toFixed(2),
          random(minVANH29, maxVANH29).toFixed(2),
          random(minVANH30, maxVANH30).toFixed(2),
          random(minVANH31, maxVANH31).toFixed(2),
          random(minVBNH1, maxVBNH1).toFixed(2),
          random(minVBNH2, maxVBNH2).toFixed(2),
          random(minVBNH3, maxVBNH3).toFixed(2),
          random(minVBNH4, maxVBNH4).toFixed(2),
          random(minVBNH5, maxVBNH5).toFixed(2),
          random(minVBNH6, maxVBNH6).toFixed(2),
          random(minVBNH7, maxVBNH7).toFixed(2),
          random(minVBNH8, maxVBNH8).toFixed(2),
          random(minVBNH9, maxVBNH9).toFixed(2),
          random(minVBNH10, maxVBNH10).toFixed(2),
          random(minVBNH11, maxVBNH11).toFixed(2),
          random(minVBNH12, maxVBNH12).toFixed(2),
          random(minVBNH13, maxVBNH13).toFixed(2),
          random(minVBNH14, maxVBNH14).toFixed(2),
          random(minVBNH15, maxVBNH15).toFixed(2),
          random(minVBNH16, maxVBNH16).toFixed(2),
          random(minVBNH17, maxVBNH17).toFixed(2),
          random(minVBNH18, maxVBNH18).toFixed(2),
          random(minVBNH19, maxVBNH19).toFixed(2),
          random(minVBNH20, maxVBNH20).toFixed(2),
          random(minVBNH21, maxVBNH21).toFixed(2),
          random(minVBNH22, maxVBNH22).toFixed(2),
          random(minVBNH23, maxVBNH23).toFixed(2),
          random(minVBNH24, maxVBNH24).toFixed(2),
          random(minVBNH25, maxVBNH25).toFixed(2),
          random(minVBNH26, maxVBNH26).toFixed(2),
          random(minVBNH27, maxVBNH27).toFixed(2),
          random(minVBNH28, maxVBNH28).toFixed(2),
          random(minVBNH29, maxVBNH29).toFixed(2),
          random(minVBNH30, maxVBNH30).toFixed(2),
          random(minVBNH31, maxVBNH31).toFixed(2),
          random(minVCNH1, maxVCNH1).toFixed(2),
          random(minVCNH2, maxVCNH2).toFixed(2),
          random(minVCNH3, maxVCNH3).toFixed(2),
          random(minVCNH4, maxVCNH4).toFixed(2),
          random(minVCNH5, maxVCNH5).toFixed(2),
          random(minVCNH6, maxVCNH6).toFixed(2),
          random(minVCNH7, maxVCNH7).toFixed(2),
          random(minVCNH8, maxVCNH8).toFixed(2),
          random(minVCNH9, maxVCNH9).toFixed(2),
          random(minVCNH10, maxVCNH10).toFixed(2),
          random(minVCNH11, maxVCNH11).toFixed(2),
          random(minVCNH12, maxVCNH12).toFixed(2),
          random(minVCNH13, maxVCNH13).toFixed(2),
          random(minVCNH14, maxVCNH14).toFixed(2),
          random(minVCNH15, maxVCNH15).toFixed(2),
          random(minVCNH16, maxVCNH16).toFixed(2),
          random(minVCNH17, maxVCNH17).toFixed(2),
          random(minVCNH18, maxVCNH18).toFixed(2),
          random(minVCNH19, maxVCNH19).toFixed(2),
          random(minVCNH20, maxVCNH20).toFixed(2),
          random(minVCNH21, maxVCNH21).toFixed(2),
          random(minVCNH22, maxVCNH22).toFixed(2),
          random(minVCNH23, maxVCNH23).toFixed(2),
          random(minVCNH24, maxVCNH24).toFixed(2),
          random(minVCNH25, maxVCNH25).toFixed(2),
          random(minVCNH26, maxVCNH26).toFixed(2),
          random(minVCNH27, maxVCNH27).toFixed(2),
          random(minVCNH28, maxVCNH28).toFixed(2),
          random(minVCNH29, maxVCNH29).toFixed(2),
          random(minVCNH30, maxVCNH30).toFixed(2),
          random(minVCNH31, maxVCNH31).toFixed(2),
          formatDateToDDMMYYYYHHMMSS(new Date()),
          Math.floor(new Date().getTime() / 1000),
          Math.floor(random(1, 20))
        );
        console.log(e);
        sendmessageframe2(
          e,
          {
            url: url,
            username: username,
            password: password,
            client: client,
            topic: topic,
          },
          {
            typeSystem: typeSystem,
            typeDevice: typeDevice,
            country: country,
            province: province,
            codeCustomer: codeCustomer,
            codeProject: codeProject,
            a1: a1,
            a2: a2,
            a3: a3,
            a4: a4,
            a5: a5,
            func: func,
            messageType: messageType,
            crc: crc,
          }
        );
      }, 3000);
      setTimerId(timer);

      return () => clearInterval(timer);
    } else {
      // toastErrorAccessory("Dữ liệu truyền vào không hợp lệ");
    }
  };
  const toastErrorAccessory = (message) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const toastSuccessAccessory = (message) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const onChangeSw = (checked) => {
    setDisable(checked);
    handelCkickStop();
  };
  const updateStatus = (payload) => {
    dispatch(updatestatus2(payload));
  };
  const onChangeTime = (time, timeString) => {
    setStartTime(new Date(timeString[0]));
    setEndTime(new Date(timeString[1]));
  };
  const checkTime = () => {
    if (
      startTime === undefined ||
      startTime === "" ||
      endTime === undefined ||
      endTime === ""
    ) {
      toastErrorAccessory("Chưa nhập giờ!");
      return;
    } else {
      toastSuccessAccessory("Đã bắt đầu!");
    }

    const id = setInterval(() => {
      const nows = new Date();
      const st = new Date(startTime);
      const end = new Date(endTime);
      if (
        nows.getDate() == st.getDate() &&
        nows.getMonth() == st.getMonth() &&
        nows.getFullYear() == st.getFullYear() &&
        nows.getHours() == st.getHours() &&
        nows.getMinutes() == st.getMinutes() &&
        nows.getSeconds() == st.getSeconds()
      ) {
        handelCkickRun();
      }
      if (
        nows.getDate() == end.getDate() &&
        nows.getMonth() == end.getMonth() &&
        nows.getFullYear() == end.getFullYear() &&
        nows.getHours() == end.getHours() &&
        nows.getMinutes() == end.getMinutes() &&
        nows.getSeconds() == end.getSeconds()
      ) {
        clearInterval(id);
        onChangeSw();
      }
    }, 1000);
  };

  const validationForm = () => {
    if (url === "") {
      toastErrorAccessory("URL không được để trống");
      return false;
    }
    if (username === "") {
      toastErrorAccessory("Username không được để trống");
      return false;
    }
    if (password === "") {
      toastErrorAccessory("Password không được để trống");
      return false;
    }
    if (client === "") {
      toastErrorAccessory("Client ID không được để trống");
      return false;
    }
    if (topic === "") {
      toastErrorAccessory("Topic không được để trống");
      return false;
    }
    if (typeSystem === "") {
      toastErrorAccessory("TypeSystem không được để trống");
      return false;
    }
    if (typeDevice === "") {
      toastErrorAccessory("TypeDevice không được để trống");
      return false;
    }
    if (country === "") {
      toastErrorAccessory("Country không được để trống");
      return false;
    }
    if (province === "") {
      toastErrorAccessory("Province không được để trống");
      return false;
    }
    if (codeCustomer === "") {
      toastErrorAccessory("CodeCustomer không được để trống");
      return false;
    }
    if (codeProject === "") {
      toastErrorAccessory("CodeProject không được để trống");
      return false;
    }
    if (a1 === "") {
      toastErrorAccessory("A1 không được để trống");
      return false;
    }
    if (a2 === "") {
      toastErrorAccessory("A2 không được để trống");
      return false;
    }
    if (a3 === "") {
      toastErrorAccessory("A3 không được để trống");
      return false;
    }
    if (a4 === "") {
      toastErrorAccessory("A4 không được để trống");
      return false;
    }
    if (a5 === "") {
      toastErrorAccessory("A5 không được để trống");
      return false;
    }
    if (func === "") {
      toastErrorAccessory("Func không được để trống");
      return false;
    }
    if (messageType === "") {
      toastErrorAccessory("MessageType không được để trống");
      return false;
    }
    if (crc === "") {
      toastErrorAccessory("Crc không được để trống");
      return false;
    }
    if (minIAH1 < 0 || maxIAH1 > 100 || minIAH1 === "" || maxIAH1 === "") {
      setMinIAH1Error(true);
      setMaxIAH1Error(true);
      toastErrorAccessory(
        "Giá trị IAH1 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minIAH1 > maxIAH1) {
      setMinIAH1Error(true);
      setMaxIAH1Error(true);
      toastErrorAccessory("Giá trị Min IAH1 phải nhỏ hơn Max IAH1");
      return false;
    } else {
      setMinIAH1Error(false);
      setMaxIAH1Error(false);
    }

    if (minIAH2 < 0 || maxIAH2 > 100 || minIAH2 === "" || maxIAH2 === "") {
      setMinIAH2Error(true);
      setMaxIAH2Error(true);
      toastErrorAccessory(
        "Giá trị IAH2 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minIAH2 > maxIAH2) {
      setMinIAH2Error(true);
      setMaxIAH2Error(true);
      toastErrorAccessory("Giá trị Min IAH2 phải nhỏ hơn Max IAH2");
      return false;
    } else {
      setMinIAH2Error(false);
      setMaxIAH2Error(false);
    }

    if (minIAH3 < 0 || maxIAH3 > 100 || minIAH3 === "" || maxIAH3 === "") {
      setMinIAH3Error(true);
      setMaxIAH3Error(true);
      toastErrorAccessory(
        "Giá trị IAH3 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minIAH3 > maxIAH3) {
      setMinIAH3Error(true);
      setMaxIAH3Error(true);
      toastErrorAccessory("Giá trị Min IAH3 phải nhỏ hơn Max IAH3");
      return false;
    } else {
      setMinIAH3Error(false);
      setMaxIAH3Error(false);
    }

    if (minIAH4 < 0 || maxIAH4 > 100 || minIAH4 === "" || maxIAH4 === "") {
      setMinIAH4Error(true);
      setMaxIAH4Error(true);
      toastErrorAccessory(
        "Giá trị IAH4 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minIAH4 > maxIAH4) {
      setMinIAH4Error(true);
      setMaxIAH4Error(true);
      toastErrorAccessory("Giá trị Min IAH4 phải nhỏ hơn Max IAH4");
      return false;
    } else {
      setMinIAH4Error(false);
      setMaxIAH4Error(false);
    }

    if (minIAH5 < 0 || maxIAH5 > 100 || minIAH5 === "" || maxIAH5 === "") {
      setMinIAH5Error(true);
      setMaxIAH5Error(true);
      toastErrorAccessory(
        "Giá trị IAH5 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minIAH5 > maxIAH5) {
      setMinIAH5Error(true);
      setMaxIAH5Error(true);
      toastErrorAccessory("Giá trị Min IAH5 phải nhỏ hơn Max IAH5");
      return false;
    } else {
      setMinIAH5Error(false);
      setMaxIAH5Error(false);
    }

    if (minIAH6 < 0 || maxIAH6 > 100 || minIAH6 === "" || maxIAH6 === "") {
      setMinIAH6Error(true);
      setMaxIAH6Error(true);
      toastErrorAccessory(
        "Giá trị IAH6 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minIAH6 > maxIAH6) {
      setMinIAH6Error(true);
      setMaxIAH6Error(true);
      toastErrorAccessory("Giá trị Min IAH6 phải nhỏ hơn Max IAH6");
      return false;
    } else {
      setMinIAH6Error(false);
      setMaxIAH6Error(false);
    }

    if (minIAH7 < 0 || maxIAH7 > 100 || minIAH7 === "" || maxIAH7 === "") {
      setMinIAH7Error(true);
      setMaxIAH7Error(true);
      toastErrorAccessory(
        "Giá trị IAH7 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minIAH7 > maxIAH7) {
      setMinIAH7Error(true);
      setMaxIAH7Error(true);
      toastErrorAccessory("Giá trị Min IAH7 phải nhỏ hơn Max IAH7");
      return false;
    } else {
      setMinIAH7Error(false);
      setMaxIAH7Error(false);
    }

    if (minIAH8 < 0 || maxIAH8 > 100 || minIAH8 === "" || maxIAH8 === "") {
      setMinIAH8Error(true);
      setMaxIAH8Error(true);
      toastErrorAccessory(
        "Giá trị IAH8 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minIAH8 > maxIAH8) {
      setMinIAH8Error(true);
      setMaxIAH8Error(true);
      toastErrorAccessory("Giá trị Min IAH8 phải nhỏ hơn Max IAH8");
      return false;
    } else {
      setMinIAH8Error(false);
      setMaxIAH8Error(false);
    }

    if (minIAH9 < 0 || maxIAH9 > 100 || minIAH9 === "" || maxIAH9 === "") {
      setMinIAH9Error(true);
      setMaxIAH9Error(true);
      toastErrorAccessory(
        "Giá trị IAH9 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minIAH9 > maxIAH9) {
      setMinIAH9Error(true);
      setMaxIAH9Error(true);
      toastErrorAccessory("Giá trị Min IAH9 phải nhỏ hơn Max IAH9");
      return false;
    } else {
      setMinIAH9Error(false);
      setMaxIAH9Error(false);
    }

    if (minIAH10 < 0 || maxIAH10 > 100 || minIAH10 === "" || maxIAH10 === "") {
      setMinIAH10Error(true);
      setMaxIAH10Error(true);
      toastErrorAccessory(
        "Giá trị IAH10 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minIAH10 > maxIAH10) {
      setMinIAH10Error(true);
      setMaxIAH10Error(true);
      toastErrorAccessory("Giá trị Min IAH10 phải nhỏ hơn Max IAH10");
      return false;
    } else {
      setMinIAH10Error(false);
      setMaxIAH10Error(false);
    }

    if (minIAH11 < 0 || maxIAH11 > 100 || minIAH11 === "" || maxIAH11 === "") {
      setMinIAH11Error(true);
      setMaxIAH11Error(true);
      toastErrorAccessory(
        "Giá trị IAH11 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minIAH11 > maxIAH11) {
      setMinIAH11Error(true);
      setMaxIAH11Error(true);
      toastErrorAccessory("Giá trị Min IAH11 phải nhỏ hơn Max IAH11");
      return false;
    } else {
      setMinIAH11Error(false);
      setMaxIAH11Error(false);
    }

    if (minIAH12 < 0 || maxIAH12 > 100 || minIAH12 === "" || maxIAH12 === "") {
      setMinIAH12Error(true);
      setMaxIAH12Error(true);
      toastErrorAccessory(
        "Giá trị IAH12 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minIAH12 > maxIAH12) {
      setMinIAH12Error(true);
      setMaxIAH12Error(true);
      toastErrorAccessory("Giá trị Min IAH12 phải nhỏ hơn Max IAH12");
      return false;
    } else {
      setMinIAH12Error(false);
      setMaxIAH12Error(false);
    }

    if (minIAH13 < 0 || maxIAH13 > 100 || minIAH13 === "" || maxIAH13 === "") {
      setMinIAH13Error(true);
      setMaxIAH13Error(true);
      toastErrorAccessory(
        "Giá trị IAH13 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minIAH13 > maxIAH13) {
      setMinIAH13Error(true);
      setMaxIAH13Error(true);
      toastErrorAccessory("Giá trị Min IAH13 phải nhỏ hơn Max IAH13");
      return false;
    } else {
      setMinIAH13Error(false);
      setMaxIAH13Error(false);
    }

    if (minIAH14 < 0 || maxIAH14 > 100 || minIAH14 === "" || maxIAH14 === "") {
      setMinIAH14Error(true);
      setMaxIAH14Error(true);
      toastErrorAccessory(
        "Giá trị IAH14 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minIAH14 > maxIAH14) {
      setMinIAH14Error(true);
      setMaxIAH14Error(true);
      toastErrorAccessory("Giá trị Min IAH14 phải nhỏ hơn Max IAH14");
      return false;
    } else {
      setMinIAH14Error(false);
      setMaxIAH14Error(false);
    }

    if (minIAH15 < 0 || maxIAH15 > 100 || minIAH15 === "" || maxIAH15 === "") {
      setMinIAH15Error(true);
      setMaxIAH15Error(true);
      toastErrorAccessory(
        "Giá trị IAH15 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minIAH15 > maxIAH15) {
      setMinIAH15Error(true);
      setMaxIAH15Error(true);
      toastErrorAccessory("Giá trị Min IAH15 phải nhỏ hơn Max IAH15");
      return false;
    } else {
      setMinIAH15Error(false);
      setMaxIAH15Error(false);
    }

    if (minIAH16 < 0 || maxIAH16 > 100 || minIAH16 === "" || maxIAH16 === "") {
      setMinIAH16Error(true);
      setMaxIAH16Error(true);
      toastErrorAccessory(
        "Giá trị IAH16 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minIAH16 > maxIAH16) {
      setMinIAH16Error(true);
      setMaxIAH16Error(true);
      toastErrorAccessory("Giá trị Min IAH16 phải nhỏ hơn Max IAH16");
      return false;
    } else {
      setMinIAH16Error(false);
      setMaxIAH16Error(false);
    }

    if (minIAH17 < 0 || maxIAH17 > 100 || minIAH17 === "" || maxIAH17 === "") {
      setMinIAH17Error(true);
      setMaxIAH17Error(true);
      toastErrorAccessory(
        "Giá trị IAH17 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minIAH17 > maxIAH17) {
      setMinIAH17Error(true);
      setMaxIAH17Error(true);
      toastErrorAccessory("Giá trị Min IAH17 phải nhỏ hơn Max IAH17");
      return false;
    } else {
      setMinIAH17Error(false);
      setMaxIAH17Error(false);
    }

    if (minIAH18 < 0 || maxIAH18 > 100 || minIAH18 === "" || maxIAH18 === "") {
      setMinIAH18Error(true);
      setMaxIAH18Error(true);
      toastErrorAccessory(
        "Giá trị IAH18 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minIAH18 > maxIAH18) {
      setMinIAH18Error(true);
      setMaxIAH18Error(true);
      toastErrorAccessory("Giá trị Min IAH18 phải nhỏ hơn Max IAH18");
      return false;
    } else {
      setMinIAH18Error(false);
      setMaxIAH18Error(false);
    }

    if (minIAH19 < 0 || maxIAH19 > 100 || minIAH19 === "" || maxIAH19 === "") {
      setMinIAH19Error(true);
      setMaxIAH19Error(true);
      toastErrorAccessory(
        "Giá trị IAH19 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minIAH19 > maxIAH19) {
      setMinIAH19Error(true);
      setMaxIAH19Error(true);
      toastErrorAccessory("Giá trị Min IAH19 phải nhỏ hơn Max IAH19");
      return false;
    } else {
      setMinIAH19Error(false);
      setMaxIAH19Error(false);
    }

    if (minIAH20 < 0 || maxIAH20 > 100 || minIAH20 === "" || maxIAH20 === "") {
      setMinIAH20Error(true);
      setMaxIAH20Error(true);
      toastErrorAccessory(
        "Giá trị IAH20 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minIAH20 > maxIAH20) {
      setMinIAH20Error(true);
      setMaxIAH20Error(true);
      toastErrorAccessory("Giá trị Min IAH20 phải nhỏ hơn Max IAH20");
      return false;
    } else {
      setMinIAH20Error(false);
      setMaxIAH20Error(false);
    }

    if (minIAH21 < 0 || maxIAH21 > 100 || minIAH21 === "" || maxIAH21 === "") {
      setMinIAH21Error(true);
      setMaxIAH21Error(true);
      toastErrorAccessory(
        "Giá trị IAH21 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minIAH21 > maxIAH21) {
      setMinIAH21Error(true);
      setMaxIAH21Error(true);
      toastErrorAccessory("Giá trị Min IAH21 phải nhỏ hơn Max IAH21");
      return false;
    } else {
      setMinIAH21Error(false);
      setMaxIAH21Error(false);
    }

    if (minIAH22 < 0 || maxIAH22 > 100 || minIAH22 === "" || maxIAH22 === "") {
      setMinIAH22Error(true);
      setMaxIAH22Error(true);
      toastErrorAccessory(
        "Giá trị IAH22 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minIAH22 > maxIAH22) {
      setMinIAH22Error(true);
      setMaxIAH22Error(true);
      toastErrorAccessory("Giá trị Min IAH22 phải nhỏ hơn Max IAH22");
      return false;
    } else {
      setMinIAH22Error(false);
      setMaxIAH22Error(false);
    }

    if (minIAH23 < 0 || maxIAH23 > 100 || minIAH23 === "" || maxIAH23 === "") {
      setMinIAH23Error(true);
      setMaxIAH23Error(true);
      toastErrorAccessory(
        "Giá trị IAH23 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minIAH23 > maxIAH23) {
      setMinIAH23Error(true);
      setMaxIAH23Error(true);
      toastErrorAccessory("Giá trị Min IAH23 phải nhỏ hơn Max IAH23");
      return false;
    } else {
      setMinIAH23Error(false);
      setMaxIAH23Error(false);
    }

    if (minIAH24 < 0 || maxIAH24 > 100 || minIAH24 === "" || maxIAH24 === "") {
      setMinIAH24Error(true);
      setMaxIAH24Error(true);
      toastErrorAccessory(
        "Giá trị IAH24 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minIAH24 > maxIAH24) {
      setMinIAH24Error(true);
      setMaxIAH24Error(true);
      toastErrorAccessory("Giá trị Min IAH24 phải nhỏ hơn Max IAH24");
      return false;
    } else {
      setMinIAH24Error(false);
      setMaxIAH24Error(false);
    }

    if (minIAH25 < 0 || maxIAH25 > 100 || minIAH25 === "" || maxIAH25 === "") {
      setMinIAH25Error(true);
      setMaxIAH25Error(true);
      toastErrorAccessory(
        "Giá trị IAH25 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minIAH25 > maxIAH25) {
      setMinIAH25Error(true);
      setMaxIAH25Error(true);
      toastErrorAccessory("Giá trị Min IAH25 phải nhỏ hơn Max IAH25");
      return false;
    } else {
      setMinIAH25Error(false);
      setMaxIAH25Error(false);
    }

    if (minIAH26 < 0 || maxIAH26 > 100 || minIAH26 === "" || maxIAH26 === "") {
      setMinIAH26Error(true);
      setMaxIAH26Error(true);
      toastErrorAccessory(
        "Giá trị IAH26 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minIAH26 > maxIAH26) {
      setMinIAH26Error(true);
      setMaxIAH26Error(true);
      toastErrorAccessory("Giá trị Min IAH26 phải nhỏ hơn Max IAH26");
      return false;
    } else {
      setMinIAH26Error(false);
      setMaxIAH26Error(false);
    }

    if (minIAH27 < 0 || maxIAH27 > 100 || minIAH27 === "" || maxIAH27 === "") {
      setMinIAH27Error(true);
      setMaxIAH27Error(true);
      toastErrorAccessory(
        "Giá trị IAH27 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minIAH27 > maxIAH27) {
      setMinIAH27Error(true);
      setMaxIAH27Error(true);
      toastErrorAccessory("Giá trị Min IAH27 phải nhỏ hơn Max IAH27");
      return false;
    } else {
      setMinIAH27Error(false);
      setMaxIAH27Error(false);
    }

    if (minIAH28 < 0 || maxIAH28 > 100 || minIAH28 === "" || maxIAH28 === "") {
      setMinIAH28Error(true);
      setMaxIAH28Error(true);
      toastErrorAccessory(
        "Giá trị IAH28 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minIAH28 > maxIAH28) {
      setMinIAH28Error(true);
      setMaxIAH28Error(true);
      toastErrorAccessory("Giá trị Min IAH28 phải nhỏ hơn Max IAH28");
      return false;
    } else {
      setMinIAH28Error(false);
      setMaxIAH28Error(false);
    }

    if (minIAH29 < 0 || maxIAH29 > 100 || minIAH29 === "" || maxIAH29 === "") {
      setMinIAH29Error(true);
      setMaxIAH29Error(true);
      toastErrorAccessory(
        "Giá trị IAH29 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minIAH29 > maxIAH29) {
      setMinIAH29Error(true);
      setMaxIAH29Error(true);
      toastErrorAccessory("Giá trị Min IAH29 phải nhỏ hơn Max IAH29");
      return false;
    } else {
      setMinIAH29Error(false);
      setMaxIAH29Error(false);
    }

    if (minIAH30 < 0 || maxIAH30 > 100 || minIAH30 === "" || maxIAH30 === "") {
      setMinIAH30Error(true);
      setMaxIAH30Error(true);
      toastErrorAccessory(
        "Giá trị IAH30 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minIAH30 > maxIAH30) {
      setMinIAH30Error(true);
      setMaxIAH30Error(true);
      toastErrorAccessory("Giá trị Min IAH30 phải nhỏ hơn Max IAH30");
      return false;
    } else {
      setMinIAH30Error(false);
      setMaxIAH30Error(false);
    }

    if (minIAH31 < 0 || maxIAH31 > 100 || minIAH31 === "" || maxIAH31 === "") {
      setMinIAH31Error(true);
      setMaxIAH31Error(true);
      toastErrorAccessory(
        "Giá trị IAH31 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minIAH31 > maxIAH31) {
      setMinIAH31Error(true);
      setMaxIAH31Error(true);
      toastErrorAccessory("Giá trị Min IAH31 phải nhỏ hơn Max IAH31");
      return false;
    } else {
      setMinIAH31Error(false);
      setMaxIAH31Error(false);
    }

    if (minIBH1 < 0 || maxIBH1 > 100 || minIBH1 === "" || maxIBH1 === "") {
      setMinIBH1Error(true);
      setMaxIBH1Error(true);
      toastErrorAccessory(
        "Giá trị IBH1 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minIBH1 > maxIBH1) {
      setMinIBH1Error(true);
      setMaxIBH1Error(true);
      toastErrorAccessory("Giá trị Min IBH1 phải nhỏ hơn Max IBH1");
      return false;
    } else {
      setMinIBH1Error(false);
      setMaxIBH1Error(false);
    }

    if (minIBH2 < 0 || maxIBH2 > 100 || minIBH2 === "" || maxIBH2 === "") {
      setMinIBH2Error(true);
      setMaxIBH2Error(true);
      toastErrorAccessory(
        "Giá trị IBH2 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minIBH2 > maxIBH2) {
      setMinIBH2Error(true);
      setMaxIBH2Error(true);
      toastErrorAccessory("Giá trị Min IBH2 phải nhỏ hơn Max IBH2");
      return false;
    } else {
      setMinIBH2Error(false);
      setMaxIBH2Error(false);
    }

    if (minIBH3 < 0 || maxIBH3 > 100 || minIBH3 === "" || maxIBH3 === "") {
      setMinIBH3Error(true);
      setMaxIBH3Error(true);
      toastErrorAccessory(
        "Giá trị IBH3 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minIBH3 > maxIBH3) {
      setMinIBH3Error(true);
      setMaxIBH3Error(true);
      toastErrorAccessory("Giá trị Min IBH3 phải nhỏ hơn Max IBH3");
      return false;
    } else {
      setMinIBH3Error(false);
      setMaxIBH3Error(false);
    }

    if (minIBH4 < 0 || maxIBH4 > 100 || minIBH4 === "" || maxIBH4 === "") {
      setMinIBH4Error(true);
      setMaxIBH4Error(true);
      toastErrorAccessory(
        "Giá trị IBH4 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minIBH4 > maxIBH4) {
      setMinIBH4Error(true);
      setMaxIBH4Error(true);
      toastErrorAccessory("Giá trị Min IBH4 phải nhỏ hơn Max IBH4");
      return false;
    } else {
      setMinIBH4Error(false);
      setMaxIBH4Error(false);
    }

    if (minIBH5 < 0 || maxIBH5 > 100 || minIBH5 === "" || maxIBH5 === "") {
      setMinIBH5Error(true);
      setMaxIBH5Error(true);
      toastErrorAccessory(
        "Giá trị IBH5 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minIBH5 > maxIBH5) {
      setMinIBH5Error(true);
      setMaxIBH5Error(true);
      toastErrorAccessory("Giá trị Min IBH5 phải nhỏ hơn Max IBH5");
      return false;
    } else {
      setMinIBH5Error(false);
      setMaxIBH5Error(false);
    }

    if (minIBH6 < 0 || maxIBH6 > 100 || minIBH6 === "" || maxIBH6 === "") {
      setMinIBH6Error(true);
      setMaxIBH6Error(true);
      toastErrorAccessory(
        "Giá trị IBH6 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minIBH6 > maxIBH6) {
      setMinIBH6Error(true);
      setMaxIBH6Error(true);
      toastErrorAccessory("Giá trị Min IBH6 phải nhỏ hơn Max IBH6");
      return false;
    } else {
      setMinIBH6Error(false);
      setMaxIBH6Error(false);
    }

    if (minIBH7 < 0 || maxIBH7 > 100 || minIBH7 === "" || maxIBH7 === "") {
      setMinIBH7Error(true);
      setMaxIBH7Error(true);
      toastErrorAccessory(
        "Giá trị IBH7 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minIBH7 > maxIBH7) {
      setMinIBH7Error(true);
      setMaxIBH7Error(true);
      toastErrorAccessory("Giá trị Min IBH7 phải nhỏ hơn Max IBH7");
      return false;
    } else {
      setMinIBH7Error(false);
      setMaxIBH7Error(false);
    }

    if (minIBH8 < 0 || maxIBH8 > 100 || minIBH8 === "" || maxIBH8 === "") {
      setMinIBH8Error(true);
      setMaxIBH8Error(true);
      toastErrorAccessory(
        "Giá trị IBH8 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minIBH8 > maxIBH8) {
      setMinIBH8Error(true);
      setMaxIBH8Error(true);
      toastErrorAccessory("Giá trị Min IBH8 phải nhỏ hơn Max IBH8");
      return false;
    } else {
      setMinIBH8Error(false);
      setMaxIBH8Error(false);
    }

    if (minIBH9 < 0 || maxIBH9 > 100 || minIBH9 === "" || maxIBH9 === "") {
      setMinIBH9Error(true);
      setMaxIBH9Error(true);
      toastErrorAccessory(
        "Giá trị IBH9 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minIBH9 > maxIBH9) {
      setMinIBH9Error(true);
      setMaxIBH9Error(true);
      toastErrorAccessory("Giá trị Min IBH9 phải nhỏ hơn Max IBH9");
      return false;
    } else {
      setMinIBH9Error(false);
      setMaxIBH9Error(false);
    }

    if (minIBH10 < 0 || maxIBH10 > 100 || minIBH10 === "" || maxIBH10 === "") {
      setMinIBH10Error(true);
      setMaxIBH10Error(true);
      toastErrorAccessory(
        "Giá trị IBH10 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minIBH10 > maxIBH10) {
      setMinIBH10Error(true);
      setMaxIBH10Error(true);
      toastErrorAccessory("Giá trị Min IBH10 phải nhỏ hơn Max IBH10");
      return false;
    } else {
      setMinIBH10Error(false);
      setMaxIBH10Error(false);
    }

    if (minIBH11 < 0 || maxIBH11 > 100 || minIBH11 === "" || maxIBH11 === "") {
      setMinIBH11Error(true);
      setMaxIBH11Error(true);
      toastErrorAccessory(
        "Giá trị IBH11 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minIBH11 > maxIBH11) {
      setMinIBH11Error(true);
      setMaxIBH11Error(true);
      toastErrorAccessory("Giá trị Min IBH11 phải nhỏ hơn Max IBH11");
      return false;
    } else {
      setMinIBH11Error(false);
      setMaxIBH11Error(false);
    }

    if (minIBH12 < 0 || maxIBH12 > 100 || minIBH12 === "" || maxIBH12 === "") {
      setMinIBH12Error(true);
      setMaxIBH12Error(true);
      toastErrorAccessory(
        "Giá trị IBH12 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minIBH12 > maxIBH12) {
      setMinIBH12Error(true);
      setMaxIBH12Error(true);
      toastErrorAccessory("Giá trị Min IBH12 phải nhỏ hơn Max IBH12");
      return false;
    } else {
      setMinIBH12Error(false);
      setMaxIBH12Error(false);
    }

    if (minIBH13 < 0 || maxIBH13 > 100 || minIBH13 === "" || maxIBH13 === "") {
      setMinIBH13Error(true);
      setMaxIBH13Error(true);
      toastErrorAccessory(
        "Giá trị IBH13 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minIBH13 > maxIBH13) {
      setMinIBH13Error(true);
      setMaxIBH13Error(true);
      toastErrorAccessory("Giá trị Min IBH13 phải nhỏ hơn Max IBH13");
      return false;
    } else {
      setMinIBH13Error(false);
      setMaxIBH13Error(false);
    }

    if (minIBH14 < 0 || maxIBH14 > 100 || minIBH14 === "" || maxIBH14 === "") {
      setMinIBH14Error(true);
      setMaxIBH14Error(true);
      toastErrorAccessory(
        "Giá trị IBH14 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minIBH14 > maxIBH14) {
      setMinIBH14Error(true);
      setMaxIBH14Error(true);
      toastErrorAccessory("Giá trị Min IBH14 phải nhỏ hơn Max IBH14");
      return false;
    } else {
      setMinIBH14Error(false);
      setMaxIBH14Error(false);
    }

    if (minIBH15 < 0 || maxIBH15 > 100 || minIBH15 === "" || maxIBH15 === "") {
      setMinIBH15Error(true);
      setMaxIBH15Error(true);
      toastErrorAccessory(
        "Giá trị IBH15 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minIBH15 > maxIBH15) {
      setMinIBH15Error(true);
      setMaxIBH15Error(true);
      toastErrorAccessory("Giá trị Min IBH15 phải nhỏ hơn Max IBH15");
      return false;
    } else {
      setMinIBH15Error(false);
      setMaxIBH15Error(false);
    }

    if (minIBH16 < 0 || maxIBH16 > 100 || minIBH16 === "" || maxIBH16 === "") {
      setMinIBH16Error(true);
      setMaxIBH16Error(true);
      toastErrorAccessory(
        "Giá trị IBH16 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minIBH16 > maxIBH16) {
      setMinIBH16Error(true);
      setMaxIBH16Error(true);
      toastErrorAccessory("Giá trị Min IBH16 phải nhỏ hơn Max IBH16");
      return false;
    } else {
      setMinIBH16Error(false);
      setMaxIBH16Error(false);
    }

    if (minIBH17 < 0 || maxIBH17 > 100 || minIBH17 === "" || maxIBH17 === "") {
      setMinIBH17Error(true);
      setMaxIBH17Error(true);
      toastErrorAccessory(
        "Giá trị IBH17 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minIBH17 > maxIBH17) {
      setMinIBH17Error(true);
      setMaxIBH17Error(true);
      toastErrorAccessory("Giá trị Min IBH17 phải nhỏ hơn Max IBH17");
      return false;
    } else {
      setMinIBH17Error(false);
      setMaxIBH17Error(false);
    }

    if (minIBH18 < 0 || maxIBH18 > 100 || minIBH18 === "" || maxIBH18 === "") {
      setMinIBH18Error(true);
      setMaxIBH18Error(true);
      toastErrorAccessory(
        "Giá trị IBH18 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minIBH18 > maxIBH18) {
      setMinIBH18Error(true);
      setMaxIBH18Error(true);
      toastErrorAccessory("Giá trị Min IBH18 phải nhỏ hơn Max IBH18");
      return false;
    } else {
      setMinIBH18Error(false);
      setMaxIBH18Error(false);
    }

    if (minIBH19 < 0 || maxIBH19 > 100 || minIBH19 === "" || maxIBH19 === "") {
      setMinIBH19Error(true);
      setMaxIBH19Error(true);
      toastErrorAccessory(
        "Giá trị IBH19 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minIBH19 > maxIBH19) {
      setMinIBH19Error(true);
      setMaxIBH19Error(true);
      toastErrorAccessory("Giá trị Min IBH19 phải nhỏ hơn Max IBH19");
      return false;
    } else {
      setMinIBH19Error(false);
      setMaxIBH19Error(false);
    }

    if (minIBH20 < 0 || maxIBH20 > 100 || minIBH20 === "" || maxIBH20 === "") {
      setMinIBH20Error(true);
      setMaxIBH20Error(true);
      toastErrorAccessory(
        "Giá trị IBH20 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minIBH20 > maxIBH20) {
      setMinIBH20Error(true);
      setMaxIBH20Error(true);
      toastErrorAccessory("Giá trị Min IBH20 phải nhỏ hơn Max IBH20");
      return false;
    } else {
      setMinIBH20Error(false);
      setMaxIBH20Error(false);
    }

    if (minIBH21 < 0 || maxIBH21 > 100 || minIBH21 === "" || maxIBH21 === "") {
      setMinIBH21Error(true);
      setMaxIBH21Error(true);
      toastErrorAccessory(
        "Giá trị IBH21 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minIBH21 > maxIBH21) {
      setMinIBH21Error(true);
      setMaxIBH21Error(true);
      toastErrorAccessory("Giá trị Min IBH21 phải nhỏ hơn Max IBH21");
      return false;
    } else {
      setMinIBH21Error(false);
      setMaxIBH21Error(false);
    }

    if (minIBH22 < 0 || maxIBH22 > 100 || minIBH22 === "" || maxIBH22 === "") {
      setMinIBH22Error(true);
      setMaxIBH22Error(true);
      toastErrorAccessory(
        "Giá trị IBH22 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minIBH22 > maxIBH22) {
      setMinIBH22Error(true);
      setMaxIBH22Error(true);
      toastErrorAccessory("Giá trị Min IBH22 phải nhỏ hơn Max IBH22");
      return false;
    } else {
      setMinIBH22Error(false);
      setMaxIBH22Error(false);
    }

    if (minIBH23 < 0 || maxIBH23 > 100 || minIBH23 === "" || maxIBH23 === "") {
      setMinIBH23Error(true);
      setMaxIBH23Error(true);
      toastErrorAccessory(
        "Giá trị IBH23 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minIBH23 > maxIBH23) {
      setMinIBH23Error(true);
      setMaxIBH23Error(true);
      toastErrorAccessory("Giá trị Min IBH23 phải nhỏ hơn Max IBH23");
      return false;
    } else {
      setMinIBH23Error(false);
      setMaxIBH23Error(false);
    }

    if (minIBH24 < 0 || maxIBH24 > 100 || minIBH24 === "" || maxIBH24 === "") {
      setMinIBH24Error(true);
      setMaxIBH24Error(true);
      toastErrorAccessory(
        "Giá trị IBH24 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minIBH24 > maxIBH24) {
      setMinIBH24Error(true);
      setMaxIBH24Error(true);
      toastErrorAccessory("Giá trị Min IBH24 phải nhỏ hơn Max IBH24");
      return false;
    } else {
      setMinIBH24Error(false);
      setMaxIBH24Error(false);
    }

    if (minIBH25 < 0 || maxIBH25 > 100 || minIBH25 === "" || maxIBH25 === "") {
      setMinIBH25Error(true);
      setMaxIBH25Error(true);
      toastErrorAccessory(
        "Giá trị IBH25 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minIBH25 > maxIBH25) {
      setMinIBH25Error(true);
      setMaxIBH25Error(true);
      toastErrorAccessory("Giá trị Min IBH25 phải nhỏ hơn Max IBH25");
      return false;
    } else {
      setMinIBH25Error(false);
      setMaxIBH25Error(false);
    }

    if (minIBH26 < 0 || maxIBH26 > 100 || minIBH26 === "" || maxIBH26 === "") {
      setMinIBH26Error(true);
      setMaxIBH26Error(true);
      toastErrorAccessory(
        "Giá trị IBH26 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minIBH26 > maxIBH26) {
      setMinIBH26Error(true);
      setMaxIBH26Error(true);
      toastErrorAccessory("Giá trị Min IBH26 phải nhỏ hơn Max IBH26");
      return false;
    } else {
      setMinIBH26Error(false);
      setMaxIBH26Error(false);
    }
    if (minIBH27 < 0 || maxIBH27 > 100 || minIBH27 === "" || maxIBH27 === "") {
      setMinIBH27Error(true);
      setMaxIBH27Error(true);
      toastErrorAccessory(
        "Giá trị IBH27 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minIBH27 > maxIBH27) {
      setMinIBH27Error(true);
      setMaxIBH27Error(true);
      toastErrorAccessory("Giá trị Min IBH27 phải nhỏ hơn Max IBH27");
      return false;
    } else {
      setMinIBH27Error(false);
      setMaxIBH27Error(false);
    }

    if (minIBH28 < 0 || maxIBH28 > 100 || minIBH28 === "" || maxIBH28 === "") {
      setMinIBH28Error(true);
      setMaxIBH28Error(true);
      toastErrorAccessory(
        "Giá trị IBH28 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minIBH28 > maxIBH28) {
      setMinIBH28Error(true);
      setMaxIBH28Error(true);
      toastErrorAccessory("Giá trị Min IBH28 phải nhỏ hơn Max IBH28");
      return false;
    } else {
      setMinIBH28Error(false);
      setMaxIBH28Error(false);
    }

    if (minIBH29 < 0 || maxIBH29 > 100 || minIBH29 === "" || maxIBH29 === "") {
      setMinIBH29Error(true);
      setMaxIBH29Error(true);
      toastErrorAccessory(
        "Giá trị IBH29 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minIBH29 > maxIBH29) {
      setMinIBH29Error(true);
      setMaxIBH29Error(true);
      toastErrorAccessory("Giá trị Min IBH29 phải nhỏ hơn Max IBH29");
      return false;
    } else {
      setMinIBH29Error(false);
      setMaxIBH29Error(false);
    }

    if (minIBH30 < 0 || maxIBH30 > 100 || minIBH30 === "" || maxIBH30 === "") {
      setMinIBH30Error(true);
      setMaxIBH30Error(true);
      toastErrorAccessory(
        "Giá trị IBH30 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minIBH30 > maxIBH30) {
      setMinIBH30Error(true);
      setMaxIBH30Error(true);
      toastErrorAccessory("Giá trị Min IBH30 phải nhỏ hơn Max IBH30");
      return false;
    } else {
      setMinIBH30Error(false);
      setMaxIBH30Error(false);
    }
    if (minIBH31 < 0 || maxIBH31 > 100 || minIBH31 === "" || maxIBH31 === "") {
      setMinIBH31Error(true);
      setMaxIBH31Error(true);
      toastErrorAccessory(
        "Giá trị IBH31 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minIBH31 > maxIBH31) {
      setMinIBH31Error(true);
      setMaxIBH31Error(true);
      toastErrorAccessory("Giá trị Min IBH31 phải nhỏ hơn Max IBH31");
      return false;
    } else {
      setMinIBH31Error(false);
      setMaxIBH31Error(false);
    }
    if (minICH1 < 0 || maxICH1 > 100 || minICH1 === "" || maxICH1 === "") {
      setMinICH1Error(true);
      setMaxICH1Error(true);
      toastErrorAccessory(
        "Giá trị ICH1 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minICH1 > maxICH1) {
      setMinICH1Error(true);
      setMaxICH1Error(true);
      toastErrorAccessory("Giá trị Min ICH1 phải nhỏ hơn Max ICH1");
      return false;
    } else {
      setMinICH1Error(false);
      setMaxICH1Error(false);
    }

    if (minICH2 < 0 || maxICH2 > 100 || minICH2 === "" || maxICH2 === "") {
      setMinICH2Error(true);
      setMaxICH2Error(true);
      toastErrorAccessory(
        "Giá trị ICH2 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minICH2 > maxICH2) {
      setMinICH2Error(true);
      setMaxICH2Error(true);
      toastErrorAccessory("Giá trị Min ICH2 phải nhỏ hơn Max ICH2");
      return false;
    } else {
      setMinICH2Error(false);
      setMaxICH2Error(false);
    }

    if (minICH3 < 0 || maxICH3 > 100 || minICH3 === "" || maxICH3 === "") {
      setMinICH3Error(true);
      setMaxICH3Error(true);
      toastErrorAccessory(
        "Giá trị ICH3 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minICH3 > maxICH3) {
      setMinICH3Error(true);
      setMaxICH3Error(true);
      toastErrorAccessory("Giá trị Min ICH3 phải nhỏ hơn Max ICH3");
      return false;
    } else {
      setMinICH3Error(false);
      setMaxICH3Error(false);
    }

    if (minICH4 < 0 || maxICH4 > 100 || minICH4 === "" || maxICH4 === "") {
      setMinICH4Error(true);
      setMaxICH4Error(true);
      toastErrorAccessory(
        "Giá trị ICH4 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minICH4 > maxICH4) {
      setMinICH4Error(true);
      setMaxICH4Error(true);
      toastErrorAccessory("Giá trị Min ICH4 phải nhỏ hơn Max ICH4");
      return false;
    } else {
      setMinICH4Error(false);
      setMaxICH4Error(false);
    }

    if (minICH5 < 0 || maxICH5 > 100 || minICH5 === "" || maxICH5 === "") {
      setMinICH5Error(true);
      setMaxICH5Error(true);
      toastErrorAccessory(
        "Giá trị ICH5 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minICH5 > maxICH5) {
      setMinICH5Error(true);
      setMaxICH5Error(true);
      toastErrorAccessory("Giá trị Min ICH5 phải nhỏ hơn Max ICH5");
      return false;
    } else {
      setMinICH5Error(false);
      setMaxICH5Error(false);
    }

    if (minICH6 < 0 || maxICH6 > 100 || minICH6 === "" || maxICH6 === "") {
      setMinICH6Error(true);
      setMaxICH6Error(true);
      toastErrorAccessory(
        "Giá trị ICH6 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minICH6 > maxICH6) {
      setMinICH6Error(true);
      setMaxICH6Error(true);
      toastErrorAccessory("Giá trị Min ICH6 phải nhỏ hơn Max ICH6");
      return false;
    } else {
      setMinICH6Error(false);
      setMaxICH6Error(false);
    }

    if (minICH7 < 0 || maxICH7 > 100 || minICH7 === "" || maxICH7 === "") {
      setMinICH7Error(true);
      setMaxICH7Error(true);
      toastErrorAccessory(
        "Giá trị ICH7 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minICH7 > maxICH7) {
      setMinICH7Error(true);
      setMaxICH7Error(true);
      toastErrorAccessory("Giá trị Min ICH7 phải nhỏ hơn Max ICH7");
      return false;
    } else {
      setMinICH7Error(false);
      setMaxICH7Error(false);
    }

    if (minICH8 < 0 || maxICH8 > 100 || minICH8 === "" || maxICH8 === "") {
      setMinICH8Error(true);
      setMaxICH8Error(true);
      toastErrorAccessory(
        "Giá trị ICH8 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minICH8 > maxICH8) {
      setMinICH8Error(true);
      setMaxICH8Error(true);
      toastErrorAccessory("Giá trị Min ICH8 phải nhỏ hơn Max ICH8");
      return false;
    } else {
      setMinICH8Error(false);
      setMaxICH8Error(false);
    }

    if (minICH9 < 0 || maxICH9 > 100 || minICH9 === "" || maxICH9 === "") {
      setMinICH9Error(true);
      setMaxICH9Error(true);
      toastErrorAccessory(
        "Giá trị ICH9 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minICH9 > maxICH9) {
      setMinICH9Error(true);
      setMaxICH9Error(true);
      toastErrorAccessory("Giá trị Min ICH9 phải nhỏ hơn Max ICH9");
      return false;
    } else {
      setMinICH9Error(false);
      setMaxICH9Error(false);
    }

    if (minICH10 < 0 || maxICH10 > 100 || minICH10 === "" || maxICH10 === "") {
      setMinICH10Error(true);
      setMaxICH10Error(true);
      toastErrorAccessory(
        "Giá trị ICH10 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minICH10 > maxICH10) {
      setMinICH10Error(true);
      setMaxICH10Error(true);
      toastErrorAccessory("Giá trị Min ICH10 phải nhỏ hơn Max ICH10");
      return false;
    } else {
      setMinICH10Error(false);
      setMaxICH10Error(false);
    }

    if (minICH11 < 0 || maxICH11 > 100 || minICH11 === "" || maxICH11 === "") {
      setMinICH11Error(true);
      setMaxICH11Error(true);
      toastErrorAccessory(
        "Giá trị ICH11 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minICH11 > maxICH11) {
      setMinICH11Error(true);
      setMaxICH11Error(true);
      toastErrorAccessory("Giá trị Min ICH11 phải nhỏ hơn Max ICH11");
      return false;
    } else {
      setMinICH11Error(false);
      setMaxICH11Error(false);
    }

    if (minICH12 < 0 || maxICH12 > 100 || minICH12 === "" || maxICH12 === "") {
      setMinICH12Error(true);
      setMaxICH12Error(true);
      toastErrorAccessory(
        "Giá trị ICH12 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minICH12 > maxICH12) {
      setMinICH12Error(true);
      setMaxICH12Error(true);
      toastErrorAccessory("Giá trị Min ICH12 phải nhỏ hơn Max ICH12");
      return false;
    } else {
      setMinICH12Error(false);
      setMaxICH12Error(false);
    }

    if (minICH13 < 0 || maxICH13 > 100 || minICH13 === "" || maxICH13 === "") {
      setMinICH13Error(true);
      setMaxICH13Error(true);
      toastErrorAccessory(
        "Giá trị ICH13 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minICH13 > maxICH13) {
      setMinICH13Error(true);
      setMaxICH13Error(true);
      toastErrorAccessory("Giá trị Min ICH13 phải nhỏ hơn Max ICH13");
      return false;
    } else {
      setMinICH13Error(false);
      setMaxICH13Error(false);
    }

    if (minICH14 < 0 || maxICH14 > 100 || minICH14 === "" || maxICH14 === "") {
      setMinICH14Error(true);
      setMaxICH14Error(true);
      toastErrorAccessory(
        "Giá trị ICH14 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minICH14 > maxICH14) {
      setMinICH14Error(true);
      setMaxICH14Error(true);
      toastErrorAccessory("Giá trị Min ICH14 phải nhỏ hơn Max ICH14");
      return false;
    } else {
      setMinICH14Error(false);
      setMaxICH14Error(false);
    }

    if (minICH15 < 0 || maxICH15 > 100 || minICH15 === "" || maxICH15 === "") {
      setMinICH15Error(true);
      setMaxICH15Error(true);
      toastErrorAccessory(
        "Giá trị ICH15 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minICH15 > maxICH15) {
      setMinICH15Error(true);
      setMaxICH15Error(true);
      toastErrorAccessory("Giá trị Min ICH15 phải nhỏ hơn Max ICH15");
      return false;
    } else {
      setMinICH15Error(false);
      setMaxICH15Error(false);
    }

    if (minICH16 < 0 || maxICH16 > 100 || minICH16 === "" || maxICH16 === "") {
      setMinICH16Error(true);
      setMaxICH16Error(true);
      toastErrorAccessory(
        "Giá trị ICH16 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minICH16 > maxICH16) {
      setMinICH16Error(true);
      setMaxICH16Error(true);
      toastErrorAccessory("Giá trị Min ICH16 phải nhỏ hơn Max ICH16");
      return false;
    } else {
      setMinICH16Error(false);
      setMaxICH16Error(false);
    }

    if (minICH17 < 0 || maxICH17 > 100 || minICH17 === "" || maxICH17 === "") {
      setMinICH17Error(true);
      setMaxICH17Error(true);
      toastErrorAccessory(
        "Giá trị ICH17 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minICH17 > maxICH17) {
      setMinICH17Error(true);
      setMaxICH17Error(true);
      toastErrorAccessory("Giá trị Min ICH17 phải nhỏ hơn Max ICH17");
      return false;
    } else {
      setMinICH17Error(false);
      setMaxICH17Error(false);
    }

    if (minICH18 < 0 || maxICH18 > 100 || minICH18 === "" || maxICH18 === "") {
      setMinICH18Error(true);
      setMaxICH18Error(true);
      toastErrorAccessory(
        "Giá trị ICH18 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minICH18 > maxICH18) {
      setMinICH18Error(true);
      setMaxICH18Error(true);
      toastErrorAccessory("Giá trị Min ICH18 phải nhỏ hơn Max ICH18");
      return false;
    } else {
      setMinICH18Error(false);
      setMaxICH18Error(false);
    }

    if (minICH19 < 0 || maxICH19 > 100 || minICH19 === "" || maxICH19 === "") {
      setMinICH19Error(true);
      setMaxICH19Error(true);
      toastErrorAccessory(
        "Giá trị ICH19 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minICH19 > maxICH19) {
      setMinICH19Error(true);
      setMaxICH19Error(true);
      toastErrorAccessory("Giá trị Min ICH19 phải nhỏ hơn Max ICH19");
      return false;
    } else {
      setMinICH19Error(false);
      setMaxICH19Error(false);
    }

    if (minICH20 < 0 || maxICH20 > 100 || minICH20 === "" || maxICH20 === "") {
      setMinICH20Error(true);
      setMaxICH20Error(true);
      toastErrorAccessory(
        "Giá trị ICH20 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minICH20 > maxICH20) {
      setMinICH20Error(true);
      setMaxICH20Error(true);
      toastErrorAccessory("Giá trị Min ICH20 phải nhỏ hơn Max ICH20");
      return false;
    } else {
      setMinICH20Error(false);
      setMaxICH20Error(false);
    }

    if (minICH21 < 0 || maxICH21 > 100 || minICH21 === "" || maxICH21 === "") {
      setMinICH21Error(true);
      setMaxICH21Error(true);
      toastErrorAccessory(
        "Giá trị ICH21 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minICH21 > maxICH21) {
      setMinICH21Error(true);
      setMaxICH21Error(true);
      toastErrorAccessory("Giá trị Min ICH21 phải nhỏ hơn Max ICH21");
      return false;
    } else {
      setMinICH21Error(false);
      setMaxICH21Error(false);
    }

    if (minICH22 < 0 || maxICH22 > 100 || minICH22 === "" || maxICH22 === "") {
      setMinICH22Error(true);
      setMaxICH22Error(true);
      toastErrorAccessory(
        "Giá trị ICH22 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minICH22 > maxICH22) {
      setMinICH22Error(true);
      setMaxICH22Error(true);
      toastErrorAccessory("Giá trị Min ICH22 phải nhỏ hơn Max ICH22");
      return false;
    } else {
      setMinICH22Error(false);
      setMaxICH22Error(false);
    }

    if (minICH23 < 0 || maxICH23 > 100 || minICH23 === "" || maxICH23 === "") {
      setMinICH23Error(true);
      setMaxICH23Error(true);
      toastErrorAccessory(
        "Giá trị ICH23 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minICH23 > maxICH23) {
      setMinICH23Error(true);
      setMaxICH23Error(true);
      toastErrorAccessory("Giá trị Min ICH23 phải nhỏ hơn Max ICH23");
      return false;
    } else {
      setMinICH23Error(false);
      setMaxICH23Error(false);
    }

    if (minICH24 < 0 || maxICH24 > 100 || minICH24 === "" || maxICH24 === "") {
      setMinICH24Error(true);
      setMaxICH24Error(true);
      toastErrorAccessory(
        "Giá trị ICH24 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minICH24 > maxICH24) {
      setMinICH24Error(true);
      setMaxICH24Error(true);
      toastErrorAccessory("Giá trị Min ICH24 phải nhỏ hơn Max ICH24");
      return false;
    } else {
      setMinICH24Error(false);
      setMaxICH24Error(false);
    }

    if (minICH25 < 0 || maxICH25 > 100 || minICH25 === "" || maxICH25 === "") {
      setMinICH25Error(true);
      setMaxICH25Error(true);
      toastErrorAccessory(
        "Giá trị ICH25 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minICH25 > maxICH25) {
      setMinICH25Error(true);
      setMaxICH25Error(true);
      toastErrorAccessory("Giá trị Min ICH25 phải nhỏ hơn Max ICH25");
      return false;
    } else {
      setMinICH25Error(false);
      setMaxICH25Error(false);
    }

    if (minICH26 < 0 || maxICH26 > 100 || minICH26 === "" || maxICH26 === "") {
      setMinICH26Error(true);
      setMaxICH26Error(true);
      toastErrorAccessory(
        "Giá trị ICH26 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minICH26 > maxICH26) {
      setMinICH26Error(true);
      setMaxICH26Error(true);
      toastErrorAccessory("Giá trị Min ICH26 phải nhỏ hơn Max ICH26");
      return false;
    } else {
      setMinICH26Error(false);
      setMaxICH26Error(false);
    }
    if (minICH27 < 0 || maxICH27 > 100 || minICH27 === "" || maxICH27 === "") {
      setMinICH27Error(true);
      setMaxICH27Error(true);
      toastErrorAccessory(
        "Giá trị ICH27 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minICH27 > maxICH27) {
      setMinICH27Error(true);
      setMaxICH27Error(true);
      toastErrorAccessory("Giá trị Min ICH27 phải nhỏ hơn Max ICH27");
      return false;
    } else {
      setMinICH27Error(false);
      setMaxICH27Error(false);
    }

    if (minICH28 < 0 || maxICH28 > 100 || minICH28 === "" || maxICH28 === "") {
      setMinICH28Error(true);
      setMaxICH28Error(true);
      toastErrorAccessory(
        "Giá trị ICH28 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minICH28 > maxICH28) {
      setMinICH28Error(true);
      setMaxICH28Error(true);
      toastErrorAccessory("Giá trị Min ICH28 phải nhỏ hơn Max ICH28");
      return false;
    } else {
      setMinICH28Error(false);
      setMaxICH28Error(false);
    }

    if (minICH29 < 0 || maxICH29 > 100 || minICH29 === "" || maxICH29 === "") {
      setMinICH29Error(true);
      setMaxICH29Error(true);
      toastErrorAccessory(
        "Giá trị ICH29 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minICH29 > maxICH29) {
      setMinICH29Error(true);
      setMaxICH29Error(true);
      toastErrorAccessory("Giá trị Min ICH29 phải nhỏ hơn Max ICH29");
      return false;
    } else {
      setMinICH29Error(false);
      setMaxICH29Error(false);
    }

    if (minICH30 < 0 || maxICH30 > 100 || minICH30 === "" || maxICH30 === "") {
      setMinICH30Error(true);
      setMaxICH30Error(true);
      toastErrorAccessory(
        "Giá trị ICH30 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minICH30 > maxICH30) {
      setMinICH30Error(true);
      setMaxICH30Error(true);
      toastErrorAccessory("Giá trị Min ICH30 phải nhỏ hơn Max ICH30");
      return false;
    } else {
      setMinICH30Error(false);
      setMaxICH30Error(false);
    }
    if (minICH31 < 0 || maxICH31 > 100 || minICH31 === "" || maxICH31 === "") {
      setMinICH31Error(true);
      setMaxICH31Error(true);
      toastErrorAccessory(
        "Giá trị ICH31 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minICH31 > maxICH31) {
      setMinICH31Error(true);
      setMaxICH31Error(true);
      toastErrorAccessory("Giá trị Min ICH31 phải nhỏ hơn Max ICH31");
      return false;
    } else {
      setMinICH31Error(false);
      setMaxICH31Error(false);
    }

    if (minVANH1 < 0 || maxVANH1 > 100 || minVANH1 === "" || maxVANH1 === "") {
      setMinVANH1Error(true);
      setMaxVANH1Error(true);
      toastErrorAccessory(
        "Giá trị VANH1 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVANH1 > maxVANH1) {
      setMinVANH1Error(true);
      setMaxVANH1Error(true);
      toastErrorAccessory("Giá trị Min VANH1 phải nhỏ hơn Max VANH1");
      return false;
    } else {
      setMinVANH1Error(false);
      setMaxVANH1Error(false);
    }

    if (minVANH2 < 0 || maxVANH2 > 100 || minVANH2 === "" || maxVANH2 === "") {
      setMinVANH2Error(true);
      setMaxVANH2Error(true);
      toastErrorAccessory(
        "Giá trị VANH2 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVANH2 > maxVANH2) {
      setMinVANH2Error(true);
      setMaxVANH2Error(true);
      toastErrorAccessory("Giá trị Min VANH2 phải nhỏ hơn Max VANH2");
      return false;
    } else {
      setMinVANH2Error(false);
      setMaxVANH2Error(false);
    }

    if (minVANH3 < 0 || maxVANH3 > 100 || minVANH3 === "" || maxVANH3 === "") {
      setMinVANH3Error(true);
      setMaxVANH3Error(true);
      toastErrorAccessory(
        "Giá trị VANH3 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVANH3 > maxVANH3) {
      setMinVANH3Error(true);
      setMaxVANH3Error(true);
      toastErrorAccessory("Giá trị Min VANH3 phải nhỏ hơn Max VANH3");
      return false;
    } else {
      setMinVANH3Error(false);
      setMaxVANH3Error(false);
    }

    if (minVANH4 < 0 || maxVANH4 > 100 || minVANH4 === "" || maxVANH4 === "") {
      setMinVANH4Error(true);
      setMaxVANH4Error(true);
      toastErrorAccessory(
        "Giá trị VANH4 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVANH4 > maxVANH4) {
      setMinVANH4Error(true);
      setMaxVANH4Error(true);
      toastErrorAccessory("Giá trị Min VANH4 phải nhỏ hơn Max VANH4");
      return false;
    } else {
      setMinVANH4Error(false);
      setMaxVANH4Error(false);
    }

    if (minVANH5 < 0 || maxVANH5 > 100 || minVANH5 === "" || maxVANH5 === "") {
      setMinVANH5Error(true);
      setMaxVANH5Error(true);
      toastErrorAccessory(
        "Giá trị VANH5 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVANH5 > maxVANH5) {
      setMinVANH5Error(true);
      setMaxVANH5Error(true);
      toastErrorAccessory("Giá trị Min VANH5 phải nhỏ hơn Max VANH5");
      return false;
    } else {
      setMinVANH5Error(false);
      setMaxVANH5Error(false);
    }

    if (minVANH6 < 0 || maxVANH6 > 100 || minVANH6 === "" || maxVANH6 === "") {
      setMinVANH6Error(true);
      setMaxVANH6Error(true);
      toastErrorAccessory(
        "Giá trị VANH6 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVANH6 > maxVANH6) {
      setMinVANH6Error(true);
      setMaxVANH6Error(true);
      toastErrorAccessory("Giá trị Min VANH6 phải nhỏ hơn Max VANH6");
      return false;
    } else {
      setMinVANH6Error(false);
      setMaxVANH6Error(false);
    }

    if (minVANH7 < 0 || maxVANH7 > 100 || minVANH7 === "" || maxVANH7 === "") {
      setMinVANH7Error(true);
      setMaxVANH7Error(true);
      toastErrorAccessory(
        "Giá trị VANH7 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVANH7 > maxVANH7) {
      setMinVANH7Error(true);
      setMaxVANH7Error(true);
      toastErrorAccessory("Giá trị Min VANH7 phải nhỏ hơn Max VANH7");
      return false;
    } else {
      setMinVANH7Error(false);
      setMaxVANH7Error(false);
    }

    if (minVANH8 < 0 || maxVANH8 > 100 || minVANH8 === "" || maxVANH8 === "") {
      setMinVANH8Error(true);
      setMaxVANH8Error(true);
      toastErrorAccessory(
        "Giá trị VANH8 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVANH8 > maxVANH8) {
      setMinVANH8Error(true);
      setMaxVANH8Error(true);
      toastErrorAccessory("Giá trị Min VANH8 phải nhỏ hơn Max VANH8");
      return false;
    } else {
      setMinVANH8Error(false);
      setMaxVANH8Error(false);
    }

    if (minVANH9 < 0 || maxVANH9 > 100 || minVANH9 === "" || maxVANH9 === "") {
      setMinVANH9Error(true);
      setMaxVANH9Error(true);
      toastErrorAccessory(
        "Giá trị VANH9 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVANH9 > maxVANH9) {
      setMinVANH9Error(true);
      setMaxVANH9Error(true);
      toastErrorAccessory("Giá trị Min VANH9 phải nhỏ hơn Max VANH9");
      return false;
    } else {
      setMinVANH9Error(false);
      setMaxVANH9Error(false);
    }

    if (
      minVANH10 < 0 ||
      maxVANH10 > 100 ||
      minVANH10 === "" ||
      maxVANH10 === ""
    ) {
      setMinVANH10Error(true);
      setMaxVANH10Error(true);
      toastErrorAccessory(
        "Giá trị VANH10 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVANH10 > maxVANH10) {
      setMinVANH10Error(true);
      setMaxVANH10Error(true);
      toastErrorAccessory("Giá trị Min VANH10 phải nhỏ hơn Max VANH10");
      return false;
    } else {
      setMinVANH10Error(false);
      setMaxVANH10Error(false);
    }

    if (
      minVANH11 < 0 ||
      maxVANH11 > 100 ||
      minVANH11 === "" ||
      maxVANH11 === ""
    ) {
      setMinVANH11Error(true);
      setMaxVANH11Error(true);
      toastErrorAccessory(
        "Giá trị VANH11 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVANH11 > maxVANH11) {
      setMinVANH11Error(true);
      setMaxVANH11Error(true);
      toastErrorAccessory("Giá trị Min VANH11 phải nhỏ hơn Max VANH11");
      return false;
    } else {
      setMinVANH11Error(false);
      setMaxVANH11Error(false);
    }

    if (
      minVANH12 < 0 ||
      maxVANH12 > 100 ||
      minVANH12 === "" ||
      maxVANH12 === ""
    ) {
      setMinVANH12Error(true);
      setMaxVANH12Error(true);
      toastErrorAccessory(
        "Giá trị VANH12 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVANH12 > maxVANH12) {
      setMinVANH12Error(true);
      setMaxVANH12Error(true);
      toastErrorAccessory("Giá trị Min VANH12 phải nhỏ hơn Max VANH12");
      return false;
    } else {
      setMinVANH12Error(false);
      setMaxVANH12Error(false);
    }

    if (
      minVANH13 < 0 ||
      maxVANH13 > 100 ||
      minVANH13 === "" ||
      maxVANH13 === ""
    ) {
      setMinVANH13Error(true);
      setMaxVANH13Error(true);
      toastErrorAccessory(
        "Giá trị VANH13 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVANH13 > maxVANH13) {
      setMinVANH13Error(true);
      setMaxVANH13Error(true);
      toastErrorAccessory("Giá trị Min VANH13 phải nhỏ hơn Max VANH13");
      return false;
    } else {
      setMinVANH13Error(false);
      setMaxVANH13Error(false);
    }

    if (
      minVANH14 < 0 ||
      maxVANH14 > 100 ||
      minVANH14 === "" ||
      maxVANH14 === ""
    ) {
      setMinVANH14Error(true);
      setMaxVANH14Error(true);
      toastErrorAccessory(
        "Giá trị VANH14 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVANH14 > maxVANH14) {
      setMinVANH14Error(true);
      setMaxVANH14Error(true);
      toastErrorAccessory("Giá trị Min VANH14 phải nhỏ hơn Max VANH14");
      return false;
    } else {
      setMinVANH14Error(false);
      setMaxVANH14Error(false);
    }

    if (
      minVANH15 < 0 ||
      maxVANH15 > 100 ||
      minVANH15 === "" ||
      maxVANH15 === ""
    ) {
      setMinVANH15Error(true);
      setMaxVANH15Error(true);
      toastErrorAccessory(
        "Giá trị VANH15 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVANH15 > maxVANH15) {
      setMinVANH15Error(true);
      setMaxVANH15Error(true);
      toastErrorAccessory("Giá trị Min VANH15 phải nhỏ hơn Max VANH15");
      return false;
    } else {
      setMinVANH15Error(false);
      setMaxVANH15Error(false);
    }

    if (
      minVANH16 < 0 ||
      maxVANH16 > 100 ||
      minVANH16 === "" ||
      maxVANH16 === ""
    ) {
      setMinVANH16Error(true);
      setMaxVANH16Error(true);
      toastErrorAccessory(
        "Giá trị VANH16 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVANH16 > maxVANH16) {
      setMinVANH16Error(true);
      setMaxVANH16Error(true);
      toastErrorAccessory("Giá trị Min VANH16 phải nhỏ hơn Max VANH16");
      return false;
    } else {
      setMinVANH16Error(false);
      setMaxVANH16Error(false);
    }

    if (
      minVANH17 < 0 ||
      maxVANH17 > 100 ||
      minVANH17 === "" ||
      maxVANH17 === ""
    ) {
      setMinVANH17Error(true);
      setMaxVANH17Error(true);
      toastErrorAccessory(
        "Giá trị VANH17 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVANH17 > maxVANH17) {
      setMinVANH17Error(true);
      setMaxVANH17Error(true);
      toastErrorAccessory("Giá trị Min VANH17 phải nhỏ hơn Max VANH17");
      return false;
    } else {
      setMinVANH17Error(false);
      setMaxVANH17Error(false);
    }

    if (
      minVANH18 < 0 ||
      maxVANH18 > 100 ||
      minVANH18 === "" ||
      maxVANH18 === ""
    ) {
      setMinVANH18Error(true);
      setMaxVANH18Error(true);
      toastErrorAccessory(
        "Giá trị VANH18 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVANH18 > maxVANH18) {
      setMinVANH18Error(true);
      setMaxVANH18Error(true);
      toastErrorAccessory("Giá trị Min VANH18 phải nhỏ hơn Max VANH18");
      return false;
    } else {
      setMinVANH18Error(false);
      setMaxVANH18Error(false);
    }

    if (
      minVANH19 < 0 ||
      maxVANH19 > 100 ||
      minVANH19 === "" ||
      maxVANH19 === ""
    ) {
      setMinVANH19Error(true);
      setMaxVANH19Error(true);
      toastErrorAccessory(
        "Giá trị VANH19 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVANH19 > maxVANH19) {
      setMinVANH19Error(true);
      setMaxVANH19Error(true);
      toastErrorAccessory("Giá trị Min VANH19 phải nhỏ hơn Max VANH19");
      return false;
    } else {
      setMinVANH19Error(false);
      setMaxVANH19Error(false);
    }

    if (
      minVANH20 < 0 ||
      maxVANH20 > 100 ||
      minVANH20 === "" ||
      maxVANH20 === ""
    ) {
      setMinVANH20Error(true);
      setMaxVANH20Error(true);
      toastErrorAccessory(
        "Giá trị VANH20 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVANH20 > maxVANH20) {
      setMinVANH20Error(true);
      setMaxVANH20Error(true);
      toastErrorAccessory("Giá trị Min VANH20 phải nhỏ hơn Max VANH20");
      return false;
    } else {
      setMinVANH20Error(false);
      setMaxVANH20Error(false);
    }

    if (
      minVANH21 < 0 ||
      maxVANH21 > 100 ||
      minVANH21 === "" ||
      maxVANH21 === ""
    ) {
      setMinVANH21Error(true);
      setMaxVANH21Error(true);
      toastErrorAccessory(
        "Giá trị VANH21 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVANH21 > maxVANH21) {
      setMinVANH21Error(true);
      setMaxVANH21Error(true);
      toastErrorAccessory("Giá trị Min VANH21 phải nhỏ hơn Max VANH21");
      return false;
    } else {
      setMinVANH21Error(false);
      setMaxVANH21Error(false);
    }

    if (
      minVANH22 < 0 ||
      maxVANH22 > 100 ||
      minVANH22 === "" ||
      maxVANH22 === ""
    ) {
      setMinVANH22Error(true);
      setMaxVANH22Error(true);
      toastErrorAccessory(
        "Giá trị VANH22 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVANH22 > maxVANH22) {
      setMinVANH22Error(true);
      setMaxVANH22Error(true);
      toastErrorAccessory("Giá trị Min VANH22 phải nhỏ hơn Max VANH22");
      return false;
    } else {
      setMinVANH22Error(false);
      setMaxVANH22Error(false);
    }

    if (
      minVANH23 < 0 ||
      maxVANH23 > 100 ||
      minVANH23 === "" ||
      maxVANH23 === ""
    ) {
      setMinVANH23Error(true);
      setMaxVANH23Error(true);
      toastErrorAccessory(
        "Giá trị VANH23 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVANH23 > maxVANH23) {
      setMinVANH23Error(true);
      setMaxVANH23Error(true);
      toastErrorAccessory("Giá trị Min VANH23 phải nhỏ hơn Max VANH23");
      return false;
    } else {
      setMinVANH23Error(false);
      setMaxVANH23Error(false);
    }

    if (
      minVANH24 < 0 ||
      maxVANH24 > 100 ||
      minVANH24 === "" ||
      maxVANH24 === ""
    ) {
      setMinVANH24Error(true);
      setMaxVANH24Error(true);
      toastErrorAccessory(
        "Giá trị VANH24 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVANH24 > maxVANH24) {
      setMinVANH24Error(true);
      setMaxVANH24Error(true);
      toastErrorAccessory("Giá trị Min VANH24 phải nhỏ hơn Max VANH24");
      return false;
    } else {
      setMinVANH24Error(false);
      setMaxVANH24Error(false);
    }

    if (
      minVANH25 < 0 ||
      maxVANH25 > 100 ||
      minVANH25 === "" ||
      maxVANH25 === ""
    ) {
      setMinVANH25Error(true);
      setMaxVANH25Error(true);
      toastErrorAccessory(
        "Giá trị VANH25 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVANH25 > maxVANH25) {
      setMinVANH25Error(true);
      setMaxVANH25Error(true);
      toastErrorAccessory("Giá trị Min VANH25 phải nhỏ hơn Max VANH25");
      return false;
    } else {
      setMinVANH25Error(false);
      setMaxVANH25Error(false);
    }

    if (
      minVANH26 < 0 ||
      maxVANH26 > 100 ||
      minVANH26 === "" ||
      maxVANH26 === ""
    ) {
      setMinVANH26Error(true);
      setMaxVANH26Error(true);
      toastErrorAccessory(
        "Giá trị VANH26 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVANH26 > maxVANH26) {
      setMinVANH26Error(true);
      setMaxVANH26Error(true);
      toastErrorAccessory("Giá trị Min VANH26 phải nhỏ hơn Max VANH26");
      return false;
    } else {
      setMinVANH26Error(false);
      setMaxVANH26Error(false);
    }
    if (
      minVANH27 < 0 ||
      maxVANH27 > 100 ||
      minVANH27 === "" ||
      maxVANH27 === ""
    ) {
      setMinVANH27Error(true);
      setMaxVANH27Error(true);
      toastErrorAccessory(
        "Giá trị VANH27 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVANH27 > maxVANH27) {
      setMinVANH27Error(true);
      setMaxVANH27Error(true);
      toastErrorAccessory("Giá trị Min VANH27 phải nhỏ hơn Max VANH27");
      return false;
    } else {
      setMinVANH27Error(false);
      setMaxVANH27Error(false);
    }

    if (
      minVANH28 < 0 ||
      maxVANH28 > 100 ||
      minVANH28 === "" ||
      maxVANH28 === ""
    ) {
      setMinVANH28Error(true);
      setMaxVANH28Error(true);
      toastErrorAccessory(
        "Giá trị VANH28 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVANH28 > maxVANH28) {
      setMinVANH28Error(true);
      setMaxVANH28Error(true);
      toastErrorAccessory("Giá trị Min VANH28 phải nhỏ hơn Max VANH28");
      return false;
    } else {
      setMinVANH28Error(false);
      setMaxVANH28Error(false);
    }

    if (
      minVANH29 < 0 ||
      maxVANH29 > 100 ||
      minVANH29 === "" ||
      maxVANH29 === ""
    ) {
      setMinVANH29Error(true);
      setMaxVANH29Error(true);
      toastErrorAccessory(
        "Giá trị VANH29 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVANH29 > maxVANH29) {
      setMinVANH29Error(true);
      setMaxVANH29Error(true);
      toastErrorAccessory("Giá trị Min VANH29 phải nhỏ hơn Max VANH29");
      return false;
    } else {
      setMinVANH29Error(false);
      setMaxVANH29Error(false);
    }

    if (
      minVANH30 < 0 ||
      maxVANH30 > 100 ||
      minVANH30 === "" ||
      maxVANH30 === ""
    ) {
      setMinVANH30Error(true);
      setMaxVANH30Error(true);
      toastErrorAccessory(
        "Giá trị VANH30 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVANH30 > maxVANH30) {
      setMinVANH30Error(true);
      setMaxVANH30Error(true);
      toastErrorAccessory("Giá trị Min VANH30 phải nhỏ hơn Max VANH30");
      return false;
    } else {
      setMinVANH30Error(false);
      setMaxVANH30Error(false);
    }
    if (
      minVANH31 < 0 ||
      maxVANH31 > 100 ||
      minVANH31 === "" ||
      maxVANH31 === ""
    ) {
      setMinVANH31Error(true);
      setMaxVANH31Error(true);
      toastErrorAccessory(
        "Giá trị VANH31 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVANH31 > maxVANH31) {
      setMinVANH31Error(true);
      setMaxVANH31Error(true);
      toastErrorAccessory("Giá trị Min VANH31 phải nhỏ hơn Max VANH31");
      return false;
    } else {
      setMinVANH31Error(false);
      setMaxVANH31Error(false);
    }

    if (minVBNH1 < 0 || maxVBNH1 > 100 || minVBNH1 === "" || maxVBNH1 === "") {
      setMinVBNH1Error(true);
      setMaxVBNH1Error(true);
      toastErrorAccessory(
        "Giá trị VBNH1 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVBNH1 > maxVBNH1) {
      setMinVBNH1Error(true);
      setMaxVBNH1Error(true);
      toastErrorAccessory("Giá trị Min VBNH1 phải nhỏ hơn Max VBNH1");
      return false;
    } else {
      setMinVBNH1Error(false);
      setMaxVBNH1Error(false);
    }

    if (minVBNH2 < 0 || maxVBNH2 > 100 || minVBNH2 === "" || maxVBNH2 === "") {
      setMinVBNH2Error(true);
      setMaxVBNH2Error(true);
      toastErrorAccessory(
        "Giá trị VBNH2 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVBNH2 > maxVBNH2) {
      setMinVBNH2Error(true);
      setMaxVBNH2Error(true);
      toastErrorAccessory("Giá trị Min VBNH2 phải nhỏ hơn Max VBNH2");
      return false;
    } else {
      setMinVBNH2Error(false);
      setMaxVBNH2Error(false);
    }

    if (minVBNH3 < 0 || maxVBNH3 > 100 || minVBNH3 === "" || maxVBNH3 === "") {
      setMinVBNH3Error(true);
      setMaxVBNH3Error(true);
      toastErrorAccessory(
        "Giá trị VBNH3 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVBNH3 > maxVBNH3) {
      setMinVBNH3Error(true);
      setMaxVBNH3Error(true);
      toastErrorAccessory("Giá trị Min VBNH3 phải nhỏ hơn Max VBNH3");
      return false;
    } else {
      setMinVBNH3Error(false);
      setMaxVBNH3Error(false);
    }

    if (minVBNH4 < 0 || maxVBNH4 > 100 || minVBNH4 === "" || maxVBNH4 === "") {
      setMinVBNH4Error(true);
      setMaxVBNH4Error(true);
      toastErrorAccessory(
        "Giá trị VBNH4 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVBNH4 > maxVBNH4) {
      setMinVBNH4Error(true);
      setMaxVBNH4Error(true);
      toastErrorAccessory("Giá trị Min VBNH4 phải nhỏ hơn Max VBNH4");
      return false;
    } else {
      setMinVBNH4Error(false);
      setMaxVBNH4Error(false);
    }

    if (minVBNH5 < 0 || maxVBNH5 > 100 || minVBNH5 === "" || maxVBNH5 === "") {
      setMinVBNH5Error(true);
      setMaxVBNH5Error(true);
      toastErrorAccessory(
        "Giá trị VBNH5 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVBNH5 > maxVBNH5) {
      setMinVBNH5Error(true);
      setMaxVBNH5Error(true);
      toastErrorAccessory("Giá trị Min VBNH5 phải nhỏ hơn Max VBNH5");
      return false;
    } else {
      setMinVBNH5Error(false);
      setMaxVBNH5Error(false);
    }

    if (minVBNH6 < 0 || maxVBNH6 > 100 || minVBNH6 === "" || maxVBNH6 === "") {
      setMinVBNH6Error(true);
      setMaxVBNH6Error(true);
      toastErrorAccessory(
        "Giá trị VBNH6 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVBNH6 > maxVBNH6) {
      setMinVBNH6Error(true);
      setMaxVBNH6Error(true);
      toastErrorAccessory("Giá trị Min VBNH6 phải nhỏ hơn Max VBNH6");
      return false;
    } else {
      setMinVBNH6Error(false);
      setMaxVBNH6Error(false);
    }

    if (minVBNH7 < 0 || maxVBNH7 > 100 || minVBNH7 === "" || maxVBNH7 === "") {
      setMinVBNH7Error(true);
      setMaxVBNH7Error(true);
      toastErrorAccessory(
        "Giá trị VBNH7 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVBNH7 > maxVBNH7) {
      setMinVBNH7Error(true);
      setMaxVBNH7Error(true);
      toastErrorAccessory("Giá trị Min VBNH7 phải nhỏ hơn Max VBNH7");
      return false;
    } else {
      setMinVBNH7Error(false);
      setMaxVBNH7Error(false);
    }

    if (minVBNH8 < 0 || maxVBNH8 > 100 || minVBNH8 === "" || maxVBNH8 === "") {
      setMinVBNH8Error(true);
      setMaxVBNH8Error(true);
      toastErrorAccessory(
        "Giá trị VBNH8 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVBNH8 > maxVBNH8) {
      setMinVBNH8Error(true);
      setMaxVBNH8Error(true);
      toastErrorAccessory("Giá trị Min VBNH8 phải nhỏ hơn Max VBNH8");
      return false;
    } else {
      setMinVBNH8Error(false);
      setMaxVBNH8Error(false);
    }

    if (minVBNH9 < 0 || maxVBNH9 > 100 || minVBNH9 === "" || maxVBNH9 === "") {
      setMinVBNH9Error(true);
      setMaxVBNH9Error(true);
      toastErrorAccessory(
        "Giá trị VBNH9 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVBNH9 > maxVBNH9) {
      setMinVBNH9Error(true);
      setMaxVBNH9Error(true);
      toastErrorAccessory("Giá trị Min VBNH9 phải nhỏ hơn Max VBNH9");
      return false;
    } else {
      setMinVBNH9Error(false);
      setMaxVBNH9Error(false);
    }

    if (
      minVBNH10 < 0 ||
      maxVBNH10 > 100 ||
      minVBNH10 === "" ||
      maxVBNH10 === ""
    ) {
      setMinVBNH10Error(true);
      setMaxVBNH10Error(true);
      toastErrorAccessory(
        "Giá trị VBNH10 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVBNH10 > maxVBNH10) {
      setMinVBNH10Error(true);
      setMaxVBNH10Error(true);
      toastErrorAccessory("Giá trị Min VBNH10 phải nhỏ hơn Max VBNH10");
      return false;
    } else {
      setMinVBNH10Error(false);
      setMaxVBNH10Error(false);
    }

    if (
      minVBNH11 < 0 ||
      maxVBNH11 > 100 ||
      minVBNH11 === "" ||
      maxVBNH11 === ""
    ) {
      setMinVBNH11Error(true);
      setMaxVBNH11Error(true);
      toastErrorAccessory(
        "Giá trị VBNH11 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVBNH11 > maxVBNH11) {
      setMinVBNH11Error(true);
      setMaxVBNH11Error(true);
      toastErrorAccessory("Giá trị Min VBNH11 phải nhỏ hơn Max VBNH11");
      return false;
    } else {
      setMinVBNH11Error(false);
      setMaxVBNH11Error(false);
    }

    if (
      minVBNH12 < 0 ||
      maxVBNH12 > 100 ||
      minVBNH12 === "" ||
      maxVBNH12 === ""
    ) {
      setMinVBNH12Error(true);
      setMaxVBNH12Error(true);
      toastErrorAccessory(
        "Giá trị VBNH12 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVBNH12 > maxVBNH12) {
      setMinVBNH12Error(true);
      setMaxVBNH12Error(true);
      toastErrorAccessory("Giá trị Min VBNH12 phải nhỏ hơn Max VBNH12");
      return false;
    } else {
      setMinVBNH12Error(false);
      setMaxVBNH12Error(false);
    }

    if (
      minVBNH13 < 0 ||
      maxVBNH13 > 100 ||
      minVBNH13 === "" ||
      maxVBNH13 === ""
    ) {
      setMinVBNH13Error(true);
      setMaxVBNH13Error(true);
      toastErrorAccessory(
        "Giá trị VBNH13 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVBNH13 > maxVBNH13) {
      setMinVBNH13Error(true);
      setMaxVBNH13Error(true);
      toastErrorAccessory("Giá trị Min VBNH13 phải nhỏ hơn Max VBNH13");
      return false;
    } else {
      setMinVBNH13Error(false);
      setMaxVBNH13Error(false);
    }

    if (
      minVBNH14 < 0 ||
      maxVBNH14 > 100 ||
      minVBNH14 === "" ||
      maxVBNH14 === ""
    ) {
      setMinVBNH14Error(true);
      setMaxVBNH14Error(true);
      toastErrorAccessory(
        "Giá trị VBNH14 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVBNH14 > maxVBNH14) {
      setMinVBNH14Error(true);
      setMaxVBNH14Error(true);
      toastErrorAccessory("Giá trị Min VBNH14 phải nhỏ hơn Max VBNH14");
      return false;
    } else {
      setMinVBNH14Error(false);
      setMaxVBNH14Error(false);
    }

    if (
      minVBNH15 < 0 ||
      maxVBNH15 > 100 ||
      minVBNH15 === "" ||
      maxVBNH15 === ""
    ) {
      setMinVBNH15Error(true);
      setMaxVBNH15Error(true);
      toastErrorAccessory(
        "Giá trị VBNH15 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVBNH15 > maxVBNH15) {
      setMinVBNH15Error(true);
      setMaxVBNH15Error(true);
      toastErrorAccessory("Giá trị Min VBNH15 phải nhỏ hơn Max VBNH15");
      return false;
    } else {
      setMinVBNH15Error(false);
      setMaxVBNH15Error(false);
    }

    if (
      minVBNH16 < 0 ||
      maxVBNH16 > 100 ||
      minVBNH16 === "" ||
      maxVBNH16 === ""
    ) {
      setMinVBNH16Error(true);
      setMaxVBNH16Error(true);
      toastErrorAccessory(
        "Giá trị VBNH16 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVBNH16 > maxVBNH16) {
      setMinVBNH16Error(true);
      setMaxVBNH16Error(true);
      toastErrorAccessory("Giá trị Min VBNH16 phải nhỏ hơn Max VBNH16");
      return false;
    } else {
      setMinVBNH16Error(false);
      setMaxVBNH16Error(false);
    }

    if (
      minVBNH17 < 0 ||
      maxVBNH17 > 100 ||
      minVBNH17 === "" ||
      maxVBNH17 === ""
    ) {
      setMinVBNH17Error(true);
      setMaxVBNH17Error(true);
      toastErrorAccessory(
        "Giá trị VBNH17 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVBNH17 > maxVBNH17) {
      setMinVBNH17Error(true);
      setMaxVBNH17Error(true);
      toastErrorAccessory("Giá trị Min VBNH17 phải nhỏ hơn Max VBNH17");
      return false;
    } else {
      setMinVBNH17Error(false);
      setMaxVBNH17Error(false);
    }

    if (
      minVBNH18 < 0 ||
      maxVBNH18 > 100 ||
      minVBNH18 === "" ||
      maxVBNH18 === ""
    ) {
      setMinVBNH18Error(true);
      setMaxVBNH18Error(true);
      toastErrorAccessory(
        "Giá trị VBNH18 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVBNH18 > maxVBNH18) {
      setMinVBNH18Error(true);
      setMaxVBNH18Error(true);
      toastErrorAccessory("Giá trị Min VBNH18 phải nhỏ hơn Max VBNH18");
      return false;
    } else {
      setMinVBNH18Error(false);
      setMaxVBNH18Error(false);
    }

    if (
      minVBNH19 < 0 ||
      maxVBNH19 > 100 ||
      minVBNH19 === "" ||
      maxVBNH19 === ""
    ) {
      setMinVBNH19Error(true);
      setMaxVBNH19Error(true);
      toastErrorAccessory(
        "Giá trị VBNH19 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVBNH19 > maxVBNH19) {
      setMinVBNH19Error(true);
      setMaxVBNH19Error(true);
      toastErrorAccessory("Giá trị Min VBNH19 phải nhỏ hơn Max VBNH19");
      return false;
    } else {
      setMinVBNH19Error(false);
      setMaxVBNH19Error(false);
    }

    if (
      minVBNH20 < 0 ||
      maxVBNH20 > 100 ||
      minVBNH20 === "" ||
      maxVBNH20 === ""
    ) {
      setMinVBNH20Error(true);
      setMaxVBNH20Error(true);
      toastErrorAccessory(
        "Giá trị VBNH20 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVBNH20 > maxVBNH20) {
      setMinVBNH20Error(true);
      setMaxVBNH20Error(true);
      toastErrorAccessory("Giá trị Min VBNH20 phải nhỏ hơn Max VBNH20");
      return false;
    } else {
      setMinVBNH20Error(false);
      setMaxVBNH20Error(false);
    }

    if (
      minVBNH21 < 0 ||
      maxVBNH21 > 100 ||
      minVBNH21 === "" ||
      maxVBNH21 === ""
    ) {
      setMinVBNH21Error(true);
      setMaxVBNH21Error(true);
      toastErrorAccessory(
        "Giá trị VBNH21 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVBNH21 > maxVBNH21) {
      setMinVBNH21Error(true);
      setMaxVBNH21Error(true);
      toastErrorAccessory("Giá trị Min VBNH21 phải nhỏ hơn Max VBNH21");
      return false;
    } else {
      setMinVBNH21Error(false);
      setMaxVBNH21Error(false);
    }

    if (
      minVBNH22 < 0 ||
      maxVBNH22 > 100 ||
      minVBNH22 === "" ||
      maxVBNH22 === ""
    ) {
      setMinVBNH22Error(true);
      setMaxVBNH22Error(true);
      toastErrorAccessory(
        "Giá trị VBNH22 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVBNH22 > maxVBNH22) {
      setMinVBNH22Error(true);
      setMaxVBNH22Error(true);
      toastErrorAccessory("Giá trị Min VBNH22 phải nhỏ hơn Max VBNH22");
      return false;
    } else {
      setMinVBNH22Error(false);
      setMaxVBNH22Error(false);
    }

    if (
      minVBNH23 < 0 ||
      maxVBNH23 > 100 ||
      minVBNH23 === "" ||
      maxVBNH23 === ""
    ) {
      setMinVBNH23Error(true);
      setMaxVBNH23Error(true);
      toastErrorAccessory(
        "Giá trị VBNH23 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVBNH23 > maxVBNH23) {
      setMinVBNH23Error(true);
      setMaxVBNH23Error(true);
      toastErrorAccessory("Giá trị Min VBNH23 phải nhỏ hơn Max VBNH23");
      return false;
    } else {
      setMinVBNH23Error(false);
      setMaxVBNH23Error(false);
    }

    if (
      minVBNH24 < 0 ||
      maxVBNH24 > 100 ||
      minVBNH24 === "" ||
      maxVBNH24 === ""
    ) {
      setMinVBNH24Error(true);
      setMaxVBNH24Error(true);
      toastErrorAccessory(
        "Giá trị VBNH24 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVBNH24 > maxVBNH24) {
      setMinVBNH24Error(true);
      setMaxVBNH24Error(true);
      toastErrorAccessory("Giá trị Min VBNH24 phải nhỏ hơn Max VBNH24");
      return false;
    } else {
      setMinVBNH24Error(false);
      setMaxVBNH24Error(false);
    }

    if (
      minVBNH25 < 0 ||
      maxVBNH25 > 100 ||
      minVBNH25 === "" ||
      maxVBNH25 === ""
    ) {
      setMinVBNH25Error(true);
      setMaxVBNH25Error(true);
      toastErrorAccessory(
        "Giá trị VBNH25 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVBNH25 > maxVBNH25) {
      setMinVBNH25Error(true);
      setMaxVBNH25Error(true);
      toastErrorAccessory("Giá trị Min VBNH25 phải nhỏ hơn Max VBNH25");
      return false;
    } else {
      setMinVBNH25Error(false);
      setMaxVBNH25Error(false);
    }

    if (
      minVBNH26 < 0 ||
      maxVBNH26 > 100 ||
      minVBNH26 === "" ||
      maxVBNH26 === ""
    ) {
      setMinVBNH26Error(true);
      setMaxVBNH26Error(true);
      toastErrorAccessory(
        "Giá trị VBNH26 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVBNH26 > maxVBNH26) {
      setMinVBNH26Error(true);
      setMaxVBNH26Error(true);
      toastErrorAccessory("Giá trị Min VBNH26 phải nhỏ hơn Max VBNH26");
      return false;
    } else {
      setMinVBNH26Error(false);
      setMaxVBNH26Error(false);
    }
    if (
      minVBNH27 < 0 ||
      maxVBNH27 > 100 ||
      minVBNH27 === "" ||
      maxVBNH27 === ""
    ) {
      setMinVBNH27Error(true);
      setMaxVBNH27Error(true);
      toastErrorAccessory(
        "Giá trị VBNH27 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVBNH27 > maxVBNH27) {
      setMinVBNH27Error(true);
      setMaxVBNH27Error(true);
      toastErrorAccessory("Giá trị Min VBNH27 phải nhỏ hơn Max VBNH27");
      return false;
    } else {
      setMinVBNH27Error(false);
      setMaxVBNH27Error(false);
    }

    if (
      minVBNH28 < 0 ||
      maxVBNH28 > 100 ||
      minVBNH28 === "" ||
      maxVBNH28 === ""
    ) {
      setMinVBNH28Error(true);
      setMaxVBNH28Error(true);
      toastErrorAccessory(
        "Giá trị VBNH28 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVBNH28 > maxVBNH28) {
      setMinVBNH28Error(true);
      setMaxVBNH28Error(true);
      toastErrorAccessory("Giá trị Min VBNH28 phải nhỏ hơn Max VBNH28");
      return false;
    } else {
      setMinVBNH28Error(false);
      setMaxVBNH28Error(false);
    }

    if (
      minVBNH29 < 0 ||
      maxVBNH29 > 100 ||
      minVBNH29 === "" ||
      maxVBNH29 === ""
    ) {
      setMinVBNH29Error(true);
      setMaxVBNH29Error(true);
      toastErrorAccessory(
        "Giá trị VBNH29 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVBNH29 > maxVBNH29) {
      setMinVBNH29Error(true);
      setMaxVBNH29Error(true);
      toastErrorAccessory("Giá trị Min VBNH29 phải nhỏ hơn Max VBNH29");
      return false;
    } else {
      setMinVBNH29Error(false);
      setMaxVBNH29Error(false);
    }

    if (
      minVBNH30 < 0 ||
      maxVBNH30 > 100 ||
      minVBNH30 === "" ||
      maxVBNH30 === ""
    ) {
      setMinVBNH30Error(true);
      setMaxVBNH30Error(true);
      toastErrorAccessory(
        "Giá trị VBNH30 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVBNH30 > maxVBNH30) {
      setMinVBNH30Error(true);
      setMaxVBNH30Error(true);
      toastErrorAccessory("Giá trị Min VBNH30 phải nhỏ hơn Max VBNH30");
      return false;
    } else {
      setMinVBNH30Error(false);
      setMaxVBNH30Error(false);
    }
    if (
      minVBNH31 < 0 ||
      maxVBNH31 > 100 ||
      minVBNH31 === "" ||
      maxVBNH31 === ""
    ) {
      setMinVBNH31Error(true);
      setMaxVBNH31Error(true);
      toastErrorAccessory(
        "Giá trị VBNH31 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVBNH31 > maxVBNH31) {
      setMinVBNH31Error(true);
      setMaxVBNH31Error(true);
      toastErrorAccessory("Giá trị Min VBNH31 phải nhỏ hơn Max VBNH31");
      return false;
    } else {
      setMinVBNH31Error(false);
      setMaxVBNH31Error(false);
    }

    if (minVCNH1 < 0 || maxVCNH1 > 100 || minVCNH1 === "" || maxVCNH1 === "") {
      setMinVCNH1Error(true);
      setMaxVCNH1Error(true);
      toastErrorAccessory(
        "Giá trị VCNH1 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVCNH1 > maxVCNH1) {
      setMinVCNH1Error(true);
      setMaxVCNH1Error(true);
      toastErrorAccessory("Giá trị Min VCNH1 phải nhỏ hơn Max VCNH1");
      return false;
    } else {
      setMinVCNH1Error(false);
      setMaxVCNH1Error(false);
    }

    if (minVCNH2 < 0 || maxVCNH2 > 100 || minVCNH2 === "" || maxVCNH2 === "") {
      setMinVCNH2Error(true);
      setMaxVCNH2Error(true);
      toastErrorAccessory(
        "Giá trị VCNH2 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVCNH2 > maxVCNH2) {
      setMinVCNH2Error(true);
      setMaxVCNH2Error(true);
      toastErrorAccessory("Giá trị Min VCNH2 phải nhỏ hơn Max VCNH2");
      return false;
    } else {
      setMinVCNH2Error(false);
      setMaxVCNH2Error(false);
    }

    if (minVCNH3 < 0 || maxVCNH3 > 100 || minVCNH3 === "" || maxVCNH3 === "") {
      setMinVCNH3Error(true);
      setMaxVCNH3Error(true);
      toastErrorAccessory(
        "Giá trị VCNH3 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVCNH3 > maxVCNH3) {
      setMinVCNH3Error(true);
      setMaxVCNH3Error(true);
      toastErrorAccessory("Giá trị Min VCNH3 phải nhỏ hơn Max VCNH3");
      return false;
    } else {
      setMinVCNH3Error(false);
      setMaxVCNH3Error(false);
    }

    if (minVCNH4 < 0 || maxVCNH4 > 100 || minVCNH4 === "" || maxVCNH4 === "") {
      setMinVCNH4Error(true);
      setMaxVCNH4Error(true);
      toastErrorAccessory(
        "Giá trị VCNH4 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVCNH4 > maxVCNH4) {
      setMinVCNH4Error(true);
      setMaxVCNH4Error(true);
      toastErrorAccessory("Giá trị Min VCNH4 phải nhỏ hơn Max VCNH4");
      return false;
    } else {
      setMinVCNH4Error(false);
      setMaxVCNH4Error(false);
    }

    if (minVCNH5 < 0 || maxVCNH5 > 100 || minVCNH5 === "" || maxVCNH5 === "") {
      setMinVCNH5Error(true);
      setMaxVCNH5Error(true);
      toastErrorAccessory(
        "Giá trị VCNH5 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVCNH5 > maxVCNH5) {
      setMinVCNH5Error(true);
      setMaxVCNH5Error(true);
      toastErrorAccessory("Giá trị Min VCNH5 phải nhỏ hơn Max VCNH5");
      return false;
    } else {
      setMinVCNH5Error(false);
      setMaxVCNH5Error(false);
    }

    if (minVCNH6 < 0 || maxVCNH6 > 100 || minVCNH6 === "" || maxVCNH6 === "") {
      setMinVCNH6Error(true);
      setMaxVCNH6Error(true);
      toastErrorAccessory(
        "Giá trị VCNH6 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVCNH6 > maxVCNH6) {
      setMinVCNH6Error(true);
      setMaxVCNH6Error(true);
      toastErrorAccessory("Giá trị Min VCNH6 phải nhỏ hơn Max VCNH6");
      return false;
    } else {
      setMinVCNH6Error(false);
      setMaxVCNH6Error(false);
    }

    if (minVCNH7 < 0 || maxVCNH7 > 100 || minVCNH7 === "" || maxVCNH7 === "") {
      setMinVCNH7Error(true);
      setMaxVCNH7Error(true);
      toastErrorAccessory(
        "Giá trị VCNH7 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVCNH7 > maxVCNH7) {
      setMinVCNH7Error(true);
      setMaxVCNH7Error(true);
      toastErrorAccessory("Giá trị Min VCNH7 phải nhỏ hơn Max VCNH7");
      return false;
    } else {
      setMinVCNH7Error(false);
      setMaxVCNH7Error(false);
    }

    if (minVCNH8 < 0 || maxVCNH8 > 100 || minVCNH8 === "" || maxVCNH8 === "") {
      setMinVCNH8Error(true);
      setMaxVCNH8Error(true);
      toastErrorAccessory(
        "Giá trị VCNH8 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVCNH8 > maxVCNH8) {
      setMinVCNH8Error(true);
      setMaxVCNH8Error(true);
      toastErrorAccessory("Giá trị Min VCNH8 phải nhỏ hơn Max VCNH8");
      return false;
    } else {
      setMinVCNH8Error(false);
      setMaxVCNH8Error(false);
    }

    if (minVCNH9 < 0 || maxVCNH9 > 100 || minVCNH9 === "" || maxVCNH9 === "") {
      setMinVCNH9Error(true);
      setMaxVCNH9Error(true);
      toastErrorAccessory(
        "Giá trị VCNH9 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVCNH9 > maxVCNH9) {
      setMinVCNH9Error(true);
      setMaxVCNH9Error(true);
      toastErrorAccessory("Giá trị Min VCNH9 phải nhỏ hơn Max VCNH9");
      return false;
    } else {
      setMinVCNH9Error(false);
      setMaxVCNH9Error(false);
    }

    if (
      minVCNH10 < 0 ||
      maxVCNH10 > 100 ||
      minVCNH10 === "" ||
      maxVCNH10 === ""
    ) {
      setMinVCNH10Error(true);
      setMaxVCNH10Error(true);
      toastErrorAccessory(
        "Giá trị VCNH10 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVCNH10 > maxVCNH10) {
      setMinVCNH10Error(true);
      setMaxVCNH10Error(true);
      toastErrorAccessory("Giá trị Min VCNH10 phải nhỏ hơn Max VCNH10");
      return false;
    } else {
      setMinVCNH10Error(false);
      setMaxVCNH10Error(false);
    }

    if (
      minVCNH11 < 0 ||
      maxVCNH11 > 100 ||
      minVCNH11 === "" ||
      maxVCNH11 === ""
    ) {
      setMinVCNH11Error(true);
      setMaxVCNH11Error(true);
      toastErrorAccessory(
        "Giá trị VCNH11 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVCNH11 > maxVCNH11) {
      setMinVCNH11Error(true);
      setMaxVCNH11Error(true);
      toastErrorAccessory("Giá trị Min VCNH11 phải nhỏ hơn Max VCNH11");
      return false;
    } else {
      setMinVCNH11Error(false);
      setMaxVCNH11Error(false);
    }

    if (
      minVCNH12 < 0 ||
      maxVCNH12 > 100 ||
      minVCNH12 === "" ||
      maxVCNH12 === ""
    ) {
      setMinVCNH12Error(true);
      setMaxVCNH12Error(true);
      toastErrorAccessory(
        "Giá trị VCNH12 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVCNH12 > maxVCNH12) {
      setMinVCNH12Error(true);
      setMaxVCNH12Error(true);
      toastErrorAccessory("Giá trị Min VCNH12 phải nhỏ hơn Max VCNH12");
      return false;
    } else {
      setMinVCNH12Error(false);
      setMaxVCNH12Error(false);
    }

    if (
      minVCNH13 < 0 ||
      maxVCNH13 > 100 ||
      minVCNH13 === "" ||
      maxVCNH13 === ""
    ) {
      setMinVCNH13Error(true);
      setMaxVCNH13Error(true);
      toastErrorAccessory(
        "Giá trị VCNH13 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVCNH13 > maxVCNH13) {
      setMinVCNH13Error(true);
      setMaxVCNH13Error(true);
      toastErrorAccessory("Giá trị Min VCNH13 phải nhỏ hơn Max VCNH13");
      return false;
    } else {
      setMinVCNH13Error(false);
      setMaxVCNH13Error(false);
    }

    if (
      minVCNH14 < 0 ||
      maxVCNH14 > 100 ||
      minVCNH14 === "" ||
      maxVCNH14 === ""
    ) {
      setMinVCNH14Error(true);
      setMaxVCNH14Error(true);
      toastErrorAccessory(
        "Giá trị VCNH14 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVCNH14 > maxVCNH14) {
      setMinVCNH14Error(true);
      setMaxVCNH14Error(true);
      toastErrorAccessory("Giá trị Min VCNH14 phải nhỏ hơn Max VCNH14");
      return false;
    } else {
      setMinVCNH14Error(false);
      setMaxVCNH14Error(false);
    }

    if (
      minVCNH15 < 0 ||
      maxVCNH15 > 100 ||
      minVCNH15 === "" ||
      maxVCNH15 === ""
    ) {
      setMinVCNH15Error(true);
      setMaxVCNH15Error(true);
      toastErrorAccessory(
        "Giá trị VCNH15 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVCNH15 > maxVCNH15) {
      setMinVCNH15Error(true);
      setMaxVCNH15Error(true);
      toastErrorAccessory("Giá trị Min VCNH15 phải nhỏ hơn Max VCNH15");
      return false;
    } else {
      setMinVCNH15Error(false);
      setMaxVCNH15Error(false);
    }

    if (
      minVCNH16 < 0 ||
      maxVCNH16 > 100 ||
      minVCNH16 === "" ||
      maxVCNH16 === ""
    ) {
      setMinVCNH16Error(true);
      setMaxVCNH16Error(true);
      toastErrorAccessory(
        "Giá trị VCNH16 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVCNH16 > maxVCNH16) {
      setMinVCNH16Error(true);
      setMaxVCNH16Error(true);
      toastErrorAccessory("Giá trị Min VCNH16 phải nhỏ hơn Max VCNH16");
      return false;
    } else {
      setMinVCNH16Error(false);
      setMaxVCNH16Error(false);
    }

    if (
      minVCNH17 < 0 ||
      maxVCNH17 > 100 ||
      minVCNH17 === "" ||
      maxVCNH17 === ""
    ) {
      setMinVCNH17Error(true);
      setMaxVCNH17Error(true);
      toastErrorAccessory(
        "Giá trị VCNH17 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVCNH17 > maxVCNH17) {
      setMinVCNH17Error(true);
      setMaxVCNH17Error(true);
      toastErrorAccessory("Giá trị Min VCNH17 phải nhỏ hơn Max VCNH17");
      return false;
    } else {
      setMinVCNH17Error(false);
      setMaxVCNH17Error(false);
    }

    if (
      minVCNH18 < 0 ||
      maxVCNH18 > 100 ||
      minVCNH18 === "" ||
      maxVCNH18 === ""
    ) {
      setMinVCNH18Error(true);
      setMaxVCNH18Error(true);
      toastErrorAccessory(
        "Giá trị VCNH18 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVCNH18 > maxVCNH18) {
      setMinVCNH18Error(true);
      setMaxVCNH18Error(true);
      toastErrorAccessory("Giá trị Min VCNH18 phải nhỏ hơn Max VCNH18");
      return false;
    } else {
      setMinVCNH18Error(false);
      setMaxVCNH18Error(false);
    }

    if (
      minVCNH19 < 0 ||
      maxVCNH19 > 100 ||
      minVCNH19 === "" ||
      maxVCNH19 === ""
    ) {
      setMinVCNH19Error(true);
      setMaxVCNH19Error(true);
      toastErrorAccessory(
        "Giá trị VCNH19 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVCNH19 > maxVCNH19) {
      setMinVCNH19Error(true);
      setMaxVCNH19Error(true);
      toastErrorAccessory("Giá trị Min VCNH19 phải nhỏ hơn Max VCNH19");
      return false;
    } else {
      setMinVCNH19Error(false);
      setMaxVCNH19Error(false);
    }

    if (
      minVCNH20 < 0 ||
      maxVCNH20 > 100 ||
      minVCNH20 === "" ||
      maxVCNH20 === ""
    ) {
      setMinVCNH20Error(true);
      setMaxVCNH20Error(true);
      toastErrorAccessory(
        "Giá trị VCNH20 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVCNH20 > maxVCNH20) {
      setMinVCNH20Error(true);
      setMaxVCNH20Error(true);
      toastErrorAccessory("Giá trị Min VCNH20 phải nhỏ hơn Max VCNH20");
      return false;
    } else {
      setMinVCNH20Error(false);
      setMaxVCNH20Error(false);
    }

    if (
      minVCNH21 < 0 ||
      maxVCNH21 > 100 ||
      minVCNH21 === "" ||
      maxVCNH21 === ""
    ) {
      setMinVCNH21Error(true);
      setMaxVCNH21Error(true);
      toastErrorAccessory(
        "Giá trị VCNH21 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVCNH21 > maxVCNH21) {
      setMinVCNH21Error(true);
      setMaxVCNH21Error(true);
      toastErrorAccessory("Giá trị Min VCNH21 phải nhỏ hơn Max VCNH21");
      return false;
    } else {
      setMinVCNH21Error(false);
      setMaxVCNH21Error(false);
    }

    if (
      minVCNH22 < 0 ||
      maxVCNH22 > 100 ||
      minVCNH22 === "" ||
      maxVCNH22 === ""
    ) {
      setMinVCNH22Error(true);
      setMaxVCNH22Error(true);
      toastErrorAccessory(
        "Giá trị VCNH22 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVCNH22 > maxVCNH22) {
      setMinVCNH22Error(true);
      setMaxVCNH22Error(true);
      toastErrorAccessory("Giá trị Min VCNH22 phải nhỏ hơn Max VCNH22");
      return false;
    } else {
      setMinVCNH22Error(false);
      setMaxVCNH22Error(false);
    }

    if (
      minVCNH23 < 0 ||
      maxVCNH23 > 100 ||
      minVCNH23 === "" ||
      maxVCNH23 === ""
    ) {
      setMinVCNH23Error(true);
      setMaxVCNH23Error(true);
      toastErrorAccessory(
        "Giá trị VCNH23 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVCNH23 > maxVCNH23) {
      setMinVCNH23Error(true);
      setMaxVCNH23Error(true);
      toastErrorAccessory("Giá trị Min VCNH23 phải nhỏ hơn Max VCNH23");
      return false;
    } else {
      setMinVCNH23Error(false);
      setMaxVCNH23Error(false);
    }

    if (
      minVCNH24 < 0 ||
      maxVCNH24 > 100 ||
      minVCNH24 === "" ||
      maxVCNH24 === ""
    ) {
      setMinVCNH24Error(true);
      setMaxVCNH24Error(true);
      toastErrorAccessory(
        "Giá trị VCNH24 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVCNH24 > maxVCNH24) {
      setMinVCNH24Error(true);
      setMaxVCNH24Error(true);
      toastErrorAccessory("Giá trị Min VCNH24 phải nhỏ hơn Max VCNH24");
      return false;
    } else {
      setMinVCNH24Error(false);
      setMaxVCNH24Error(false);
    }

    if (
      minVCNH25 < 0 ||
      maxVCNH25 > 100 ||
      minVCNH25 === "" ||
      maxVCNH25 === ""
    ) {
      setMinVCNH25Error(true);
      setMaxVCNH25Error(true);
      toastErrorAccessory(
        "Giá trị VCNH25 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVCNH25 > maxVCNH25) {
      setMinVCNH25Error(true);
      setMaxVCNH25Error(true);
      toastErrorAccessory("Giá trị Min VCNH25 phải nhỏ hơn Max VCNH25");
      return false;
    } else {
      setMinVCNH25Error(false);
      setMaxVCNH25Error(false);
    }

    if (
      minVCNH26 < 0 ||
      maxVCNH26 > 100 ||
      minVCNH26 === "" ||
      maxVCNH26 === ""
    ) {
      setMinVCNH26Error(true);
      setMaxVCNH26Error(true);
      toastErrorAccessory(
        "Giá trị VCNH26 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVCNH26 > maxVCNH26) {
      setMinVCNH26Error(true);
      setMaxVCNH26Error(true);
      toastErrorAccessory("Giá trị Min VCNH26 phải nhỏ hơn Max VCNH26");
      return false;
    } else {
      setMinVCNH26Error(false);
      setMaxVCNH26Error(false);
    }
    if (
      minVCNH27 < 0 ||
      maxVCNH27 > 100 ||
      minVCNH27 === "" ||
      maxVCNH27 === ""
    ) {
      setMinVCNH27Error(true);
      setMaxVCNH27Error(true);
      toastErrorAccessory(
        "Giá trị VCNH27 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVCNH27 > maxVCNH27) {
      setMinVCNH27Error(true);
      setMaxVCNH27Error(true);
      toastErrorAccessory("Giá trị Min VCNH27 phải nhỏ hơn Max VCNH27");
      return false;
    } else {
      setMinVCNH27Error(false);
      setMaxVCNH27Error(false);
    }

    if (
      minVCNH28 < 0 ||
      maxVCNH28 > 100 ||
      minVCNH28 === "" ||
      maxVCNH28 === ""
    ) {
      setMinVCNH28Error(true);
      setMaxVCNH28Error(true);
      toastErrorAccessory(
        "Giá trị VCNH28 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVCNH28 > maxVCNH28) {
      setMinVCNH28Error(true);
      setMaxVCNH28Error(true);
      toastErrorAccessory("Giá trị Min VCNH28 phải nhỏ hơn Max VCNH28");
      return false;
    } else {
      setMinVCNH28Error(false);
      setMaxVCNH28Error(false);
    }

    if (
      minVCNH29 < 0 ||
      maxVCNH29 > 100 ||
      minVCNH29 === "" ||
      maxVCNH29 === ""
    ) {
      setMinVCNH29Error(true);
      setMaxVCNH29Error(true);
      toastErrorAccessory(
        "Giá trị VCNH29 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVCNH29 > maxVCNH29) {
      setMinVCNH29Error(true);
      setMaxVCNH29Error(true);
      toastErrorAccessory("Giá trị Min VCNH29 phải nhỏ hơn Max VCNH29");
      return false;
    } else {
      setMinVCNH29Error(false);
      setMaxVCNH29Error(false);
    }

    if (
      minVCNH30 < 0 ||
      maxVCNH30 > 100 ||
      minVCNH30 === "" ||
      maxVCNH30 === ""
    ) {
      setMinVCNH30Error(true);
      setMaxVCNH30Error(true);
      toastErrorAccessory(
        "Giá trị VCNH30 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVCNH30 > maxVCNH30) {
      setMinVCNH30Error(true);
      setMaxVCNH30Error(true);
      toastErrorAccessory("Giá trị Min VCNH30 phải nhỏ hơn Max VCNH30");
      return false;
    } else {
      setMinVCNH30Error(false);
      setMaxVCNH30Error(false);
    }
    if (
      minVCNH31 < 0 ||
      maxVCNH31 > 100 ||
      minVCNH31 === "" ||
      maxVCNH31 === ""
    ) {
      setMinVCNH31Error(true);
      setMaxVCNH31Error(true);
      toastErrorAccessory(
        "Giá trị VCNH31 không được để trống và phải nằm trong khoảng [0;100]"
      );
      return false;
    } else if (minVCNH31 > maxVCNH31) {
      setMinVCNH31Error(true);
      setMaxVCNH31Error(true);
      toastErrorAccessory("Giá trị Min VCNH31 phải nhỏ hơn Max VCNH31");
      return false;
    } else {
      setMinVCNH31Error(false);
      setMaxVCNH31Error(false);
    }

    return true;
  };
  useEffect(() => {
    clearInterval(timerId);
    setTimerId(null);
    updateStatus({ key: props.data, status: true });
  }, [disabled == false]);

  const [minIAH1, setMinIAH1] = useState(0);
  const [maxIAH1, setMaxIAH1] = useState(100);

  const [minIAH2, setMinIAH2] = useState(0);
  const [maxIAH2, setMaxIAH2] = useState(100);

  const [minIAH3, setMinIAH3] = useState(0);
  const [maxIAH3, setMaxIAH3] = useState(100);

  const [minIAH4, setMinIAH4] = useState(0);
  const [maxIAH4, setMaxIAH4] = useState(100);

  const [minIAH5, setMinIAH5] = useState(0);
  const [maxIAH5, setMaxIAH5] = useState(100);

  const [minIAH6, setMinIAH6] = useState(0);
  const [maxIAH6, setMaxIAH6] = useState(100);

  const [minIAH7, setMinIAH7] = useState(0);
  const [maxIAH7, setMaxIAH7] = useState(100);

  const [minIAH8, setMinIAH8] = useState(0);
  const [maxIAH8, setMaxIAH8] = useState(100);

  const [minIAH9, setMinIAH9] = useState(0);
  const [maxIAH9, setMaxIAH9] = useState(100);

  const [minIAH10, setMinIAH10] = useState(0);
  const [maxIAH10, setMaxIAH10] = useState(100);

  const [minIAH11, setMinIAH11] = useState(0);
  const [maxIAH11, setMaxIAH11] = useState(100);

  const [minIAH12, setMinIAH12] = useState(0);
  const [maxIAH12, setMaxIAH12] = useState(100);

  const [minIAH13, setMinIAH13] = useState(0);
  const [maxIAH13, setMaxIAH13] = useState(100);

  const [minIAH14, setMinIAH14] = useState(0);
  const [maxIAH14, setMaxIAH14] = useState(100);

  const [minIAH15, setMinIAH15] = useState(0);
  const [maxIAH15, setMaxIAH15] = useState(100);

  const [minIAH16, setMinIAH16] = useState(0);
  const [maxIAH16, setMaxIAH16] = useState(100);

  const [minIAH17, setMinIAH17] = useState(0);
  const [maxIAH17, setMaxIAH17] = useState(100);

  const [minIAH18, setMinIAH18] = useState(0);
  const [maxIAH18, setMaxIAH18] = useState(100);

  const [minIAH19, setMinIAH19] = useState(0);
  const [maxIAH19, setMaxIAH19] = useState(100);

  const [minIAH20, setMinIAH20] = useState(0);
  const [maxIAH20, setMaxIAH20] = useState(100);

  const [minIAH21, setMinIAH21] = useState(0);
  const [maxIAH21, setMaxIAH21] = useState(100);

  const [minIAH22, setMinIAH22] = useState(0);
  const [maxIAH22, setMaxIAH22] = useState(100);

  const [minIAH23, setMinIAH23] = useState(0);
  const [maxIAH23, setMaxIAH23] = useState(100);

  const [minIAH24, setMinIAH24] = useState(0);
  const [maxIAH24, setMaxIAH24] = useState(100);

  const [minIAH25, setMinIAH25] = useState(0);
  const [maxIAH25, setMaxIAH25] = useState(100);

  const [minIAH26, setMinIAH26] = useState(0);
  const [maxIAH26, setMaxIAH26] = useState(100);

  const [minIAH27, setMinIAH27] = useState(0);
  const [maxIAH27, setMaxIAH27] = useState(100);

  const [minIAH28, setMinIAH28] = useState(0);
  const [maxIAH28, setMaxIAH28] = useState(100);

  const [minIAH29, setMinIAH29] = useState(0);
  const [maxIAH29, setMaxIAH29] = useState(100);

  const [minIAH30, setMinIAH30] = useState(0);
  const [maxIAH30, setMaxIAH30] = useState(100);

  const [minIAH31, setMinIAH31] = useState(0);
  const [maxIAH31, setMaxIAH31] = useState(100);
  const [minIBH1, setMinIBH1] = useState(0);
  const [maxIBH1, setMaxIBH1] = useState(100);

  const [minIBH2, setMinIBH2] = useState(0);
  const [maxIBH2, setMaxIBH2] = useState(100);

  const [minIBH3, setMinIBH3] = useState(0);
  const [maxIBH3, setMaxIBH3] = useState(100);

  const [minIBH4, setMinIBH4] = useState(0);
  const [maxIBH4, setMaxIBH4] = useState(100);

  const [minIBH5, setMinIBH5] = useState(0);
  const [maxIBH5, setMaxIBH5] = useState(100);

  const [minIBH6, setMinIBH6] = useState(0);
  const [maxIBH6, setMaxIBH6] = useState(100);

  const [minIBH7, setMinIBH7] = useState(0);
  const [maxIBH7, setMaxIBH7] = useState(100);

  const [minIBH8, setMinIBH8] = useState(0);
  const [maxIBH8, setMaxIBH8] = useState(100);

  const [minIBH9, setMinIBH9] = useState(0);
  const [maxIBH9, setMaxIBH9] = useState(100);

  const [minIBH10, setMinIBH10] = useState(0);
  const [maxIBH10, setMaxIBH10] = useState(100);

  const [minIBH11, setMinIBH11] = useState(0);
  const [maxIBH11, setMaxIBH11] = useState(100);

  const [minIBH12, setMinIBH12] = useState(0);
  const [maxIBH12, setMaxIBH12] = useState(100);

  const [minIBH13, setMinIBH13] = useState(0);
  const [maxIBH13, setMaxIBH13] = useState(100);

  const [minIBH14, setMinIBH14] = useState(0);
  const [maxIBH14, setMaxIBH14] = useState(100);

  const [minIBH15, setMinIBH15] = useState(0);
  const [maxIBH15, setMaxIBH15] = useState(100);

  const [minIBH16, setMinIBH16] = useState(0);
  const [maxIBH16, setMaxIBH16] = useState(100);

  const [minIBH17, setMinIBH17] = useState(0);
  const [maxIBH17, setMaxIBH17] = useState(100);

  const [minIBH18, setMinIBH18] = useState(0);
  const [maxIBH18, setMaxIBH18] = useState(100);

  const [minIBH19, setMinIBH19] = useState(0);
  const [maxIBH19, setMaxIBH19] = useState(100);

  const [minIBH20, setMinIBH20] = useState(0);
  const [maxIBH20, setMaxIBH20] = useState(100);

  const [minIBH21, setMinIBH21] = useState(0);
  const [maxIBH21, setMaxIBH21] = useState(100);

  const [minIBH22, setMinIBH22] = useState(0);
  const [maxIBH22, setMaxIBH22] = useState(100);

  const [minIBH23, setMinIBH23] = useState(0);
  const [maxIBH23, setMaxIBH23] = useState(100);

  const [minIBH24, setMinIBH24] = useState(0);
  const [maxIBH24, setMaxIBH24] = useState(100);

  const [minIBH25, setMinIBH25] = useState(0);
  const [maxIBH25, setMaxIBH25] = useState(100);

  const [minIBH26, setMinIBH26] = useState(0);
  const [maxIBH26, setMaxIBH26] = useState(100);

  const [minIBH27, setMinIBH27] = useState(0);
  const [maxIBH27, setMaxIBH27] = useState(100);

  const [minIBH28, setMinIBH28] = useState(0);
  const [maxIBH28, setMaxIBH28] = useState(100);

  const [minIBH29, setMinIBH29] = useState(0);
  const [maxIBH29, setMaxIBH29] = useState(100);

  const [minIBH30, setMinIBH30] = useState(0);
  const [maxIBH30, setMaxIBH30] = useState(100);

  const [minIBH31, setMinIBH31] = useState(0);
  const [maxIBH31, setMaxIBH31] = useState(100);
  const [minICH1, setMinICH1] = useState(0);
  const [maxICH1, setMaxICH1] = useState(100);

  const [minICH2, setMinICH2] = useState(0);
  const [maxICH2, setMaxICH2] = useState(100);

  const [minICH3, setMinICH3] = useState(0);
  const [maxICH3, setMaxICH3] = useState(100);

  const [minICH4, setMinICH4] = useState(0);
  const [maxICH4, setMaxICH4] = useState(100);

  const [minICH5, setMinICH5] = useState(0);
  const [maxICH5, setMaxICH5] = useState(100);

  const [minICH6, setMinICH6] = useState(0);
  const [maxICH6, setMaxICH6] = useState(100);

  const [minICH7, setMinICH7] = useState(0);
  const [maxICH7, setMaxICH7] = useState(100);

  const [minICH8, setMinICH8] = useState(0);
  const [maxICH8, setMaxICH8] = useState(100);

  const [minICH9, setMinICH9] = useState(0);
  const [maxICH9, setMaxICH9] = useState(100);

  const [minICH10, setMinICH10] = useState(0);
  const [maxICH10, setMaxICH10] = useState(100);

  const [minICH11, setMinICH11] = useState(0);
  const [maxICH11, setMaxICH11] = useState(100);

  const [minICH12, setMinICH12] = useState(0);
  const [maxICH12, setMaxICH12] = useState(100);

  const [minICH13, setMinICH13] = useState(0);
  const [maxICH13, setMaxICH13] = useState(100);

  const [minICH14, setMinICH14] = useState(0);
  const [maxICH14, setMaxICH14] = useState(100);

  const [minICH15, setMinICH15] = useState(0);
  const [maxICH15, setMaxICH15] = useState(100);

  const [minICH16, setMinICH16] = useState(0);
  const [maxICH16, setMaxICH16] = useState(100);

  const [minICH17, setMinICH17] = useState(0);
  const [maxICH17, setMaxICH17] = useState(100);

  const [minICH18, setMinICH18] = useState(0);
  const [maxICH18, setMaxICH18] = useState(100);

  const [minICH19, setMinICH19] = useState(0);
  const [maxICH19, setMaxICH19] = useState(100);

  const [minICH20, setMinICH20] = useState(0);
  const [maxICH20, setMaxICH20] = useState(100);

  const [minICH21, setMinICH21] = useState(0);
  const [maxICH21, setMaxICH21] = useState(100);

  const [minICH22, setMinICH22] = useState(0);
  const [maxICH22, setMaxICH22] = useState(100);

  const [minICH23, setMinICH23] = useState(0);
  const [maxICH23, setMaxICH23] = useState(100);

  const [minICH24, setMinICH24] = useState(0);
  const [maxICH24, setMaxICH24] = useState(100);

  const [minICH25, setMinICH25] = useState(0);
  const [maxICH25, setMaxICH25] = useState(100);

  const [minICH26, setMinICH26] = useState(0);
  const [maxICH26, setMaxICH26] = useState(100);

  const [minICH27, setMinICH27] = useState(0);
  const [maxICH27, setMaxICH27] = useState(100);

  const [minICH28, setMinICH28] = useState(0);
  const [maxICH28, setMaxICH28] = useState(100);

  const [minICH29, setMinICH29] = useState(0);
  const [maxICH29, setMaxICH29] = useState(100);

  const [minICH30, setMinICH30] = useState(0);
  const [maxICH30, setMaxICH30] = useState(100);

  const [minICH31, setMinICH31] = useState(0);
  const [maxICH31, setMaxICH31] = useState(100);
  const [minVABH1, setMinVABH1] = useState(0);
  const [maxVABH1, setMaxVABH1] = useState(100);

  const [minVABH2, setMinVABH2] = useState(0);
  const [maxVABH2, setMaxVABH2] = useState(100);

  const [minVABH3, setMinVABH3] = useState(0);
  const [maxVABH3, setMaxVABH3] = useState(100);

  const [minVABH4, setMinVABH4] = useState(0);
  const [maxVABH4, setMaxVABH4] = useState(100);

  const [minVABH5, setMinVABH5] = useState(0);
  const [maxVABH5, setMaxVABH5] = useState(100);

  const [minVABH6, setMinVABH6] = useState(0);
  const [maxVABH6, setMaxVABH6] = useState(100);

  const [minVABH7, setMinVABH7] = useState(0);
  const [maxVABH7, setMaxVABH7] = useState(100);

  const [minVABH8, setMinVABH8] = useState(0);
  const [maxVABH8, setMaxVABH8] = useState(100);

  const [minVABH9, setMinVABH9] = useState(0);
  const [maxVABH9, setMaxVABH9] = useState(100);

  const [minVABH10, setMinVABH10] = useState(0);
  const [maxVABH10, setMaxVABH10] = useState(100);

  const [minVABH11, setMinVABH11] = useState(0);
  const [maxVABH11, setMaxVABH11] = useState(100);

  const [minVABH12, setMinVABH12] = useState(0);
  const [maxVABH12, setMaxVABH12] = useState(100);

  const [minVABH13, setMinVABH13] = useState(0);
  const [maxVABH13, setMaxVABH13] = useState(100);

  const [minVABH14, setMinVABH14] = useState(0);
  const [maxVABH14, setMaxVABH14] = useState(100);

  const [minVABH15, setMinVABH15] = useState(0);
  const [maxVABH15, setMaxVABH15] = useState(100);

  const [minVABH16, setMinVABH16] = useState(0);
  const [maxVABH16, setMaxVABH16] = useState(100);

  const [minVABH17, setMinVABH17] = useState(0);
  const [maxVABH17, setMaxVABH17] = useState(100);

  const [minVABH18, setMinVABH18] = useState(0);
  const [maxVABH18, setMaxVABH18] = useState(100);

  const [minVABH19, setMinVABH19] = useState(0);
  const [maxVABH19, setMaxVABH19] = useState(100);

  const [minVABH20, setMinVABH20] = useState(0);
  const [maxVABH20, setMaxVABH20] = useState(100);

  const [minVABH21, setMinVABH21] = useState(0);
  const [maxVABH21, setMaxVABH21] = useState(100);

  const [minVABH22, setMinVABH22] = useState(0);
  const [maxVABH22, setMaxVABH22] = useState(100);

  const [minVABH23, setMinVABH23] = useState(0);
  const [maxVABH23, setMaxVABH23] = useState(100);

  const [minVABH24, setMinVABH24] = useState(0);
  const [maxVABH24, setMaxVABH24] = useState(100);

  const [minVABH25, setMinVABH25] = useState(0);
  const [maxVABH25, setMaxVABH25] = useState(100);

  const [minVABH26, setMinVABH26] = useState(0);
  const [maxVABH26, setMaxVABH26] = useState(100);

  const [minVABH27, setMinVABH27] = useState(0);
  const [maxVABH27, setMaxVABH27] = useState(100);

  const [minVABH28, setMinVABH28] = useState(0);
  const [maxVABH28, setMaxVABH28] = useState(100);

  const [minVABH29, setMinVABH29] = useState(0);
  const [maxVABH29, setMaxVABH29] = useState(100);

  const [minVABH30, setMinVABH30] = useState(0);
  const [maxVABH30, setMaxVABH30] = useState(100);

  const [minVABH31, setMinVABH31] = useState(0);
  const [maxVABH31, setMaxVABH31] = useState(100);
  const [minVCAH1, setMinVCAH1] = useState(0);
  const [maxVCAH1, setMaxVCAH1] = useState(100);

  const [minVCAH2, setMinVCAH2] = useState(0);
  const [maxVCAH2, setMaxVCAH2] = useState(100);

  const [minVCAH3, setMinVCAH3] = useState(0);
  const [maxVCAH3, setMaxVCAH3] = useState(100);

  const [minVCAH4, setMinVCAH4] = useState(0);
  const [maxVCAH4, setMaxVCAH4] = useState(100);

  const [minVCAH5, setMinVCAH5] = useState(0);
  const [maxVCAH5, setMaxVCAH5] = useState(100);

  const [minVCAH6, setMinVCAH6] = useState(0);
  const [maxVCAH6, setMaxVCAH6] = useState(100);

  const [minVCAH7, setMinVCAH7] = useState(0);
  const [maxVCAH7, setMaxVCAH7] = useState(100);

  const [minVCAH8, setMinVCAH8] = useState(0);
  const [maxVCAH8, setMaxVCAH8] = useState(100);

  const [minVCAH9, setMinVCAH9] = useState(0);
  const [maxVCAH9, setMaxVCAH9] = useState(100);

  const [minVCAH10, setMinVCAH10] = useState(0);
  const [maxVCAH10, setMaxVCAH10] = useState(100);

  const [minVCAH11, setMinVCAH11] = useState(0);
  const [maxVCAH11, setMaxVCAH11] = useState(100);

  const [minVCAH12, setMinVCAH12] = useState(0);
  const [maxVCAH12, setMaxVCAH12] = useState(100);

  const [minVCAH13, setMinVCAH13] = useState(0);
  const [maxVCAH13, setMaxVCAH13] = useState(100);

  const [minVCAH14, setMinVCAH14] = useState(0);
  const [maxVCAH14, setMaxVCAH14] = useState(100);

  const [minVCAH15, setMinVCAH15] = useState(0);
  const [maxVCAH15, setMaxVCAH15] = useState(100);

  const [minVCAH16, setMinVCAH16] = useState(0);
  const [maxVCAH16, setMaxVCAH16] = useState(100);

  const [minVCAH17, setMinVCAH17] = useState(0);
  const [maxVCAH17, setMaxVCAH17] = useState(100);

  const [minVCAH18, setMinVCAH18] = useState(0);
  const [maxVCAH18, setMaxVCAH18] = useState(100);

  const [minVCAH19, setMinVCAH19] = useState(0);
  const [maxVCAH19, setMaxVCAH19] = useState(100);

  const [minVCAH20, setMinVCAH20] = useState(0);
  const [maxVCAH20, setMaxVCAH20] = useState(100);

  const [minVCAH21, setMinVCAH21] = useState(0);
  const [maxVCAH21, setMaxVCAH21] = useState(100);

  const [minVCAH22, setMinVCAH22] = useState(0);
  const [maxVCAH22, setMaxVCAH22] = useState(100);

  const [minVCAH23, setMinVCAH23] = useState(0);
  const [maxVCAH23, setMaxVCAH23] = useState(100);

  const [minVCAH24, setMinVCAH24] = useState(0);
  const [maxVCAH24, setMaxVCAH24] = useState(100);

  const [minVCAH25, setMinVCAH25] = useState(0);
  const [maxVCAH25, setMaxVCAH25] = useState(100);

  const [minVCAH26, setMinVCAH26] = useState(0);
  const [maxVCAH26, setMaxVCAH26] = useState(100);

  const [minVCAH27, setMinVCAH27] = useState(0);
  const [maxVCAH27, setMaxVCAH27] = useState(100);

  const [minVCAH28, setMinVCAH28] = useState(0);
  const [maxVCAH28, setMaxVCAH28] = useState(100);

  const [minVCAH29, setMinVCAH29] = useState(0);
  const [maxVCAH29, setMaxVCAH29] = useState(100);

  const [minVCAH30, setMinVCAH30] = useState(0);
  const [maxVCAH30, setMaxVCAH30] = useState(100);

  const [minVCAH31, setMinVCAH31] = useState(0);
  const [maxVCAH31, setMaxVCAH31] = useState(100);

  const [minVBCH1, setMinVBCH1] = useState(0);
  const [maxVBCH1, setMaxVBCH1] = useState(100);

  const [minVBCH2, setMinVBCH2] = useState(0);
  const [maxVBCH2, setMaxVBCH2] = useState(100);

  const [minVBCH3, setMinVBCH3] = useState(0);
  const [maxVBCH3, setMaxVBCH3] = useState(100);

  const [minVBCH4, setMinVBCH4] = useState(0);
  const [maxVBCH4, setMaxVBCH4] = useState(100);

  const [minVBCH5, setMinVBCH5] = useState(0);
  const [maxVBCH5, setMaxVBCH5] = useState(100);

  const [minVBCH6, setMinVBCH6] = useState(0);
  const [maxVBCH6, setMaxVBCH6] = useState(100);

  const [minVBCH7, setMinVBCH7] = useState(0);
  const [maxVBCH7, setMaxVBCH7] = useState(100);

  const [minVBCH8, setMinVBCH8] = useState(0);
  const [maxVBCH8, setMaxVBCH8] = useState(100);

  const [minVBCH9, setMinVBCH9] = useState(0);
  const [maxVBCH9, setMaxVBCH9] = useState(100);

  const [minVBCH10, setMinVBCH10] = useState(0);
  const [maxVBCH10, setMaxVBCH10] = useState(100);

  const [minVBCH11, setMinVBCH11] = useState(0);
  const [maxVBCH11, setMaxVBCH11] = useState(100);

  const [minVBCH12, setMinVBCH12] = useState(0);
  const [maxVBCH12, setMaxVBCH12] = useState(100);

  const [minVBCH13, setMinVBCH13] = useState(0);
  const [maxVBCH13, setMaxVBCH13] = useState(100);

  const [minVBCH14, setMinVBCH14] = useState(0);
  const [maxVBCH14, setMaxVBCH14] = useState(100);

  const [minVBCH15, setMinVBCH15] = useState(0);
  const [maxVBCH15, setMaxVBCH15] = useState(100);

  const [minVBCH16, setMinVBCH16] = useState(0);
  const [maxVBCH16, setMaxVBCH16] = useState(100);

  const [minVBCH17, setMinVBCH17] = useState(0);
  const [maxVBCH17, setMaxVBCH17] = useState(100);

  const [minVBCH18, setMinVBCH18] = useState(0);
  const [maxVBCH18, setMaxVBCH18] = useState(100);

  const [minVBCH19, setMinVBCH19] = useState(0);
  const [maxVBCH19, setMaxVBCH19] = useState(100);

  const [minVBCH20, setMinVBCH20] = useState(0);
  const [maxVBCH20, setMaxVBCH20] = useState(100);

  const [minVBCH21, setMinVBCH21] = useState(0);
  const [maxVBCH21, setMaxVBCH21] = useState(100);

  const [minVBCH22, setMinVBCH22] = useState(0);
  const [maxVBCH22, setMaxVBCH22] = useState(100);

  const [minVBCH23, setMinVBCH23] = useState(0);
  const [maxVBCH23, setMaxVBCH23] = useState(100);

  const [minVBCH24, setMinVBCH24] = useState(0);
  const [maxVBCH24, setMaxVBCH24] = useState(100);

  const [minVBCH25, setMinVBCH25] = useState(0);
  const [maxVBCH25, setMaxVBCH25] = useState(100);

  const [minVBCH26, setMinVBCH26] = useState(0);
  const [maxVBCH26, setMaxVBCH26] = useState(100);

  const [minVBCH27, setMinVBCH27] = useState(0);
  const [maxVBCH27, setMaxVBCH27] = useState(100);

  const [minVBCH28, setMinVBCH28] = useState(0);
  const [maxVBCH28, setMaxVBCH28] = useState(100);

  const [minVBCH29, setMinVBCH29] = useState(0);
  const [maxVBCH29, setMaxVBCH29] = useState(100);

  const [minVBCH30, setMinVBCH30] = useState(0);
  const [maxVBCH30, setMaxVBCH30] = useState(100);

  const [minVBCH31, setMinVBCH31] = useState(0);
  const [maxVBCH31, setMaxVBCH31] = useState(100);
  const [minVANH1, setMinVANH1] = useState(0);
  const [maxVANH1, setMaxVANH1] = useState(100);

  const [minVANH2, setMinVANH2] = useState(0);
  const [maxVANH2, setMaxVANH2] = useState(100);

  const [minVANH3, setMinVANH3] = useState(0);
  const [maxVANH3, setMaxVANH3] = useState(100);

  const [minVANH4, setMinVANH4] = useState(0);
  const [maxVANH4, setMaxVANH4] = useState(100);

  const [minVANH5, setMinVANH5] = useState(0);
  const [maxVANH5, setMaxVANH5] = useState(100);

  const [minVANH6, setMinVANH6] = useState(0);
  const [maxVANH6, setMaxVANH6] = useState(100);

  const [minVANH7, setMinVANH7] = useState(0);
  const [maxVANH7, setMaxVANH7] = useState(100);

  const [minVANH8, setMinVANH8] = useState(0);
  const [maxVANH8, setMaxVANH8] = useState(100);

  const [minVANH9, setMinVANH9] = useState(0);
  const [maxVANH9, setMaxVANH9] = useState(100);

  const [minVANH10, setMinVANH10] = useState(0);
  const [maxVANH10, setMaxVANH10] = useState(100);

  const [minVANH11, setMinVANH11] = useState(0);
  const [maxVANH11, setMaxVANH11] = useState(100);

  const [minVANH12, setMinVANH12] = useState(0);
  const [maxVANH12, setMaxVANH12] = useState(100);

  const [minVANH13, setMinVANH13] = useState(0);
  const [maxVANH13, setMaxVANH13] = useState(100);

  const [minVANH14, setMinVANH14] = useState(0);
  const [maxVANH14, setMaxVANH14] = useState(100);

  const [minVANH15, setMinVANH15] = useState(0);
  const [maxVANH15, setMaxVANH15] = useState(100);

  const [minVANH16, setMinVANH16] = useState(0);
  const [maxVANH16, setMaxVANH16] = useState(100);

  const [minVANH17, setMinVANH17] = useState(0);
  const [maxVANH17, setMaxVANH17] = useState(100);

  const [minVANH18, setMinVANH18] = useState(0);
  const [maxVANH18, setMaxVANH18] = useState(100);

  const [minVANH19, setMinVANH19] = useState(0);
  const [maxVANH19, setMaxVANH19] = useState(100);

  const [minVANH20, setMinVANH20] = useState(0);
  const [maxVANH20, setMaxVANH20] = useState(100);

  const [minVANH21, setMinVANH21] = useState(0);
  const [maxVANH21, setMaxVANH21] = useState(100);

  const [minVANH22, setMinVANH22] = useState(0);
  const [maxVANH22, setMaxVANH22] = useState(100);

  const [minVANH23, setMinVANH23] = useState(0);
  const [maxVANH23, setMaxVANH23] = useState(100);

  const [minVANH24, setMinVANH24] = useState(0);
  const [maxVANH24, setMaxVANH24] = useState(100);

  const [minVANH25, setMinVANH25] = useState(0);
  const [maxVANH25, setMaxVANH25] = useState(100);

  const [minVANH26, setMinVANH26] = useState(0);
  const [maxVANH26, setMaxVANH26] = useState(100);

  const [minVANH27, setMinVANH27] = useState(0);
  const [maxVANH27, setMaxVANH27] = useState(100);

  const [minVANH28, setMinVANH28] = useState(0);
  const [maxVANH28, setMaxVANH28] = useState(100);

  const [minVANH29, setMinVANH29] = useState(0);
  const [maxVANH29, setMaxVANH29] = useState(100);

  const [minVANH30, setMinVANH30] = useState(0);
  const [maxVANH30, setMaxVANH30] = useState(100);

  const [minVANH31, setMinVANH31] = useState(0);
  const [maxVANH31, setMaxVANH31] = useState(100);
  const [minVBNH1, setMinVBNH1] = useState(0);
  const [maxVBNH1, setMaxVBNH1] = useState(100);

  const [minVBNH2, setMinVBNH2] = useState(0);
  const [maxVBNH2, setMaxVBNH2] = useState(100);

  const [minVBNH3, setMinVBNH3] = useState(0);
  const [maxVBNH3, setMaxVBNH3] = useState(100);

  const [minVBNH4, setMinVBNH4] = useState(0);
  const [maxVBNH4, setMaxVBNH4] = useState(100);

  const [minVBNH5, setMinVBNH5] = useState(0);
  const [maxVBNH5, setMaxVBNH5] = useState(100);

  const [minVBNH6, setMinVBNH6] = useState(0);
  const [maxVBNH6, setMaxVBNH6] = useState(100);

  const [minVBNH7, setMinVBNH7] = useState(0);
  const [maxVBNH7, setMaxVBNH7] = useState(100);

  const [minVBNH8, setMinVBNH8] = useState(0);
  const [maxVBNH8, setMaxVBNH8] = useState(100);

  const [minVBNH9, setMinVBNH9] = useState(0);
  const [maxVBNH9, setMaxVBNH9] = useState(100);

  const [minVBNH10, setMinVBNH10] = useState(0);
  const [maxVBNH10, setMaxVBNH10] = useState(100);

  const [minVBNH11, setMinVBNH11] = useState(0);
  const [maxVBNH11, setMaxVBNH11] = useState(100);

  const [minVBNH12, setMinVBNH12] = useState(0);
  const [maxVBNH12, setMaxVBNH12] = useState(100);

  const [minVBNH13, setMinVBNH13] = useState(0);
  const [maxVBNH13, setMaxVBNH13] = useState(100);

  const [minVBNH14, setMinVBNH14] = useState(0);
  const [maxVBNH14, setMaxVBNH14] = useState(100);

  const [minVBNH15, setMinVBNH15] = useState(0);
  const [maxVBNH15, setMaxVBNH15] = useState(100);

  const [minVBNH16, setMinVBNH16] = useState(0);
  const [maxVBNH16, setMaxVBNH16] = useState(100);

  const [minVBNH17, setMinVBNH17] = useState(0);
  const [maxVBNH17, setMaxVBNH17] = useState(100);

  const [minVBNH18, setMinVBNH18] = useState(0);
  const [maxVBNH18, setMaxVBNH18] = useState(100);

  const [minVBNH19, setMinVBNH19] = useState(0);
  const [maxVBNH19, setMaxVBNH19] = useState(100);

  const [minVBNH20, setMinVBNH20] = useState(0);
  const [maxVBNH20, setMaxVBNH20] = useState(100);

  const [minVBNH21, setMinVBNH21] = useState(0);
  const [maxVBNH21, setMaxVBNH21] = useState(100);

  const [minVBNH22, setMinVBNH22] = useState(0);
  const [maxVBNH22, setMaxVBNH22] = useState(100);

  const [minVBNH23, setMinVBNH23] = useState(0);
  const [maxVBNH23, setMaxVBNH23] = useState(100);

  const [minVBNH24, setMinVBNH24] = useState(0);
  const [maxVBNH24, setMaxVBNH24] = useState(100);

  const [minVBNH25, setMinVBNH25] = useState(0);
  const [maxVBNH25, setMaxVBNH25] = useState(100);

  const [minVBNH26, setMinVBNH26] = useState(0);
  const [maxVBNH26, setMaxVBNH26] = useState(100);

  const [minVBNH27, setMinVBNH27] = useState(0);
  const [maxVBNH27, setMaxVBNH27] = useState(100);

  const [minVBNH28, setMinVBNH28] = useState(0);
  const [maxVBNH28, setMaxVBNH28] = useState(100);

  const [minVBNH29, setMinVBNH29] = useState(0);
  const [maxVBNH29, setMaxVBNH29] = useState(100);

  const [minVBNH30, setMinVBNH30] = useState(0);
  const [maxVBNH30, setMaxVBNH30] = useState(100);

  const [minVBNH31, setMinVBNH31] = useState(0);
  const [maxVBNH31, setMaxVBNH31] = useState(100);
  const [minVCNH1, setMinVCNH1] = useState(0);
  const [maxVCNH1, setMaxVCNH1] = useState(100);

  const [minVCNH2, setMinVCNH2] = useState(0);
  const [maxVCNH2, setMaxVCNH2] = useState(100);

  const [minVCNH3, setMinVCNH3] = useState(0);
  const [maxVCNH3, setMaxVCNH3] = useState(100);

  const [minVCNH4, setMinVCNH4] = useState(0);
  const [maxVCNH4, setMaxVCNH4] = useState(100);

  const [minVCNH5, setMinVCNH5] = useState(0);
  const [maxVCNH5, setMaxVCNH5] = useState(100);

  const [minVCNH6, setMinVCNH6] = useState(0);
  const [maxVCNH6, setMaxVCNH6] = useState(100);

  const [minVCNH7, setMinVCNH7] = useState(0);
  const [maxVCNH7, setMaxVCNH7] = useState(100);

  const [minVCNH8, setMinVCNH8] = useState(0);
  const [maxVCNH8, setMaxVCNH8] = useState(100);

  const [minVCNH9, setMinVCNH9] = useState(0);
  const [maxVCNH9, setMaxVCNH9] = useState(100);

  const [minVCNH10, setMinVCNH10] = useState(0);
  const [maxVCNH10, setMaxVCNH10] = useState(100);

  const [minVCNH11, setMinVCNH11] = useState(0);
  const [maxVCNH11, setMaxVCNH11] = useState(100);

  const [minVCNH12, setMinVCNH12] = useState(0);
  const [maxVCNH12, setMaxVCNH12] = useState(100);

  const [minVCNH13, setMinVCNH13] = useState(0);
  const [maxVCNH13, setMaxVCNH13] = useState(100);

  const [minVCNH14, setMinVCNH14] = useState(0);
  const [maxVCNH14, setMaxVCNH14] = useState(100);

  const [minVCNH15, setMinVCNH15] = useState(0);
  const [maxVCNH15, setMaxVCNH15] = useState(100);

  const [minVCNH16, setMinVCNH16] = useState(0);
  const [maxVCNH16, setMaxVCNH16] = useState(100);

  const [minVCNH17, setMinVCNH17] = useState(0);
  const [maxVCNH17, setMaxVCNH17] = useState(100);

  const [minVCNH18, setMinVCNH18] = useState(0);
  const [maxVCNH18, setMaxVCNH18] = useState(100);

  const [minVCNH19, setMinVCNH19] = useState(0);
  const [maxVCNH19, setMaxVCNH19] = useState(100);

  const [minVCNH20, setMinVCNH20] = useState(0);
  const [maxVCNH20, setMaxVCNH20] = useState(100);

  const [minVCNH21, setMinVCNH21] = useState(0);
  const [maxVCNH21, setMaxVCNH21] = useState(100);

  const [minVCNH22, setMinVCNH22] = useState(0);
  const [maxVCNH22, setMaxVCNH22] = useState(100);

  const [minVCNH23, setMinVCNH23] = useState(0);
  const [maxVCNH23, setMaxVCNH23] = useState(100);

  const [minVCNH24, setMinVCNH24] = useState(0);
  const [maxVCNH24, setMaxVCNH24] = useState(100);

  const [minVCNH25, setMinVCNH25] = useState(0);
  const [maxVCNH25, setMaxVCNH25] = useState(100);

  const [minVCNH26, setMinVCNH26] = useState(0);
  const [maxVCNH26, setMaxVCNH26] = useState(100);

  const [minVCNH27, setMinVCNH27] = useState(0);
  const [maxVCNH27, setMaxVCNH27] = useState(100);

  const [minVCNH28, setMinVCNH28] = useState(0);
  const [maxVCNH28, setMaxVCNH28] = useState(100);

  const [minVCNH29, setMinVCNH29] = useState(0);
  const [maxVCNH29, setMaxVCNH29] = useState(100);

  const [minVCNH30, setMinVCNH30] = useState(0);
  const [maxVCNH30, setMaxVCNH30] = useState(100);

  const [minVCNH31, setMinVCNH31] = useState(0);
  const [maxVCNH31, setMaxVCNH31] = useState(100);

  const [minIAH1Error, setMinIAH1Error] = useState(false);
  const [maxIAH1Error, setMaxIAH1Error] = useState(false);

  const [minIAH2Error, setMinIAH2Error] = useState(false);
  const [maxIAH2Error, setMaxIAH2Error] = useState(false);

  const [minIAH3Error, setMinIAH3Error] = useState(false);
  const [maxIAH3Error, setMaxIAH3Error] = useState(false);

  const [minIAH4Error, setMinIAH4Error] = useState(false);
  const [maxIAH4Error, setMaxIAH4Error] = useState(false);

  const [minIAH5Error, setMinIAH5Error] = useState(false);
  const [maxIAH5Error, setMaxIAH5Error] = useState(false);

  const [minIAH6Error, setMinIAH6Error] = useState(false);
  const [maxIAH6Error, setMaxIAH6Error] = useState(false);

  const [minIAH7Error, setMinIAH7Error] = useState(false);
  const [maxIAH7Error, setMaxIAH7Error] = useState(false);

  const [minIAH8Error, setMinIAH8Error] = useState(false);
  const [maxIAH8Error, setMaxIAH8Error] = useState(false);

  const [minIAH9Error, setMinIAH9Error] = useState(false);
  const [maxIAH9Error, setMaxIAH9Error] = useState(false);

  const [minIAH10Error, setMinIAH10Error] = useState(false);
  const [maxIAH10Error, setMaxIAH10Error] = useState(false);

  const [minIAH11Error, setMinIAH11Error] = useState(false);
  const [maxIAH11Error, setMaxIAH11Error] = useState(false);

  const [minIAH12Error, setMinIAH12Error] = useState(false);
  const [maxIAH12Error, setMaxIAH12Error] = useState(false);

  const [minIAH13Error, setMinIAH13Error] = useState(false);
  const [maxIAH13Error, setMaxIAH13Error] = useState(false);

  const [minIAH14Error, setMinIAH14Error] = useState(false);
  const [maxIAH14Error, setMaxIAH14Error] = useState(false);

  const [minIAH15Error, setMinIAH15Error] = useState(false);
  const [maxIAH15Error, setMaxIAH15Error] = useState(false);

  const [minIAH16Error, setMinIAH16Error] = useState(false);
  const [maxIAH16Error, setMaxIAH16Error] = useState(false);

  const [minIAH17Error, setMinIAH17Error] = useState(false);
  const [maxIAH17Error, setMaxIAH17Error] = useState(false);

  const [minIAH18Error, setMinIAH18Error] = useState(false);
  const [maxIAH18Error, setMaxIAH18Error] = useState(false);

  const [minIAH19Error, setMinIAH19Error] = useState(false);
  const [maxIAH19Error, setMaxIAH19Error] = useState(false);

  const [minIAH20Error, setMinIAH20Error] = useState(false);
  const [maxIAH20Error, setMaxIAH20Error] = useState(false);

  const [minIAH21Error, setMinIAH21Error] = useState(false);
  const [maxIAH21Error, setMaxIAH21Error] = useState(false);

  const [minIAH22Error, setMinIAH22Error] = useState(false);
  const [maxIAH22Error, setMaxIAH22Error] = useState(false);

  const [minIAH23Error, setMinIAH23Error] = useState(false);
  const [maxIAH23Error, setMaxIAH23Error] = useState(false);

  const [minIAH24Error, setMinIAH24Error] = useState(false);
  const [maxIAH24Error, setMaxIAH24Error] = useState(false);

  const [minIAH25Error, setMinIAH25Error] = useState(false);
  const [maxIAH25Error, setMaxIAH25Error] = useState(false);

  const [minIAH26Error, setMinIAH26Error] = useState(false);
  const [maxIAH26Error, setMaxIAH26Error] = useState(false);

  const [minIAH27Error, setMinIAH27Error] = useState(false);
  const [maxIAH27Error, setMaxIAH27Error] = useState(false);

  const [minIAH28Error, setMinIAH28Error] = useState(false);
  const [maxIAH28Error, setMaxIAH28Error] = useState(false);

  const [minIAH29Error, setMinIAH29Error] = useState(false);
  const [maxIAH29Error, setMaxIAH29Error] = useState(false);

  const [minIAH30Error, setMinIAH30Error] = useState(false);
  const [maxIAH30Error, setMaxIAH30Error] = useState(false);

  const [minIAH31Error, setMinIAH31Error] = useState(false);
  const [maxIAH31Error, setMaxIAH31Error] = useState(false);

  const [minIBH1Error, setMinIBH1Error] = useState(false);
  const [maxIBH1Error, setMaxIBH1Error] = useState(false);

  const [minIBH2Error, setMinIBH2Error] = useState(false);
  const [maxIBH2Error, setMaxIBH2Error] = useState(false);

  const [minIBH3Error, setMinIBH3Error] = useState(false);
  const [maxIBH3Error, setMaxIBH3Error] = useState(false);

  const [minIBH4Error, setMinIBH4Error] = useState(false);
  const [maxIBH4Error, setMaxIBH4Error] = useState(false);

  const [minIBH5Error, setMinIBH5Error] = useState(false);
  const [maxIBH5Error, setMaxIBH5Error] = useState(false);

  const [minIBH6Error, setMinIBH6Error] = useState(false);
  const [maxIBH6Error, setMaxIBH6Error] = useState(false);

  const [minIBH7Error, setMinIBH7Error] = useState(false);
  const [maxIBH7Error, setMaxIBH7Error] = useState(false);

  const [minIBH8Error, setMinIBH8Error] = useState(false);
  const [maxIBH8Error, setMaxIBH8Error] = useState(false);

  const [minIBH9Error, setMinIBH9Error] = useState(false);
  const [maxIBH9Error, setMaxIBH9Error] = useState(false);

  const [minIBH10Error, setMinIBH10Error] = useState(false);
  const [maxIBH10Error, setMaxIBH10Error] = useState(false);

  const [minIBH11Error, setMinIBH11Error] = useState(false);
  const [maxIBH11Error, setMaxIBH11Error] = useState(false);

  const [minIBH12Error, setMinIBH12Error] = useState(false);
  const [maxIBH12Error, setMaxIBH12Error] = useState(false);

  const [minIBH13Error, setMinIBH13Error] = useState(false);
  const [maxIBH13Error, setMaxIBH13Error] = useState(false);

  const [minIBH14Error, setMinIBH14Error] = useState(false);
  const [maxIBH14Error, setMaxIBH14Error] = useState(false);

  const [minIBH15Error, setMinIBH15Error] = useState(false);
  const [maxIBH15Error, setMaxIBH15Error] = useState(false);

  const [minIBH16Error, setMinIBH16Error] = useState(false);
  const [maxIBH16Error, setMaxIBH16Error] = useState(false);

  const [minIBH17Error, setMinIBH17Error] = useState(false);
  const [maxIBH17Error, setMaxIBH17Error] = useState(false);

  const [minIBH18Error, setMinIBH18Error] = useState(false);
  const [maxIBH18Error, setMaxIBH18Error] = useState(false);

  const [minIBH19Error, setMinIBH19Error] = useState(false);
  const [maxIBH19Error, setMaxIBH19Error] = useState(false);

  const [minIBH20Error, setMinIBH20Error] = useState(false);
  const [maxIBH20Error, setMaxIBH20Error] = useState(false);

  const [minIBH21Error, setMinIBH21Error] = useState(false);
  const [maxIBH21Error, setMaxIBH21Error] = useState(false);

  const [minIBH22Error, setMinIBH22Error] = useState(false);
  const [maxIBH22Error, setMaxIBH22Error] = useState(false);

  const [minIBH23Error, setMinIBH23Error] = useState(false);
  const [maxIBH23Error, setMaxIBH23Error] = useState(false);

  const [minIBH24Error, setMinIBH24Error] = useState(false);
  const [maxIBH24Error, setMaxIBH24Error] = useState(false);

  const [minIBH25Error, setMinIBH25Error] = useState(false);
  const [maxIBH25Error, setMaxIBH25Error] = useState(false);

  const [minIBH26Error, setMinIBH26Error] = useState(false);
  const [maxIBH26Error, setMaxIBH26Error] = useState(false);

  const [minIBH27Error, setMinIBH27Error] = useState(false);
  const [maxIBH27Error, setMaxIBH27Error] = useState(false);

  const [minIBH28Error, setMinIBH28Error] = useState(false);
  const [maxIBH28Error, setMaxIBH28Error] = useState(false);

  const [minIBH29Error, setMinIBH29Error] = useState(false);
  const [maxIBH29Error, setMaxIBH29Error] = useState(false);

  const [minIBH30Error, setMinIBH30Error] = useState(false);
  const [maxIBH30Error, setMaxIBH30Error] = useState(false);

  const [minIBH31Error, setMinIBH31Error] = useState(false);
  const [maxIBH31Error, setMaxIBH31Error] = useState(false);

  const [minICH1Error, setMinICH1Error] = useState(false);
  const [maxICH1Error, setMaxICH1Error] = useState(false);

  const [minICH2Error, setMinICH2Error] = useState(false);
  const [maxICH2Error, setMaxICH2Error] = useState(false);

  const [minICH3Error, setMinICH3Error] = useState(false);
  const [maxICH3Error, setMaxICH3Error] = useState(false);

  const [minICH4Error, setMinICH4Error] = useState(false);
  const [maxICH4Error, setMaxICH4Error] = useState(false);

  const [minICH5Error, setMinICH5Error] = useState(false);
  const [maxICH5Error, setMaxICH5Error] = useState(false);

  const [minICH6Error, setMinICH6Error] = useState(false);
  const [maxICH6Error, setMaxICH6Error] = useState(false);

  const [minICH7Error, setMinICH7Error] = useState(false);
  const [maxICH7Error, setMaxICH7Error] = useState(false);

  const [minICH8Error, setMinICH8Error] = useState(false);
  const [maxICH8Error, setMaxICH8Error] = useState(false);

  const [minICH9Error, setMinICH9Error] = useState(false);
  const [maxICH9Error, setMaxICH9Error] = useState(false);

  const [minICH10Error, setMinICH10Error] = useState(false);
  const [maxICH10Error, setMaxICH10Error] = useState(false);

  const [minICH11Error, setMinICH11Error] = useState(false);
  const [maxICH11Error, setMaxICH11Error] = useState(false);

  const [minICH12Error, setMinICH12Error] = useState(false);
  const [maxICH12Error, setMaxICH12Error] = useState(false);

  const [minICH13Error, setMinICH13Error] = useState(false);
  const [maxICH13Error, setMaxICH13Error] = useState(false);

  const [minICH14Error, setMinICH14Error] = useState(false);
  const [maxICH14Error, setMaxICH14Error] = useState(false);

  const [minICH15Error, setMinICH15Error] = useState(false);
  const [maxICH15Error, setMaxICH15Error] = useState(false);

  const [minICH16Error, setMinICH16Error] = useState(false);
  const [maxICH16Error, setMaxICH16Error] = useState(false);

  const [minICH17Error, setMinICH17Error] = useState(false);
  const [maxICH17Error, setMaxICH17Error] = useState(false);

  const [minICH18Error, setMinICH18Error] = useState(false);
  const [maxICH18Error, setMaxICH18Error] = useState(false);

  const [minICH19Error, setMinICH19Error] = useState(false);
  const [maxICH19Error, setMaxICH19Error] = useState(false);

  const [minICH20Error, setMinICH20Error] = useState(false);
  const [maxICH20Error, setMaxICH20Error] = useState(false);

  const [minICH21Error, setMinICH21Error] = useState(false);
  const [maxICH21Error, setMaxICH21Error] = useState(false);

  const [minICH22Error, setMinICH22Error] = useState(false);
  const [maxICH22Error, setMaxICH22Error] = useState(false);

  const [minICH23Error, setMinICH23Error] = useState(false);
  const [maxICH23Error, setMaxICH23Error] = useState(false);

  const [minICH24Error, setMinICH24Error] = useState(false);
  const [maxICH24Error, setMaxICH24Error] = useState(false);

  const [minICH25Error, setMinICH25Error] = useState(false);
  const [maxICH25Error, setMaxICH25Error] = useState(false);

  const [minICH26Error, setMinICH26Error] = useState(false);
  const [maxICH26Error, setMaxICH26Error] = useState(false);

  const [minICH27Error, setMinICH27Error] = useState(false);
  const [maxICH27Error, setMaxICH27Error] = useState(false);

  const [minICH28Error, setMinICH28Error] = useState(false);
  const [maxICH28Error, setMaxICH28Error] = useState(false);

  const [minICH29Error, setMinICH29Error] = useState(false);
  const [maxICH29Error, setMaxICH29Error] = useState(false);

  const [minICH30Error, setMinICH30Error] = useState(false);
  const [maxICH30Error, setMaxICH30Error] = useState(false);

  const [minICH31Error, setMinICH31Error] = useState(false);
  const [maxICH31Error, setMaxICH31Error] = useState(false);

  const [minVANH1Error, setMinVANH1Error] = useState(false);
  const [maxVANH1Error, setMaxVANH1Error] = useState(false);

  const [minVANH2Error, setMinVANH2Error] = useState(false);
  const [maxVANH2Error, setMaxVANH2Error] = useState(false);

  const [minVANH3Error, setMinVANH3Error] = useState(false);
  const [maxVANH3Error, setMaxVANH3Error] = useState(false);

  const [minVANH4Error, setMinVANH4Error] = useState(false);
  const [maxVANH4Error, setMaxVANH4Error] = useState(false);

  const [minVANH5Error, setMinVANH5Error] = useState(false);
  const [maxVANH5Error, setMaxVANH5Error] = useState(false);

  const [minVANH6Error, setMinVANH6Error] = useState(false);
  const [maxVANH6Error, setMaxVANH6Error] = useState(false);

  const [minVANH7Error, setMinVANH7Error] = useState(false);
  const [maxVANH7Error, setMaxVANH7Error] = useState(false);

  const [minVANH8Error, setMinVANH8Error] = useState(false);
  const [maxVANH8Error, setMaxVANH8Error] = useState(false);

  const [minVANH9Error, setMinVANH9Error] = useState(false);
  const [maxVANH9Error, setMaxVANH9Error] = useState(false);

  const [minVANH10Error, setMinVANH10Error] = useState(false);
  const [maxVANH10Error, setMaxVANH10Error] = useState(false);

  const [minVANH11Error, setMinVANH11Error] = useState(false);
  const [maxVANH11Error, setMaxVANH11Error] = useState(false);

  const [minVANH12Error, setMinVANH12Error] = useState(false);
  const [maxVANH12Error, setMaxVANH12Error] = useState(false);

  const [minVANH13Error, setMinVANH13Error] = useState(false);
  const [maxVANH13Error, setMaxVANH13Error] = useState(false);

  const [minVANH14Error, setMinVANH14Error] = useState(false);
  const [maxVANH14Error, setMaxVANH14Error] = useState(false);

  const [minVANH15Error, setMinVANH15Error] = useState(false);
  const [maxVANH15Error, setMaxVANH15Error] = useState(false);

  const [minVANH16Error, setMinVANH16Error] = useState(false);
  const [maxVANH16Error, setMaxVANH16Error] = useState(false);

  const [minVANH17Error, setMinVANH17Error] = useState(false);
  const [maxVANH17Error, setMaxVANH17Error] = useState(false);

  const [minVANH18Error, setMinVANH18Error] = useState(false);
  const [maxVANH18Error, setMaxVANH18Error] = useState(false);

  const [minVANH19Error, setMinVANH19Error] = useState(false);
  const [maxVANH19Error, setMaxVANH19Error] = useState(false);

  const [minVANH20Error, setMinVANH20Error] = useState(false);
  const [maxVANH20Error, setMaxVANH20Error] = useState(false);

  const [minVANH21Error, setMinVANH21Error] = useState(false);
  const [maxVANH21Error, setMaxVANH21Error] = useState(false);

  const [minVANH22Error, setMinVANH22Error] = useState(false);
  const [maxVANH22Error, setMaxVANH22Error] = useState(false);

  const [minVANH23Error, setMinVANH23Error] = useState(false);
  const [maxVANH23Error, setMaxVANH23Error] = useState(false);

  const [minVANH24Error, setMinVANH24Error] = useState(false);
  const [maxVANH24Error, setMaxVANH24Error] = useState(false);

  const [minVANH25Error, setMinVANH25Error] = useState(false);
  const [maxVANH25Error, setMaxVANH25Error] = useState(false);

  const [minVANH26Error, setMinVANH26Error] = useState(false);
  const [maxVANH26Error, setMaxVANH26Error] = useState(false);

  const [minVANH27Error, setMinVANH27Error] = useState(false);
  const [maxVANH27Error, setMaxVANH27Error] = useState(false);

  const [minVANH28Error, setMinVANH28Error] = useState(false);
  const [maxVANH28Error, setMaxVANH28Error] = useState(false);

  const [minVANH29Error, setMinVANH29Error] = useState(false);
  const [maxVANH29Error, setMaxVANH29Error] = useState(false);

  const [minVANH30Error, setMinVANH30Error] = useState(false);
  const [maxVANH30Error, setMaxVANH30Error] = useState(false);

  const [minVANH31Error, setMinVANH31Error] = useState(false);
  const [maxVANH31Error, setMaxVANH31Error] = useState(false);

  const [minVBNH1Error, setMinVBNH1Error] = useState(false);
  const [maxVBNH1Error, setMaxVBNH1Error] = useState(false);

  const [minVBNH2Error, setMinVBNH2Error] = useState(false);
  const [maxVBNH2Error, setMaxVBNH2Error] = useState(false);

  const [minVBNH3Error, setMinVBNH3Error] = useState(false);
  const [maxVBNH3Error, setMaxVBNH3Error] = useState(false);

  const [minVBNH4Error, setMinVBNH4Error] = useState(false);
  const [maxVBNH4Error, setMaxVBNH4Error] = useState(false);

  const [minVBNH5Error, setMinVBNH5Error] = useState(false);
  const [maxVBNH5Error, setMaxVBNH5Error] = useState(false);

  const [minVBNH6Error, setMinVBNH6Error] = useState(false);
  const [maxVBNH6Error, setMaxVBNH6Error] = useState(false);

  const [minVBNH7Error, setMinVBNH7Error] = useState(false);
  const [maxVBNH7Error, setMaxVBNH7Error] = useState(false);

  const [minVBNH8Error, setMinVBNH8Error] = useState(false);
  const [maxVBNH8Error, setMaxVBNH8Error] = useState(false);

  const [minVBNH9Error, setMinVBNH9Error] = useState(false);
  const [maxVBNH9Error, setMaxVBNH9Error] = useState(false);

  const [minVBNH10Error, setMinVBNH10Error] = useState(false);
  const [maxVBNH10Error, setMaxVBNH10Error] = useState(false);

  const [minVBNH11Error, setMinVBNH11Error] = useState(false);
  const [maxVBNH11Error, setMaxVBNH11Error] = useState(false);

  const [minVBNH12Error, setMinVBNH12Error] = useState(false);
  const [maxVBNH12Error, setMaxVBNH12Error] = useState(false);

  const [minVBNH13Error, setMinVBNH13Error] = useState(false);
  const [maxVBNH13Error, setMaxVBNH13Error] = useState(false);

  const [minVBNH14Error, setMinVBNH14Error] = useState(false);
  const [maxVBNH14Error, setMaxVBNH14Error] = useState(false);

  const [minVBNH15Error, setMinVBNH15Error] = useState(false);
  const [maxVBNH15Error, setMaxVBNH15Error] = useState(false);

  const [minVBNH16Error, setMinVBNH16Error] = useState(false);
  const [maxVBNH16Error, setMaxVBNH16Error] = useState(false);

  const [minVBNH17Error, setMinVBNH17Error] = useState(false);
  const [maxVBNH17Error, setMaxVBNH17Error] = useState(false);

  const [minVBNH18Error, setMinVBNH18Error] = useState(false);
  const [maxVBNH18Error, setMaxVBNH18Error] = useState(false);

  const [minVBNH19Error, setMinVBNH19Error] = useState(false);
  const [maxVBNH19Error, setMaxVBNH19Error] = useState(false);

  const [minVBNH20Error, setMinVBNH20Error] = useState(false);
  const [maxVBNH20Error, setMaxVBNH20Error] = useState(false);

  const [minVBNH21Error, setMinVBNH21Error] = useState(false);
  const [maxVBNH21Error, setMaxVBNH21Error] = useState(false);

  const [minVBNH22Error, setMinVBNH22Error] = useState(false);
  const [maxVBNH22Error, setMaxVBNH22Error] = useState(false);

  const [minVBNH23Error, setMinVBNH23Error] = useState(false);
  const [maxVBNH23Error, setMaxVBNH23Error] = useState(false);

  const [minVBNH24Error, setMinVBNH24Error] = useState(false);
  const [maxVBNH24Error, setMaxVBNH24Error] = useState(false);

  const [minVBNH25Error, setMinVBNH25Error] = useState(false);
  const [maxVBNH25Error, setMaxVBNH25Error] = useState(false);

  const [minVBNH26Error, setMinVBNH26Error] = useState(false);
  const [maxVBNH26Error, setMaxVBNH26Error] = useState(false);

  const [minVBNH27Error, setMinVBNH27Error] = useState(false);
  const [maxVBNH27Error, setMaxVBNH27Error] = useState(false);

  const [minVBNH28Error, setMinVBNH28Error] = useState(false);
  const [maxVBNH28Error, setMaxVBNH28Error] = useState(false);

  const [minVBNH29Error, setMinVBNH29Error] = useState(false);
  const [maxVBNH29Error, setMaxVBNH29Error] = useState(false);

  const [minVBNH30Error, setMinVBNH30Error] = useState(false);
  const [maxVBNH30Error, setMaxVBNH30Error] = useState(false);

  const [minVBNH31Error, setMinVBNH31Error] = useState(false);
  const [maxVBNH31Error, setMaxVBNH31Error] = useState(false);

  const [minVCNH1Error, setMinVCNH1Error] = useState(false);
  const [maxVCNH1Error, setMaxVCNH1Error] = useState(false);

  const [minVCNH2Error, setMinVCNH2Error] = useState(false);
  const [maxVCNH2Error, setMaxVCNH2Error] = useState(false);

  const [minVCNH3Error, setMinVCNH3Error] = useState(false);
  const [maxVCNH3Error, setMaxVCNH3Error] = useState(false);

  const [minVCNH4Error, setMinVCNH4Error] = useState(false);
  const [maxVCNH4Error, setMaxVCNH4Error] = useState(false);

  const [minVCNH5Error, setMinVCNH5Error] = useState(false);
  const [maxVCNH5Error, setMaxVCNH5Error] = useState(false);

  const [minVCNH6Error, setMinVCNH6Error] = useState(false);
  const [maxVCNH6Error, setMaxVCNH6Error] = useState(false);

  const [minVCNH7Error, setMinVCNH7Error] = useState(false);
  const [maxVCNH7Error, setMaxVCNH7Error] = useState(false);

  const [minVCNH8Error, setMinVCNH8Error] = useState(false);
  const [maxVCNH8Error, setMaxVCNH8Error] = useState(false);

  const [minVCNH9Error, setMinVCNH9Error] = useState(false);
  const [maxVCNH9Error, setMaxVCNH9Error] = useState(false);

  const [minVCNH10Error, setMinVCNH10Error] = useState(false);
  const [maxVCNH10Error, setMaxVCNH10Error] = useState(false);

  const [minVCNH11Error, setMinVCNH11Error] = useState(false);
  const [maxVCNH11Error, setMaxVCNH11Error] = useState(false);

  const [minVCNH12Error, setMinVCNH12Error] = useState(false);
  const [maxVCNH12Error, setMaxVCNH12Error] = useState(false);

  const [minVCNH13Error, setMinVCNH13Error] = useState(false);
  const [maxVCNH13Error, setMaxVCNH13Error] = useState(false);

  const [minVCNH14Error, setMinVCNH14Error] = useState(false);
  const [maxVCNH14Error, setMaxVCNH14Error] = useState(false);

  const [minVCNH15Error, setMinVCNH15Error] = useState(false);
  const [maxVCNH15Error, setMaxVCNH15Error] = useState(false);

  const [minVCNH16Error, setMinVCNH16Error] = useState(false);
  const [maxVCNH16Error, setMaxVCNH16Error] = useState(false);

  const [minVCNH17Error, setMinVCNH17Error] = useState(false);
  const [maxVCNH17Error, setMaxVCNH17Error] = useState(false);

  const [minVCNH18Error, setMinVCNH18Error] = useState(false);
  const [maxVCNH18Error, setMaxVCNH18Error] = useState(false);

  const [minVCNH19Error, setMinVCNH19Error] = useState(false);
  const [maxVCNH19Error, setMaxVCNH19Error] = useState(false);

  const [minVCNH20Error, setMinVCNH20Error] = useState(false);
  const [maxVCNH20Error, setMaxVCNH20Error] = useState(false);

  const [minVCNH21Error, setMinVCNH21Error] = useState(false);
  const [maxVCNH21Error, setMaxVCNH21Error] = useState(false);

  const [minVCNH22Error, setMinVCNH22Error] = useState(false);
  const [maxVCNH22Error, setMaxVCNH22Error] = useState(false);

  const [minVCNH23Error, setMinVCNH23Error] = useState(false);
  const [maxVCNH23Error, setMaxVCNH23Error] = useState(false);

  const [minVCNH24Error, setMinVCNH24Error] = useState(false);
  const [maxVCNH24Error, setMaxVCNH24Error] = useState(false);

  const [minVCNH25Error, setMinVCNH25Error] = useState(false);
  const [maxVCNH25Error, setMaxVCNH25Error] = useState(false);

  const [minVCNH26Error, setMinVCNH26Error] = useState(false);
  const [maxVCNH26Error, setMaxVCNH26Error] = useState(false);

  const [minVCNH27Error, setMinVCNH27Error] = useState(false);
  const [maxVCNH27Error, setMaxVCNH27Error] = useState(false);

  const [minVCNH28Error, setMinVCNH28Error] = useState(false);
  const [maxVCNH28Error, setMaxVCNH28Error] = useState(false);

  const [minVCNH29Error, setMinVCNH29Error] = useState(false);
  const [maxVCNH29Error, setMaxVCNH29Error] = useState(false);

  const [minVCNH30Error, setMinVCNH30Error] = useState(false);
  const [maxVCNH30Error, setMaxVCNH30Error] = useState(false);

  const [minVCNH31Error, setMinVCNH31Error] = useState(false);
  const [maxVCNH31Error, setMaxVCNH31Error] = useState(false);

  return (
    <>
      <div className="mt-2 row">
        <div className="col-11">
          <p>
            <button
              class="btn btn-primary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample10"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Setting user receive
            </button>
          </p>
          <div class="collapse" id="collapseExample10">
            <div class="card card-body">
              <div className="row">
                <div className="col-3">
                  <FormReceive
                    url={url}
                    setUrl={setUrl}
                    username={username}
                    setUsername={setUsername}
                    password={password}
                    setPassword={setPassword}
                    client={client}
                    setClient={setClient}
                    topic={topic}
                    setTopic={setToppics}
                    typeSystem={typeSystem}
                    setTypeSystem={setTypeSystem}
                    typeDevice={typeDevice}
                    setTypeDevice={setTypeDevice}
                    country={country}
                    setCountry={setCountry}
                    province={province}
                    setProvince={setProvince}
                    codeCustomer={codeCustomer}
                    setCodeCustomer={setCodeCustomer}
                  />
                </div>
                <div className="col-3">
                  <h4 style={{ fontSize: "20px" }} className="mt-2">
                    Url: {url === "" ? <i>No data</i> : url}
                  </h4>
                  <h4 style={{ fontSize: "20px" }} className="mt-3">
                    Username: {username === "" ? <i>No data</i> : username}
                  </h4>
                  <h4 style={{ fontSize: "20px" }} className="mt-4">
                    Password: {password === "" ? <i>No data</i> : "*******"}
                  </h4>
                  <h4 style={{ fontSize: "20px" }} className="mt-4">
                    Client: {client === "" ? <i>No data</i> : client}
                  </h4>
                  <h4 style={{ fontSize: "20px" }} className="mt-4">
                    Topic: {topic === "" ? <i>No data</i> : topic}
                  </h4>

                  <h4 style={{ fontSize: "20px" }} className="mt-4">
                    TypeSystem:{" "}
                    {typeSystem === "" ? <i>No data</i> : typeSystem}
                  </h4>
                  <h4 style={{ fontSize: "20px" }} className="mt-4">
                    TypeDevice:{" "}
                    {typeDevice === "" ? <i>No data</i> : typeDevice}
                  </h4>
                  <h4 style={{ fontSize: "20px" }} className="mt-4">
                    Country: {country === "" ? <i>No data</i> : country}
                  </h4>
                  <h4 style={{ fontSize: "20px" }} className="mt-4">
                    Province: {province === "" ? <i>No data</i> : province}
                  </h4>
                  <h4 style={{ fontSize: "20px" }} className="mt-4">
                    CodeCustomer:{" "}
                    {codeCustomer === "" ? <i>No data</i> : codeCustomer}
                  </h4>
                </div>
                <div className="col-3">
                  <FormDevice
                    codeProject={codeProject}
                    setCodeProject={setCodeProject}
                    a1={a1}
                    setA1={setA1}
                    a2={a2}
                    setA2={setA2}
                    a3={a3}
                    setA3={setA3}
                    a4={a4}
                    setA4={setA4}
                    a5={a5}
                    setA5={setA5}
                    func={func}
                    setFunc={setFunc}
                    messageType={messageType}
                    setMessageType={setMessageType}
                    crc={crc}
                    setCrc={setCrc}
                  />
                </div>
                <div className="col-3">
                  <h4 style={{ fontSize: "20px" }} className="mt-2">
                    CodeProject:{" "}
                    {codeProject === "" ? <i>No data</i> : codeProject}
                  </h4>
                  <h4 style={{ fontSize: "20px" }} className="mt-4">
                    A1: {a1 === "" ? <i>No data</i> : a1}
                  </h4>

                  <h4 style={{ fontSize: "20px" }} className="mt-4">
                    A2: {a2 === "" ? <i>No data</i> : a2}
                  </h4>
                  <h4 style={{ fontSize: "20px" }} className="mt-4">
                    A3: {a3 === "" ? <i>No data</i> : a3}
                  </h4>
                  <h4 style={{ fontSize: "20px" }} className="mt-4">
                    A4: {a4 === "" ? <i>No data</i> : a4}
                  </h4>
                  <h4 style={{ fontSize: "20px" }} className="mt-4">
                    A5: {a5 === "" ? <i>No data</i> : a5}
                  </h4>
                  <h4 style={{ fontSize: "20px" }} className="mt-4">
                    Func: {func === "" ? <i>No data</i> : func}
                  </h4>
                  <h4 style={{ fontSize: "20px" }} className="mt-4">
                    MessageType:{" "}
                    {messageType === "" ? <i>No data</i> : messageType}
                  </h4>
                  <h4 style={{ fontSize: "20px" }} className="mt-4">
                    Crc: {crc === "" ? <i>No data</i> : crc}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Thao tác */}
      <div className="row">
        <div className="col-5">
          <Card
            bordered={true}
            className="card bg-light"
            style={{
              width: 500,
            }}
          >
            <div className="d-flex justify-content-around">
              <Button type="primary" className="ms-2" onClick={handelCkickRun}>
                Gửi tin
              </Button>
              <Button
                type="primary"
                danger
                className="ms-2"
                onClick={handelCkickStop}
              >
                Dừng
              </Button>
              <div className="">
                <label>
                  Tần xuất (
                  <i style={{ fontWeight: "500", fontSize: "13px" }}>ms</i>)
                </label>
                <Input
                  className="ms-2 inputN"
                  width={100}
                  min={1}
                  max={10}
                  value={frequency}
                  onChange={(event) => handelChangeInputTime(event)}
                />
              </div>
            </div>
          </Card>
        </div>
        <div className="col-7">
          <Card
            bordered={true}
            className="card"
            style={{
              width: 700,
            }}
          >
            <span className="me-2" style={{ fontWeight: "bold" }}>
              Hẹn giờ
            </span>
            <Switch
              className="ms-2 me-2"
              onChange={onChangeSw}
              checked={disabled}
            />
            <DatePicker.RangePicker
              showTime
              disabled={!disabled}
              onChange={onChangeTime}
            />
            <Button
              className="ms-2"
              type="primary"
              onClick={checkTime}
              disabled={!disabled}
            >
              Gửi
            </Button>
          </Card>
        </div>
      </div>
      {/* Set dữ liệu */}

      <div className="row mt-4">
        <ToastContainer />
        {/* Cột 1 */}
        <div className="col-4">
          <p className="text-center">
            <button
              class="btn btn-primary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
              style={{ width: "80%" }}
            >
              Setting IA
            </button>
          </p>
          <div class="collapse" id="collapseExample">
            <div class="card card-body p-0">
              <Card bordered={true} className="bg-light">
                <InputMinMax
                  title="IA_H1"
                  minValue={minIAH1}
                  maxValue={maxIAH1}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIAH1}
                  setMaxValue={setMaxIAH1}
                  statusMin={minIAH1Error ? "error" : "default"}
                  statusMax={minIAH1Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="IA_H2"
                  minValue={minIAH2}
                  maxValue={maxIAH2}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIAH2}
                  setMaxValue={setMaxIAH2}
                  statusMin={minIAH2Error ? "error" : "default"}
                  statusMax={maxIAH2Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="IA_H3"
                  minValue={minIAH3}
                  maxValue={maxIAH3}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIAH3}
                  setMaxValue={setMaxIAH3}
                  statusMin={minIAH3Error ? "error" : "default"}
                  statusMax={maxIAH3Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="IA_H4"
                  minValue={minIAH4}
                  maxValue={maxIAH4}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIAH4}
                  setMaxValue={setMaxIAH4}
                  statusMin={minIAH4Error ? "error" : "default"}
                  statusMax={maxIAH4Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="IA_H5"
                  minValue={minIAH5}
                  maxValue={maxIAH5}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIAH5}
                  setMaxValue={setMaxIAH5}
                  statusMin={minIAH5Error ? "error" : "default"}
                  statusMax={maxIAH5Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="IA_H6"
                  minValue={minIAH6}
                  maxValue={maxIAH6}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIAH6}
                  setMaxValue={setMaxIAH6}
                  statusMin={minIAH6Error ? "error" : "default"}
                  statusMax={maxIAH6Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="IA_H7"
                  minValue={minIAH7}
                  maxValue={maxIAH7}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIAH7}
                  setMaxValue={setMaxIAH7}
                  statusMin={minIAH7Error ? "error" : "default"}
                  statusMax={maxIAH7Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="IA_H8"
                  minValue={minIAH8}
                  maxValue={maxIAH8}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIAH8}
                  setMaxValue={setMaxIAH8}
                  statusMin={minIAH8Error ? "error" : "default"}
                  statusMax={maxIAH8Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="IA_H9"
                  minValue={minIAH9}
                  maxValue={maxIAH9}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIAH9}
                  setMaxValue={setMaxIAH9}
                  statusMin={minIAH9Error ? "error" : "default"}
                  statusMax={maxIAH9Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="IA_H10"
                  minValue={minIAH10}
                  maxValue={maxIAH10}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIAH10}
                  setMaxValue={setMaxIAH10}
                  statusMin={minIAH10Error ? "error" : "default"}
                  statusMax={maxIAH10Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="IA_H11"
                  minValue={minIAH11}
                  maxValue={maxIAH11}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIAH11}
                  setMaxValue={setMaxIAH11}
                  statusMin={minIAH11Error ? "error" : "default"}
                  statusMax={maxIAH11Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="IA_H12"
                  minValue={minIAH12}
                  maxValue={maxIAH12}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIAH12}
                  setMaxValue={setMaxIAH12}
                  statusMin={minIAH12Error ? "error" : "default"}
                  statusMax={maxIAH12Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="IA_H13"
                  minValue={minIAH13}
                  maxValue={maxIAH13}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIAH13}
                  setMaxValue={setMaxIAH13}
                  statusMin={minIAH13Error ? "error" : "default"}
                  statusMax={maxIAH13Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="IA_H14"
                  minValue={minIAH14}
                  maxValue={maxIAH14}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIAH14}
                  setMaxValue={setMaxIAH14}
                  statusMin={minIAH14Error ? "error" : "default"}
                  statusMax={maxIAH14Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="IA_H15"
                  minValue={minIAH15}
                  maxValue={maxIAH15}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIAH15}
                  setMaxValue={setMaxIAH15}
                  statusMin={minIAH15Error ? "error" : "default"}
                  statusMax={maxIAH15Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="IA_H16"
                  minValue={minIAH16}
                  maxValue={maxIAH16}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIAH16}
                  setMaxValue={setMaxIAH16}
                  statusMin={minIAH16Error ? "error" : "default"}
                  statusMax={maxIAH16Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="IA_H17"
                  minValue={minIAH17}
                  maxValue={maxIAH17}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIAH17}
                  setMaxValue={setMaxIAH17}
                  statusMin={minIAH17Error ? "error" : "default"}
                  statusMax={maxIAH17Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="IA_H18"
                  minValue={minIAH18}
                  maxValue={maxIAH18}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIAH18}
                  setMaxValue={setMaxIAH18}
                  statusMin={minIAH18Error ? "error" : "default"}
                  statusMax={maxIAH18Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="IA_H19"
                  minValue={minIAH19}
                  maxValue={maxIAH19}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIAH19}
                  setMaxValue={setMaxIAH19}
                  statusMin={minIAH19Error ? "error" : "default"}
                  statusMax={maxIAH19Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="IA_H20"
                  minValue={minIAH20}
                  maxValue={maxIAH20}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIAH20}
                  setMaxValue={setMaxIAH20}
                  statusMin={minIAH20Error ? "error" : "default"}
                  statusMax={maxIAH20Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="IA_H21"
                  minValue={minIAH21}
                  maxValue={maxIAH21}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIAH21}
                  setMaxValue={setMaxIAH21}
                  statusMin={minIAH21Error ? "error" : "default"}
                  statusMax={maxIAH21Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="IA_H22"
                  minValue={minIAH22}
                  maxValue={maxIAH22}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIAH22}
                  setMaxValue={setMaxIAH22}
                  statusMin={minIAH22Error ? "error" : "default"}
                  statusMax={maxIAH22Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="IA_H23"
                  minValue={minIAH23}
                  maxValue={maxIAH23}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIAH23}
                  setMaxValue={setMaxIAH23}
                  statusMin={minIAH23Error ? "error" : "default"}
                  statusMax={maxIAH23Error ? "error" : "default"}
                />

                <InputMinMax
                  className="mt-2"
                  title="IA_H24"
                  minValue={minIAH24}
                  maxValue={maxIAH24}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIAH24}
                  setMaxValue={setMaxIAH24}
                  statusMin={minIAH24Error ? "error" : "default"}
                  statusMax={maxIAH24Error ? "error" : "default"}
                />

                <InputMinMax
                  className="mt-2"
                  title="IA_H25"
                  minValue={minIAH25}
                  maxValue={maxIAH25}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIAH25}
                  setMaxValue={setMaxIAH25}
                  statusMin={minIAH25Error ? "error" : "default"}
                  statusMax={maxIAH25Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="IA_H26"
                  minValue={minIAH26}
                  maxValue={maxIAH26}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIAH26}
                  setMaxValue={setMaxIAH26}
                  statusMin={minIAH26Error ? "error" : "default"}
                  statusMax={maxIAH26Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="IA_H27"
                  minValue={minIAH27}
                  maxValue={maxIAH27}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIAH27}
                  setMaxValue={setMaxIAH27}
                  statusMin={minIAH27Error ? "error" : "default"}
                  statusMax={maxIAH27Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="IA_H28"
                  minValue={minIAH28}
                  maxValue={maxIAH28}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIAH28}
                  setMaxValue={setMaxIAH28}
                  statusMin={minIAH28Error ? "error" : "default"}
                  statusMax={maxIAH28Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="IA_H29"
                  minValue={minIAH29}
                  maxValue={maxIAH29}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIAH29}
                  setMaxValue={setMaxIAH29}
                  statusMin={minIAH29Error ? "error" : "default"}
                  statusMax={maxIAH29Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="IA_H30"
                  minValue={minIAH30}
                  maxValue={maxIAH30}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIAH30}
                  setMaxValue={setMaxIAH30}
                  statusMin={minIAH30Error ? "error" : "default"}
                  statusMax={maxIAH30Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="IA_H31"
                  minValue={minIAH31}
                  maxValue={maxIAH31}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIAH31}
                  setMaxValue={setMaxIAH31}
                  statusMin={minIAH31Error ? "error" : "default"}
                  statusMax={maxIAH31Error ? "error" : "default"}
                />
              </Card>
            </div>
          </div>
          <p className="text-center">
            <button
              class="btn btn-secondary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample3"
              aria-expanded="false"
              aria-controls="collapseExample3"
              style={{ width: "80%" }}
            >
              Setting VAN
            </button>
          </p>
          <div className="collapse " id="collapseExample3">
            <div className="card card-body p-0">
              <Card
                bordered={true}
                className="bg-light"
                style={{ width: "100%" }}
              >
                <InputMinMax
                  title="VAN_H1"
                  minValue={minVANH1}
                  maxValue={maxVANH1}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVANH1}
                  setMaxValue={setMaxVANH1}
                  statusMin={minVANH1Error ? "error" : "default"}
                  statusMax={minVANH1Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="VAN_H2"
                  minValue={minVANH2}
                  maxValue={maxVANH2}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVANH2}
                  setMaxValue={setMaxVANH2}
                  statusMin={minVANH2Error ? "error" : "default"}
                  statusMax={maxVANH2Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="VAN_H3"
                  minValue={minVANH3}
                  maxValue={maxVANH3}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVANH3}
                  setMaxValue={setMaxVANH3}
                  statusMin={minVANH3Error ? "error" : "default"}
                  statusMax={maxVANH3Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="VAN_H4"
                  minValue={minVANH4}
                  maxValue={maxVANH4}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVANH4}
                  setMaxValue={setMaxVANH4}
                  statusMin={minVANH4Error ? "error" : "default"}
                  statusMax={maxVANH4Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="VAN_H5"
                  minValue={minVANH5}
                  maxValue={maxVANH5}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVANH5}
                  setMaxValue={setMaxVANH5}
                  statusMin={minVANH5Error ? "error" : "default"}
                  statusMax={maxVANH5Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="VAN_H6"
                  minValue={minVANH6}
                  maxValue={maxVANH6}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVANH6}
                  setMaxValue={setMaxVANH6}
                  statusMin={minVANH6Error ? "error" : "default"}
                  statusMax={maxVANH6Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="VAN_H7"
                  minValue={minVANH7}
                  maxValue={maxVANH7}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVANH7}
                  setMaxValue={setMaxVANH7}
                  statusMin={minVANH7Error ? "error" : "default"}
                  statusMax={maxVANH7Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="VAN_H8"
                  minValue={minVANH8}
                  maxValue={maxVANH8}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVANH8}
                  setMaxValue={setMaxVANH8}
                  statusMin={minVANH8Error ? "error" : "default"}
                  statusMax={maxVANH8Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="VAN_H9"
                  minValue={minVANH9}
                  maxValue={maxVANH9}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVANH9}
                  setMaxValue={setMaxVANH9}
                  statusMin={minVANH9Error ? "error" : "default"}
                  statusMax={maxVANH9Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="VAN_H10"
                  minValue={minVANH10}
                  maxValue={maxVANH10}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVANH10}
                  setMaxValue={setMaxVANH10}
                  statusMin={minVANH10Error ? "error" : "default"}
                  statusMax={maxVANH10Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="VAN_H11"
                  minValue={minVANH11}
                  maxValue={maxVANH11}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVANH11}
                  setMaxValue={setMaxVANH11}
                  statusMin={minVANH11Error ? "error" : "default"}
                  statusMax={maxVANH11Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="VAN_H12"
                  minValue={minVANH12}
                  maxValue={maxVANH12}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVANH12}
                  setMaxValue={setMaxVANH12}
                  statusMin={minVANH12Error ? "error" : "default"}
                  statusMax={maxVANH12Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="VAN_H13"
                  minValue={minVANH13}
                  maxValue={maxVANH13}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVANH13}
                  setMaxValue={setMaxVANH13}
                  statusMin={minVANH13Error ? "error" : "default"}
                  statusMax={maxVANH13Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="VAN_H14"
                  minValue={minVANH14}
                  maxValue={maxVANH14}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVANH14}
                  setMaxValue={setMaxVANH14}
                  statusMin={minVANH14Error ? "error" : "default"}
                  statusMax={maxVANH14Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="VAN_H15"
                  minValue={minVANH15}
                  maxValue={maxVANH15}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVANH15}
                  setMaxValue={setMaxVANH15}
                  statusMin={minVANH15Error ? "error" : "default"}
                  statusMax={maxVANH15Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="VAN_H16"
                  minValue={minVANH16}
                  maxValue={maxVANH16}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVANH16}
                  setMaxValue={setMaxVANH16}
                  statusMin={minVANH16Error ? "error" : "default"}
                  statusMax={maxVANH16Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="VAN_H17"
                  minValue={minVANH17}
                  maxValue={maxVANH17}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVANH17}
                  setMaxValue={setMaxVANH17}
                  statusMin={minVANH17Error ? "error" : "default"}
                  statusMax={maxVANH17Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="VAN_H18"
                  minValue={minVANH18}
                  maxValue={maxVANH18}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVANH18}
                  setMaxValue={setMaxVANH18}
                  statusMin={minVANH18Error ? "error" : "default"}
                  statusMax={maxVANH18Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="VAN_H19"
                  minValue={minVANH19}
                  maxValue={maxVANH19}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVANH19}
                  setMaxValue={setMaxVANH19}
                  statusMin={minVANH19Error ? "error" : "default"}
                  statusMax={maxVANH19Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="VAN_H20"
                  minValue={minVANH20}
                  maxValue={maxVANH20}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVANH20}
                  setMaxValue={setMaxVANH20}
                  statusMin={minVANH20Error ? "error" : "default"}
                  statusMax={maxVANH20Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="VAN_H21"
                  minValue={minVANH21}
                  maxValue={maxVANH21}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVANH21}
                  setMaxValue={setMaxVANH21}
                  statusMin={minVANH21Error ? "error" : "default"}
                  statusMax={maxVANH21Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="VAN_H22"
                  minValue={minVANH22}
                  maxValue={maxVANH22}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVANH22}
                  setMaxValue={setMaxVANH22}
                  statusMin={minVANH22Error ? "error" : "default"}
                  statusMax={maxVANH22Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="VAN_H23"
                  minValue={minVANH23}
                  maxValue={maxVANH23}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVANH23}
                  setMaxValue={setMaxVANH23}
                  statusMin={minVANH23Error ? "error" : "default"}
                  statusMax={maxVANH23Error ? "error" : "default"}
                />

                <InputMinMax
                  className="mt-2"
                  title="VAN_H24"
                  minValue={minVANH24}
                  maxValue={maxVANH24}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVANH24}
                  setMaxValue={setMaxVANH24}
                  statusMin={minVANH24Error ? "error" : "default"}
                  statusMax={maxVANH24Error ? "error" : "default"}
                />

                <InputMinMax
                  className="mt-2"
                  title="VAN_H25"
                  minValue={minVANH25}
                  maxValue={maxVANH25}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVANH25}
                  setMaxValue={setMaxVANH25}
                  statusMin={minVANH25Error ? "error" : "default"}
                  statusMax={maxVANH25Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="VAN_H26"
                  minValue={minVANH26}
                  maxValue={maxVANH26}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVANH26}
                  setMaxValue={setMaxVANH26}
                  statusMin={minVANH26Error ? "error" : "default"}
                  statusMax={maxVANH26Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="VAN_H27"
                  minValue={minVANH27}
                  maxValue={maxVANH27}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVANH27}
                  setMaxValue={setMaxVANH27}
                  statusMin={minVANH27Error ? "error" : "default"}
                  statusMax={maxVANH27Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="VAN_H28"
                  minValue={minVANH28}
                  maxValue={maxVANH28}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVANH28}
                  setMaxValue={setMaxVANH28}
                  statusMin={minVANH28Error ? "error" : "default"}
                  statusMax={maxVANH28Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="VAN_H29"
                  minValue={minVANH29}
                  maxValue={maxVANH29}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVANH29}
                  setMaxValue={setMaxVANH29}
                  statusMin={minVANH29Error ? "error" : "default"}
                  statusMax={maxVANH29Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="VAN_H30"
                  minValue={minVANH30}
                  maxValue={maxVANH30}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVANH30}
                  setMaxValue={setMaxVANH30}
                  statusMin={minVANH30Error ? "error" : "default"}
                  statusMax={maxVANH30Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="VAN_H31"
                  minValue={minVANH31}
                  maxValue={maxVANH31}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVANH31}
                  setMaxValue={setMaxVANH31}
                  statusMin={minVANH31Error ? "error" : "default"}
                  statusMax={maxVANH31Error ? "error" : "default"}
                />
              </Card>
            </div>
          </div>
        </div>
        {/* Cột 2 */}
        <div className="col-4">
          <p className="text-center">
            <button
              class="btn btn-warning"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample1"
              aria-expanded="false"
              aria-controls="collapseExample"
              style={{ width: "80%" }}
            >
              Setting IB
            </button>
          </p>
          <div class="collapse" id="collapseExample1">
            <div class="card card-body p-0">
              <Card bordered={true} className="bg-light">
                <InputMinMax
                  title="IB_H1"
                  minValue={minIBH1}
                  maxValue={maxIBH1}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIBH1}
                  setMaxValue={setMaxIBH1}
                  statusMin={minIBH1Error ? "error" : "default"}
                  statusMax={minIBH1Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="IB_H2"
                  minValue={minIBH2}
                  maxValue={maxIBH2}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIBH2}
                  setMaxValue={setMaxIBH2}
                  statusMin={minIBH2Error ? "error" : "default"}
                  statusMax={maxIBH2Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="IB_H3"
                  minValue={minIBH3}
                  maxValue={maxIBH3}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIBH3}
                  setMaxValue={setMaxIBH3}
                  statusMin={minIBH3Error ? "error" : "default"}
                  statusMax={maxIBH3Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="IB_H4"
                  minValue={minIBH4}
                  maxValue={maxIBH4}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIBH4}
                  setMaxValue={setMaxIBH4}
                  statusMin={minIBH4Error ? "error" : "default"}
                  statusMax={maxIBH4Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="IB_H5"
                  minValue={minIBH5}
                  maxValue={maxIBH5}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIBH5}
                  setMaxValue={setMaxIBH5}
                  statusMin={minIBH5Error ? "error" : "default"}
                  statusMax={maxIBH5Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="IB_H6"
                  minValue={minIBH6}
                  maxValue={maxIBH6}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIBH6}
                  setMaxValue={setMaxIBH6}
                  statusMin={minIBH6Error ? "error" : "default"}
                  statusMax={maxIBH6Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="IB_H7"
                  minValue={minIBH7}
                  maxValue={maxIBH7}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIBH7}
                  setMaxValue={setMaxIBH7}
                  statusMin={minIBH7Error ? "error" : "default"}
                  statusMax={maxIBH7Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="IB_H8"
                  minValue={minIBH8}
                  maxValue={maxIBH8}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIBH8}
                  setMaxValue={setMaxIBH8}
                  statusMin={minIBH8Error ? "error" : "default"}
                  statusMax={maxIBH8Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="IB_H9"
                  minValue={minIBH9}
                  maxValue={maxIBH9}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIBH9}
                  setMaxValue={setMaxIBH9}
                  statusMin={minIBH9Error ? "error" : "default"}
                  statusMax={maxIBH9Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="IB_H10"
                  minValue={minIBH10}
                  maxValue={maxIBH10}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIBH10}
                  setMaxValue={setMaxIBH10}
                  statusMin={minIBH10Error ? "error" : "default"}
                  statusMax={maxIBH10Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="IB_H11"
                  minValue={minIBH11}
                  maxValue={maxIBH11}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIBH11}
                  setMaxValue={setMaxIBH11}
                  statusMin={minIBH11Error ? "error" : "default"}
                  statusMax={maxIBH11Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="IB_H12"
                  minValue={minIBH12}
                  maxValue={maxIBH12}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIBH12}
                  setMaxValue={setMaxIBH12}
                  statusMin={minIBH12Error ? "error" : "default"}
                  statusMax={maxIBH12Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="IB_H13"
                  minValue={minIBH13}
                  maxValue={maxIBH13}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIBH13}
                  setMaxValue={setMaxIBH13}
                  statusMin={minIBH13Error ? "error" : "default"}
                  statusMax={maxIBH13Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="IB_H14"
                  minValue={minIBH14}
                  maxValue={maxIBH14}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIBH14}
                  setMaxValue={setMaxIBH14}
                  statusMin={minIBH14Error ? "error" : "default"}
                  statusMax={maxIBH14Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="IB_H15"
                  minValue={minIBH15}
                  maxValue={maxIBH15}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIBH15}
                  setMaxValue={setMaxIBH15}
                  statusMin={minIBH15Error ? "error" : "default"}
                  statusMax={maxIBH15Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="IB_H16"
                  minValue={minIBH16}
                  maxValue={maxIBH16}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIBH16}
                  setMaxValue={setMaxIBH16}
                  statusMin={minIBH16Error ? "error" : "default"}
                  statusMax={maxIBH16Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="IB_H17"
                  minValue={minIBH17}
                  maxValue={maxIBH17}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIBH17}
                  setMaxValue={setMaxIBH17}
                  statusMin={minIBH17Error ? "error" : "default"}
                  statusMax={maxIBH17Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="IB_H18"
                  minValue={minIBH18}
                  maxValue={maxIBH18}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIBH18}
                  setMaxValue={setMaxIBH18}
                  statusMin={minIBH18Error ? "error" : "default"}
                  statusMax={maxIBH18Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="IB_H19"
                  minValue={minIBH19}
                  maxValue={maxIBH19}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIBH19}
                  setMaxValue={setMaxIBH19}
                  statusMin={minIBH19Error ? "error" : "default"}
                  statusMax={maxIBH19Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="IB_H20"
                  minValue={minIBH20}
                  maxValue={maxIBH20}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIBH20}
                  setMaxValue={setMaxIBH20}
                  statusMin={minIBH20Error ? "error" : "default"}
                  statusMax={maxIBH20Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="IB_H21"
                  minValue={minIBH21}
                  maxValue={maxIBH21}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIBH21}
                  setMaxValue={setMaxIBH21}
                  statusMin={minIBH21Error ? "error" : "default"}
                  statusMax={maxIBH21Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="IB_H22"
                  minValue={minIBH22}
                  maxValue={maxIBH22}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIBH22}
                  setMaxValue={setMaxIBH22}
                  statusMin={minIBH22Error ? "error" : "default"}
                  statusMax={maxIBH22Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="IB_H23"
                  minValue={minIBH23}
                  maxValue={maxIBH23}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIBH23}
                  setMaxValue={setMaxIBH23}
                  statusMin={minIBH23Error ? "error" : "default"}
                  statusMax={maxIBH23Error ? "error" : "default"}
                />

                <InputMinMax
                  className="mt-2"
                  title="IB_H24"
                  minValue={minIBH24}
                  maxValue={maxIBH24}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIBH24}
                  setMaxValue={setMaxIBH24}
                  statusMin={minIBH24Error ? "error" : "default"}
                  statusMax={maxIBH24Error ? "error" : "default"}
                />

                <InputMinMax
                  className="mt-2"
                  title="IB_H25"
                  minValue={minIBH25}
                  maxValue={maxIBH25}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIBH25}
                  setMaxValue={setMaxIBH25}
                  statusMin={minIBH25Error ? "error" : "default"}
                  statusMax={maxIBH25Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="IB_H26"
                  minValue={minIBH26}
                  maxValue={maxIBH26}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIBH26}
                  setMaxValue={setMaxIBH26}
                  statusMin={minIBH26Error ? "error" : "default"}
                  statusMax={maxIBH26Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="IB_H27"
                  minValue={minIBH27}
                  maxValue={maxIBH27}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIBH27}
                  setMaxValue={setMaxIBH27}
                  statusMin={minIBH27Error ? "error" : "default"}
                  statusMax={maxIBH27Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="IB_H28"
                  minValue={minIBH28}
                  maxValue={maxIBH28}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIBH28}
                  setMaxValue={setMaxIBH28}
                  statusMin={minIBH28Error ? "error" : "default"}
                  statusMax={maxIBH28Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="IB_H29"
                  minValue={minIBH29}
                  maxValue={maxIBH29}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIBH29}
                  setMaxValue={setMaxIBH29}
                  statusMin={minIBH29Error ? "error" : "default"}
                  statusMax={maxIBH29Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="IB_H30"
                  minValue={minIBH30}
                  maxValue={maxIBH30}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIBH30}
                  setMaxValue={setMaxIBH30}
                  statusMin={minIBH30Error ? "error" : "default"}
                  statusMax={maxIBH30Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="IB_H31"
                  minValue={minIBH31}
                  maxValue={maxIBH31}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIBH31}
                  setMaxValue={setMaxIBH31}
                  statusMin={minIBH31Error ? "error" : "default"}
                  statusMax={maxIBH31Error ? "error" : "default"}
                />
              </Card>
            </div>
          </div>
          <p className="text-center">
            <button
              class="btn btn-success"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample4"
              aria-expanded="false"
              aria-controls="collapseExample4"
              style={{ width: "80%" }}
            >
              Setting VBN{" "}
            </button>
          </p>
          <div className="collapse " id="collapseExample4">
            <div className="card card-body p-0">
              <Card bordered={true} className="bg-light">
                <InputMinMax
                  title="VBN_H1"
                  minValue={minVBNH1}
                  maxValue={maxVBNH1}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVBNH1}
                  setMaxValue={setMaxVBNH1}
                  statusMin={minVBNH1Error ? "error" : "default"}
                  statusMax={minVBNH1Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="VBN_H2"
                  minValue={minVBNH2}
                  maxValue={maxVBNH2}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVBNH2}
                  setMaxValue={setMaxVBNH2}
                  statusMin={minVBNH2Error ? "error" : "default"}
                  statusMax={maxVBNH2Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="VBN_H3"
                  minValue={minVBNH3}
                  maxValue={maxVBNH3}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVBNH3}
                  setMaxValue={setMaxVBNH3}
                  statusMin={minVBNH3Error ? "error" : "default"}
                  statusMax={maxVBNH3Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="VBN_H4"
                  minValue={minVBNH4}
                  maxValue={maxVBNH4}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVBNH4}
                  setMaxValue={setMaxVBNH4}
                  statusMin={minVBNH4Error ? "error" : "default"}
                  statusMax={maxVBNH4Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="VBN_H5"
                  minValue={minVBNH5}
                  maxValue={maxVBNH5}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVBNH5}
                  setMaxValue={setMaxVBNH5}
                  statusMin={minVBNH5Error ? "error" : "default"}
                  statusMax={maxVBNH5Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="VBN_H6"
                  minValue={minVBNH6}
                  maxValue={maxVBNH6}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVBNH6}
                  setMaxValue={setMaxVBNH6}
                  statusMin={minVBNH6Error ? "error" : "default"}
                  statusMax={maxVBNH6Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="VBN_H7"
                  minValue={minVBNH7}
                  maxValue={maxVBNH7}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVBNH7}
                  setMaxValue={setMaxVBNH7}
                  statusMin={minVBNH7Error ? "error" : "default"}
                  statusMax={maxVBNH7Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="VBN_H8"
                  minValue={minVBNH8}
                  maxValue={maxVBNH8}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVBNH8}
                  setMaxValue={setMaxVBNH8}
                  statusMin={minVBNH8Error ? "error" : "default"}
                  statusMax={maxVBNH8Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="VBN_H9"
                  minValue={minVBNH9}
                  maxValue={maxVBNH9}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVBNH9}
                  setMaxValue={setMaxVBNH9}
                  statusMin={minVBNH9Error ? "error" : "default"}
                  statusMax={maxVBNH9Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="VBN_H10"
                  minValue={minVBNH10}
                  maxValue={maxVBNH10}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVBNH10}
                  setMaxValue={setMaxVBNH10}
                  statusMin={minVBNH10Error ? "error" : "default"}
                  statusMax={maxVBNH10Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="VBN_H11"
                  minValue={minVBNH11}
                  maxValue={maxVBNH11}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVBNH11}
                  setMaxValue={setMaxVBNH11}
                  statusMin={minVBNH11Error ? "error" : "default"}
                  statusMax={maxVBNH11Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="VBN_H12"
                  minValue={minVBNH12}
                  maxValue={maxVBNH12}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVBNH12}
                  setMaxValue={setMaxVBNH12}
                  statusMin={minVBNH12Error ? "error" : "default"}
                  statusMax={maxVBNH12Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="VBN_H13"
                  minValue={minVBNH13}
                  maxValue={maxVBNH13}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVBNH13}
                  setMaxValue={setMaxVBNH13}
                  statusMin={minVBNH13Error ? "error" : "default"}
                  statusMax={maxVBNH13Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="VBN_H14"
                  minValue={minVBNH14}
                  maxValue={maxVBNH14}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVBNH14}
                  setMaxValue={setMaxVBNH14}
                  statusMin={minVBNH14Error ? "error" : "default"}
                  statusMax={maxVBNH14Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="VBN_H15"
                  minValue={minVBNH15}
                  maxValue={maxVBNH15}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVBNH15}
                  setMaxValue={setMaxVBNH15}
                  statusMin={minVBNH15Error ? "error" : "default"}
                  statusMax={maxVBNH15Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="VBN_H16"
                  minValue={minVBNH16}
                  maxValue={maxVBNH16}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVBNH16}
                  setMaxValue={setMaxVBNH16}
                  statusMin={minVBNH16Error ? "error" : "default"}
                  statusMax={maxVBNH16Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="VBN_H17"
                  minValue={minVBNH17}
                  maxValue={maxVBNH17}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVBNH17}
                  setMaxValue={setMaxVBNH17}
                  statusMin={minVBNH17Error ? "error" : "default"}
                  statusMax={maxVBNH17Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="VBN_H18"
                  minValue={minVBNH18}
                  maxValue={maxVBNH18}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVBNH18}
                  setMaxValue={setMaxVBNH18}
                  statusMin={minVBNH18Error ? "error" : "default"}
                  statusMax={maxVBNH18Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="VBN_H19"
                  minValue={minVBNH19}
                  maxValue={maxVBNH19}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVBNH19}
                  setMaxValue={setMaxVBNH19}
                  statusMin={minVBNH19Error ? "error" : "default"}
                  statusMax={maxVBNH19Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="VBN_H20"
                  minValue={minVBNH20}
                  maxValue={maxVBNH20}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVBNH20}
                  setMaxValue={setMaxVBNH20}
                  statusMin={minVBNH20Error ? "error" : "default"}
                  statusMax={maxVBNH20Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="VBN_H21"
                  minValue={minVBNH21}
                  maxValue={maxVBNH21}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVBNH21}
                  setMaxValue={setMaxVBNH21}
                  statusMin={minVBNH21Error ? "error" : "default"}
                  statusMax={maxVBNH21Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="VBN_H22"
                  minValue={minVBNH22}
                  maxValue={maxVBNH22}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVBNH22}
                  setMaxValue={setMaxVBNH22}
                  statusMin={minVBNH22Error ? "error" : "default"}
                  statusMax={maxVBNH22Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="VBN_H23"
                  minValue={minVBNH23}
                  maxValue={maxVBNH23}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVBNH23}
                  setMaxValue={setMaxVBNH23}
                  statusMin={minVBNH23Error ? "error" : "default"}
                  statusMax={maxVBNH23Error ? "error" : "default"}
                />

                <InputMinMax
                  className="mt-2"
                  title="VBN_H24"
                  minValue={minVBNH24}
                  maxValue={maxVBNH24}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVBNH24}
                  setMaxValue={setMaxVBNH24}
                  statusMin={minVBNH24Error ? "error" : "default"}
                  statusMax={maxVBNH24Error ? "error" : "default"}
                />

                <InputMinMax
                  className="mt-2"
                  title="VBN_H25"
                  minValue={minVBNH25}
                  maxValue={maxVBNH25}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVBNH25}
                  setMaxValue={setMaxVBNH25}
                  statusMin={minVBNH25Error ? "error" : "default"}
                  statusMax={maxVBNH25Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="VBN_H26"
                  minValue={minVBNH26}
                  maxValue={maxVBNH26}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVBNH26}
                  setMaxValue={setMaxVBNH26}
                  statusMin={minVBNH26Error ? "error" : "default"}
                  statusMax={maxVBNH26Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="VBN_H27"
                  minValue={minVBNH27}
                  maxValue={maxVBNH27}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVBNH27}
                  setMaxValue={setMaxVBNH27}
                  statusMin={minVBNH27Error ? "error" : "default"}
                  statusMax={maxVBNH27Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="VBN_H28"
                  minValue={minVBNH28}
                  maxValue={maxVBNH28}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVBNH28}
                  setMaxValue={setMaxVBNH28}
                  statusMin={minVBNH28Error ? "error" : "default"}
                  statusMax={maxVBNH28Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="VBN_H29"
                  minValue={minVBNH29}
                  maxValue={maxVBNH29}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVBNH29}
                  setMaxValue={setMaxVBNH29}
                  statusMin={minVBNH29Error ? "error" : "default"}
                  statusMax={maxVBNH29Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="VBN_H30"
                  minValue={minVBNH30}
                  maxValue={maxVBNH30}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVBNH30}
                  setMaxValue={setMaxVBNH30}
                  statusMin={minVBNH30Error ? "error" : "default"}
                  statusMax={maxVBNH30Error ? "error" : "default"}
                />
                <InputMinMax
                  className="mt-2"
                  title="VBN_H31"
                  minValue={minVBNH31}
                  maxValue={maxVBNH31}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVBNH31}
                  setMaxValue={setMaxVBNH31}
                  statusMin={minVBNH31Error ? "error" : "default"}
                  statusMax={maxVBNH31Error ? "error" : "default"}
                />
              </Card>
            </div>
          </div>
        </div>
        {/* Cột 3 */}

        <div className="col-4">
          <p className="text-center">
            <button
              class="btn btn-info"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample2"
              aria-expanded="false"
              aria-controls="collapseExample2"
              style={{ width: "80%" }}
            >
              Setting IC
            </button>
          </p>
          <div class="collapse" id="collapseExample2">
            <Card bordered={true} className="bg-light">
              <InputMinMax
                title="IC_H1"
                minValue={minICH1}
                maxValue={maxICH1}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinICH1}
                setMaxValue={setMaxICH1}
                statusMin={minICH1Error ? "error" : "default"}
                statusMax={minICH1Error ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="IC_H2"
                minValue={minICH2}
                maxValue={maxICH2}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinICH2}
                setMaxValue={setMaxICH2}
                statusMin={minICH2Error ? "error" : "default"}
                statusMax={maxICH2Error ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="IC_H3"
                minValue={minICH3}
                maxValue={maxICH3}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinICH3}
                setMaxValue={setMaxICH3}
                statusMin={minICH3Error ? "error" : "default"}
                statusMax={maxICH3Error ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="IC_H4"
                minValue={minICH4}
                maxValue={maxICH4}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinICH4}
                setMaxValue={setMaxICH4}
                statusMin={minICH4Error ? "error" : "default"}
                statusMax={maxICH4Error ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="IC_H5"
                minValue={minICH5}
                maxValue={maxICH5}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinICH5}
                setMaxValue={setMaxICH5}
                statusMin={minICH5Error ? "error" : "default"}
                statusMax={maxICH5Error ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="IC_H6"
                minValue={minICH6}
                maxValue={maxICH6}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinICH6}
                setMaxValue={setMaxICH6}
                statusMin={minICH6Error ? "error" : "default"}
                statusMax={maxICH6Error ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="IC_H7"
                minValue={minICH7}
                maxValue={maxICH7}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinICH7}
                setMaxValue={setMaxICH7}
                statusMin={minICH7Error ? "error" : "default"}
                statusMax={maxICH7Error ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="IC_H8"
                minValue={minICH8}
                maxValue={maxICH8}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinICH8}
                setMaxValue={setMaxICH8}
                statusMin={minICH8Error ? "error" : "default"}
                statusMax={maxICH8Error ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="IC_H9"
                minValue={minICH9}
                maxValue={maxICH9}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinICH9}
                setMaxValue={setMaxICH9}
                statusMin={minICH9Error ? "error" : "default"}
                statusMax={maxICH9Error ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="IC_H10"
                minValue={minICH10}
                maxValue={maxICH10}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinICH10}
                setMaxValue={setMaxICH10}
                statusMin={minICH10Error ? "error" : "default"}
                statusMax={maxICH10Error ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="IC_H11"
                minValue={minICH11}
                maxValue={maxICH11}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinICH11}
                setMaxValue={setMaxICH11}
                statusMin={minICH11Error ? "error" : "default"}
                statusMax={maxICH11Error ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="IC_H12"
                minValue={minICH12}
                maxValue={maxICH12}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinICH12}
                setMaxValue={setMaxICH12}
                statusMin={minICH12Error ? "error" : "default"}
                statusMax={maxICH12Error ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="IC_H13"
                minValue={minICH13}
                maxValue={maxICH13}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinICH13}
                setMaxValue={setMaxICH13}
                statusMin={minICH13Error ? "error" : "default"}
                statusMax={maxICH13Error ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="IC_H14"
                minValue={minICH14}
                maxValue={maxICH14}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinICH14}
                setMaxValue={setMaxICH14}
                statusMin={minICH14Error ? "error" : "default"}
                statusMax={maxICH14Error ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="IC_H15"
                minValue={minICH15}
                maxValue={maxICH15}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinICH15}
                setMaxValue={setMaxICH15}
                statusMin={minICH15Error ? "error" : "default"}
                statusMax={maxICH15Error ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="IC_H16"
                minValue={minICH16}
                maxValue={maxICH16}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinICH16}
                setMaxValue={setMaxICH16}
                statusMin={minICH16Error ? "error" : "default"}
                statusMax={maxICH16Error ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="IC_H17"
                minValue={minICH17}
                maxValue={maxICH17}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinICH17}
                setMaxValue={setMaxICH17}
                statusMin={minICH17Error ? "error" : "default"}
                statusMax={maxICH17Error ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="IC_H18"
                minValue={minICH18}
                maxValue={maxICH18}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinICH18}
                setMaxValue={setMaxICH18}
                statusMin={minICH18Error ? "error" : "default"}
                statusMax={maxICH18Error ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="IC_H19"
                minValue={minICH19}
                maxValue={maxICH19}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinICH19}
                setMaxValue={setMaxICH19}
                statusMin={minICH19Error ? "error" : "default"}
                statusMax={maxICH19Error ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="IC_H20"
                minValue={minICH20}
                maxValue={maxICH20}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinICH20}
                setMaxValue={setMaxICH20}
                statusMin={minICH20Error ? "error" : "default"}
                statusMax={maxICH20Error ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="IC_H21"
                minValue={minICH21}
                maxValue={maxICH21}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinICH21}
                setMaxValue={setMaxICH21}
                statusMin={minICH21Error ? "error" : "default"}
                statusMax={maxICH21Error ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="IC_H22"
                minValue={minICH22}
                maxValue={maxICH22}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinICH22}
                setMaxValue={setMaxICH22}
                statusMin={minICH22Error ? "error" : "default"}
                statusMax={maxICH22Error ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="IC_H23"
                minValue={minICH23}
                maxValue={maxICH23}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinICH23}
                setMaxValue={setMaxICH23}
                statusMin={minICH23Error ? "error" : "default"}
                statusMax={maxICH23Error ? "error" : "default"}
              />

              <InputMinMax
                className="mt-2"
                title="IC_H24"
                minValue={minICH24}
                maxValue={maxICH24}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinICH24}
                setMaxValue={setMaxICH24}
                statusMin={minICH24Error ? "error" : "default"}
                statusMax={maxICH24Error ? "error" : "default"}
              />

              <InputMinMax
                className="mt-2"
                title="IC_H25"
                minValue={minICH25}
                maxValue={maxICH25}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinICH25}
                setMaxValue={setMaxICH25}
                statusMin={minICH25Error ? "error" : "default"}
                statusMax={maxICH25Error ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="IC_H26"
                minValue={minICH26}
                maxValue={maxICH26}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinICH26}
                setMaxValue={setMaxICH26}
                statusMin={minICH26Error ? "error" : "default"}
                statusMax={maxICH26Error ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="IC_H27"
                minValue={minICH27}
                maxValue={maxICH27}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinICH27}
                setMaxValue={setMaxICH27}
                statusMin={minICH27Error ? "error" : "default"}
                statusMax={maxICH27Error ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="IC_H28"
                minValue={minICH28}
                maxValue={maxICH28}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinICH28}
                setMaxValue={setMaxICH28}
                statusMin={minICH28Error ? "error" : "default"}
                statusMax={maxICH28Error ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="IC_H29"
                minValue={minICH29}
                maxValue={maxICH29}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinICH29}
                setMaxValue={setMaxICH29}
                statusMin={minICH29Error ? "error" : "default"}
                statusMax={maxICH29Error ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="IC_H30"
                minValue={minICH30}
                maxValue={maxICH30}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinICH30}
                setMaxValue={setMaxICH30}
                statusMin={minICH30Error ? "error" : "default"}
                statusMax={maxICH30Error ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="IC_H31"
                minValue={minICH31}
                maxValue={maxICH31}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinICH31}
                setMaxValue={setMaxICH31}
                statusMin={minICH31Error ? "error" : "default"}
                statusMax={maxICH31Error ? "error" : "default"}
              />
            </Card>
          </div>
          <p className="text-center">
            <button
              class="btn btn-dark"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample5"
              aria-expanded="false"
              aria-controls="collapseExample5"
              style={{ width: "80%" }}
            >
              Setting VCN{" "}
            </button>
          </p>
          <div class="collapse" id="collapseExample5">
            <Card bordered={true} className="bg-light">
              <InputMinMax
                title="VCN_H1"
                minValue={minVCNH1}
                maxValue={maxVCNH1}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinVCNH1}
                setMaxValue={setMaxVCNH1}
                statusMin={minVCNH1Error ? "error" : "default"}
                statusMax={minVCNH1Error ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="VCN_H2"
                minValue={minVCNH2}
                maxValue={maxVCNH2}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinVCNH2}
                setMaxValue={setMaxVCNH2}
                statusMin={minVCNH2Error ? "error" : "default"}
                statusMax={maxVCNH2Error ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="VCN_H3"
                minValue={minVCNH3}
                maxValue={maxVCNH3}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinVCNH3}
                setMaxValue={setMaxVCNH3}
                statusMin={minVCNH3Error ? "error" : "default"}
                statusMax={maxVCNH3Error ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="VCN_H4"
                minValue={minVCNH4}
                maxValue={maxVCNH4}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinVCNH4}
                setMaxValue={setMaxVCNH4}
                statusMin={minVCNH4Error ? "error" : "default"}
                statusMax={maxVCNH4Error ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="VCN_H5"
                minValue={minVCNH5}
                maxValue={maxVCNH5}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinVCNH5}
                setMaxValue={setMaxVCNH5}
                statusMin={minVCNH5Error ? "error" : "default"}
                statusMax={maxVCNH5Error ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="VCN_H6"
                minValue={minVCNH6}
                maxValue={maxVCNH6}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinVCNH6}
                setMaxValue={setMaxVCNH6}
                statusMin={minVCNH6Error ? "error" : "default"}
                statusMax={maxVCNH6Error ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="VCN_H7"
                minValue={minVCNH7}
                maxValue={maxVCNH7}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinVCNH7}
                setMaxValue={setMaxVCNH7}
                statusMin={minVCNH7Error ? "error" : "default"}
                statusMax={maxVCNH7Error ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="VCN_H8"
                minValue={minVCNH8}
                maxValue={maxVCNH8}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinVCNH8}
                setMaxValue={setMaxVCNH8}
                statusMin={minVCNH8Error ? "error" : "default"}
                statusMax={maxVCNH8Error ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="VCN_H9"
                minValue={minVCNH9}
                maxValue={maxVCNH9}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinVCNH9}
                setMaxValue={setMaxVCNH9}
                statusMin={minVCNH9Error ? "error" : "default"}
                statusMax={maxVCNH9Error ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="VCN_H10"
                minValue={minVCNH10}
                maxValue={maxVCNH10}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinVCNH10}
                setMaxValue={setMaxVCNH10}
                statusMin={minVCNH10Error ? "error" : "default"}
                statusMax={maxVCNH10Error ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="VCN_H11"
                minValue={minVCNH11}
                maxValue={maxVCNH11}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinVCNH11}
                setMaxValue={setMaxVCNH11}
                statusMin={minVCNH11Error ? "error" : "default"}
                statusMax={maxVCNH11Error ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="VCN_H12"
                minValue={minVCNH12}
                maxValue={maxVCNH12}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinVCNH12}
                setMaxValue={setMaxVCNH12}
                statusMin={minVCNH12Error ? "error" : "default"}
                statusMax={maxVCNH12Error ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="VCN_H13"
                minValue={minVCNH13}
                maxValue={maxVCNH13}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinVCNH13}
                setMaxValue={setMaxVCNH13}
                statusMin={minVCNH13Error ? "error" : "default"}
                statusMax={maxVCNH13Error ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="VCN_H14"
                minValue={minVCNH14}
                maxValue={maxVCNH14}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinVCNH14}
                setMaxValue={setMaxVCNH14}
                statusMin={minVCNH14Error ? "error" : "default"}
                statusMax={maxVCNH14Error ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="VCN_H15"
                minValue={minVCNH15}
                maxValue={maxVCNH15}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinVCNH15}
                setMaxValue={setMaxVCNH15}
                statusMin={minVCNH15Error ? "error" : "default"}
                statusMax={maxVCNH15Error ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="VCN_H16"
                minValue={minVCNH16}
                maxValue={maxVCNH16}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinVCNH16}
                setMaxValue={setMaxVCNH16}
                statusMin={minVCNH16Error ? "error" : "default"}
                statusMax={maxVCNH16Error ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="VCN_H17"
                minValue={minVCNH17}
                maxValue={maxVCNH17}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinVCNH17}
                setMaxValue={setMaxVCNH17}
                statusMin={minVCNH17Error ? "error" : "default"}
                statusMax={maxVCNH17Error ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="VCN_H18"
                minValue={minVCNH18}
                maxValue={maxVCNH18}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinVCNH18}
                setMaxValue={setMaxVCNH18}
                statusMin={minVCNH18Error ? "error" : "default"}
                statusMax={maxVCNH18Error ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="VCN_H19"
                minValue={minVCNH19}
                maxValue={maxVCNH19}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinVCNH19}
                setMaxValue={setMaxVCNH19}
                statusMin={minVCNH19Error ? "error" : "default"}
                statusMax={maxVCNH19Error ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="VCN_H20"
                minValue={minVCNH20}
                maxValue={maxVCNH20}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinVCNH20}
                setMaxValue={setMaxVCNH20}
                statusMin={minVCNH20Error ? "error" : "default"}
                statusMax={maxVCNH20Error ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="VCN_H21"
                minValue={minVCNH21}
                maxValue={maxVCNH21}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinVCNH21}
                setMaxValue={setMaxVCNH21}
                statusMin={minVCNH21Error ? "error" : "default"}
                statusMax={maxVCNH21Error ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="VCN_H22"
                minValue={minVCNH22}
                maxValue={maxVCNH22}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinVCNH22}
                setMaxValue={setMaxVCNH22}
                statusMin={minVCNH22Error ? "error" : "default"}
                statusMax={maxVCNH22Error ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="VCN_H23"
                minValue={minVCNH23}
                maxValue={maxVCNH23}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinVCNH23}
                setMaxValue={setMaxVCNH23}
                statusMin={minVCNH23Error ? "error" : "default"}
                statusMax={maxVCNH23Error ? "error" : "default"}
              />

              <InputMinMax
                className="mt-2"
                title="VCN_H24"
                minValue={minVCNH24}
                maxValue={maxVCNH24}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinVCNH24}
                setMaxValue={setMaxVCNH24}
                statusMin={minVCNH24Error ? "error" : "default"}
                statusMax={maxVCNH24Error ? "error" : "default"}
              />

              <InputMinMax
                className="mt-2"
                title="VCN_H25"
                minValue={minVCNH25}
                maxValue={maxVCNH25}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinVCNH25}
                setMaxValue={setMaxVCNH25}
                statusMin={minVCNH25Error ? "error" : "default"}
                statusMax={maxVCNH25Error ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="VCN_H26"
                minValue={minVCNH26}
                maxValue={maxVCNH26}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinVCNH26}
                setMaxValue={setMaxVCNH26}
                statusMin={minVCNH26Error ? "error" : "default"}
                statusMax={maxVCNH26Error ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="VCN_H27"
                minValue={minVCNH27}
                maxValue={maxVCNH27}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinVCNH27}
                setMaxValue={setMaxVCNH27}
                statusMin={minVCNH27Error ? "error" : "default"}
                statusMax={maxVCNH27Error ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="VCN_H28"
                minValue={minVCNH28}
                maxValue={maxVCNH28}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinVCNH28}
                setMaxValue={setMaxVCNH28}
                statusMin={minVCNH28Error ? "error" : "default"}
                statusMax={maxVCNH28Error ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="VCN_H29"
                minValue={minVCNH29}
                maxValue={maxVCNH29}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinVCNH29}
                setMaxValue={setMaxVCNH29}
                statusMin={minVCNH29Error ? "error" : "default"}
                statusMax={maxVCNH29Error ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="VCN_H30"
                minValue={minVCNH30}
                maxValue={maxVCNH30}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinVCNH30}
                setMaxValue={setMaxVCNH30}
                statusMin={minVCNH30Error ? "error" : "default"}
                statusMax={maxVCNH30Error ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="VCN_H31"
                minValue={minVCNH31}
                maxValue={maxVCNH31}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinVCNH31}
                setMaxValue={setMaxVCNH31}
                statusMin={minVCNH31Error ? "error" : "default"}
                statusMax={maxVCNH31Error ? "error" : "default"}
              />
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
