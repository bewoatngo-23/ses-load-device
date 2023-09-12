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

  const [url, setUrl] = useState("tcp://localhost:1883");
  const [username, setUsername] = useState("guest");
  const [password, setPassword] = useState("guest");
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
  const [crc, setCrc] = useState("12");
  const [country, setCountry] = useState("84");
  const [validateFrequency, setValidateFrequency] = useState(false);

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
    const dataArray = [
      {
        name: "IAH1",
        min: minIAH1,
        max: maxIAH1,
        minError: setMinIAH1Error,
        maxError: setMaxIAH1Error,
      },
      {
        name: "IAH2",
        min: minIAH2,
        max: maxIAH2,
        minError: setMinIAH2Error,
        maxError: setMaxIAH2Error,
      },
      {
        name: "IAH3",
        min: minIAH3,
        max: maxIAH3,
        minError: setMinIAH3Error,
        maxError: setMaxIAH3Error,
      },
      {
        name: "IAH4",
        min: minIAH4,
        max: maxIAH4,
        minError: setMinIAH4Error,
        maxError: setMaxIAH4Error,
      },
      {
        name: "IAH5",
        min: minIAH5,
        max: maxIAH5,
        minError: setMinIAH5Error,
        maxError: setMaxIAH5Error,
      },
      {
        name: "IAH6",
        min: minIAH6,
        max: maxIAH6,
        minError: setMinIAH6Error,
        maxError: setMaxIAH6Error,
      },
      {
        name: "IAH7",
        min: minIAH7,
        max: maxIAH7,
        minError: setMinIAH7Error,
        maxError: setMaxIAH7Error,
      },
      {
        name: "IAH8",
        min: minIAH8,
        max: maxIAH8,
        minError: setMinIAH8Error,
        maxError: setMaxIAH8Error,
      },
      {
        name: "IAH9",
        min: minIAH9,
        max: maxIAH9,
        minError: setMinIAH9Error,
        maxError: setMaxIAH9Error,
      },
      {
        name: "IAH10",
        min: minIAH10,
        max: maxIAH10,
        minError: setMinIAH10Error,
        maxError: setMaxIAH10Error,
      },
      {
        name: "IAH11",
        min: minIAH11,
        max: maxIAH11,
        minError: setMinIAH11Error,
        maxError: setMaxIAH11Error,
      },
      {
        name: "IAH12",
        min: minIAH12,
        max: maxIAH12,
        minError: setMinIAH12Error,
        maxError: setMaxIAH12Error,
      },
      {
        name: "IAH13",
        min: minIAH13,
        max: maxIAH13,
        minError: setMinIAH13Error,
        maxError: setMaxIAH13Error,
      },
      {
        name: "IAH14",
        min: minIAH14,
        max: maxIAH14,
        minError: setMinIAH14Error,
        maxError: setMaxIAH14Error,
      },
      {
        name: "IAH15",
        min: minIAH15,
        max: maxIAH15,
        minError: setMinIAH15Error,
        maxError: setMaxIAH15Error,
      },
      {
        name: "IAH16",
        min: minIAH16,
        max: maxIAH16,
        minError: setMinIAH16Error,
        maxError: setMaxIAH16Error,
      },
      {
        name: "IAH17",
        min: minIAH17,
        max: maxIAH17,
        minError: setMinIAH17Error,
        maxError: setMaxIAH17Error,
      },
      {
        name: "IAH18",
        min: minIAH18,
        max: maxIAH18,
        minError: setMinIAH18Error,
        maxError: setMaxIAH18Error,
      },
      {
        name: "IAH19",
        min: minIAH19,
        max: maxIAH19,
        minError: setMinIAH19Error,
        maxError: setMaxIAH19Error,
      },
      {
        name: "IAH20",
        min: minIAH20,
        max: maxIAH20,
        minError: setMinIAH20Error,
        maxError: setMaxIAH20Error,
      },
      {
        name: "IAH21",
        min: minIAH21,
        max: maxIAH21,
        minError: setMinIAH21Error,
        maxError: setMaxIAH21Error,
      },
      {
        name: "IAH22",
        min: minIAH22,
        max: maxIAH22,
        minError: setMinIAH22Error,
        maxError: setMaxIAH22Error,
      },
      {
        name: "IAH23",
        min: minIAH23,
        max: maxIAH23,
        minError: setMinIAH23Error,
        maxError: setMaxIAH23Error,
      },
      {
        name: "IAH24",
        min: minIAH24,
        max: maxIAH24,
        minError: setMinIAH24Error,
        maxError: setMaxIAH24Error,
      },
      {
        name: "IAH25",
        min: minIAH25,
        max: maxIAH25,
        minError: setMinIAH25Error,
        maxError: setMaxIAH25Error,
      },
      {
        name: "IAH26",
        min: minIAH26,
        max: maxIAH26,
        minError: setMinIAH26Error,
        maxError: setMaxIAH26Error,
      },
      {
        name: "IAH27",
        min: minIAH27,
        max: maxIAH27,
        minError: setMinIAH27Error,
        maxError: setMaxIAH27Error,
      },
      {
        name: "IAH28",
        min: minIAH28,
        max: maxIAH28,
        minError: setMinIAH28Error,
        maxError: setMaxIAH28Error,
      },
      {
        name: "IAH29",
        min: minIAH29,
        max: maxIAH29,
        minError: setMinIAH29Error,
        maxError: setMaxIAH29Error,
      },
      {
        name: "IAH30",
        min: minIAH30,
        max: maxIAH30,
        minError: setMinIAH30Error,
        maxError: setMaxIAH30Error,
      },
      {
        name: "IAH31",
        min: minIAH31,
        max: maxIAH31,
        minError: setMinIAH31Error,
        maxError: setMaxIAH31Error,
      },
      {
        name: "IBH1",
        min: minIBH1,
        max: maxIBH1,
        minError: setMinIBH1Error,
        maxError: setMaxIBH1Error,
      },
      {
        name: "IBH2",
        min: minIBH2,
        max: maxIBH2,
        minError: setMinIBH2Error,
        maxError: setMaxIBH2Error,
      },
      {
        name: "IBH3",
        min: minIBH3,
        max: maxIBH3,
        minError: setMinIBH3Error,
        maxError: setMaxIBH3Error,
      },
      {
        name: "IBH4",
        min: minIBH4,
        max: maxIBH4,
        minError: setMinIBH4Error,
        maxError: setMaxIBH4Error,
      },
      {
        name: "IBH5",
        min: minIBH5,
        max: maxIBH5,
        minError: setMinIBH5Error,
        maxError: setMaxIBH5Error,
      },
      {
        name: "IBH6",
        min: minIBH6,
        max: maxIBH6,
        minError: setMinIBH6Error,
        maxError: setMaxIBH6Error,
      },
      {
        name: "IBH7",
        min: minIBH7,
        max: maxIBH7,
        minError: setMinIBH7Error,
        maxError: setMaxIBH7Error,
      },
      {
        name: "IBH8",
        min: minIBH8,
        max: maxIBH8,
        minError: setMinIBH8Error,
        maxError: setMaxIBH8Error,
      },
      {
        name: "IBH9",
        min: minIBH9,
        max: maxIBH9,
        minError: setMinIBH9Error,
        maxError: setMaxIBH9Error,
      },
      {
        name: "IBH10",
        min: minIBH10,
        max: maxIBH10,
        minError: setMinIBH10Error,
        maxError: setMaxIBH10Error,
      },
      {
        name: "IBH11",
        min: minIBH11,
        max: maxIBH11,
        minError: setMinIBH11Error,
        maxError: setMaxIBH11Error,
      },
      {
        name: "IBH12",
        min: minIBH12,
        max: maxIBH12,
        minError: setMinIBH12Error,
        maxError: setMaxIBH12Error,
      },
      {
        name: "IBH13",
        min: minIBH13,
        max: maxIBH13,
        minError: setMinIBH13Error,
        maxError: setMaxIBH13Error,
      },
      {
        name: "IBH14",
        min: minIBH14,
        max: maxIBH14,
        minError: setMinIBH14Error,
        maxError: setMaxIBH14Error,
      },
      {
        name: "IBH15",
        min: minIBH15,
        max: maxIBH15,
        minError: setMinIBH15Error,
        maxError: setMaxIBH15Error,
      },
      {
        name: "IBH16",
        min: minIBH16,
        max: maxIBH16,
        minError: setMinIBH16Error,
        maxError: setMaxIBH16Error,
      },
      {
        name: "IBH17",
        min: minIBH17,
        max: maxIBH17,
        minError: setMinIBH17Error,
        maxError: setMaxIBH17Error,
      },
      {
        name: "IBH18",
        min: minIBH18,
        max: maxIBH18,
        minError: setMinIBH18Error,
        maxError: setMaxIBH18Error,
      },
      {
        name: "IBH19",
        min: minIBH19,
        max: maxIBH19,
        minError: setMinIBH19Error,
        maxError: setMaxIBH19Error,
      },
      {
        name: "IBH20",
        min: minIBH20,
        max: maxIBH20,
        minError: setMinIBH20Error,
        maxError: setMaxIBH20Error,
      },
      {
        name: "IBH21",
        min: minIBH21,
        max: maxIBH21,
        minError: setMinIBH21Error,
        maxError: setMaxIBH21Error,
      },
      {
        name: "IBH22",
        min: minIBH22,
        max: maxIBH22,
        minError: setMinIBH22Error,
        maxError: setMaxIBH22Error,
      },
      {
        name: "IBH23",
        min: minIBH23,
        max: maxIBH23,
        minError: setMinIBH23Error,
        maxError: setMaxIBH23Error,
      },
      {
        name: "IBH24",
        min: minIBH24,
        max: maxIBH24,
        minError: setMinIBH24Error,
        maxError: setMaxIBH24Error,
      },
      {
        name: "IBH25",
        min: minIBH25,
        max: maxIBH25,
        minError: setMinIBH25Error,
        maxError: setMaxIBH25Error,
      },
      {
        name: "IBH26",
        min: minIBH26,
        max: maxIBH26,
        minError: setMinIBH26Error,
        maxError: setMaxIBH26Error,
      },
      {
        name: "IBH27",
        min: minIBH27,
        max: maxIBH27,
        minError: setMinIBH27Error,
        maxError: setMaxIBH27Error,
      },
      {
        name: "IBH28",
        min: minIBH28,
        max: maxIBH28,
        minError: setMinIBH28Error,
        maxError: setMaxIBH28Error,
      },
      {
        name: "IBH29",
        min: minIBH29,
        max: maxIBH29,
        minError: setMinIBH29Error,
        maxError: setMaxIBH29Error,
      },
      {
        name: "IBH30",
        min: minIBH30,
        max: maxIBH30,
        minError: setMinIBH30Error,
        maxError: setMaxIBH30Error,
      },
      {
        name: "IBH31",
        min: minIBH31,
        max: maxIBH31,
        minError: setMinIBH31Error,
        maxError: setMaxIBH31Error,
      },
      {
        name: "ICH1",
        min: minICH1,
        max: maxICH1,
        minError: setMinICH1Error,
        maxError: setMaxICH1Error,
      },
      {
        name: "ICH2",
        min: minICH2,
        max: maxICH2,
        minError: setMinICH2Error,
        maxError: setMaxICH2Error,
      },
      {
        name: "ICH3",
        min: minICH3,
        max: maxICH3,
        minError: setMinICH3Error,
        maxError: setMaxICH3Error,
      },
      {
        name: "ICH4",
        min: minICH4,
        max: maxICH4,
        minError: setMinICH4Error,
        maxError: setMaxICH4Error,
      },
      {
        name: "ICH5",
        min: minICH5,
        max: maxICH5,
        minError: setMinICH5Error,
        maxError: setMaxICH5Error,
      },
      {
        name: "ICH6",
        min: minICH6,
        max: maxICH6,
        minError: setMinICH6Error,
        maxError: setMaxICH6Error,
      },
      {
        name: "ICH7",
        min: minICH7,
        max: maxICH7,
        minError: setMinICH7Error,
        maxError: setMaxICH7Error,
      },
      {
        name: "ICH8",
        min: minICH8,
        max: maxICH8,
        minError: setMinICH8Error,
        maxError: setMaxICH8Error,
      },
      {
        name: "ICH9",
        min: minICH9,
        max: maxICH9,
        minError: setMinICH9Error,
        maxError: setMaxICH9Error,
      },
      {
        name: "ICH10",
        min: minICH10,
        max: maxICH10,
        minError: setMinICH10Error,
        maxError: setMaxICH10Error,
      },
      {
        name: "ICH11",
        min: minICH11,
        max: maxICH11,
        minError: setMinICH11Error,
        maxError: setMaxICH11Error,
      },
      {
        name: "ICH12",
        min: minICH12,
        max: maxICH12,
        minError: setMinICH12Error,
        maxError: setMaxICH12Error,
      },
      {
        name: "ICH13",
        min: minICH13,
        max: maxICH13,
        minError: setMinICH13Error,
        maxError: setMaxICH13Error,
      },
      {
        name: "ICH14",
        min: minICH14,
        max: maxICH14,
        minError: setMinICH14Error,
        maxError: setMaxICH14Error,
      },
      {
        name: "ICH15",
        min: minICH15,
        max: maxICH15,
        minError: setMinICH15Error,
        maxError: setMaxICH15Error,
      },
      {
        name: "ICH16",
        min: minICH16,
        max: maxICH16,
        minError: setMinICH16Error,
        maxError: setMaxICH16Error,
      },
      {
        name: "ICH17",
        min: minICH17,
        max: maxICH17,
        minError: setMinICH17Error,
        maxError: setMaxICH17Error,
      },
      {
        name: "ICH18",
        min: minICH18,
        max: maxICH18,
        minError: setMinICH18Error,
        maxError: setMaxICH18Error,
      },
      {
        name: "ICH19",
        min: minICH19,
        max: maxICH19,
        minError: setMinICH19Error,
        maxError: setMaxICH19Error,
      },
      {
        name: "ICH20",
        min: minICH20,
        max: maxICH20,
        minError: setMinICH20Error,
        maxError: setMaxICH20Error,
      },
      {
        name: "ICH21",
        min: minICH21,
        max: maxICH21,
        minError: setMinICH21Error,
        maxError: setMaxICH21Error,
      },
      {
        name: "ICH22",
        min: minICH22,
        max: maxICH22,
        minError: setMinICH22Error,
        maxError: setMaxICH22Error,
      },
      {
        name: "ICH23",
        min: minICH23,
        max: maxICH23,
        minError: setMinICH23Error,
        maxError: setMaxICH23Error,
      },
      {
        name: "ICH24",
        min: minICH24,
        max: maxICH24,
        minError: setMinICH24Error,
        maxError: setMaxICH24Error,
      },
      {
        name: "ICH25",
        min: minICH25,
        max: maxICH25,
        minError: setMinICH25Error,
        maxError: setMaxICH25Error,
      },
      {
        name: "ICH26",
        min: minICH26,
        max: maxICH26,
        minError: setMinICH26Error,
        maxError: setMaxICH26Error,
      },
      {
        name: "ICH27",
        min: minICH27,
        max: maxICH27,
        minError: setMinICH27Error,
        maxError: setMaxICH27Error,
      },
      {
        name: "ICH28",
        min: minICH28,
        max: maxICH28,
        minError: setMinICH28Error,
        maxError: setMaxICH28Error,
      },
      {
        name: "ICH29",
        min: minICH29,
        max: maxICH29,
        minError: setMinICH29Error,
        maxError: setMaxICH29Error,
      },
      {
        name: "ICH30",
        min: minICH30,
        max: maxICH30,
        minError: setMinICH30Error,
        maxError: setMaxICH30Error,
      },
      {
        name: "ICH31",
        min: minICH31,
        max: maxICH31,
        minError: setMinICH31Error,
        maxError: setMaxICH31Error,
      },
      {
        name: "VANH1",
        min: minVANH1,
        max: maxVANH1,
        minError: setMinVANH1Error,
        maxError: setMaxVANH1Error,
      },
      {
        name: "VANH2",
        min: minVANH2,
        max: maxVANH2,
        minError: setMinVANH2Error,
        maxError: setMaxVANH2Error,
      },
      {
        name: "VANH3",
        min: minVANH3,
        max: maxVANH3,
        minError: setMinVANH3Error,
        maxError: setMaxVANH3Error,
      },
      {
        name: "VANH4",
        min: minVANH4,
        max: maxVANH4,
        minError: setMinVANH4Error,
        maxError: setMaxVANH4Error,
      },
      {
        name: "VANH5",
        min: minVANH5,
        max: maxVANH5,
        minError: setMinVANH5Error,
        maxError: setMaxVANH5Error,
      },
      {
        name: "VANH6",
        min: minVANH6,
        max: maxVANH6,
        minError: setMinVANH6Error,
        maxError: setMaxVANH6Error,
      },
      {
        name: "VANH7",
        min: minVANH7,
        max: maxVANH7,
        minError: setMinVANH7Error,
        maxError: setMaxVANH7Error,
      },
      {
        name: "VANH8",
        min: minVANH8,
        max: maxVANH8,
        minError: setMinVANH8Error,
        maxError: setMaxVANH8Error,
      },
      {
        name: "VANH9",
        min: minVANH9,
        max: maxVANH9,
        minError: setMinVANH9Error,
        maxError: setMaxVANH9Error,
      },
      {
        name: "VANH10",
        min: minVANH10,
        max: maxVANH10,
        minError: setMinVANH10Error,
        maxError: setMaxVANH10Error,
      },
      {
        name: "VANH11",
        min: minVANH11,
        max: maxVANH11,
        minError: setMinVANH11Error,
        maxError: setMaxVANH11Error,
      },
      {
        name: "VANH12",
        min: minVANH12,
        max: maxVANH12,
        minError: setMinVANH12Error,
        maxError: setMaxVANH12Error,
      },
      {
        name: "VANH13",
        min: minVANH13,
        max: maxVANH13,
        minError: setMinVANH13Error,
        maxError: setMaxVANH13Error,
      },
      {
        name: "VANH14",
        min: minVANH14,
        max: maxVANH14,
        minError: setMinVANH14Error,
        maxError: setMaxVANH14Error,
      },
      {
        name: "VANH15",
        min: minVANH15,
        max: maxVANH15,
        minError: setMinVANH15Error,
        maxError: setMaxVANH15Error,
      },
      {
        name: "VANH16",
        min: minVANH16,
        max: maxVANH16,
        minError: setMinVANH16Error,
        maxError: setMaxVANH16Error,
      },
      {
        name: "VANH17",
        min: minVANH17,
        max: maxVANH17,
        minError: setMinVANH17Error,
        maxError: setMaxVANH17Error,
      },
      {
        name: "VANH18",
        min: minVANH18,
        max: maxVANH18,
        minError: setMinVANH18Error,
        maxError: setMaxVANH18Error,
      },
      {
        name: "VANH19",
        min: minVANH19,
        max: maxVANH19,
        minError: setMinVANH19Error,
        maxError: setMaxVANH19Error,
      },
      {
        name: "VANH20",
        min: minVANH20,
        max: maxVANH20,
        minError: setMinVANH20Error,
        maxError: setMaxVANH20Error,
      },
      {
        name: "VANH21",
        min: minVANH21,
        max: maxVANH21,
        minError: setMinVANH21Error,
        maxError: setMaxVANH21Error,
      },
      {
        name: "VANH22",
        min: minVANH22,
        max: maxVANH22,
        minError: setMinVANH22Error,
        maxError: setMaxVANH22Error,
      },
      {
        name: "VANH23",
        min: minVANH23,
        max: maxVANH23,
        minError: setMinVANH23Error,
        maxError: setMaxVANH23Error,
      },
      {
        name: "VANH24",
        min: minVANH24,
        max: maxVANH24,
        minError: setMinVANH24Error,
        maxError: setMaxVANH24Error,
      },
      {
        name: "VANH25",
        min: minVANH25,
        max: maxVANH25,
        minError: setMinVANH25Error,
        maxError: setMaxVANH25Error,
      },
      {
        name: "VANH26",
        min: minVANH26,
        max: maxVANH26,
        minError: setMinVANH26Error,
        maxError: setMaxVANH26Error,
      },
      {
        name: "VANH27",
        min: minVANH27,
        max: maxVANH27,
        minError: setMinVANH27Error,
        maxError: setMaxVANH27Error,
      },
      {
        name: "VANH28",
        min: minVANH28,
        max: maxVANH28,
        minError: setMinVANH28Error,
        maxError: setMaxVANH28Error,
      },
      {
        name: "VANH29",
        min: minVANH29,
        max: maxVANH29,
        minError: setMinVANH29Error,
        maxError: setMaxVANH29Error,
      },
      {
        name: "VANH30",
        min: minVANH30,
        max: maxVANH30,
        minError: setMinVANH30Error,
        maxError: setMaxVANH30Error,
      },
      {
        name: "VANH31",
        min: minVANH31,
        max: maxVANH31,
        minError: setMinVANH31Error,
        maxError: setMaxVANH31Error,
      },

      {
        name: "VBNH1",
        min: minVBNH1,
        max: maxVBNH1,
        minError: setMinVBNH1Error,
        maxError: setMaxVBNH1Error,
      },
      {
        name: "VBNH2",
        min: minVBNH2,
        max: maxVBNH2,
        minError: setMinVBNH2Error,
        maxError: setMaxVBNH2Error,
      },
      {
        name: "VBNH3",
        min: minVBNH3,
        max: maxVBNH3,
        minError: setMinVBNH3Error,
        maxError: setMaxVBNH3Error,
      },
      {
        name: "VBNH4",
        min: minVBNH4,
        max: maxVBNH4,
        minError: setMinVBNH4Error,
        maxError: setMaxVBNH4Error,
      },
      {
        name: "VBNH5",
        min: minVBNH5,
        max: maxVBNH5,
        minError: setMinVBNH5Error,
        maxError: setMaxVBNH5Error,
      },
      {
        name: "VBNH6",
        min: minVBNH6,
        max: maxVBNH6,
        minError: setMinVBNH6Error,
        maxError: setMaxVBNH6Error,
      },
      {
        name: "VBNH7",
        min: minVBNH7,
        max: maxVBNH7,
        minError: setMinVBNH7Error,
        maxError: setMaxVBNH7Error,
      },
      {
        name: "VBNH8",
        min: minVBNH8,
        max: maxVBNH8,
        minError: setMinVBNH8Error,
        maxError: setMaxVBNH8Error,
      },
      {
        name: "VBNH9",
        min: minVBNH9,
        max: maxVBNH9,
        minError: setMinVBNH9Error,
        maxError: setMaxVBNH9Error,
      },
      {
        name: "VBNH10",
        min: minVBNH10,
        max: maxVBNH10,
        minError: setMinVBNH10Error,
        maxError: setMaxVBNH10Error,
      },
      {
        name: "VBNH11",
        min: minVBNH11,
        max: maxVBNH11,
        minError: setMinVBNH11Error,
        maxError: setMaxVBNH11Error,
      },
      {
        name: "VBNH12",
        min: minVBNH12,
        max: maxVBNH12,
        minError: setMinVBNH12Error,
        maxError: setMaxVBNH12Error,
      },
      {
        name: "VBNH13",
        min: minVBNH13,
        max: maxVBNH13,
        minError: setMinVBNH13Error,
        maxError: setMaxVBNH13Error,
      },
      {
        name: "VBNH14",
        min: minVBNH14,
        max: maxVBNH14,
        minError: setMinVBNH14Error,
        maxError: setMaxVBNH14Error,
      },
      {
        name: "VBNH15",
        min: minVBNH15,
        max: maxVBNH15,
        minError: setMinVBNH15Error,
        maxError: setMaxVBNH15Error,
      },
      {
        name: "VBNH16",
        min: minVBNH16,
        max: maxVBNH16,
        minError: setMinVBNH16Error,
        maxError: setMaxVBNH16Error,
      },
      {
        name: "VBNH17",
        min: minVBNH17,
        max: maxVBNH17,
        minError: setMinVBNH17Error,
        maxError: setMaxVBNH17Error,
      },
      {
        name: "VBNH18",
        min: minVBNH18,
        max: maxVBNH18,
        minError: setMinVBNH18Error,
        maxError: setMaxVBNH18Error,
      },
      {
        name: "VBNH19",
        min: minVBNH19,
        max: maxVBNH19,
        minError: setMinVBNH19Error,
        maxError: setMaxVBNH19Error,
      },
      {
        name: "VBNH20",
        min: minVBNH20,
        max: maxVBNH20,
        minError: setMinVBNH20Error,
        maxError: setMaxVBNH20Error,
      },
      {
        name: "VBNH21",
        min: minVBNH21,
        max: maxVBNH21,
        minError: setMinVBNH21Error,
        maxError: setMaxVBNH21Error,
      },
      {
        name: "VBNH22",
        min: minVBNH22,
        max: maxVBNH22,
        minError: setMinVBNH22Error,
        maxError: setMaxVBNH22Error,
      },
      {
        name: "VBNH23",
        min: minVBNH23,
        max: maxVBNH23,
        minError: setMinVBNH23Error,
        maxError: setMaxVBNH23Error,
      },
      {
        name: "VBNH24",
        min: minVBNH24,
        max: maxVBNH24,
        minError: setMinVBNH24Error,
        maxError: setMaxVBNH24Error,
      },
      {
        name: "VBNH25",
        min: minVBNH25,
        max: maxVBNH25,
        minError: setMinVBNH25Error,
        maxError: setMaxVBNH25Error,
      },
      {
        name: "VBNH26",
        min: minVBNH26,
        max: maxVBNH26,
        minError: setMinVBNH26Error,
        maxError: setMaxVBNH26Error,
      },
      {
        name: "VBNH27",
        min: minVBNH27,
        max: maxVBNH27,
        minError: setMinVBNH27Error,
        maxError: setMaxVBNH27Error,
      },
      {
        name: "VBNH28",
        min: minVBNH28,
        max: maxVBNH28,
        minError: setMinVBNH28Error,
        maxError: setMaxVBNH28Error,
      },
      {
        name: "VBNH29",
        min: minVBNH29,
        max: maxVBNH29,
        minError: setMinVBNH29Error,
        maxError: setMaxVBNH29Error,
      },
      {
        name: "VBNH30",
        min: minVBNH30,
        max: maxVBNH30,
        minError: setMinVBNH30Error,
        maxError: setMaxVBNH30Error,
      },
      {
        name: "VBNH31",
        min: minVBNH31,
        max: maxVBNH31,
        minError: setMinVBNH31Error,
        maxError: setMaxVBNH31Error,
      },
      {
        name: "VCNH1",
        min: minVCNH1,
        max: maxVCNH1,
        minError: setMinVCNH1Error,
        maxError: setMaxVCNH1Error,
      },
      {
        name: "VCNH2",
        min: minVCNH2,
        max: maxVCNH2,
        minError: setMinVCNH2Error,
        maxError: setMaxVCNH2Error,
      },
      {
        name: "VCNH3",
        min: minVCNH3,
        max: maxVCNH3,
        minError: setMinVCNH3Error,
        maxError: setMaxVCNH3Error,
      },
      {
        name: "VCNH4",
        min: minVCNH4,
        max: maxVCNH4,
        minError: setMinVCNH4Error,
        maxError: setMaxVCNH4Error,
      },
      {
        name: "VCNH5",
        min: minVCNH5,
        max: maxVCNH5,
        minError: setMinVCNH5Error,
        maxError: setMaxVCNH5Error,
      },
      {
        name: "VCNH6",
        min: minVCNH6,
        max: maxVCNH6,
        minError: setMinVCNH6Error,
        maxError: setMaxVCNH6Error,
      },
      {
        name: "VCNH7",
        min: minVCNH7,
        max: maxVCNH7,
        minError: setMinVCNH7Error,
        maxError: setMaxVCNH7Error,
      },
      {
        name: "VCNH8",
        min: minVCNH8,
        max: maxVCNH8,
        minError: setMinVCNH8Error,
        maxError: setMaxVCNH8Error,
      },
      {
        name: "VCNH9",
        min: minVCNH9,
        max: maxVCNH9,
        minError: setMinVCNH9Error,
        maxError: setMaxVCNH9Error,
      },
      {
        name: "VCNH10",
        min: minVCNH10,
        max: maxVCNH10,
        minError: setMinVCNH10Error,
        maxError: setMaxVCNH10Error,
      },
      {
        name: "VCNH11",
        min: minVCNH11,
        max: maxVCNH11,
        minError: setMinVCNH11Error,
        maxError: setMaxVCNH11Error,
      },
      {
        name: "VCNH12",
        min: minVCNH12,
        max: maxVCNH12,
        minError: setMinVCNH12Error,
        maxError: setMaxVCNH12Error,
      },
      {
        name: "VCNH13",
        min: minVCNH13,
        max: maxVCNH13,
        minError: setMinVCNH13Error,
        maxError: setMaxVCNH13Error,
      },
      {
        name: "VCNH14",
        min: minVCNH14,
        max: maxVCNH14,
        minError: setMinVCNH14Error,
        maxError: setMaxVCNH14Error,
      },
      {
        name: "VCNH15",
        min: minVCNH15,
        max: maxVCNH15,
        minError: setMinVCNH15Error,
        maxError: setMaxVCNH15Error,
      },
      {
        name: "VCNH16",
        min: minVCNH16,
        max: maxVCNH16,
        minError: setMinVCNH16Error,
        maxError: setMaxVCNH16Error,
      },
      {
        name: "VCNH17",
        min: minVCNH17,
        max: maxVCNH17,
        minError: setMinVCNH17Error,
        maxError: setMaxVCNH17Error,
      },
      {
        name: "VCNH18",
        min: minVCNH18,
        max: maxVCNH18,
        minError: setMinVCNH18Error,
        maxError: setMaxVCNH18Error,
      },
      {
        name: "VCNH19",
        min: minVCNH19,
        max: maxVCNH19,
        minError: setMinVCNH19Error,
        maxError: setMaxVCNH19Error,
      },
      {
        name: "VCNH20",
        min: minVCNH20,
        max: maxVCNH20,
        minError: setMinVCNH20Error,
        maxError: setMaxVCNH20Error,
      },
      {
        name: "VCNH21",
        min: minVCNH21,
        max: maxVCNH21,
        minError: setMinVCNH21Error,
        maxError: setMaxVCNH21Error,
      },
      {
        name: "VCNH22",
        min: minVCNH22,
        max: maxVCNH22,
        minError: setMinVCNH22Error,
        maxError: setMaxVCNH22Error,
      },
      {
        name: "VCNH23",
        min: minVCNH23,
        max: maxVCNH23,
        minError: setMinVCNH23Error,
        maxError: setMaxVCNH23Error,
      },
      {
        name: "VCNH24",
        min: minVCNH24,
        max: maxVCNH24,
        minError: setMinVCNH24Error,
        maxError: setMaxVCNH24Error,
      },
      {
        name: "VCNH25",
        min: minVCNH25,
        max: maxVCNH25,
        minError: setMinVCNH25Error,
        maxError: setMaxVCNH25Error,
      },
      {
        name: "VCNH26",
        min: minVCNH26,
        max: maxVCNH26,
        minError: setMinVCNH26Error,
        maxError: setMaxVCNH26Error,
      },
      {
        name: "VCNH27",
        min: minVCNH27,
        max: maxVCNH27,
        minError: setMinVCNH27Error,
        maxError: setMaxVCNH27Error,
      },
      {
        name: "VCNH28",
        min: minVCNH28,
        max: maxVCNH28,
        minError: setMinVCNH28Error,
        maxError: setMaxVCNH28Error,
      },
      {
        name: "VCNH29",
        min: minVCNH29,
        max: maxVCNH29,
        minError: setMinVCNH29Error,
        maxError: setMaxVCNH29Error,
      },
      {
        name: "VCNH30",
        min: minVCNH30,
        max: maxVCNH30,
        minError: setMinVCNH30Error,
        maxError: setMaxVCNH30Error,
      },
      {
        name: "VCNH31",
        min: minVCNH31,
        max: maxVCNH31,
        minError: setMinVCNH31Error,
        maxError: setMaxVCNH31Error,
      },
    ];
    const fieldsToValidate = [
      { field: url, message: "URL không được để trống" },
      { field: username, message: "Username không được để trống" },
      { field: password, message: "Password không được để trống" },
      { field: client, message: "Client ID không được để trống" },
      { field: topic, message: "Topic không được để trống" },
      { field: typeSystem, message: "TypeSystem không được để trống" },
      { field: typeDevice, message: "TypeDevice không được để trống" },
      { field: country, message: "Country không được để trống" },
      { field: province, message: "Province không được để trống" },
      { field: codeCustomer, message: "CodeCustomer không được để trống" },
      { field: codeProject, message: "CodeProject không được để trống" },
      { field: a1, message: "A1 không được để trống" },
      { field: a2, message: "A2 không được để trống" },
      { field: a3, message: "A3 không được để trống" },
      { field: a4, message: "A4 không được để trống" },
      { field: a5, message: "A5 không được để trống" },
      { field: func, message: "Func không được để trống" },
      { field: messageType, message: "MessageType không được để trống" },
      { field: crc, message: "Crc không được để trống" },
    ];

    for (const { field, message } of fieldsToValidate) {
      if (field === "" || field === undefined || field === null) {
        toastErrorAccessory(message);
        return false;
      }
    }
    if (frequency === "" || frequency === undefined || frequency === null) {
      toastErrorAccessory("Tần xuất (ms) không được để trống");
      setValidateFrequency(true);
      return false;
    } else {
      setValidateFrequency(false);
    }

    for (const data of dataArray) {
      if (
        data.min === undefined ||
        data.max === undefined ||
        data.min === "" ||
        data.max === ""
      ) {
        data.minError(true);
        data.maxError(true);
        toastErrorAccessory(
          `Giá trị Min ${data.name} và Max ${data.name} không được để trống`
        );
        return false;
      } else if (data.min < 0 || data.min > 99) {
        data.minError(true);
        data.maxError(false);
        toastErrorAccessory(
          `Giá trị Min ${data.name} phải nằm trong khoảng [0;99]`
        );
        return false;
      } else if (data.max < 1 || data.max > 100) {
        data.minError(false);
        data.maxError(true);
        toastErrorAccessory(
          `Giá trị Max ${data.name} phải nằm trong khoảng [1;100]`
        );
        return false;
      } else if (data.min > data.max) {
        data.minError(true);
        data.maxError(true);
        toastErrorAccessory(
          `Giá trị Min ${data.name} phải nhỏ hơn giá trị Max ${data.name}`
        );
        return false;
      } else {
        data.minError(false);
        data.maxError(false);
      }
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
                  style={{
                    borderColor: validateFrequency === true ? "red" : "",
                  }}
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
