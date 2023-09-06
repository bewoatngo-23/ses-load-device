import { Button, Card, DatePicker, Input, Switch } from "antd";
import React, { useContext, useEffect, useState } from "react";
import "../styles/card.css";
import InputMinMax from "./InputMinMax";
import FormReceive from "./FormReceive";
import FormDevice from "./FormDevice";
import S3MDataLoadFrame1Entity from "../entities/S3MDataLoadFrame1Entity";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sendmessage } from "../service/S3MDataLoadFrame1Service";
import Context from "../store/Context";
import { updatestatus } from "../store/Actions";
export default function S3MDataLoadFrame1(props) {
  const [state, dispatch] = useContext(Context);
  function formatDateToDDMMYYYYHHMMSS(date) {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  }
  const [frequency, setFrequency] = useState(3000);
  const handelChangeInputTime = (event) => {
    if (event.target.value === "") {
      setFrequency(0);
    }
    setFrequency(event.target.value);
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
  const random = (min, max) => {
    return parseFloat(
      Math.random() * (parseInt(max) - parseInt(min) + 1) + parseInt(min)
    );
  };
  const [timerId, setTimerId] = useState(null);

  const updateStatus = (payload) => {
    dispatch(updatestatus(payload));
  };

  const handelCkickRun = () => {
    updateStatus({ key: props.data, status: true });
    console.log(url, username, password, client, topic);

    if (timerId != null) {
      clearInterval(timerId);
    }
    if (validationForm() === true) {
      const timer = setInterval(() => {
        const e = new S3MDataLoadFrame1Entity(
          random(minUab, maxUab),
          random(minUbc, maxUbc),
          random(minUca, maxUca),
          random(minUll, maxUll),
          random(minUan, maxUan),
          random(minUbn, maxUbn),
          random(minUcn, maxUcn),
          random(minUln, maxUln),
          random(minIa, maxIa),
          random(minIb, maxIb),
          random(minIc, maxIc),
          random(minIN, maxIN),
          random(minIG, maxIG),
          random(minIAvg, maxIAvg),
          random(minPa, maxPa),
          random(minPb, maxPb),
          random(minPc, maxPc),
          random(minPTotal, maxPTotal),
          random(minQa, maxQa),
          random(minQb, maxQb),
          random(minQc, maxQc),
          random(minQTotal, maxQTotal),
          random(minSa, maxSa),
          random(minSb, maxSb),
          random(minSc, maxSc),
          random(minSTotal, maxSTotal),
          random(minPfa, maxPfa),
          random(minPfb, maxPfb),
          random(minPfc, maxPfc),
          random(minPFAvg, maxPFAvg),
          random(minF, maxF),
          Math.floor(random(minEp, maxEp)),
          Math.floor(random(minEpR, maxEpR)),
          Math.floor(random(minEpDR, maxEpDR)),
          Math.floor(random(minEpDRR, maxEpDRR)),
          Math.floor(random(minEq, maxEq)),
          Math.floor(random(minEqR, maxEqR)),
          Math.floor(random(minEpDR, maxEpDR)),
          Math.floor(random(minEpDRR, maxEpDRR)),
          Math.floor(random(minEs, maxEs)),
          Math.floor(random(minEsR, maxEsR)),
          Math.floor(random(minEsDR, maxEsDR)),
          Math.floor(random(minEsDRR, maxEsDRR)),
          random(minT1, maxT2),
          random(minT2, maxT2),
          random(minT3, maxT3),
          Math.floor(random(minCommandData1, maxCommandData1)),
          Math.floor(random(minCommandData2, maxCommandData2)),
          Math.floor(random(minCommandData3, maxCommandData3)),
          Math.floor(random(minCommandData4, maxCommandData4)),
          Math.floor(random(minCommandData5, maxCommandData5)),
          Math.floor(random(minCommandData6, maxCommandData6)),
          random(minThdIa, maxThdIa),
          random(minThdIb, maxThdIb),
          random(minThdIc, maxThdIc),
          random(minThdIg, maxThdIg),
          random(minThdVab, maxThdVab),
          random(minThdVbc, maxThdVbc),
          random(minThdVca, maxThdVca),
          random(minThdVan, maxThdVan),
          random(minThdVll, maxThdVll),
          random(minThdVbn, maxThdVbn),
          random(minThdVcn, maxThdVcn),
          random(minThdVln, maxThdVln),
          formatDateToDDMMYYYYHHMMSS(new Date()),
          Math.floor(new Date().getTime() / 1000),
          random(minThdIn, maxThdIn),
          Math.floor(random(0, 10000000)),
          deviceId
        );
        sendmessage(
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
      }, frequency);
      setTimerId(timer);
      return () => clearInterval(timer);
    } else {
      // toastErrorAccessory("Dữ liệu truyền vào không hợp lệ");
    }
  };
  const handelCkickStop = () => {
    updateStatus({ key: props.data, status: false });
    clearInterval(timerId);
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
    if (minUab === "") {
      setMinUab(0);
    }
    if (maxUab === "") {
      setMaxUab(45000);
    }
    if (minUab < 0) {
      setMinUabError(true);
      setMaxUabError(false);
      toastErrorAccessory("Giá trị UAB phải nằm trong khoảng [0;45000]");
      return false;
    } else if (maxUab > 45000) {
      setMaxUabError(true);
      setMinUabError(false);
      toastErrorAccessory("Giá trị UAB phải nằm trong khoảng [0;45000]");
      return false;
    } else if (minUab > maxUab) {
      setMinUabError(true);
      setMaxUabError(true);
      toastErrorAccessory("Giá trị Min UAB phải nhỏ hơn giá trị Max UAB");
      return false;
    } else {
      setMinUabError(false);
      setMaxUabError(false);
    }
    if (minUbc === "") {
      setMinUbc(0);
    }
    if (maxUbc === "") {
      setMaxUbc(45000);
    }
    if (minUbc < 0) {
      setMinUbcError(true);
      setMaxUbcError(false);
      toastErrorAccessory("Giá trị UBC phải nằm trong khoảng [0;45000]");
      return false;
    } else if (maxUbc > 45000) {
      setMinUbcError(false);
      setMaxUbcError(true);
      toastErrorAccessory("Giá trị UBC phải nằm trong khoảng [0;45000]");
      return false;
    } else if (minUbc > maxUbc) {
      setMinUbcError(true);
      setMaxUbcError(true);
      toastErrorAccessory("Giá trị Min UBC phải nhỏ hơn giá trị Max UBC");
      return false;
    } else {
      setMinUbcError(false);
      setMaxUbcError(false);
    }
    if (minUca === "") {
      setMinUca(0);
    }
    if (maxUca === "") {
      setMaxUca(45000);
    }
    if (minUca < 0) {
      setMinUcaError(true);
      setMaxUcaError(false);
      toastErrorAccessory("Giá trị UCA phải nằm trong khoảng [0;45000]");
      return false;
    } else if (maxUca > 45000) {
      setMinUcaError(false);
      setMaxUcaError(true);
      toastErrorAccessory("Giá trị UCA phải nằm trong khoảng [0;45000]");
      return false;
    } else if (minUca > maxUca) {
      setMinUcaError(true);
      setMaxUcaError(true);
      toastErrorAccessory("Giá trị Min UCA phải nhỏ hơn giá trị Max UCA");
      return false;
    } else {
      setMinUcaError(false);
      setMaxUcaError(false);
    }
    if (minUan === "") {
      setMinUan(0);
    }
    if (maxUan === "") {
      setMaxUan(45000);
    }
    if (minUan < 0) {
      setMinUanError(true);
      setMaxUanError(false);
      toastErrorAccessory("Giá trị UAN phải nằm trong khoảng [0;45000]");
      return false;
    } else if (maxUan > 45000) {
      setMinUanError(false);
      setMaxUanError(true);
      toastErrorAccessory("Giá trị UAN phải nằm trong khoảng [0;45000]");
      return false;
    } else if (minUan > maxUan) {
      setMinUanError(true);
      setMaxUanError(true);
      toastErrorAccessory("Giá trị Min UAN phải nhỏ hơn giá trị Max UAN");
      return false;
    } else {
      setMinUanError(false);
      setMaxUanError(false);
    }
    if (minUbn === "") {
      setMinUbn(0);
    }
    if (maxUbn === "") {
      setMaxUbn(45000);
    }
    if (minUbn < 0) {
      setMinUbnError(true);
      setMaxUbnError(false);
      toastErrorAccessory("Giá trị UBN phải nằm trong khoảng [0;45000]");
      return false;
    } else if (maxUbn > 45000) {
      setMinUbnError(false);
      setMaxUbnError(true);
      toastErrorAccessory("Giá trị UBN phải nằm trong khoảng [0;45000]");
      return false;
    } else if (minUbn > maxUbn) {
      setMinUbnError(true);
      setMaxUbnError(true);
      toastErrorAccessory("Giá trị Min UBN phải nhỏ hơn giá trị Max UBN");
      return false;
    } else {
      setMinUbnError(false);
      setMaxUbnError(false);
    }
    if (minUcn === "") {
      setMinUcn(0);
    }
    if (maxUcn === "") {
      setMaxUcn(45000);
    }
    if (minUcn < 0) {
      setMinUcnError(true);
      setMaxUcnError(false);
      toastErrorAccessory("Giá trị Ucn phải nằm trong khoảng [0;45000]");
      return false;
    } else if (maxUcn > 45000) {
      setMinUcnError(false);
      setMaxUcnError(true);
      toastErrorAccessory("Giá trị Ucn phải nằm trong khoảng [0;45000]");
      return false;
    } else if (minUcn > maxUcn) {
      setMinUcnError(true);
      setMaxUcnError(true);
      toastErrorAccessory("Giá trị Min Ucn phải nhỏ hơn giá trị Max Ucn");
      return false;
    } else {
      setMinUcnError(false);
      setMaxUcnError(false);
    }
    if (minUln === "") {
      setMinUln(0);
    }
    if (maxUln === "") {
      setMaxUln(45000);
    }
    if (minUln < 0) {
      setMinUlnError(true);
      setMaxUlnError(false);
      toastErrorAccessory("Giá trị Uln phải nằm trong khoảng [0;45000]");
      return false;
    } else if (maxUln > 45000) {
      setMinUlnError(false);
      setMaxUlnError(true);
      toastErrorAccessory("Giá trị Uln phải nằm trong khoảng [0;45000]");
      return false;
    } else if (minUln > maxUln) {
      setMinUlnError(true);
      setMaxUlnError(true);
      toastErrorAccessory("Giá trị Min Uln phải nhỏ hơn giá trị Max Uln");
      return false;
    } else {
      setMinUlnError(false);
      setMaxUlnError(false);
    }
    if (minUll === "") {
      setMinUll(0);
    }
    if (maxUll === "") {
      setMaxUll(45000);
    }
    if (minUll < 0) {
      setMinUllError(true);
      setMaxUllError(false);
      toastErrorAccessory("Giá trị Ull phải nằm trong khoảng [0;45000]");
      return false;
    } else if (maxUll > 45000) {
      setMinUllError(false);
      setMaxUllError(true);
      toastErrorAccessory("Giá trị Ull phải nằm trong khoảng [0;45000]");
      return false;
    } else if (minUll > maxUll) {
      setMinUllError(true);
      setMaxUllError(true);
      toastErrorAccessory("Giá trị Min Ull phải nhỏ hơn giá trị Max Ull");
      return false;
    } else {
      setMinUllError(false);
      setMaxUllError(false);
    }
    if (minIa === "") {
      setMinIa(0);
    }
    if (maxIa === "") {
      setMaxIa(10000);
    }

    if (minIa < 0) {
      setMinIaError(true);
      setMaxIaError(false);
      toastErrorAccessory("Giá trị IA phải nằm trong khoảng [0;10000]");
      return false;
    } else if (maxIa > 10000) {
      setMinIaError(false);
      setMaxIaError(true);
      toastErrorAccessory("Giá trị IA phải nằm trong khoảng [0;10000]");
      return false;
    } else if (minIa > maxIa) {
      setMinIaError(true);
      setMaxIaError(true);
      toastErrorAccessory("Giá trị Min IA phải nhỏ hơn giá trị Max IA");
      return false;
    } else {
      setMinIaError(false);
      setMaxIaError(false);
    }
    if (minIb === "") {
      setMinIb(0);
    }
    if (maxIb === "") {
      setMaxIb(10000);
    }
    if (minIb < 0) {
      setMinIbError(true);
      setMaxIbError(false);
      toastErrorAccessory("Giá trị IB phải nằm trong khoảng [0;10000]");
      return false;
    } else if (maxIb > 10000) {
      setMinIbError(false);
      setMaxIbError(true);
      toastErrorAccessory("Giá trị IB phải nằm trong khoảng [0;10000]");
      return false;
    } else if (minIb > maxIb) {
      setMinIbError(true);
      setMaxIbError(true);
      toastErrorAccessory("Giá trị Min IB phải nhỏ hơn giá trị Max IB");
      return false;
    } else {
      setMinIbError(false);
      setMaxIbError(false);
    }
    if (minIc === "") {
      setMinIc(0);
    }
    if (maxIc === "") {
      setMaxIc(10000);
    }
    if (minIc < 0) {
      setMinIcError(true);
      setMaxIcError(false);
      toastErrorAccessory("Giá trị Ic phải nằm trong khoảng [0;10000]");
      return false;
    } else if (maxIc > 10000) {
      setMinIcError(false);
      setMaxIcError(true);
      toastErrorAccessory("Giá trị Ic phải nằm trong khoảng [0;10000]");
      return false;
    } else if (minIc > maxIc) {
      setMinIcError(true);
      setMaxIcError(true);
      toastErrorAccessory("Giá trị min Ic phải nhỏ hơn giá trị Max Ic");
      return false;
    } else {
      setMinIcError(false);
      setMaxIcError(false);
    }

    if (minIN === "") {
      setMinIN(0);
    }
    if (maxIN === "") {
      setMaxIN(10000);
    }
    if (minIN < 0) {
      setMinINError(true);
      setMaxINError(false);
      toastErrorAccessory("Giá trị IN phải nằm trong khoảng [0;10000]");
      return false;
    } else if (maxIN > 10000) {
      setMinINError(false);
      setMaxINError(true);
      toastErrorAccessory("Giá trị IN phải nằm trong khoảng [0;10000]");
      return false;
    } else if (minIN > maxIN) {
      setMinINError(true);
      setMaxINError(true);
      toastErrorAccessory("Giá trị min IN phải nhỏ hơn giá trị Max IN");
      return false;
    } else {
      setMinINError(false);
      setMaxINError(false);
    }
    if (minIG === "") {
      setMinIG(0);
    }
    if (maxIG === "") {
      setMaxIG(10000);
    }
    if (minIG < 0) {
      setMinIGError(true);
      setMaxIGError(false);
      toastErrorAccessory("Giá trị IG phải nằm trong khoảng [0;10000]");
      return false;
    } else if (maxIG > 10000) {
      setMinIGError(false);
      setMaxIGError(true);
      toastErrorAccessory("Giá trị IG phải nằm trong khoảng [0;10000]");
      return false;
    } else if (minIG > maxIG) {
      setMinIGError(true);
      setMaxIGError(true);
      toastErrorAccessory("Giá trị min IG phải nhỏ hơn giá trị Max IG");
      return false;
    } else {
      setMinIGError(false);
      setMaxIGError(false);
    }
    if (minIAvg === "") {
      setMinIAvg(0);
    }
    if (maxIAvg === "") {
      setMaxIAvg(10000);
    }
    if (minIAvg < 0) {
      setMinIAvgError(true);
      setMaxIAvgError(false);
      toastErrorAccessory("Giá trị IAvg phải nằm trong khoảng [0;10000]");
      return false;
    } else if (maxIAvg > 10000) {
      setMinIAvgError(false);
      setMaxIAvgError(true);
      toastErrorAccessory("Giá trị IAvg phải nằm trong khoảng [0;10000]");
      return false;
    } else if (minIAvg > maxIAvg) {
      setMinIAvgError(true);
      setMaxIAvgError(true);
      toastErrorAccessory("Giá trị min IAvg phải nhỏ hơn giá trị Max IAvg");
      return false;
    } else {
      setMinIAvgError(false);
      setMaxIAvgError(false);
    }
    if (minPa === "") {
      setMinPa(-2000000);
    }
    if (maxPa === "") {
      setMaxPa(2000000);
    }
    if (minPa < -2000000) {
      setMinPaError(true);
      setMaxPaError(false);
      toastErrorAccessory("Giá trị Pa phải nằm trong khoảng [-2:2]M");
      return false;
    } else if (maxPa > 2000000) {
      setMinPaError(false);
      setMaxPaError(true);
      toastErrorAccessory("Giá trị Pa phải nằm trong khoảng [-2:2]M");
      return false;
    } else if (minPa > maxPa) {
      setMinPaError(true);
      setMaxPaError(true);
      toastErrorAccessory("Giá trị Min Pa phải nhỏ hơn giá trị Max Pa");
      return false;
    } else {
      setMinPaError(false);
      setMaxPaError(false);
    }
    if (minPb === "") {
      setMinPb(-2000000);
    }
    if (maxPb === "") {
      setMaxPb(2000000);
    }
    if (minPb < -2000000) {
      setMinPbError(true);
      setMaxPbError(false);
      toastErrorAccessory("Giá trị Pb phải nằm trong khoảng [-2:2]M");
      return false;
    } else if (maxPb > 2000000) {
      setMinPbError(false);
      setMaxPbError(true);
      toastErrorAccessory("Giá trị Pb phải nằm trong khoảng [-2:2]M");
      return false;
    } else if (minPb > maxPb) {
      setMinPbError(true);
      setMaxPbError(true);
      toastErrorAccessory("Giá trị Min Pb phải nhỏ hơn giá trị Max Pb");
      return false;
    } else {
      setMinPbError(false);
      setMaxPbError(false);
    }
    if (minPc === "") {
      setMinPc(-2000000);
    }
    if (maxPc === "") {
      setMaxPc(2000000);
    }
    if (minPc < -2000000) {
      setMinPcError(true);
      setMaxPcError(false);
      toastErrorAccessory("Giá trị Pc phải nằm trong khoảng [-2:2]M");
      return false;
    } else if (maxPc > 2000000) {
      setMinPcError(false);
      setMaxPcError(true);
      toastErrorAccessory("Giá trị Pc phải nằm trong khoảng [-2:2]M");
      return false;
    } else if (minPc > maxPc) {
      setMinPcError(true);
      setMaxPcError(true);
      toastErrorAccessory("Giá trị Min Pc phải nhỏ hơn giá trị Max Pc");
      return false;
    } else {
      setMinPcError(false);
      setMaxPcError(false);
    }
    if (minPTotal === "") {
      setMinPTotal(-6000000);
    }
    if (maxPTotal === "") {
      setMaxPTotal(6000000);
    }
    if (minPTotal < -6000000) {
      setMinPTotalError(true);
      setMaxPTotalError(false);
      toastErrorAccessory("Giá trị PTotal phải nằm trong khoảng [-6:6]M");
      return false;
    } else if (maxPTotal > 6000000) {
      setMinPTotalError(false);
      setMaxPTotalError(true);
      toastErrorAccessory("Giá trị PTotal phải nằm trong khoảng [-6:6]M");
      return false;
    } else if (minPTotal > maxPTotal) {
      setMinPTotalError(true);
      setMaxPTotalError(true);
      toastErrorAccessory("Giá trị Min PTotal phải nhỏ hơn giá trị Max PTotal");
      return false;
    } else {
      setMinPTotalError(false);
      setMaxPTotalError(false);
    }
    if (minQa === "") {
      setMinQa(-2000000);
    }
    if (maxQa === "") {
      setMaxQa(2000000);
    }
    if (minQa < -2000000) {
      setMinQaError(true);
      setMaxQaError(false);
      toastErrorAccessory("Giá trị Qa phải nằm trong khoảng [-2:2]M");
      return false;
    } else if (maxQa > 2000000) {
      setMinQaError(false);
      setMaxQaError(true);
      toastErrorAccessory("Giá trị Qa phải nằm trong khoảng [-2:2]M");
      return false;
    } else if (minQa > maxQa) {
      setMinQaError(true);
      setMaxQaError(true);
      toastErrorAccessory("Giá trị Min Qa phải nhỏ hơn giá trị Max Qa");
      return false;
    } else {
      setMinQaError(false);
      setMaxQaError(false);
    }
    if (minQb === "") {
      setMinQb(-2000000);
    }
    if (maxQb === "") {
      setMaxQb(2000000);
    }
    if (minQb < -2000000) {
      setMinQbError(true);
      setMaxQbError(false);
      toastErrorAccessory("Giá trị Qb phải nằm trong khoảng [-2:2]M");
      return false;
    } else if (maxQb > 2000000) {
      setMinQbError(false);
      setMaxQbError(true);
      toastErrorAccessory("Giá trị Qb phải nằm trong khoảng [-2:2]M");
      return false;
    } else if (minQb > maxQb) {
      setMinQbError(true);
      setMaxQbError(true);
      toastErrorAccessory("Giá trị Min Qb phải nhỏ hơn giá trị Max Qb");
      return false;
    } else {
      setMinQbError(false);
      setMaxQbError(false);
    }
    if (minQc === "") {
      setMinQc(-2000000);
    }
    if (maxQc === "") {
      setMaxQc(2000000);
    }
    if (minQc < -2000000) {
      setMinQcError(true);
      setMaxQcError(false);
      toastErrorAccessory("Giá trị Qc phải nằm trong khoảng [-2:2]M");
      return false;
    } else if (maxQc > 2000000) {
      setMinQcError(false);
      setMaxQcError(true);
      toastErrorAccessory("Giá trị Qc phải nằm trong khoảng [-2:2]M");
      return false;
    } else if (minQc > maxQc) {
      setMinQcError(true);
      setMaxQcError(true);
      toastErrorAccessory("Giá trị Min Qc phải nhỏ hơn giá trị Max Qc");
      return false;
    } else {
      setMinQcError(false);
      setMaxQcError(false);
    }
    if (minQTotal === "") {
      setMinQTotal(-6000000);
    }
    if (maxQTotal === "") {
      setMaxQTotal(6000000);
    }
    if (minQTotal < -6000000) {
      setMinQTotalError(true);
      setMaxQTotalError(false);
      toastErrorAccessory("Giá trị QTotal phải nằm trong khoảng [-6:6]M");
      return false;
    } else if (maxQTotal > 6000000) {
      setMinQTotalError(false);
      setMaxQTotalError(true);
      toastErrorAccessory("Giá trị QTotal phải nằm trong khoảng [-6:6]M");
      return false;
    } else if (minQTotal > maxQTotal) {
      setMinQTotalError(true);
      setMaxQTotalError(true);
      toastErrorAccessory("Giá trị Min QTotal phải nhỏ hơn giá trị Max QTotal");
      return false;
    } else {
      setMinQTotalError(false);
      setMaxQTotalError(false);
    }

    if (minSa === "") {
      setMinSa(-2000000);
    }
    if (maxSa === "") {
      setMaxSa(2000000);
    }
    if (minSa < -2000000) {
      setMinSaError(true);
      setMaxSaError(false);
      toastErrorAccessory("Giá trị Sa phải nằm trong khoảng [-2:2]M");
      return false;
    } else if (maxSa > 2000000) {
      setMinSaError(false);
      setMaxSaError(true);
      toastErrorAccessory("Giá trị Sa phải nằm trong khoảng [-2:2]M");
      return false;
    } else if (minSa > maxSa) {
      setMinSaError(true);
      setMaxSaError(true);
      toastErrorAccessory("Giá trị Min Sa phải nhỏ hơn giá trị Max Sa");
      return false;
    } else {
      setMinSaError(false);
      setMaxSaError(false);
    }
    if (minSb === "") {
      setMinSb(-2000000);
    }
    if (maxSb === "") {
      setMaxSb(2000000);
    }
    if (minSb < -2000000) {
      setMinSbError(true);
      setMaxSbError(false);
      toastErrorAccessory("Giá trị Sb phải nằm trong khoảng [-2:2]M");
      return false;
    } else if (maxSb > 2000000) {
      setMinSbError(false);
      setMaxSbError(true);
      toastErrorAccessory("Giá trị Sb phải nằm trong khoảng [-2:2]M");
      return false;
    } else if (minSb > maxSb) {
      setMinSbError(true);
      setMaxSbError(true);
      toastErrorAccessory("Giá trị Min Sb phải nhỏ hơn giá trị Max Sb");
      return false;
    } else {
      setMinSbError(false);
      setMaxSbError(false);
    }
    if (minSc === "") {
      setMinSc(-2000000);
    }
    if (maxSc === "") {
      setMaxSc(2000000);
    }
    if (minSc < -2000000) {
      setMinScError(true);
      setMaxScError(false);
      toastErrorAccessory("Giá trị Sc phải nằm trong khoảng [-2:2]M");
      return false;
    } else if (maxSc > 2000000) {
      setMinScError(false);
      setMaxScError(true);
      toastErrorAccessory("Giá trị Sc phải nằm trong khoảng [-2:2]M");
      return false;
    } else if (minSc > maxSc) {
      setMinScError(true);
      setMaxScError(true);
      toastErrorAccessory("Giá trị Min Sc phải nhỏ hơn giá trị Max Sc");
      return false;
    } else {
      setMinScError(false);
      setMaxScError(false);
    }

    if (minSTotal === "") {
      setMinSTotal(-6000000);
    }
    if (maxSTotal === "") {
      setMaxSTotal(6000000);
    }
    if (minSTotal < -6000000) {
      setMinSTotalError(true);
      setMaxSTotalError(false);
      toastErrorAccessory("Giá trị STotal phải nằm trong khoảng [-6:6]M");
      return false;
    } else if (maxSTotal > 6000000) {
      setMinSTotalError(false);
      setMaxSTotalError(true);
      toastErrorAccessory("Giá trị STotal phải nằm trong khoảng [-6:6]M");
      return false;
    } else if (minSTotal > maxSTotal) {
      setMinSTotalError(true);
      setMaxSTotalError(true);
      toastErrorAccessory("Giá trị Min STotal phải nhỏ hơn giá trị Max STotal");
      return false;
    } else {
      setMinSTotalError(false);
      setMaxSTotalError(false);
    }
    if (minPfa === "") {
      setMinPfa(-1);
    }
    if (maxPfa === "") {
      setMaxPfa(1);
    }
    if (minPfa < -1) {
      setMinPfaError(true);
      setMaxPfaError(false);
      toastErrorAccessory("Giá trị Pfa phải nằm trong khoảng [-1;1]");
      return false;
    } else if (maxPfa > 1) {
      setMinPfaError(false);
      setMaxPfaError(true);
      toastErrorAccessory("Giá trị Pfa phải nằm trong khoảng [-1;1]");
      return false;
    } else if (minPfa > maxPfa) {
      setMinPfaError(true);
      setMaxPfaError(true);
      toastErrorAccessory("Giá trị Min Pfa phải nhỏ hơn giá trị Max Pfa");
      return false;
    } else {
      setMinPfaError(false);
      setMaxPfaError(false);
    }
    if (minPfb === "") {
      setMinPfb(-1);
    }
    if (maxPfb === "") {
      setMaxPfb(1);
    }
    if (minPfb < -1) {
      setMinPfbError(true);
      setMaxPfbError(false);
      toastErrorAccessory("Giá trị Pfb phải nằm trong khoảng [-1;1]");
      return false;
    } else if (maxPfb > 1) {
      setMinPfbError(false);
      setMaxPfbError(true);
      toastErrorAccessory("Giá trị Pfb phải nằm trong khoảng [-1;1]");
      return false;
    } else if (minPfb > maxPfb) {
      setMinPfbError(true);
      setMaxPfbError(true);
      toastErrorAccessory("Giá trị Min Pfb phải nhỏ hơn giá trị Max Pfb");
      return false;
    } else {
      setMinPfbError(false);
      setMaxPfbError(false);
    }
    if (minPfc === "") {
      setMinPfc(-1);
    }
    if (maxPfc === "") {
      setMaxPfc(1);
    }
    if (minPfc < -1) {
      setMinPfcError(true);
      setMaxPfcError(false);
      toastErrorAccessory("Giá trị Pfc phải nằm trong khoảng [-1;1]");
      return false;
    } else if (maxPfc > 1) {
      setMinPfcError(false);
      setMaxPfcError(true);
      toastErrorAccessory("Giá trị Pfc phải nằm trong khoảng [-1;1]");
      return false;
    } else if (minPfc > maxPfc) {
      setMinPfcError(true);
      setMaxPfcError(true);
      toastErrorAccessory("Giá trị Min Pfc phải nhỏ hơn giá trị Max Pfc");
      return false;
    } else {
      setMinPfcError(false);
      setMaxPfcError(false);
    }
    if (minPFAvg === "") {
      setMinPFAvg(-1);
    }
    if (maxPFAvg === "") {
      setMaxPFAvg(1);
    }
    if (minPFAvg < -1) {
      setMinPFAvgError(true);
      setMaxPFAvgError(false);
      toastErrorAccessory("Giá trị PFAvg phải nằm trong khoảng [-1;1]");
      return false;
    } else if (maxPFAvg > 1) {
      setMinPFAvgError(false);
      setMaxPFAvgError(true);
      toastErrorAccessory("Giá trị PFAvg phải nằm trong khoảng [-1;1]");
      return false;
    } else if (minPFAvg > maxPFAvg) {
      setMinPFAvgError(true);
      setMaxPFAvgError(true);
      toastErrorAccessory("Giá trị Min PFAvg phải nhỏ hơn giá trị Max PFAvg");
      return false;
    } else {
      setMinPFAvgError(false);
      setMaxPFAvgError(false);
    }
    if (minF === "") {
      setMinF(45);
    }
    if (maxF === "") {
      setMaxF(65);
    }
    if (minF < 45) {
      setMinFError(true);
      setMaxFError(false);
      toastErrorAccessory("Giá trị F phải nằm trong khoảng [45;65]");
      return false;
    } else if (maxF > 65) {
      setMinFError(false);
      setMaxFError(true);
      toastErrorAccessory("Giá trị F phải nằm trong khoảng [45;65]");
      return false;
    } else if (minF > maxF) {
      setMinFError(true);
      setMaxFError(true);
      toastErrorAccessory("Giá trị Min F phải nhỏ hơn giá trị Max F");
      return false;
    } else {
      setMinFError(false);
      setMaxFError(false);
    }
    if (minEp === "") {
      setMinEp(0);
    }
    if (maxEp === "") {
      setMaxEp(4000000000);
    }
    if (minEp < 0) {
      setMinEpError(true);
      setMaxEpError(false);
      toastErrorAccessory("Giá trị Ep phải nằm trong khoảng [0:4]B");
      return false;
    } else if (maxEp > 4000000000) {
      setMinEpError(false);
      setMaxEpError(true);
      toastErrorAccessory("Giá trị Ep phải nằm trong khoảng [0:4]B");
      return false;
    } else if (minEp > maxEp) {
      setMinEpError(true);
      setMaxEpError(true);
      toastErrorAccessory("Giá trị Min Ep phải nhỏ hơn giá trị Max Ep");
      return false;
    } else {
      setMinEpError(false);
      setMaxEpError(false);
    }
    if (minEpR === "") {
      setMinEpR(0);
    }
    if (maxEpR === "") {
      setMaxEpR(4000000000);
    }
    if (minEpR < 0) {
      setMinEpRError(true);
      setMaxEpRError(false);
      toastErrorAccessory("Giá trị EpR phải nằm trong khoảng [0:4]B");
      return false;
    } else if (maxEpR > 4000000000) {
      setMinEpRError(false);
      setMaxEpRError(true);
      toastErrorAccessory("Giá trị EpR phải nằm trong khoảng [0:4]B");
      return false;
    } else if (minEpR > maxEpR) {
      setMinEpRError(true);
      setMaxEpRError(true);
      toastErrorAccessory("Giá trị Min EpR phải nhỏ hơn giá trị Max EpR");
      return false;
    } else {
      setMinEpRError(false);
      setMaxEpRError(false);
    }
    if (minEpDR === "") {
      setMinEpDR(0);
    }
    if (maxEpDR === "") {
      setMaxEpDR(4000000000);
    }
    if (minEpDR < 0) {
      setMinEpDRError(true);
      setMaxEpDRError(false);
      toastErrorAccessory("Giá trị EpDR phải nằm trong khoảng [0:4]B");
      return false;
    } else if (maxEpDR > 4000000000) {
      setMinEpDRError(false);
      setMaxEpDRError(true);
      toastErrorAccessory("Giá trị EpDR phải nằm trong khoảng [0:4]B");
      return false;
    } else if (minEpDR > maxEpDR) {
      setMinEpDRError(true);
      setMaxEpDRError(true);
      toastErrorAccessory("Giá trị Min EpDR phải nhỏ hơn giá trị Max EpDR");
      return false;
    } else {
      setMinEpDRError(false);
      setMaxEpDRError(false);
    }
    if (minEpDRR === "") {
      setMinEpDRR(0);
    }
    if (maxEpDRR === "") {
      setMaxEpDRR(4000000000);
    }
    if (minEpDRR < 0) {
      setMinEpDRRError(true);
      setMaxEpDRRError(false);
      toastErrorAccessory("Giá trị EpDRR phải nằm trong khoảng [0:4]B");
      return false;
    } else if (maxEpDRR > 4000000000) {
      setMinEpDRRError(false);
      setMaxEpDRRError(true);
      toastErrorAccessory("Giá trị EpDRR phải nằm trong khoảng [0:4]B");
      return false;
    } else if (minEpDRR > maxEpDRR) {
      setMinEpDRRError(true);
      setMaxEpDRRError(true);
      toastErrorAccessory("Giá trị Min EpDRR phải nhỏ hơn giá trị Max EpDRR");
      return false;
    } else {
      setMinEpDRRError(false);
      setMaxEpDRRError(false);
    }
    if (minEq === "") {
      setMinEq(0);
    }
    if (maxEq === "") {
      setMaxEq(4000000000);
    }
    if (minEq < 0) {
      setMinEqError(true);
      setMaxEqError(false);
      toastErrorAccessory("Giá trị Eq phải nằm trong khoảng [0:4]B");
      return false;
    } else if (maxEq > 4000000000) {
      setMinEqError(false);
      setMaxEqError(true);
      toastErrorAccessory("Giá trị Eq phải nằm trong khoảng [0:4]B");
      return false;
    } else if (minEq > maxEq) {
      setMinEqError(true);
      setMaxEqError(true);
      toastErrorAccessory("Giá trị Min Eq phải nhỏ hơn giá trị Max Eq");
      return false;
    } else {
      setMinEqError(false);
      setMaxEqError(false);
    }

    if (minEqR === "") {
      setMinEqR(0);
    }
    if (maxEqR === "") {
      setMaxEqR(4000000000);
    }
    if (minEqR < 0) {
      setMinEqRError(true);
      setMaxEqRError(false);
      toastErrorAccessory("Giá trị EqR phải nằm trong khoảng [0:4]B");
      return false;
    } else if (maxEqR > 4000000000) {
      setMinEqRError(false);
      setMaxEqRError(true);
      toastErrorAccessory("Giá trị EqR phải nằm trong khoảng [0:4]B");
      return false;
    } else if (minEqR > maxEqR) {
      setMinEqRError(true);
      setMaxEqRError(true);
      toastErrorAccessory("Giá trị Min EqR phải nhỏ hơn giá trị Max EqR");
      return false;
    } else {
      setMinEqRError(false);
      setMaxEqRError(false);
    }
    if (minEqDR === "") {
      setMinEqDR(0);
    }
    if (maxEqDR === "") {
      setMaxEqDR(4000000000);
    }
    if (minEqDRR < 0) {
      setMinEqDRRError(true);
      setMaxEqDRRError(false);
      toastErrorAccessory("Giá trị EqDRR phải nằm trong khoảng [0:4]B");
      return false;
    } else if (maxEqDRR > 4000000000) {
      setMinEqDRRError(false);
      setMaxEqDRRError(true);
      toastErrorAccessory("Giá trị EqDRR phải nằm trong khoảng [0:4]B");
      return false;
    } else if (minEqDRR > maxEqDRR) {
      setMinEqDRRError(true);
      setMaxEqDRRError(true);
      toastErrorAccessory("Giá trị Min EqDRR phải nhỏ hơn giá trị Max EqDRR");
      return false;
    } else {
      setMinEqDRRError(false);
      setMaxEqDRRError(false);
    }
    if (minEqDRR === "") {
      setMinEqDRR(0);
    }
    if (maxEqDRR === "") {
      setMaxEqDRR(4000000000);
    }
    if (minEqDRR < 0) {
      setMinEqDRRError(true);
      setMaxEqDRRError(false);
      toastErrorAccessory("Giá trị EqDRR phải nằm trong khoảng [0:4]B");
      return false;
    } else if (maxEqDRR > 4000000000) {
      setMinEqDRRError(false);
      setMaxEqDRRError(true);
      toastErrorAccessory("Giá trị EqDRR phải nằm trong khoảng [0:4]B");
      return false;
    } else if (minEqDRR > maxEqDRR) {
      setMinEqDRRError(true);
      setMaxEqDRRError(true);
      toastErrorAccessory("Giá trị Min EqDRR phải nhỏ hơn giá trị Max EqDRR");
      return false;
    } else {
      setMinEqDRRError(false);
      setMaxEqDRRError(false);
    }
    if (minEs === "") {
      setMinEs(0);
    }
    if (maxEs === "") {
      setMaxEs(4000000000);
    }
    if (minEs < 0) {
      setMinEsError(true);
      setMaxEsError(false);
      toastErrorAccessory("Giá trị Es phải nằm trong khoảng [0:4]B");
      return false;
    } else if (maxEs > 4000000000) {
      setMinEsError(false);
      setMaxEsError(true);
      toastErrorAccessory("Giá trị Es phải nằm trong khoảng [0:4]B");
      return false;
    } else if (minEs > maxEs) {
      setMinEsError(true);
      setMaxEsError(true);
      toastErrorAccessory("Giá trị Min Es phải nhỏ hơn giá trị Max Es");
      return false;
    } else {
      setMinEsError(false);
      setMaxEsError(false);
    }
    if (minEsR === "") {
      setMinEsR(0);
    }
    if (maxEsR === "") {
      setMaxEsR(4000000000);
    }
    if (minEsR < 0) {
      setMinEsRError(true);
      setMaxEsRError(false);
      toastErrorAccessory("Giá trị EsR phải nằm trong khoảng [0:4]B");
      return false;
    } else if (maxEsR > 4000000000) {
      setMinEsRError(false);
      setMaxEsRError(true);
      toastErrorAccessory("Giá trị EsR phải nằm trong khoảng [0:4]B");
      return false;
    } else if (minEsR > maxEsR) {
      setMinEsRError(true);
      setMaxEsRError(true);
      toastErrorAccessory("Giá trị Min EsR phải nhỏ hơn giá trị Max EsR");
      return false;
    } else {
      setMinEsRError(false);
      setMaxEsRError(false);
    }
    if (minEsDR === "") {
      setMinEsDR(0);
    }
    if (maxEsDR === "") {
      setMaxEsDR(4000000000);
    }
    if (minEsDR < 0) {
      setMinEsDRError(true);
      setMaxEsDRError(false);
      toastErrorAccessory("Giá trị EsDR phải nằm trong khoảng [0:4]B");
      return false;
    } else if (maxEsDR > 4000000000) {
      setMinEsDRError(false);
      setMaxEsDRError(true);
      toastErrorAccessory("Giá trị EsDR phải nằm trong khoảng [0:4]B");
      return false;
    } else if (minEsDR > maxEsDR) {
      setMinEsDRError(true);
      setMaxEsDRError(true);
      toastErrorAccessory("Giá trị Min EsDR phải nhỏ hơn giá trị Max EsDR");
      return false;
    } else {
      setMinEsDRError(false);
      setMaxEsDRError(false);
    }
    if (minEsDRR === "") {
      setMinEsDRR(0);
    }
    if (maxEsDRR === "") {
      setMaxEsDRR(4000000000);
    }
    if (minEsDRR < 0) {
      setMinEsDRRError(true);
      setMaxEsDRRError(false);
      toastErrorAccessory("Giá trị EsDRR phải nằm trong khoảng [0:4]B");
      return false;
    } else if (maxEsDRR > 4000000000) {
      setMinEsDRRError(false);
      setMaxEsDRRError(true);
      toastErrorAccessory("Giá trị EsDRR phải nằm trong khoảng [0:4]B");
      return false;
    } else if (minEsDRR > maxEsDRR) {
      setMinEsDRRError(true);
      setMaxEsDRRError(true);
      toastErrorAccessory("Giá trị Min EsDRR phải nhỏ hơn giá trị Max EsDRR");
      return false;
    } else {
      setMinEsDRRError(false);
      setMaxEsDRRError(false);
    }
    if (minT1 === "") {
      setMinT1(-100);
    }
    if (maxT1 === "") {
      setMaxT1(200);
    }
    if (minT1 < -100) {
      setMinT1Error(true);
      setMaxT1Error(false);
      toastErrorAccessory("Giá trị T1 phải nằm trong khoảng [-100:200]");
      return false;
    } else if (maxT1 > 200) {
      setMinT1Error(false);
      setMaxT1Error(true);
      toastErrorAccessory("Giá trị T1 phải nằm trong khoảng [-100:200]");
      return false;
    } else if (minT1 > maxT1) {
      setMinT1Error(true);
      setMaxT1Error(true);
      toastErrorAccessory("Giá trị Min T1 phải nhỏ hơn giá trị Max T1");
      return false;
    } else {
      setMinT1Error(false);
      setMaxT1Error(false);
    }
    if (minT2 === "") {
      setMinT2(-100);
    }
    if (maxT2 === "") {
      setMaxT2(200);
    }
    if (minT2 < -100) {
      setMinT2Error(true);
      setMaxT2Error(false);
      toastErrorAccessory("Giá trị T2 phải nằm trong khoảng [-100:200]");
      return false;
    } else if (maxT2 > 200) {
      setMinT2Error(false);
      setMaxT2Error(true);
      toastErrorAccessory("Giá trị T2 phải nằm trong khoảng [-100:200]");
      return false;
    } else if (minT2 > maxT2) {
      setMinT2Error(true);
      setMaxT2Error(true);
      toastErrorAccessory("Giá trị Min T2 phải nhỏ hơn giá trị Max T2");
      return false;
    } else {
      setMinT2Error(false);
      setMaxT2Error(false);
    }
    if (minT3 === "") {
      setMinT3(-100);
    }
    if (maxT3 === "") {
      setMaxT3(200);
    }
    if (minT3 < -100) {
      setMinT3Error(true);
      setMaxT3Error(false);
      toastErrorAccessory("Giá trị T3 phải nằm trong khoảng [-100:200]");
      return false;
    } else if (maxT3 > 200) {
      setMinT3Error(false);
      setMaxT3Error(true);
      toastErrorAccessory("Giá trị T3 phải nằm trong khoảng [-100:200]");
      return false;
    } else if (minT3 > maxT3) {
      setMinT3Error(true);
      setMaxT3Error(true);
      toastErrorAccessory("Giá trị Min T3 phải nhỏ hơn giá trị Max T3");
      return false;
    } else {
      setMinT3Error(false);
      setMaxT3Error(false);
    }
    if (minCommandData1 === "") {
      setMinCommandData1(-1000);
    }
    if (maxCommandData1 === "") {
      setMaxCommandData1(1000);
    }
    if (
      minCommandData1 < -1000 ||
      maxCommandData1 > 1000 ||
      minCommandData1 > maxCommandData1
    ) {
      console.log("Lỗi");
      return false;
    }
    if (minCommandData2 === "") {
      setMinCommandData2(-1000);
    }
    if (maxCommandData2 === "") {
      setMaxCommandData2(1000);
    }
    if (
      minCommandData2 < -1000 ||
      maxCommandData2 > 1000 ||
      minCommandData2 > maxCommandData2
    ) {
      console.log("Lỗi");
      return false;
    }
    if (minCommandData3 === "") {
      setMinCommandData3(-1000);
    }
    if (maxCommandData3 === "") {
      setMaxCommandData3(1000);
    }
    if (
      minCommandData3 < -1000 ||
      maxCommandData3 > 1000 ||
      minCommandData3 > maxCommandData3
    ) {
      console.log("Lỗi");
      return false;
    }
    if (minCommandData4 === "") {
      setMinCommandData4(-1000);
    }
    if (maxCommandData4 === "") {
      setMaxCommandData4(1000);
    }
    if (
      minCommandData4 < -1000 ||
      maxCommandData4 > 1000 ||
      minCommandData4 > maxCommandData4
    ) {
      console.log("Lỗi");
      return false;
    }
    if (minCommandData5 === "") {
      setMinCommandData5(-1000);
    }
    if (maxCommandData5 === "") {
      setMaxCommandData5(1000);
    }
    if (
      minCommandData5 < -1000 ||
      maxCommandData5 > 1000 ||
      minCommandData5 > maxCommandData5
    ) {
      console.log("Lỗi");
      return false;
    }
    if (minCommandData6 === "") {
      setMinCommandData6(-1000);
    }
    if (maxCommandData6 === "") {
      setMaxCommandData6(1000);
    }
    if (
      minCommandData6 < -1000 ||
      maxCommandData6 > 1000 ||
      minCommandData6 > maxCommandData6
    ) {
      console.log("Lỗi");
      return false;
    }
    if (minThdIa === "") {
      setMinThdIa(0);
    }
    if (maxThdIa === "") {
      setMaxThdIa(100);
    }
    if (minThdIa < 0) {
      setMinThdIaError(true);
      setMaxThdIaError(false);
      toastErrorAccessory("Giá trị ThdIa phải nằm trong khoảng [0:100]");
      return false;
    } else if (maxThdIa > 100) {
      setMinThdIaError(false);
      setMaxThdIaError(true);
      toastErrorAccessory("Giá trị ThdIa phải nằm trong khoảng [0:100]");
      return false;
    } else if (minThdIa > maxThdIa) {
      setMinThdIaError(true);
      setMaxThdIaError(true);
      toastErrorAccessory("Giá trị Min ThdIa phải nhỏ hơn giá trị Max ThdIa");
      return false;
    } else {
      setMinThdIaError(false);
      setMaxThdIaError(false);
    }
    if (minThdIb === "") {
      setMinThdIb(0);
    }
    if (maxThdIb === "") {
      setMaxThdIb(100);
    }
    if (minThdIb < 0) {
      setMinThdIbError(true);
      setMaxThdIbError(false);
      toastErrorAccessory("Giá trị ThdIb phải nằm trong khoảng [0:100]");
      return false;
    } else if (maxThdIb > 100) {
      setMinThdIbError(false);
      setMaxThdIbError(true);
      toastErrorAccessory("Giá trị ThdIb phải nằm trong khoảng [0:100]");
      return false;
    } else if (minThdIb > maxThdIb) {
      setMinThdIbError(true);
      setMaxThdIbError(true);
      toastErrorAccessory("Giá trị Min ThdIb phải nhỏ hơn giá trị Max ThdIb");
      return false;
    } else {
      setMinThdIbError(false);
      setMaxThdIbError(false);
    }
    if (minThdIc === "") {
      setMinThdIc(0);
    }
    if (maxThdIc === "") {
      setMaxThdIc(100);
    }
    if (minThdIc < 0) {
      setMinThdIcError(true);
      setMaxThdIcError(false);
      toastErrorAccessory("Giá trị ThdIc phải nằm trong khoảng [0:100]");
      return false;
    } else if (maxThdIc > 100) {
      setMinThdIcError(false);
      setMaxThdIcError(true);
      toastErrorAccessory("Giá trị ThdIc phải nằm trong khoảng [0:100]");
      return false;
    } else if (minThdIc > maxThdIc) {
      setMinThdIcError(true);
      setMaxThdIcError(true);
      toastErrorAccessory("Giá trị Min ThdIc phải nhỏ hơn giá trị Max ThdIc");
      return false;
    } else {
      setMinThdIcError(false);
      setMaxThdIcError(false);
    }
    if (minThdIg === "") {
      setMinThdIg(0);
    }
    if (maxThdIg === "") {
      setMaxThdIg(100);
    }
    if (minThdIg < 0) {
      setMinThdIgError(true);
      setMaxThdIgError(false);
      toastErrorAccessory("Giá trị ThdIg phải nằm trong khoảng [0:100]");
      return false;
    } else if (maxThdIg > 100) {
      setMinThdIgError(false);
      setMaxThdIgError(true);
      toastErrorAccessory("Giá trị ThdIg phải nằm trong khoảng [0:100]");
      return false;
    } else if (minThdIg > maxThdIg) {
      setMinThdIgError(true);
      setMaxThdIgError(true);
      toastErrorAccessory("Giá trị Min ThdIg phải nhỏ hơn giá trị Max ThdIg");
      return false;
    } else {
      setMinThdIgError(false);
      setMaxThdIgError(false);
    }
    if (minThdIn === "") {
      setMinThdIn(0);
    }
    if (maxThdIn === "") {
      setMaxThdIn(100);
    }
    if (minThdIn < 0) {
      setMinThdInError(true);
      setMaxThdInError(false);
      toastErrorAccessory("Giá trị ThdIn phải nằm trong khoảng [0:100]");
      return false;
    } else if (maxThdIn > 100) {
      setMinThdInError(false);
      setMaxThdInError(true);
      toastErrorAccessory("Giá trị ThdIn phải nằm trong khoảng [0:100]");
      return false;
    } else if (minThdIn > maxThdIn) {
      setMinThdInError(true);
      setMaxThdInError(true);
      toastErrorAccessory("Giá trị Min ThdIn phải nhỏ hơn giá trị Max ThdIn");
      return false;
    } else {
      setMinThdInError(false);
      setMaxThdInError(false);
    }
    if (minThdVab === "") {
      setMinThdVab(0);
    }
    if (maxThdVab === "") {
      setMaxThdVab(100);
    }
    if (minThdVab < 0) {
      setMinThdVabError(true);
      setMaxThdVabError(false);
      toastErrorAccessory("Giá trị ThdVab phải nằm trong khoảng [0:100]");
      return false;
    } else if (maxThdVab > 100) {
      setMinThdVabError(false);
      setMaxThdVabError(true);
      toastErrorAccessory("Giá trị ThdVab phải nằm trong khoảng [0:100]");
      return false;
    } else if (minThdVab > maxThdVab) {
      setMinThdVabError(true);
      setMaxThdVabError(true);
      toastErrorAccessory("Giá trị Min ThdVab phải nhỏ hơn giá trị Max ThdVab");
      return false;
    } else {
      setMinThdVabError(false);
      setMaxThdVabError(false);
    }
    if (minThdVbc === "") {
      setMinThdVbc(0);
    }
    if (maxThdVbc === "") {
      setMaxThdVbc(100);
    }
    if (minThdVbc < 0) {
      setMinThdVbcError(true);
      setMaxThdVbcError(false);
      toastErrorAccessory("Giá trị ThdVbc phải nằm trong khoảng [0:100]");
      return false;
    } else if (maxThdVbc > 100) {
      setMinThdVbcError(false);
      setMaxThdVbcError(true);
      toastErrorAccessory("Giá trị ThdVbc phải nằm trong khoảng [0:100]");
      return false;
    } else if (minThdVbc > maxThdVbc) {
      setMinThdVbcError(true);
      setMaxThdVbcError(true);
      toastErrorAccessory("Giá trị Min ThdVbc phải nhỏ hơn giá trị Max ThdVbc");
      return false;
    } else {
      setMinThdVbcError(false);
      setMaxThdVbcError(false);
    }
    if (minThdVca === "") {
      setMinThdVca(0);
    }
    if (maxThdVca === "") {
      setMaxThdVca(100);
    }
    if (minThdVca < 0) {
      setMinThdVcaError(true);
      setMaxThdVcaError(false);
      toastErrorAccessory("Giá trị ThdVca phải nằm  trong khoảng [0:100]");
      return false;
    } else if (maxThdVca > 100) {
      setMinThdVcaError(false);
      setMaxThdVcaError(true);
      toastErrorAccessory("Giá trị ThdVca phải nằm trong khoảng [0:100]");
      return false;
    } else if (minThdVca > maxThdVca) {
      setMinThdVcaError(true);
      setMaxThdVcaError(true);
      toastErrorAccessory("Giá trị Min ThdVca phải nhỏ hơn giá trị Max ThdVca");
      return false;
    } else {
      setMinThdVcaError(false);
      setMaxThdVcaError(false);
    }
    if (minThdVan === "") {
      setMinThdVan(0);
    }
    if (maxThdVan === "") {
      setMaxThdVan(100);
    }
    if (minThdVan < 0) {
      setMinThdVanError(true);
      setMaxThdVanError(false);
      toastErrorAccessory("Giá trị ThdVan phải nằm trong khoảng [0:100]");
      return false;
    } else if (maxThdVan > 100) {
      setMinThdVanError(false);
      setMaxThdVanError(true);
      toastErrorAccessory("Giá trị ThdVan phải nằm trong khoảng [0:100]");
      return false;
    } else if (minThdVan > maxThdVan) {
      setMinThdVanError(true);
      setMaxThdVanError(true);
      toastErrorAccessory("Giá trị Min ThdVan phải nhỏ hơn giá trị Max ThdVan");
      return false;
    } else {
      setMinThdVanError(false);
      setMaxThdVanError(false);
    }
    if (minThdVbn === "") {
      setMinThdVbn(0);
    }
    if (maxThdVbn === "") {
      setMaxThdVbn(100);
    }
    if (minThdVbn < 0) {
      setMinThdVbnError(true);
      setMaxThdVbnError(false);
      toastErrorAccessory("Giá trị ThdVbn phải nằm trong khoảng [0:100]");
      return false;
    } else if (maxThdVbn > 100) {
      setMinThdVbnError(false);
      setMaxThdVbnError(true);
      toastErrorAccessory("Giá trị ThdVbn phải nằm trong khoảng [0:100]");
      return false;
    } else if (minThdVbn > maxThdVbn) {
      setMinThdVbnError(true);
      setMaxThdVbnError(true);
      toastErrorAccessory("Giá trị Min ThdVbn phải nhỏ hơn giá trị Max ThdVbn");
      return false;
    } else {
      setMinThdVbnError(false);
      setMaxThdVbnError(false);
    }
    if (minThdVcn === "") {
      setMinThdVcn(0);
    }
    if (maxThdVcn === "") {
      setMaxThdVcn(100);
    }
    if (minThdVcn < 0) {
      setMinThdVcnError(true);
      setMaxThdVcnError(false);
      toastErrorAccessory("Giá trị ThdVcn phải nằm trong khoảng [0:100]");
      return false;
    } else if (maxThdVcn > 100) {
      setMinThdVcnError(false);
      setMaxThdVcnError(true);
      toastErrorAccessory("Giá trị ThdVcn phải nằm trong khoảng [0:100]");
      return false;
    } else if (minThdVcn > maxThdVcn) {
      setMinThdVcnError(true);
      setMaxThdVcnError(true);
      toastErrorAccessory("Giá trị Min ThdVcn phải nhỏ hơn giá trị Max ThdVcn");
      return false;
    } else {
      setMinThdVcnError(false);
      setMaxThdVcnError(false);
    }
    if (minThdVln === "") {
      setMinThdVln(0);
    }
    if (maxThdVln === "") {
      setMaxThdVln(100);
    }
    if (minThdVln < 0) {
      setMinThdVlnError(true);
      setMaxThdVlnError(false);
      toastErrorAccessory("Giá trị ThdVln phải nằm trong khoảng [0:100]");
      return false;
    } else if (maxThdVln > 100) {
      setMinThdVlnError(false);
      setMaxThdVlnError(true);
      toastErrorAccessory("Giá trị ThdVln phải nằm trong khoảng [0:100]");
      return false;
    } else if (minThdVln > maxThdVln) {
      setMinThdVlnError(true);
      setMaxThdVlnError(true);
      toastErrorAccessory("Giá trị Min ThdVln phải nhỏ hơn giá trị Max ThdVln");
      return false;
    } else {
      setMinThdVlnError(false);
      setMaxThdVlnError(false);
    }
    if (minThdVll === "") {
      setMinThdVll(0);
    }
    if (maxThdVll === "") {
      setMaxThdVll(100);
    }
    if (minThdVll < 0) {
      setMinThdVllError(true);
      setMaxThdVllError(false);
      toastErrorAccessory("Giá trị ThdVll phải nằm trong khoảng [0:100]");
      return false;
    } else if (maxThdVll > 100) {
      setMinThdVllError(false);
      setMaxThdVllError(true);
      toastErrorAccessory("Giá trị ThdVll phải nằm trong khoảng [0:100]");
      return false;
    } else if (minThdVll > maxThdVll) {
      setMinThdVllError(true);
      setMaxThdVllError(true);
      toastErrorAccessory("Giá trị Min ThdVll phải nhỏ hơn giá trị Max ThdVll");
      return false;
    } else {
      setMinThdVllError(false);
      setMaxThdVllError(false);
    }

    return true;
  };

  const [minUab, setMinUab] = useState(0);
  const [maxUab, setMaxUab] = useState(100);
  const [minUbc, setMinUbc] = useState(0);
  const [maxUbc, setMaxUbc] = useState(100);
  const [minUca, setMinUca] = useState(0);
  const [maxUca, setMaxUca] = useState(100);
  const [minUll, setMinUll] = useState(0);
  const [maxUll, setMaxUll] = useState(100);
  const [minUan, setMinUan] = useState(0);
  const [maxUan, setMaxUan] = useState(100);
  const [minUbn, setMinUbn] = useState(0);
  const [maxUbn, setMaxUbn] = useState(100);
  const [minUcn, setMinUcn] = useState(0);
  const [maxUcn, setMaxUcn] = useState(100);
  const [minUln, setMinUln] = useState(0);
  const [maxUln, setMaxUln] = useState(100);
  const [minIa, setMinIa] = useState(0);
  const [maxIa, setMaxIa] = useState(100);
  const [minIb, setMinIb] = useState(0);
  const [maxIb, setMaxIb] = useState(100);
  const [minIc, setMinIc] = useState(0);
  const [maxIc, setMaxIc] = useState(100);
  const [minIN, setMinIN] = useState(0);
  const [maxIN, setMaxIN] = useState(100);
  const [minIG, setMinIG] = useState(0);
  const [maxIG, setMaxIG] = useState(100);
  const [minIAvg, setMinIAvg] = useState(0);
  const [maxIAvg, setMaxIAvg] = useState(100);
  const [minPa, setMinPa] = useState(0);
  const [maxPa, setMaxPa] = useState(100);
  const [minPb, setMinPb] = useState(0);
  const [maxPb, setMaxPb] = useState(100);
  const [minPc, setMinPc] = useState(0);
  const [maxPc, setMaxPc] = useState(100);
  const [minPTotal, setMinPTotal] = useState(0);
  const [maxPTotal, setMaxPTotal] = useState(100);
  const [minQa, setMinQa] = useState(0);
  const [maxQa, setMaxQa] = useState(100);
  const [minQb, setMinQb] = useState(0);
  const [maxQb, setMaxQb] = useState(100);
  const [minQc, setMinQc] = useState(0);
  const [maxQc, setMaxQc] = useState(100);
  const [minQTotal, setMinQTotal] = useState(0);
  const [maxQTotal, setMaxQTotal] = useState(100);
  const [minSa, setMinSa] = useState(0);
  const [maxSa, setMaxSa] = useState(100);
  const [minSb, setMinSb] = useState(0);
  const [maxSb, setMaxSb] = useState(100);
  const [minSc, setMinSc] = useState(0);
  const [maxSc, setMaxSc] = useState(100);
  const [minSTotal, setMinSTotal] = useState(0);
  const [maxSTotal, setMaxSTotal] = useState(100);
  const [minPfa, setMinPfa] = useState(0);
  const [maxPfa, setMaxPfa] = useState(1);
  const [minPfb, setMinPfb] = useState(0);
  const [maxPfb, setMaxPfb] = useState(1);
  const [minPfc, setMinPfc] = useState(0);
  const [maxPfc, setMaxPfc] = useState(1);
  const [minPFAvg, setMinPFAvg] = useState(0);
  const [maxPFAvg, setMaxPFAvg] = useState(1);
  const [minF, setMinF] = useState(45);
  const [maxF, setMaxF] = useState(65);
  const [minEp, setMinEp] = useState(0);
  const [maxEp, setMaxEp] = useState(100);
  const [minEpR, setMinEpR] = useState(0);
  const [maxEpR, setMaxEpR] = useState(100);
  const [minEpDR, setMinEpDR] = useState(0);
  const [maxEpDR, setMaxEpDR] = useState(100);
  const [minEpDRR, setMinEpDRR] = useState(0);
  const [maxEpDRR, setMaxEpDRR] = useState(100);
  const [minEq, setMinEq] = useState(0);
  const [maxEq, setMaxEq] = useState(100);
  const [minEqR, setMinEqR] = useState(0);
  const [maxEqR, setMaxEqR] = useState(100);
  const [minEqDR, setMinEqDR] = useState(0);
  const [maxEqDR, setMaxEqDR] = useState(100);
  const [minEqDRR, setMinEqDRR] = useState(0);
  const [maxEqDRR, setMaxEqDRR] = useState(100);
  const [minEs, setMinEs] = useState(0);
  const [maxEs, setMaxEs] = useState(100);
  const [minEsR, setMinEsR] = useState(0);
  const [maxEsR, setMaxEsR] = useState(100);
  const [minEsDR, setMinEsDR] = useState(0);
  const [maxEsDR, setMaxEsDR] = useState(100);
  const [minEsDRR, setMinEsDRR] = useState(0);
  const [maxEsDRR, setMaxEsDRR] = useState(100);
  const [minT1, setMinT1] = useState(0);
  const [maxT1, setMaxT1] = useState(100);
  const [minT2, setMinT2] = useState(0);
  const [maxT2, setMaxT2] = useState(100);
  const [minT3, setMinT3] = useState(0);
  const [maxT3, setMaxT3] = useState(100);
  const [minCommandData1, setMinCommandData1] = useState(0);
  const [maxCommandData1, setMaxCommandData1] = useState(100);
  const [minCommandData2, setMinCommandData2] = useState(0);
  const [maxCommandData2, setMaxCommandData2] = useState(100);
  const [minCommandData3, setMinCommandData3] = useState(0);
  const [maxCommandData3, setMaxCommandData3] = useState(100);
  const [minCommandData4, setMinCommandData4] = useState(0);
  const [maxCommandData4, setMaxCommandData4] = useState(100);
  const [minCommandData5, setMinCommandData5] = useState(0);
  const [maxCommandData5, setMaxCommandData5] = useState(100);
  const [minCommandData6, setMinCommandData6] = useState(0);
  const [maxCommandData6, setMaxCommandData6] = useState(100);
  const [minThdIa, setMinThdIa] = useState(0);
  const [maxThdIa, setMaxThdIa] = useState(100);
  const [minThdIb, setMinThdIb] = useState(0);
  const [maxThdIb, setMaxThdIb] = useState(100);
  const [minThdIc, setMinThdIc] = useState(0);
  const [maxThdIc, setMaxThdIc] = useState(100);
  const [minThdIn, setMinThdIn] = useState(0);
  const [maxThdIn, setMaxThdIn] = useState(100);
  const [minThdIg, setMinThdIg] = useState(0);
  const [maxThdIg, setMaxThdIg] = useState(100);
  const [minThdVab, setMinThdVab] = useState(0);
  const [maxThdVab, setMaxThdVab] = useState(100);
  const [minThdVbc, setMinThdVbc] = useState(0);
  const [maxThdVbc, setMaxThdVbc] = useState(100);
  const [minThdVca, setMinThdVca] = useState(0);
  const [maxThdVca, setMaxThdVca] = useState(100);
  const [minThdVll, setMinThdVll] = useState(0);
  const [maxThdVll, setMaxThdVll] = useState(100);
  const [minThdVan, setMinThdVan] = useState(0);
  const [maxThdVan, setMaxThdVan] = useState(100);
  const [minThdVbn, setMinThdVbn] = useState(0);
  const [maxThdVbn, setMaxThdVbn] = useState(100);
  const [minThdVcn, setMinThdVcn] = useState(0);
  const [maxThdVcn, setMaxThdVcn] = useState(100);
  const [minThdVln, setMinThdVln] = useState(0);
  const [maxThdVln, setMaxThdVln] = useState(100);
  const [status, setStatus] = useState(false);
  const [deviceId, setDeviceId] = useState();
  const [disabled, setDisable] = useState(false);
  const onChangeSw = (checked) => {
    setDisable(checked);
    handelCkickStop();
  };
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
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
      updateStatus({ key: props.data, status: true });
      toastSuccessAccessory("Đã gửi");
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
  useEffect(() => {
    clearInterval(timerId);
    updateStatus({ key: props.data, status: false });
    setTimerId(null);
  }, [disabled]);

  const [minUabError, setMinUabError] = useState(false);
  const [maxUabError, setMaxUabError] = useState(false);
  const [minUbcError, setMinUbcError] = useState(false);
  const [maxUbcError, setMaxUbcError] = useState(false);
  const [minUcaError, setMinUcaError] = useState(false);
  const [maxUcaError, setMaxUcaError] = useState(false);
  const [minUllError, setMinUllError] = useState(false);
  const [maxUllError, setMaxUllError] = useState(false);
  const [minUanError, setMinUanError] = useState(false);
  const [maxUanError, setMaxUanError] = useState(false);
  const [minUbnError, setMinUbnError] = useState(false);
  const [maxUbnError, setMaxUbnError] = useState(false);
  const [minUcnError, setMinUcnError] = useState(false);
  const [maxUcnError, setMaxUcnError] = useState(false);
  const [minUlnError, setMinUlnError] = useState(false);
  const [maxUlnError, setMaxUlnError] = useState(false);
  const [minIaError, setMinIaError] = useState(false);
  const [maxIaError, setMaxIaError] = useState(false);
  const [minIbError, setMinIbError] = useState(false);
  const [maxIbError, setMaxIbError] = useState(false);
  const [minIcError, setMinIcError] = useState(false);
  const [maxIcError, setMaxIcError] = useState(false);
  const [minINError, setMinINError] = useState(false);
  const [maxINError, setMaxINError] = useState(false);
  const [minIGError, setMinIGError] = useState(false);
  const [maxIGError, setMaxIGError] = useState(false);
  const [minIAvgError, setMinIAvgError] = useState(false);
  const [maxIAvgError, setMaxIAvgError] = useState(false);
  const [minPaError, setMinPaError] = useState(false);
  const [maxPaError, setMaxPaError] = useState(false);
  const [minPbError, setMinPbError] = useState(false);
  const [maxPbError, setMaxPbError] = useState(false);
  const [minPcError, setMinPcError] = useState(false);
  const [maxPcError, setMaxPcError] = useState(false);
  const [minPTotalError, setMinPTotalError] = useState(false);
  const [maxPTotalError, setMaxPTotalError] = useState(false);
  const [minQaError, setMinQaError] = useState(false);
  const [maxQaError, setMaxQaError] = useState(false);
  const [minQbError, setMinQbError] = useState(false);
  const [maxQbError, setMaxQbError] = useState(false);
  const [minQcError, setMinQcError] = useState(false);
  const [maxQcError, setMaxQcError] = useState(false);
  const [minQTotalError, setMinQTotalError] = useState(false);
  const [maxQTotalError, setMaxQTotalError] = useState(false);
  const [minSaError, setMinSaError] = useState(false);
  const [maxSaError, setMaxSaError] = useState(false);
  const [minSbError, setMinSbError] = useState(false);
  const [maxSbError, setMaxSbError] = useState(false);
  const [minScError, setMinScError] = useState(false);
  const [maxScError, setMaxScError] = useState(false);
  const [minSTotalError, setMinSTotalError] = useState(false);
  const [maxSTotalError, setMaxSTotalError] = useState(false);
  const [minPfaError, setMinPfaError] = useState(false);
  const [maxPfaError, setMaxPfaError] = useState(false);
  const [minPfbError, setMinPfbError] = useState(false);
  const [maxPfbError, setMaxPfbError] = useState(false);
  const [minPfcError, setMinPfcError] = useState(false);
  const [maxPfcError, setMaxPfcError] = useState(false);
  const [minPFAvgError, setMinPFAvgError] = useState(false);
  const [maxPFAvgError, setMaxPFAvgError] = useState(false);
  const [minFError, setMinFError] = useState(false);
  const [maxFError, setMaxFError] = useState(false);
  const [minEpError, setMinEpError] = useState(false);
  const [maxEpError, setMaxEpError] = useState(false);
  const [minEpRError, setMinEpRError] = useState(false);
  const [maxEpRError, setMaxEpRError] = useState(false);
  const [minEpDRError, setMinEpDRError] = useState(false);
  const [maxEpDRError, setMaxEpDRError] = useState(false);
  const [minEpDRRError, setMinEpDRRError] = useState(false);
  const [maxEpDRRError, setMaxEpDRRError] = useState(false);
  const [minEqError, setMinEqError] = useState(false);
  const [maxEqError, setMaxEqError] = useState(false);
  const [minEqRError, setMinEqRError] = useState(false);
  const [maxEqRError, setMaxEqRError] = useState(false);
  const [minEqDRError, setMinEqDRError] = useState(false);
  const [maxEqDRError, setMaxEqDRError] = useState(false);
  const [minEqDRRError, setMinEqDRRError] = useState(false);
  const [maxEqDRRError, setMaxEqDRRError] = useState(false);
  const [minEsError, setMinEsError] = useState(false);
  const [maxEsError, setMaxEsError] = useState(false);
  const [minEsRError, setMinEsRError] = useState(false);
  const [maxEsRError, setMaxEsRError] = useState(false);
  const [minEsDRError, setMinEsDRError] = useState(false);
  const [maxEsDRError, setMaxEsDRError] = useState(false);
  const [minEsDRRError, setMinEsDRRError] = useState(false);
  const [maxEsDRRError, setMaxEsDRRError] = useState(false);
  const [minT1Error, setMinT1Error] = useState(false);
  const [maxT1Error, setMaxT1Error] = useState(false);
  const [minT2Error, setMinT2Error] = useState(false);
  const [maxT2Error, setMaxT2Error] = useState(false);
  const [minT3Error, setMinT3Error] = useState(false);
  const [maxT3Error, setMaxT3Error] = useState(false);
  const [minCommandData1Error, setMinCommandData1Error] = useState(false);
  const [maxCommandData1Error, setMaxCommandData1Error] = useState(false);
  const [minCommandData2Error, setMinCommandData2Error] = useState(false);
  const [maxCommandData2Error, setMaxCommandData2Error] = useState(false);
  const [minCommandData3Error, setMinCommandData3Error] = useState(false);
  const [maxCommandData3Error, setMaxCommandData3Error] = useState(false);
  const [minCommandData4Error, setMinCommandData4Error] = useState(false);
  const [maxCommandData4Error, setMaxCommandData4Error] = useState(false);
  const [minCommandData5Error, setMinCommandData5Error] = useState(false);
  const [maxCommandData5Error, setMaxCommandData5Error] = useState(false);
  const [minCommandData6Error, setMinCommandData6Error] = useState(false);
  const [maxCommandData6Error, setMaxCommandData6Error] = useState(false);
  const [minThdIaError, setMinThdIaError] = useState(false);
  const [maxThdIaError, setMaxThdIaError] = useState(false);
  const [minThdIbError, setMinThdIbError] = useState(false);
  const [maxThdIbError, setMaxThdIbError] = useState(false);
  const [minThdIcError, setMinThdIcError] = useState(false);
  const [maxThdIcError, setMaxThdIcError] = useState(false);
  const [minThdInError, setMinThdInError] = useState(false);
  const [maxThdInError, setMaxThdInError] = useState(false);
  const [minThdIgError, setMinThdIgError] = useState(false);
  const [maxThdIgError, setMaxThdIgError] = useState(false);
  const [minThdVabError, setMinThdVabError] = useState(false);
  const [maxThdVabError, setMaxThdVabError] = useState(false);
  const [minThdVbcError, setMinThdVbcError] = useState(false);
  const [maxThdVbcError, setMaxThdVbcError] = useState(false);
  const [minThdVcaError, setMinThdVcaError] = useState(false);
  const [maxThdVcaError, setMaxThdVcaError] = useState(false);
  const [minThdVllError, setMinThdVllError] = useState(false);
  const [maxThdVllError, setMaxThdVllError] = useState(false);
  const [minThdVanError, setMinThdVanError] = useState(false);
  const [maxThdVanError, setMaxThdVanError] = useState(false);
  const [minThdVbnError, setMinThdVbnError] = useState(false);
  const [maxThdVbnError, setMaxThdVbnError] = useState(false);
  const [minThdVcnError, setMinThdVcnError] = useState(false);
  const [maxThdVcnError, setMaxThdVcnError] = useState(false);
  const [minThdVlnError, setMinThdVlnError] = useState(false);
  const [maxThdVlnError, setMaxThdVlnError] = useState(false);

  return (
    <>
      {/* Thao tác */}
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
      <div className="row mt-2">
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
      <div class="card card-body mt-2">
        <div className="row mt-4">
          <ToastContainer />
          {/* Cột 1 */}
          <div className="col-4">
            <Input
              placeholder="Device Id"
              value={deviceId}
              onChange={(event) => setDeviceId(event.target.value)}
            />
            <Card bordered={true} className=" mt-2 bg-light">
              <InputMinMax
                title="UAB"
                minValue={minUab}
                maxValue={maxUab}
                minX={0}
                maxX={44999}
                minY={1}
                maxY={45000}
                setMinValue={setMinUab}
                setMaxValue={setMaxUab}
                statusMin={minUabError ? "error" : "default"}
                statusMax={maxUabError ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="UBC"
                minValue={minUbc}
                maxValue={maxUbc}
                minX={0}
                maxX={44999}
                minY={1}
                maxY={45000}
                setMinValue={setMinUbc}
                setMaxValue={setMaxUbc}
                statusMin={minUbcError ? "error" : "default"}
                statusMax={maxUbcError ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="UCA"
                minValue={minUca}
                maxValue={maxUca}
                minX={0}
                maxX={44999}
                minY={1}
                maxY={45000}
                setMinValue={setMinUca}
                setMaxValue={setMaxUca}
                statusMin={minUcaError ? "error" : "default"}
                statusMax={maxUcaError ? "error" : "default"}
              />
            </Card>
            <Card bordered={true} className="mt-2 bg-light">
              <InputMinMax
                title="ULL"
                minValue={minUll}
                maxValue={maxUll}
                minX={0}
                maxX={44999}
                minY={1}
                maxY={45000}
                setMinValue={setMinUll}
                setMaxValue={setMaxUll}
                statusMin={minUllError ? "error" : "default"}
                statusMax={maxUllError ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="UAN"
                minValue={minUan}
                maxValue={maxUan}
                minX={0}
                maxX={44999}
                minY={1}
                maxY={45000}
                setMinValue={setMinUan}
                setMaxValue={setMaxUan}
                statusMin={minUanError ? "error" : "default"}
                statusMax={maxUanError ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="UBN"
                minValue={minUbn}
                maxValue={maxUbn}
                minX={0}
                maxX={44999}
                minY={1}
                maxY={45000}
                setMinValue={setMinUbn}
                setMaxValue={setMaxUbn}
                statusMin={minUbnError ? "error" : "default"}
                statusMax={maxUbnError ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="UCN"
                minValue={minUcn}
                maxValue={maxUcn}
                minX={0}
                maxX={44999}
                minY={1}
                maxY={45000}
                setMinValue={setMinUcn}
                setMaxValue={setMaxUcn}
                statusMin={minUcnError ? "error" : "default"}
                statusMax={maxUcnError ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="ULN"
                minValue={minUln}
                maxValue={maxUln}
                minX={0}
                maxX={44999}
                minY={1}
                maxY={45000}
                setMinValue={setMinUln}
                setMaxValue={setMaxUln}
                statusMin={minUlnError ? "error" : "default"}
                statusMax={maxUlnError ? "error" : "default"}
              />
            </Card>
            <Card bordered={true} className="mt-2 bg-light">
              <InputMinMax
                title="IA"
                minValue={minIa}
                maxValue={maxIa}
                minX={0}
                maxX={10000}
                minY={1}
                maxY={9999}
                setMinValue={setMinIa}
                setMaxValue={setMaxIa}
                statusMin={minIaError ? "error" : "default"}
                statusMax={maxIaError ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="IB"
                minValue={minIb}
                maxValue={maxIb}
                minX={0}
                maxX={10000}
                minY={1}
                maxY={9999}
                setMinValue={setMinIb}
                setMaxValue={setMaxIb}
                statusMin={minIbError ? "error" : "default"}
                statusMax={maxIbError ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="IC"
                minValue={minIc}
                maxValue={maxIc}
                minX={0}
                maxX={10000}
                minY={1}
                maxY={9999}
                setMinValue={setMinIc}
                setMaxValue={setMaxIc}
                statusMin={minIcError ? "error" : "default"}
                statusMax={maxIcError ? "error" : "default"}
              />

              <InputMinMax
                className="mt-2"
                title="IN"
                minValue={minIN}
                maxValue={maxIN}
                minX={0}
                maxX={10000}
                minY={1}
                maxY={9999}
                setMinValue={setMinIN}
                setMaxValue={setMaxIN}
                statusMin={minINError ? "error" : "default"}
                statusMax={maxINError ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="IG"
                minValue={minIG}
                maxValue={maxIG}
                minX={0}
                maxX={10000}
                minY={1}
                maxY={9999}
                setMinValue={setMinIG}
                setMaxValue={setMaxIG}
                statusMin={minIGError ? "error" : "default"}
                statusMax={maxIGError ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="Iavg"
                minValue={minIAvg}
                maxValue={maxIAvg}
                minX={0}
                maxX={10000}
                minY={1}
                maxY={9999}
                setMinValue={setMinIAvg}
                setMaxValue={setMaxIAvg}
                statusMin={minIAvgError ? "error" : "default"}
                statusMax={maxIAvgError ? "error" : "default"}
              />
            </Card>
            <Card bordered={true} className="mt-2 bg-light">
              <InputMinMax
                title="Ep"
                minValue={minEp}
                maxValue={maxEp}
                minX={0}
                maxX={3999999999}
                minY={1}
                maxY={4000000000}
                setMinValue={setMinEp}
                setMaxValue={setMaxEp}
                statusMin={minEpError ? "error" : "default"}
                statusMax={maxEpError ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="Ep R"
                minValue={minEpR}
                maxValue={maxEpR}
                minX={0}
                maxX={3999999999}
                minY={1}
                maxY={4000000000}
                setMinValue={setMinEpR}
                setMaxValue={setMaxEpR}
                statusMin={minEpRError ? "error" : "default"}
                statusMax={maxEpRError ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="Ep Dr"
                minValue={minEpDR}
                maxValue={maxEpDR}
                minX={0}
                maxX={3999999999}
                minY={1}
                maxY={4000000000}
                setMinValue={setMinEpDR}
                setMaxValue={setMaxEpDR}
                statusMin={minEpDRError ? "error" : "default"}
                statusMax={maxEpDRError ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="Ep Drr"
                minValue={minEpDRR}
                maxValue={maxEpDRR}
                minX={0}
                maxX={3999999999}
                minY={1}
                maxY={4000000000}
                setMinValue={setMinEpDRR}
                setMaxValue={setMaxEpDRR}
                statusMin={minEpDRRError ? "error" : "default"}
                statusMax={maxEpDRRError ? "error" : "default"}
              />
            </Card>
            <Card bordered={true} className="mt-2 bg-light">
              <InputMinMax
                title="Eq"
                minValue={minEq}
                maxValue={maxEq}
                minX={0}
                maxX={3999999999}
                minY={1}
                maxY={4000000000}
                setMinValue={setMinEq}
                setMaxValue={setMaxEq}
                statusMin={minEqError ? "error" : "default"}
                statusMax={maxEqError ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="Eq R"
                minValue={minEqR}
                maxValue={maxEqR}
                minX={0}
                maxX={3999999999}
                minY={1}
                maxY={4000000000}
                setMinValue={setMinEqR}
                setMaxValue={setMaxEqR}
                statusMin={minEqRError ? "error" : "default"}
                statusMax={maxEqRError ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="Eq Dr"
                minValue={minEqDR}
                maxValue={maxEqDR}
                minX={0}
                maxX={3999999999}
                minY={1}
                maxY={4000000000}
                setMinValue={setMinEqDR}
                setMaxValue={setMaxEqDR}
                statusMin={minEqDRError ? "error" : "default"}
                statusMax={maxEqDRError ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="Eq Drr"
                minValue={minEqDRR}
                maxValue={maxEqDRR}
                minX={0}
                maxX={3999999999}
                minY={1}
                maxY={4000000000}
                setMinValue={setMinEqDRR}
                setMaxValue={setMaxEqDRR}
                statusMin={minEqDRRError ? "error" : "default"}
                statusMax={maxEqDRRError ? "error" : "default"}
              />
            </Card>
          </div>
          {/* Cột 2 */}
          <div className="col-4">
            <Card bordered={true} className=" bg-light">
              {" "}
              <InputMinMax
                className="mt-2"
                title="F"
                minValue={minF}
                maxValue={maxF}
                minX={45}
                maxX={64}
                minY={46}
                maxY={65}
                setMinValue={setMinF}
                setMaxValue={setMaxF}
                statusMin={minFError ? "error" : "default"}
                statusMax={maxFError ? "error" : "default"}
              />
            </Card>
            <Card bordered={true} className="mt-2 bg-light">
              <InputMinMax
                title="Pa"
                minValue={minPa}
                maxValue={maxPa}
                minX={-2000000}
                maxX={1999999}
                minY={-1999999}
                maxY={2000000}
                setMinValue={setMinPa}
                setMaxValue={setMaxPa}
                statusMin={minPaError ? "error" : "default"}
                statusMax={maxPaError ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="Pb"
                minValue={minPb}
                maxValue={maxPb}
                minX={-2000000}
                maxX={1999999}
                minY={-1999999}
                maxY={2000000}
                setMinValue={setMinPb}
                setMaxValue={setMaxPb}
                statusMin={minPbError ? "error" : "default"}
                statusMax={maxPbError ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="Pc"
                minValue={minPc}
                maxValue={maxPc}
                minX={-2000000}
                maxX={1999999}
                minY={-1999999}
                maxY={2000000}
                setMinValue={setMinPc}
                setMaxValue={setMaxPc}
                statusMin={minPcError ? "error" : "default"}
                statusMax={maxPcError ? "error" : "default"}
              />

              <InputMinMax
                className="mt-2"
                title="P total"
                minValue={minPTotal}
                maxValue={maxPTotal}
                minX={-2000000}
                maxX={1999999}
                minY={-1999999}
                maxY={2000000}
                setMinValue={setMinPTotal}
                setMaxValue={setMaxPTotal}
                statusMin={minPTotalError ? "error" : "default"}
                statusMax={maxPTotalError ? "error" : "default"}
              />
            </Card>
            <Card bordered={true} className="mt-2  bg-light">
              <InputMinMax
                title="Qa"
                minValue={minQa}
                maxValue={maxQa}
                minX={-2000000}
                maxX={1999999}
                minY={-1999999}
                maxY={2000000}
                setMinValue={setMinQa}
                setMaxValue={setMaxQa}
                statusMin={minQaError ? "error" : "default"}
                statusMax={maxQaError ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="Qb"
                minValue={minQb}
                maxValue={maxQb}
                minX={-2000000}
                maxX={1999999}
                minY={-1999999}
                maxY={2000000}
                setMinValue={setMinQb}
                setMaxValue={setMaxQb}
                statusMin={minQbError ? "error" : "default"}
                statusMax={maxQbError ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="Qc"
                minValue={minQc}
                maxValue={maxQc}
                minX={-2000000}
                maxX={1999999}
                minY={-1999999}
                maxY={2000000}
                setMinValue={setMinQc}
                setMaxValue={setMaxQc}
                statusMin={minQcError ? "error" : "default"}
                statusMax={maxQcError ? "error" : "default"}
              />

              <InputMinMax
                className="mt-2"
                title="Q total"
                minValue={minQTotal}
                maxValue={maxQTotal}
                minX={-2000000}
                maxX={1999999}
                minY={-1999999}
                maxY={2000000}
                setMinValue={setMinQTotal}
                setMaxValue={setMaxQTotal}
                statusMin={minQTotalError ? "error" : "default"}
                statusMax={maxQTotalError ? "error" : "default"}
              />
            </Card>
            <Card bordered={true} className=" mt-2 bg-light">
              <InputMinMax
                title="Sa"
                minValue={minSa}
                maxValue={maxSa}
                minX={-2000000}
                maxX={1999999}
                minY={-1999999}
                maxY={2000000}
                setMinValue={setMinSa}
                setMaxValue={setMaxSa}
                statusMin={minSaError ? "error" : "default"}
                statusMax={maxSaError ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="Sb"
                minValue={minSb}
                maxValue={maxSb}
                minX={-2000000}
                maxX={1999999}
                minY={-1999999}
                maxY={2000000}
                setMinValue={setMinSb}
                setMaxValue={setMaxSb}
                statusMin={minSbError ? "error" : "default"}
                statusMax={maxSbError ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="Sc"
                minValue={minSc}
                maxValue={maxSc}
                minX={-2000000}
                maxX={1999999}
                minY={-1999999}
                maxY={2000000}
                setMinValue={setMinSc}
                setMaxValue={setMaxSc}
                statusMin={minScError ? "error" : "default"}
                statusMax={maxScError ? "error" : "default"}
              />

              <InputMinMax
                className="mt-2"
                title="S total"
                minValue={minSTotal}
                maxValue={maxSTotal}
                minX={-2000000}
                maxX={1999999}
                minY={-1999999}
                maxY={2000000}
                setMinValue={setMinSTotal}
                setMaxValue={setMaxSTotal}
                statusMin={minSTotalError ? "error" : "default"}
                statusMax={maxSTotalError ? "error" : "default"}
              />
            </Card>
            <Card bordered={true} className="mt-2 bg-light">
              <InputMinMax
                title="Pfa"
                minValue={minPfa}
                maxValue={maxPfa}
                minX={-1}
                maxX={0}
                minY={0}
                maxY={1}
                setMinValue={setMinPfa}
                setMaxValue={setMaxPfa}
                statusMin={minPfaError ? "error" : "default"}
                statusMax={maxPfaError ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="Pfb"
                minValue={minPfb}
                maxValue={maxPfb}
                minX={-1}
                maxY={1}
                maxX={0}
                minY={0}
                setMinValue={setMinPfb}
                setMaxValue={setMaxPfb}
                statusMin={minPfbError ? "error" : "default"}
                statusMax={maxPfbError ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="Pfc"
                minValue={minPfc}
                maxValue={maxPfc}
                maxX={0}
                minY={0}
                minX={-1}
                maxY={1}
                setMinValue={setMinPfc}
                setMaxValue={setMaxPfc}
                statusMin={minPfcError ? "error" : "default"}
                statusMax={maxPfcError ? "error" : "default"}
              />

              <InputMinMax
                className="mt-2"
                title="Pf Avg"
                minValue={minPFAvg}
                maxValue={maxPFAvg}
                maxX={0}
                minY={0}
                minX={-1}
                maxY={1}
                setMinValue={setMinPFAvg}
                setMaxValue={setMaxPFAvg}
                statusMin={minPFAvgError ? "error" : "default"}
                statusMax={maxPFAvgError ? "error" : "default"}
              />
            </Card>
            <Card bordered={true} className="mt-2 bg-light">
              <InputMinMax
                title="Es"
                minValue={minEs}
                maxValue={maxEs}
                minX={0}
                maxX={3999999999}
                minY={1}
                maxY={4000000000}
                setMinValue={setMinEs}
                setMaxValue={setMaxEs}
                statusMin={minEsError ? "error" : "default"}
                statusMax={maxEsError ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="Es R"
                minValue={minEsR}
                maxValue={maxEsR}
                minX={0}
                maxX={3999999999}
                minY={1}
                maxY={4000000000}
                setMinValue={setMinEsR}
                setMaxValue={setMaxEsR}
                statusMin={minEsRError ? "error" : "default"}
                statusMax={maxEsRError ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="Es Dr"
                minValue={minEsDR}
                maxValue={maxEsDR}
                minX={0}
                maxX={3999999999}
                minY={1}
                maxY={4000000000}
                setMinValue={setMinEsDR}
                setMaxValue={setMaxEsDR}
                statusMin={minEsDRError ? "error" : "default"}
                statusMax={maxEsDRError ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="Es Drr"
                minValue={minEsDRR}
                maxValue={maxEsDRR}
                minX={0}
                maxX={3999999999}
                minY={1}
                maxY={4000000000}
                setMinValue={setMinEsDRR}
                setMaxValue={setMaxEsDRR}
                statusMin={minEsDRRError ? "error" : "default"}
                statusMax={maxEsDRRError ? "error" : "default"}
              />
            </Card>
          </div>
          {/* Cột 3 */}

          <div className="col-4">
            <Card bordered={true} className="bg-light">
              <InputMinMax
                title="T1"
                minValue={minT1}
                maxValue={maxT1}
                minX={0}
                maxX={249}
                minY={1}
                maxY={250}
                setMinValue={setMinT1}
                setMaxValue={setMaxT1}
                statusMin={minT1Error ? "error" : "default"}
                statusMax={maxT1Error ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="T2"
                minValue={minT2}
                maxValue={maxT2}
                minX={0}
                maxX={249}
                minY={1}
                maxY={250}
                setMinValue={setMinT2}
                setMaxValue={setMaxT2}
                statusMin={minT2Error ? "error" : "default"}
                statusMax={maxT2Error ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="T3"
                minValue={minT3}
                maxValue={maxT3}
                minX={0}
                maxX={249}
                minY={1}
                maxY={250}
                setMinValue={setMinT3}
                setMaxValue={setMaxT3}
                statusMin={minT3Error ? "error" : "default"}
                statusMax={maxT3Error ? "error" : "default"}
              />
            </Card>
            <Card bordered={true} className="mt-2 bg-light">
              <InputMinMax
                title="ThdIa"
                minValue={minThdIa}
                maxValue={maxThdIa}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinThdIa}
                setMaxValue={setMaxThdIa}
                statusMin={minThdIaError ? "error" : "default"}
                statusMax={maxThdIaError ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="ThdIb"
                minValue={minThdIb}
                maxValue={maxThdIb}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinThdIb}
                setMaxValue={setMaxThdIb}
                statusMin={minThdIbError ? "error" : "default"}
                statusMax={maxThdIbError ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="ThdIc"
                minValue={minThdIc}
                maxValue={maxThdIc}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinThdIc}
                setMaxValue={setMaxThdIc}
                statusMin={minThdIcError ? "error" : "default"}
                statusMax={maxThdIcError ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="ThdIn"
                minValue={minThdIn}
                maxValue={maxThdIn}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinThdIn}
                setMaxValue={setMaxThdIn}
                statusMin={minThdInError ? "error" : "default"}
                statusMax={maxThdInError ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="ThdIg"
                minValue={minThdIg}
                maxValue={maxThdIg}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinThdIg}
                setMaxValue={setMaxThdIg}
                statusMin={minThdIgError ? "error" : "default"}
                statusMax={maxThdIgError ? "error" : "default"}
              />
            </Card>
            <Card bordered={true} className="mt-2 bg-light">
              <InputMinMax
                title="ThdVab"
                minValue={minThdVab}
                maxValue={maxThdVab}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinThdVab}
                setMaxValue={setMaxThdVab}
                statusMin={minThdVabError ? "error" : "default"}
                statusMax={maxThdVabError ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="ThdVbc"
                minValue={minThdVbc}
                maxValue={maxThdVbc}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinThdVbc}
                setMaxValue={setMaxThdVbc}
                statusMin={minThdVbcError ? "error" : "default"}
                statusMax={maxThdVbcError ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="ThdVca"
                minValue={minThdVca}
                maxValue={maxThdVca}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinThdVca}
                setMaxValue={setMaxThdVca}
                statusMin={minThdVcaError ? "error" : "default"}
                statusMax={maxThdVcaError ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="ThdVll"
                minValue={minThdVll}
                maxValue={maxThdVll}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinThdVll}
                setMaxValue={setMaxThdVll}
                statusMin={minThdVllError ? "error" : "default"}
                statusMax={maxThdVllError ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="ThdVan"
                minValue={minThdVan}
                maxValue={maxThdVan}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinThdVan}
                setMaxValue={setMaxThdVan}
                statusMin={minThdVanError ? "error" : "default"}
                statusMax={maxThdVanError ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="ThdVbn"
                minValue={minThdVbn}
                maxValue={maxThdVbn}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinThdVbn}
                setMaxValue={setMaxThdVbn}
                statusMin={minThdVbnError ? "error" : "default"}
                statusMax={maxThdVbnError ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="ThdVcn"
                minValue={minThdVcn}
                maxValue={maxThdVcn}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinThdVcn}
                setMaxValue={setMaxThdVcn}
                statusMin={minThdVcnError ? "error" : "default"}
                statusMax={maxThdVcnError ? "error" : "default"}
              />
              <InputMinMax
                className="mt-2"
                title="ThdVln"
                minValue={minThdVln}
                maxValue={maxThdVln}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinThdVln}
                setMaxValue={setMaxThdVln}
                statusMin={minThdVlnError ? "error" : "default"}
                statusMax={maxThdVlnError ? "error" : "default"}
              />
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
