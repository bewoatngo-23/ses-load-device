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
  const [validateFrequency, setValidateFrequency] = useState(false);
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
    const dataU = [
      {
        name: "Uab",
        min: minUab,
        max: maxUab,
        minError: setMinUabError,
        maxError: setMaxUabError,
      },
      {
        name: "Ubc",
        min: minUbc,
        max: maxUbc,
        minError: setMinUbcError,
        maxError: setMaxUbcError,
      },
      {
        name: "Uca",
        min: minUca,
        max: maxUca,
        minError: setMinUcaError,
        maxError: setMaxUcaError,
      },
      {
        name: "Ull",
        min: minUll,
        max: maxUll,
        minError: setMinUllError,
        maxError: setMaxUllError,
      },
      {
        name: "Uan",
        min: minUan,
        max: maxUan,
        minError: setMinUanError,
        maxError: setMaxUanError,
      },
      {
        name: "Ubn",
        min: minUbn,
        max: maxUbn,
        minError: setMinUbnError,
        maxError: setMaxUbnError,
      },
      {
        name: "Ucn",
        min: minUcn,
        max: maxUcn,
        minError: setMinUcnError,
        maxError: setMaxUcnError,
      },
      {
        name: "Uln",
        min: minUln,
        max: maxUln,
        minError: setMinUlnError,
        maxError: setMaxUlnError,
      },
    ];

    const dataI = [
      {
        name: "Ia",
        min: minIa,
        max: maxIa,
        minError: setMinIaError,
        maxError: setMaxIaError,
      },
      {
        name: "Ib",
        min: minIb,
        max: maxIb,
        minError: setMinIbError,
        maxError: setMaxIbError,
      },
      {
        name: "Ic",
        min: minIc,
        max: maxIc,
        minError: setMinIcError,
        maxError: setMaxIcError,
      },
      {
        name: "IN",
        min: minIN,
        max: maxIN,
        minError: setMinINError,
        maxError: setMaxINError,
      },
      {
        name: "IG",
        min: minIG,
        max: maxIG,
        minError: setMinIGError,
        maxError: setMaxIGError,
      },
      {
        nameI: "IAvg",
        min: minIAvg,
        max: maxIAvg,
        minError: setMinIAvgError,
        maxError: setMaxIAvgError,
      },
    ];

    const data4M = [
      {
        name: "Ep",
        min: minEp,
        max: maxEp,
        minError: setMinEpError,
        maxError: setMaxEpError,
      },
      {
        name: "EpR",
        min: minEpR,
        max: maxEpR,
        minError: setMinEpRError,
        maxError: setMaxEpRError,
      },
      {
        name: "EpDR",
        min: minEpDR,
        max: maxEpDR,
        minError: setMinEpDRError,
        maxError: setMaxEpDRError,
      },
      {
        name: "EpDRR",
        min: minEpDRR,
        max: maxEpDRR,
        minError: setMinEpDRRError,
        maxError: setMaxEpDRRError,
      },
      {
        name: "Eq",
        min: minEq,
        max: maxEq,
        minError: setMinEqError,
        maxError: setMaxEqError,
      },
      {
        name: "EqR",
        min: minEqR,
        max: maxEqR,
        minError: setMinEqRError,
        maxError: setMaxEqRError,
      },
      {
        name: "EqDR",
        min: minEqDR,
        max: maxEqDR,
        minError: setMinEqDRError,
        maxError: setMaxEqDRError,
      },
      {
        name: "EqDRR",
        min: minEqDRR,
        max: maxEqDRR,
        minError: setMinEqDRRError,
        maxError: setMaxEqDRRError,
      },
      {
        name: "Es",
        min: minEs,
        max: maxEs,
        minError: setMinEsError,
        maxError: setMaxEsError,
      },
      {
        name: "EsR",
        min: minEsR,
        max: maxEsR,
        minError: setMinEsRError,
        maxError: setMaxEsRError,
      },
      {
        name: "EsDR",
        min: minEsDR,
        max: maxEsDR,
        minError: setMinEsDRError,
        maxError: setMaxEsDRError,
      },
      {
        name: "EsDRR",
        min: minEsDRR,
        max: maxEsDRR,
        minError: setMinEsDRRError,
        maxError: setMaxEsDRRError,
      },
    ];

    const dataPf = [
      {
        name: "Pfa",
        min: minPfa,
        max: maxPfa,
        minError: setMinPfaError,
        maxError: setMaxPfaError,
      },
      {
        name: "Pfb",
        min: minPfb,
        max: maxPfb,
        minError: setMinPfbError,
        maxError: setMaxPfbError,
      },
      {
        name: "Pfc",
        min: minPfc,
        max: maxPfc,
        minError: setMinPfcError,
        maxError: setMaxPfcError,
      },
      {
        name: "PFAvg",
        min: minPFAvg,
        max: maxPFAvg,
        minError: setMinPFAvgError,
        maxError: setMaxPFAvgError,
      },
    ];
    const data2M = [
      {
        name: "Pa",
        min: minPa,
        max: maxPa,
        minError: setMinPaError,
        maxError: setMaxPaError,
      },
      {
        name: "Pb",
        min: minPb,
        max: maxPb,
        minError: setMinPbError,
        maxError: setMaxPbError,
      },
      {
        name: "Pc",
        min: minPc,
        max: maxPc,
        minError: setMinPcError,
        maxError: setMaxPcError,
      },
      {
        name: "Qa",
        min: minQa,
        max: maxQa,
        minError: setMinQaError,
        maxError: setMaxQaError,
      },
      {
        name: "Qb",
        min: minQb,
        max: maxQb,
        minError: setMinQbError,
        maxError: setMaxQbError,
      },
      {
        name: "Qc",
        min: minQc,
        max: maxQc,
        minError: setMinQcError,
        maxError: setMaxQcError,
      },
      {
        name: "QTotal",
        min: minQTotal,
        max: maxQTotal,
        minError: setMinQTotalError,
        maxError: setMaxQTotalError,
      },
    ];
    const dataT = [
      {
        name: "T1",
        min: minT1,
        max: maxT1,
        minError: setMinT1Error,
        maxError: setMaxT1Error,
      },
      {
        name: "T2",
        min: minT2,
        max: maxT2,
        minError: setMinT2Error,
        maxError: setMaxT2Error,
      },
      {
        name: "T3",
        min: minT3,
        max: maxT3,
        minError: setMinT3Error,
        maxError: setMaxT3Error,
      },
    ];
    const dataThd = [
      {
        name: "ThdIa",
        min: minThdIa,
        max: maxThdIa,
        minError: setMinThdIaError,
        maxError: setMaxThdIaError,
      },
      {
        name: "ThdIb",
        min: minThdIb,
        max: maxThdIb,
        minError: setMinThdIbError,
        maxError: setMaxThdIbError,
      },
      {
        name: "ThdIc",
        min: minThdIc,
        max: maxThdIc,
        minError: setMinThdIcError,
        maxError: setMaxThdIcError,
      },
      {
        name: "ThdIn",
        min: minThdIn,
        max: maxThdIn,
        minError: setMinThdInError,
        maxError: setMaxThdInError,
      },
      {
        name: "ThdIg",
        min: minThdIg,
        max: maxThdIg,
        minError: setMinThdIgError,
        maxError: setMaxThdIgError,
      },
      {
        name: "ThdVab",
        min: minThdVab,
        max: maxThdVab,
        minError: setMinThdVabError,
        maxError: setMaxThdVabError,
      },
      {
        name: "ThdVbc",
        min: minThdVbc,
        max: maxThdVbc,
        minError: setMinThdVbcError,
        maxError: setMaxThdVbcError,
      },
      {
        name: "ThdVca",
        min: minThdVca,
        max: maxThdVca,
        minError: setMinThdVcaError,
        maxError: setMaxThdVcaError,
      },
      {
        name: "ThdVll",
        min: minThdVll,
        max: maxThdVll,
        minError: setMinThdVllError,
        maxError: setMaxThdVllError,
      },
      {
        name: "ThdVan",
        min: minThdVan,
        max: maxThdVan,
        minError: setMinThdVanError,
        maxError: setMaxThdVanError,
      },
      {
        name: "ThdVbn",
        min: minThdVbn,
        max: maxThdVbn,
        minError: setMinThdVbnError,
        maxError: setMaxThdVbnError,
      },
      {
        name: "ThdVcn",
        min: minThdVcn,
        max: maxThdVcn,
        minError: setMinThdVcnError,
        maxError: setMaxThdVcnError,
      },
      {
        name: "ThdVln",
        min: minThdVln,
        max: maxThdVln,
        minError: setMinThdVlnError,
        maxError: setMaxThdVlnError,
      },
    ];
    const dataS = [
      {
        name: "Sa",
        min: minSa,
        max: maxSa,
        minError: setMinSaError,
        maxError: setMaxSaError,
      },
      {
        name: "Sb",
        min: minSb,
        max: maxSb,
        minError: setMinSbError,
        maxError: setMaxSbError,
      },
      {
        name: "Sc",
        min: minSc,
        max: maxSc,
        minError: setMinScError,
        maxError: setMaxScError,
      },
    ];

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
    if (frequency === "" || frequency === undefined || frequency === null) {
      toastErrorAccessory("Tần xuất (ms) không được để trống");
      setValidateFrequency(true);
      return false;
    } else {
      setValidateFrequency(false);
    }

    for (const data of dataU) {
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
      } else if (data.min < 0 || data.min > 44999) {
        data.minError(true);
        data.maxError(false);
        toastErrorAccessory(
          `Giá trị Min ${data.name} phải nằm trong khoảng [0;44999]`
        );
        return false;
      } else if (data.max < 1 || data.max > 45000) {
        data.minError(false);
        data.maxError(true);
        toastErrorAccessory(
          `Giá trị Max ${data.name} phải nằm trong khoảng [1;45000]`
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

    for (const data of data2M) {
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
      } else if (data.min < -2000000 || data.min > 1999999) {
        data.minError(true);
        data.maxError(false);
        toastErrorAccessory(
          `Giá trị Min ${data.name} phải nằm trong khoảng [-2000000;1999999]`
        );
        return false;
      } else if (data.max < -1999999 || data.max > 2000000) {
        data.minError(false);
        data.maxError(true);
        toastErrorAccessory(
          `Giá trị Max ${data.name} phải nằm trong khoảng [-1999999;2000000]`
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

    for (const data of data4M) {
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
      } else if (data.min < 0 || data.min > 3999999999) {
        data.minError(true);
        data.maxError(false);
        toastErrorAccessory(
          `Giá trị Min ${data.name} phải nằm trong khoảng [0;3999999999]`
        );
        return false;
      } else if (data.max < 1 || data.max > 4000000000) {
        data.minError(false);
        data.maxError(true);
        toastErrorAccessory(
          `Giá trị Max ${data.name} phải nằm trong khoảng [1;4000000000]`
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

    for (const data of dataI) {
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
      } else if (data.min < 0 || data.min > 9999) {
        data.minError(true);
        data.maxError(false);
        toastErrorAccessory(
          `Giá trị Min ${data.name} phải nằm trong khoảng [0;9999]`
        );
        return false;
      } else if (data.max < 1 || data.max > 10000) {
        data.minError(false);
        data.maxError(true);
        toastErrorAccessory(
          `Giá trị Max ${data.name} phải nằm trong khoảng [1;10000]`
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

    for (const data of dataS) {
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
      } else if (data.min < 0 || data.min > 1999999) {
        data.minError(true);
        data.maxError(false);
        toastErrorAccessory(
          `Giá trị Min ${data.name} phải nằm trong khoảng [0;1999999]`
        );
        return false;
      } else if (data.max < 1 || data.max > 2000000) {
        data.minError(false);
        data.maxError(true);
        toastErrorAccessory(
          `Giá trị Max ${data.name} phải nằm trong khoảng [1;2000000]`
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

    for (const data of dataT) {
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
      } else if (data.min < -100 || data.min > 199) {
        data.minError(true);
        data.maxError(false);
        toastErrorAccessory(
          `Giá trị Min ${data.name} phải nằm trong khoảng [-100;199]`
        );
        return false;
      } else if (data.max < -99 || data.max > 200) {
        data.minError(false);
        data.maxError(true);
        toastErrorAccessory(
          `Giá trị Max ${data.name} phải nằm trong khoảng [-99;200]`
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

    for (const data of dataThd) {
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

    for (const data of dataPf) {
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
      } else if (data.min < -1 || data.min > 0) {
        data.minError(true);
        data.maxError(false);
        toastErrorAccessory(
          `Giá trị Min ${data.name} phải nằm trong khoảng [-1;0]`
        );
        return false;
      } else if (data.max < 0 || data.max > 1) {
        data.minError(false);
        data.maxError(true);
        toastErrorAccessory(
          `Giá trị Max ${data.name} phải nằm trong khoảng [0;1]`
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
    if (
      minPTotal === undefined ||
      maxPTotal === undefined ||
      minPTotal === "" ||
      maxPTotal === ""
    ) {
      setMinPTotalError(true);
      setMaxPTotalError(true);
      toastErrorAccessory(`Giá trị PTotal không được để trống`);
      return false;
    } else if (minPTotal < -6000000 || minPTotal > 5999999) {
      setMinPTotalError(true);
      setMaxPTotalError(false);
      toastErrorAccessory(
        "Giá trị Min PTotal phải nằm trong khoảng [-6000000;5999999]"
      );
      return false;
    } else if (maxPTotal > 6000000 || maxPTotal < -5999999) {
      setMinPTotalError(false);
      setMaxPTotalError(true);
      toastErrorAccessory(
        "Giá trị Max PTotal phải nằm trong khoảng [-5999999:6000000]"
      );
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

    if (
      minSTotal === undefined ||
      maxSTotal === undefined ||
      minSTotal === "" ||
      maxSTotal === ""
    ) {
      setMinSTotalError(true);
      setMaxSTotalError(true);
      toastErrorAccessory(`Giá trị STotal không được để trống`);
      return false;
    } else if (minSTotal < 0 || minSTotal > 5999999) {
      setMinSTotalError(true);
      setMaxSTotalError(false);
      toastErrorAccessory(
        "Giá trị Min STotal phải nằm trong khoảng [0;5999999]"
      );
      return false;
    } else if (maxSTotal > 6000000 || maxSTotal < 1) {
      setMinSTotalError(false);
      setMaxSTotalError(true);
      toastErrorAccessory(
        "Giá trị Max STotal phải nằm trong khoảng [1;6000000]"
      );
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

    if (
      minF === undefined ||
      maxF === undefined ||
      minF === "" ||
      maxF === ""
    ) {
      setMinFError(true);
      setMaxFError(true);
      toastErrorAccessory(`Giá trị QTotal không được để trống`);
      return false;
    } else if (minF < 45 || minF > 64) {
      setMinFError(true);
      setMaxFError(false);
      toastErrorAccessory("Giá trị Min F phải nằm trong khoảng [45;64]");
      return false;
    } else if (maxF > 65 || maxF < 46) {
      setMinFError(false);
      setMaxFError(true);
      toastErrorAccessory("Giá trị Max F phải nằm trong khoảng [46;65]");
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

    return true;
  };

  const [minUab, setMinUab] = useState(0);
  const [maxUab, setMaxUab] = useState(45000);
  const [minUbc, setMinUbc] = useState(0);
  const [maxUbc, setMaxUbc] = useState(45000);
  const [minUca, setMinUca] = useState(0);
  const [maxUca, setMaxUca] = useState(45000);
  const [minUll, setMinUll] = useState(0);
  const [maxUll, setMaxUll] = useState(45000);
  const [minUan, setMinUan] = useState(0);
  const [maxUan, setMaxUan] = useState(45000);
  const [minUbn, setMinUbn] = useState(0);
  const [maxUbn, setMaxUbn] = useState(45000);
  const [minUcn, setMinUcn] = useState(0);
  const [maxUcn, setMaxUcn] = useState(45000);
  const [minUln, setMinUln] = useState(0);
  const [maxUln, setMaxUln] = useState(45000);
  const [minIa, setMinIa] = useState(0);
  const [maxIa, setMaxIa] = useState(10000);
  const [minIb, setMinIb] = useState(0);
  const [maxIb, setMaxIb] = useState(10000);
  const [minIc, setMinIc] = useState(0);
  const [maxIc, setMaxIc] = useState(10000);
  const [minIN, setMinIN] = useState(0);
  const [maxIN, setMaxIN] = useState(10000);
  const [minIG, setMinIG] = useState(0);
  const [maxIG, setMaxIG] = useState(10000);
  const [minIAvg, setMinIAvg] = useState(0);
  const [maxIAvg, setMaxIAvg] = useState(10000);
  const [minPa, setMinPa] = useState(-2000000);
  const [maxPa, setMaxPa] = useState(2000000);
  const [minPb, setMinPb] = useState(-2000000);
  const [maxPb, setMaxPb] = useState(2000000);
  const [minPc, setMinPc] = useState(-2000000);
  const [maxPc, setMaxPc] = useState(2000000);
  const [minPTotal, setMinPTotal] = useState(-6000000);
  const [maxPTotal, setMaxPTotal] = useState(6000000);
  const [minQa, setMinQa] = useState(-2000000);
  const [maxQa, setMaxQa] = useState(2000000);
  const [minQb, setMinQb] = useState(-2000000);
  const [maxQb, setMaxQb] = useState(2000000);
  const [minQc, setMinQc] = useState(-2000000);
  const [maxQc, setMaxQc] = useState(2000000);
  const [minQTotal, setMinQTotal] = useState(-2000000);
  const [maxQTotal, setMaxQTotal] = useState(2000000);
  const [minSa, setMinSa] = useState(0);
  const [maxSa, setMaxSa] = useState(2000000);
  const [minSb, setMinSb] = useState(0);
  const [maxSb, setMaxSb] = useState(2000000);
  const [minSc, setMinSc] = useState(0);
  const [maxSc, setMaxSc] = useState(2000000);
  const [minSTotal, setMinSTotal] = useState(0);
  const [maxSTotal, setMaxSTotal] = useState(6000000);
  const [minPfa, setMinPfa] = useState(-1);
  const [maxPfa, setMaxPfa] = useState(1);
  const [minPfb, setMinPfb] = useState(-1);
  const [maxPfb, setMaxPfb] = useState(1);
  const [minPfc, setMinPfc] = useState(-1);
  const [maxPfc, setMaxPfc] = useState(1);
  const [minPFAvg, setMinPFAvg] = useState(-1);
  const [maxPFAvg, setMaxPFAvg] = useState(1);
  const [minF, setMinF] = useState(45);
  const [maxF, setMaxF] = useState(65);
  const [minEp, setMinEp] = useState(0);
  const [maxEp, setMaxEp] = useState(4000000000);
  const [minEpR, setMinEpR] = useState(0);
  const [maxEpR, setMaxEpR] = useState(4000000000);
  const [minEpDR, setMinEpDR] = useState(0);
  const [maxEpDR, setMaxEpDR] = useState(4000000000);
  const [minEpDRR, setMinEpDRR] = useState(0);
  const [maxEpDRR, setMaxEpDRR] = useState(4000000000);
  const [minEq, setMinEq] = useState(0);
  const [maxEq, setMaxEq] = useState(4000000000);
  const [minEqR, setMinEqR] = useState(0);
  const [maxEqR, setMaxEqR] = useState(4000000000);
  const [minEqDR, setMinEqDR] = useState(0);
  const [maxEqDR, setMaxEqDR] = useState(4000000000);
  const [minEqDRR, setMinEqDRR] = useState(0);
  const [maxEqDRR, setMaxEqDRR] = useState(4000000000);
  const [minEs, setMinEs] = useState(0);
  const [maxEs, setMaxEs] = useState(4000000000);
  const [minEsR, setMinEsR] = useState(0);
  const [maxEsR, setMaxEsR] = useState(4000000000);
  const [minEsDR, setMinEsDR] = useState(0);
  const [maxEsDR, setMaxEsDR] = useState(4000000000);
  const [minEsDRR, setMinEsDRR] = useState(0);
  const [maxEsDRR, setMaxEsDRR] = useState(4000000000);
  const [minT1, setMinT1] = useState(-100);
  const [maxT1, setMaxT1] = useState(200);
  const [minT2, setMinT2] = useState(-100);
  const [maxT2, setMaxT2] = useState(200);
  const [minT3, setMinT3] = useState(-100);
  const [maxT3, setMaxT3] = useState(200);
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

  const inputDataU1 = [
    {
      title: "UAB",
      min: minUab,
      max: maxUab,
      minX: 0,
      maxX: 44999,
      minY: 1,
      maxY: 45000,
      setMin: setMinUab,
      setMax: setMaxUab,
      minError: minUabError,
      maxError: maxUabError,
    },
    {
      title: "UBC",
      min: minUbc,
      max: maxUbc,
      minX: 0,
      maxX: 44999,
      minY: 1,
      maxY: 45000,
      setMin: setMinUbc,
      setMax: setMaxUbc,
      minError: minUbcError,
      maxError: maxUbcError,
    },
    {
      title: "UCA",
      min: minUca,
      max: maxUca,
      minX: 0,
      maxX: 44999,
      minY: 1,
      maxY: 45000,
      setMin: setMinUca,
      setMax: setMaxUca,
      minError: minUcaError,
      maxError: maxUcaError,
    },
  ];

  const inputDataU2 = [
    {
      title: "ULL",
      min: minUll,
      max: maxUll,
      minX: 0,
      maxX: 44999,
      minY: 1,
      maxY: 45000,
      setMin: setMinUll,
      setMax: setMaxUll,
      minError: minUllError,
      maxError: maxUllError,
    },
    {
      title: "UAN",
      min: minUan,
      max: maxUan,
      minX: 0,
      maxX: 44999,
      minY: 1,
      maxY: 45000,
      setMin: setMinUan,
      setMax: setMaxUan,
      minError: minUanError,
      maxError: maxUanError,
    },
    {
      title: "UBN",
      min: minUbn,
      max: maxUbn,
      minX: 0,
      maxX: 44999,
      minY: 1,
      maxY: 45000,
      setMin: setMinUbn,
      setMax: setMaxUbn,
      minError: minUbnError,
      maxError: maxUbnError,
    },
    {
      title: "UCN",
      min: minUcn,
      max: maxUcn,
      minX: 0,
      maxX: 44999,
      minY: 1,
      maxY: 45000,
      setMin: setMinUcn,
      setMax: setMaxUcn,
      minError: minUcnError,
      maxError: maxUcnError,
    },
    {
      title: "ULN",
      min: minUln,
      max: maxUln,
      minX: 0,
      maxX: 44999,
      minY: 1,
      maxY: 45000,
      setMin: setMinUln,
      setMax: setMaxUln,
      minError: minUlnError,
      maxError: maxUlnError,
    },
  ];

  const inputDataI = [
    {
      title: "IA",
      min: minIa,
      max: maxIa,
      minX: 0,
      maxX: 9999,
      minY: 1,
      maxY: 10000,
      setMin: setMinIa,
      setMax: setMaxIa,
      minError: minIaError,
      maxError: maxIaError,
    },
    {
      title: "IB",
      min: minIb,
      max: maxIb,
      minX: 0,
      maxX: 9999,
      minY: 1,
      maxY: 10000,
      setMin: setMinIb,
      setMax: setMaxIb,
      minError: minIbError,
      maxError: maxIbError,
    },
    {
      title: "IC",
      min: minIc,
      max: maxIc,
      minX: 0,
      maxX: 9999,
      minY: 1,
      maxY: 10000,
      setMin: setMinIc,
      setMax: setMaxIc,
      minError: minIcError,
      maxError: maxIcError,
    },
    {
      title: "IN",
      min: minIN,
      max: maxIN,
      minX: 0,
      maxX: 9999,
      minY: 1,
      maxY: 10000,
      setMin: setMinIN,
      setMax: setMaxIN,
      minError: minINError,
      maxError: maxINError,
    },
    {
      title: "IG",
      min: minIG,
      max: maxIG,
      minX: 0,
      maxX: 9999,
      minY: 1,
      maxY: 10000,
      setMin: setMinIG,
      setMax: setMaxIG,
      minError: minIGError,
      maxError: maxIGError,
    },
    {
      title: "Iavg",
      min: minIAvg,
      max: maxIAvg,
      minX: 0,
      maxX: 9999,
      minY: 1,
      maxY: 10000,
      setMin: setMinIAvg,
      setMax: setMaxIAvg,
      minError: minIAvgError,
      maxError: maxIAvgError,
    },
  ];

  const inputDataEP = [
    {
      title: "Ep",
      min: minEp,
      max: maxEp,
      minX: 0,
      maxX: 3999999999,
      minY: 1,
      maxY: 4000000000,
      setMin: setMinEp,
      setMax: setMaxEp,
      minError: minEpError,
      maxError: maxEpError,
    },
    {
      title: "Ep R",
      min: minEpR,
      max: maxEpR,
      minX: 0,
      maxX: 3999999999,
      minY: 1,
      maxY: 4000000000,
      setMin: setMinEpR,
      setMax: setMaxEpR,
      minError: minEpRError,
      maxError: maxEpRError,
    },
    {
      title: "Ep Dr",
      min: minEpDR,
      max: maxEpDR,
      minX: 0,
      maxX: 3999999999,
      minY: 1,
      maxY: 4000000000,
      setMin: setMinEpDR,
      setMax: setMaxEpDR,
      minError: minEpDRError,
      maxError: maxEpDRError,
    },
    {
      title: "Ep Drr",
      min: minEpDRR,
      max: maxEpDRR,
      minX: 0,
      maxX: 3999999999,
      minY: 1,
      maxY: 4000000000,
      setMin: setMinEpDRR,
      setMax: setMaxEpDRR,
      minError: minEpDRRError,
      maxError: maxEpDRRError,
    },
  ];

  const inputDataEQ = [
    {
      title: "Eq",
      min: minEq,
      max: maxEq,
      minX: 0,
      maxX: 3999999999,
      minY: 1,
      maxY: 4000000000,
      setMin: setMinEq,
      setMax: setMaxEq,
      minError: minEqError,
      maxError: maxEqError,
    },
    {
      title: "Eq R",
      min: minEqR,
      max: maxEqR,
      minX: 0,
      maxX: 3999999999,
      minY: 1,
      maxY: 4000000000,
      setMin: setMinEqR,
      setMax: setMaxEqR,
      minError: minEqRError,
      maxError: maxEqRError,
    },
    {
      title: "Eq Dr",
      min: minEqDR,
      max: maxEqDR,
      minX: 0,
      maxX: 3999999999,
      minY: 1,
      maxY: 4000000000,
      setMin: setMinEqDR,
      setMax: setMaxEqDR,
      minError: minEqDRError,
      maxError: maxEqDRError,
    },
    {
      title: "Eq Drr",
      min: minEqDRR,
      max: maxEqDRR,
      minX: 0,
      maxX: 3999999999,
      minY: 1,
      maxY: 4000000000,
      setMin: setMinEqDRR,
      setMax: setMaxEqDRR,
      minError: minEqDRRError,
      maxError: maxEqDRRError,
    },
  ];

  const inputDataP = [
    {
      title: "Pa",
      min: minPa,
      max: maxPa,
      minX: -2000000,
      maxX: 1999999,
      minY: -1999999,
      maxY: 2000000,
      setMin: setMinPa,
      setMax: setMaxPa,
      minError: minPaError,
      maxError: maxPaError,
    },
    {
      title: "Pb",
      min: minPb,
      max: maxPb,
      minX: -2000000,
      maxX: 1999999,
      minY: -1999999,
      maxY: 2000000,
      setMin: setMinPb,
      setMax: setMaxPb,
      minError: minPbError,
      maxError: maxPbError,
    },
    {
      title: "Pc",
      min: minPc,
      max: maxPc,
      minX: -2000000,
      maxX: 1999999,
      minY: -1999999,
      maxY: 2000000,
      setMin: setMinPc,
      setMax: setMaxPc,
      minError: minPcError,
      maxError: maxPcError,
    },
    {
      title: "P total",
      min: minPTotal,
      max: maxPTotal,
      minX: -6000000,
      maxX: 5999999,
      minY: -5999999,
      maxY: 6000000,
      setMin: setMinPTotal,
      setMax: setMaxPTotal,
      minError: minPTotalError,
      maxError: maxPTotalError,
    },
  ];

  const inputDataQ = [
    {
      title: "Qa",
      min: minQa,
      max: maxQa,
      minX: -2000000,
      maxX: 1999999,
      minY: -1999999,
      maxY: 2000000,
      setMin: setMinQa,
      setMax: setMaxQa,
      minError: minQaError,
      maxError: maxQaError,
    },
    {
      title: "Qb",
      min: minQb,
      max: maxQb,
      minX: -2000000,
      maxX: 1999999,
      minY: -1999999,
      maxY: 2000000,
      setMin: setMinQb,
      setMax: setMaxQb,
      minError: minQbError,
      maxError: maxQbError,
    },
    {
      title: "Qc",
      min: minQc,
      max: maxQc,
      minX: -2000000,
      maxX: 1999999,
      minY: -1999999,
      maxY: 2000000,
      setMin: setMinQc,
      setMax: setMaxQc,
      minError: minQcError,
      maxError: maxQcError,
    },
    {
      title: "Q total",
      min: minQTotal,
      max: maxQTotal,
      minX: -2000000,
      maxX: 1999999,
      minY: -1999999,
      maxY: 2000000,
      setMin: setMinQTotal,
      setMax: setMaxQTotal,
      minError: minQTotalError,
      maxError: maxQTotalError,
    },
  ];

  const inputDataS = [
    {
      title: "Sa",
      min: minSa,
      max: maxSa,
      minX: -2000000,
      maxX: 1999999,
      minY: -1999999,
      maxY: 2000000,
      setMin: setMinSa,
      setMax: setMaxSa,
      minError: minSaError,
      maxError: maxSaError,
    },
    {
      title: "Sb",
      min: minSb,
      max: maxSb,
      minX: -2000000,
      maxX: 1999999,
      minY: -1999999,
      maxY: 2000000,
      setMin: setMinSb,
      setMax: setMaxSb,
      minError: minSbError,
      maxError: maxSbError,
    },
    {
      title: "Sc",
      min: minSc,
      max: maxSc,
      minX: -2000000,
      maxX: 1999999,
      minY: -1999999,
      maxY: 2000000,
      setMin: setMinSc,
      setMax: setMaxSc,
      minError: minScError,
      maxError: maxScError,
    },
    {
      title: "S total",
      min: minSTotal,
      max: maxSTotal,
      minX: 0,
      maxX: 5999999,
      minY: 1,
      maxY: 6000000,
      setMin: setMinSTotal,
      setMax: setMaxSTotal,
      minError: minSTotalError,
      maxError: maxSTotalError,
    },
  ];

  const inputDataPf = [
    {
      title: "Pfa",
      min: minPfa,
      max: maxPfa,
      minX: -1,
      maxX: 0,
      minY: 0,
      maxY: 1,
      setMin: setMinPfa,
      setMax: setMaxPfa,
      minError: minPfaError,
      maxError: maxPfaError,
    },
    {
      title: "Pfb",
      min: minPfb,
      max: maxPfb,
      minX: -1,
      maxX: 0,
      minY: 0,
      maxY: 1,
      setMin: setMinPfb,
      setMax: setMaxPfb,
      minError: minPfbError,
      maxError: maxPfbError,
    },
    {
      title: "Pfc",
      min: minPfc,
      max: maxPfc,
      minX: -1,
      maxX: 0,
      minY: 0,
      maxY: 1,
      setMin: setMinPfc,
      setMax: setMaxPfc,
      minError: minPfcError,
      maxError: maxPfcError,
    },
    {
      title: "Pf Avg",
      min: minPFAvg,
      max: maxPFAvg,
      minX: -1,
      maxX: 0,
      minY: 0,
      maxY: 1,
      setMin: setMinPFAvg,
      setMax: setMaxPFAvg,
      minError: minPFAvgError,
      maxError: maxPFAvgError,
    },
  ];

  const inputDataEs = [
    {
      title: "Es",
      min: minEs,
      max: maxEs,
      minX: 0,
      maxX: 3999999999,
      minY: 1,
      maxY: 4000000000,
      setMin: setMinEs,
      setMax: setMaxEs,
      minError: minEsError,
      maxError: maxEsError,
    },
    {
      title: "Es R",
      min: minEsR,
      max: maxEsR,
      minX: 0,
      maxX: 3999999999,
      minY: 1,
      maxY: 4000000000,
      setMin: setMinEsR,
      setMax: setMaxEsR,
      minError: minEsRError,
      maxError: maxEsRError,
    },
    {
      title: "Es Dr",
      min: minEsDR,
      max: maxEsDR,
      minX: 0,
      maxX: 3999999999,
      minY: 1,
      maxY: 4000000000,
      setMin: setMinEsDR,
      setMax: setMaxEsDR,
      minError: minEsDRError,
      maxError: maxEsDRError,
    },
    {
      title: "Es Drr",
      min: minEsDRR,
      max: maxEsDRR,
      minX: 0,
      maxX: 3999999999,
      minY: 1,
      maxY: 4000000000,
      setMin: setMinEsDRR,
      setMax: setMaxEsDRR,
      minError: minEsDRRError,
      maxError: maxEsDRRError,
    },
  ];

  const inputDataT = [
    {
      title: "T1",
      min: minT1,
      max: maxT1,
      minX: -100,
      maxX: 199,
      minY: 99,
      maxY: 200,
      setMin: setMinT1,
      setMax: setMaxT1,
      minError: minT1Error,
      maxError: maxT1Error,
    },
    {
      title: "T2",
      min: minT2,
      max: maxT2,
      minX: -100,
      maxX: 199,
      minY: 99,
      maxY: 200,
      setMin: setMinT2,
      setMax: setMaxT2,
      minError: minT2Error,
      maxError: maxT2Error,
    },
    {
      title: "T3",
      min: minT3,
      max: maxT3,
      minX: -100,
      maxX: 199,
      minY: 99,
      maxY: 200,
      setMin: setMinT3,
      setMax: setMaxT3,
      minError: minT3Error,
      maxError: maxT3Error,
    },
  ];
  const inputDataThdI = [
    {
      title: "ThdIa",
      min: minThdIa,
      max: maxThdIa,
      minX: 0,
      maxX: 99,
      minY: 1,
      maxY: 100,
      setMin: setMinThdIa,
      setMax: setMaxThdIa,
      minError: minThdIaError,
      maxError: maxThdIaError,
    },
    {
      title: "ThdIb",
      min: minThdIb,
      max: maxThdIb,
      minX: 0,
      maxX: 99,
      minY: 1,
      maxY: 100,
      setMin: setMinThdIb,
      setMax: setMaxThdIb,
      minError: minThdIbError,
      maxError: maxThdIbError,
    },
    {
      title: "ThdIc",
      min: minThdIc,
      max: maxThdIc,
      minX: 0,
      maxX: 99,
      minY: 1,
      maxY: 100,
      setMin: setMinThdIc,
      setMax: setMaxThdIc,
      minError: minThdIcError,
      maxError: maxThdIcError,
    },
    {
      title: "ThdIn",
      min: minThdIn,
      max: maxThdIn,
      minX: 0,
      maxX: 99,
      minY: 1,
      maxY: 100,
      setMin: setMinThdIn,
      setMax: setMaxThdIn,
      minError: minThdInError,
      maxError: maxThdInError,
    },
    {
      title: "ThdIg",
      min: minThdIg,
      max: maxThdIg,
      minX: 0,
      maxX: 99,
      minY: 1,
      maxY: 100,
      setMin: setMinThdIg,
      setMax: setMaxThdIg,
      minError: minThdIgError,
      maxError: maxThdIgError,
    },
  ];

  const inputDataThdV = [
    {
      title: "ThdVab",
      min: minThdVab,
      max: maxThdVab,
      minX: 0,
      maxX: 99,
      minY: 1,
      maxY: 100,
      setMin: setMinThdVab,
      setMax: setMaxThdVab,
      minError: minThdVabError,
      maxError: maxThdVabError,
    },
    {
      title: "ThdVbc",
      min: minThdVbc,
      max: maxThdVbc,
      minX: 0,
      maxX: 99,
      minY: 1,
      maxY: 100,
      setMin: setMinThdVbc,
      setMax: setMaxThdVbc,
      minError: minThdVbcError,
      maxError: maxThdVbcError,
    },
    {
      title: "ThdVca",
      min: minThdVca,
      max: maxThdVca,
      minX: 0,
      maxX: 99,
      minY: 1,
      maxY: 100,
      setMin: setMinThdVca,
      setMax: setMaxThdVca,
      minError: minThdVcaError,
      maxError: maxThdVcaError,
    },
    {
      title: "ThdVll",
      min: minThdVll,
      max: maxThdVll,
      minX: 0,
      maxX: 99,
      minY: 1,
      maxY: 100,
      setMin: setMinThdVll,
      setMax: setMaxThdVll,
      minError: minThdVllError,
      maxError: maxThdVllError,
    },
    {
      title: "ThdVan",
      min: minThdVan,
      max: maxThdVan,
      minX: 0,
      maxX: 99,
      minY: 1,
      maxY: 100,
      setMin: setMinThdVan,
      setMax: setMaxThdVan,
      minError: minThdVanError,
      maxError: maxThdVanError,
    },
    {
      title: "ThdVbn",
      min: minThdVbn,
      max: maxThdVbn,
      minX: 0,
      maxX: 99,
      minY: 1,
      maxY: 100,
      setMin: setMinThdVbn,
      setMax: setMaxThdVbn,
      minError: minThdVbnError,
      maxError: maxThdVbnError,
    },
    {
      title: "ThdVcn",
      min: minThdVcn,
      max: maxThdVcn,
      minX: 0,
      maxX: 99,
      minY: 1,
      maxY: 100,
      setMin: setMinThdVcn,
      setMax: setMaxThdVcn,
      minError: minThdVcnError,
      maxError: maxThdVcnError,
    },
    {
      title: "ThdVln",
      min: minThdVln,
      max: maxThdVln,
      minX: 0,
      maxX: 99,
      minY: 1,
      maxY: 100,
      setMin: setMinThdVln,
      setMax: setMaxThdVln,
      minError: minThdVlnError,
      maxError: maxThdVlnError,
    },
  ];

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
              {inputDataU1.map((data, index) => (
                <InputMinMax
                  key={index}
                  className="mt-2"
                  title={data.title}
                  minValue={data.min}
                  maxValue={data.max}
                  minX={data.minX}
                  maxX={data.maxX}
                  minY={data.minY}
                  maxY={data.maxY}
                  setMinValue={data.setMin}
                  setMaxValue={data.setMax}
                  statusMin={data.minError ? "error" : "default"}
                  statusMax={data.maxError ? "error" : "default"}
                />
              ))}
            </Card>
            <Card bordered={true} className="mt-2 bg-light">
              {inputDataU2.map((data, index) => (
                <InputMinMax
                  key={index}
                  className="mt-2"
                  title={data.title}
                  minValue={data.min}
                  maxValue={data.max}
                  minX={data.minX}
                  maxX={data.maxX}
                  minY={data.minY}
                  maxY={data.maxY}
                  setMinValue={data.setMin}
                  setMaxValue={data.setMax}
                  statusMin={data.minError ? "error" : "default"}
                  statusMax={data.maxError ? "error" : "default"}
                />
              ))}
            </Card>
            <Card bordered={true} className="mt-2 bg-light">
              {inputDataI.map((data, index) => (
                <InputMinMax
                  key={index}
                  className="mt-2"
                  title={data.title}
                  minValue={data.min}
                  maxValue={data.max}
                  minX={data.minX}
                  maxX={data.maxX}
                  minY={data.minY}
                  maxY={data.maxY}
                  setMinValue={data.setMin}
                  setMaxValue={data.setMax}
                  statusMin={data.minError ? "error" : "default"}
                  statusMax={data.maxError ? "error" : "default"}
                />
              ))}
            </Card>
            <Card bordered={true} className="mt-2 bg-light">
              {inputDataEP.map((data, index) => (
                <InputMinMax
                  key={index}
                  className="mt-2"
                  title={data.title}
                  minValue={data.min}
                  maxValue={data.max}
                  minX={data.minX}
                  maxX={data.maxX}
                  minY={data.minY}
                  maxY={data.maxY}
                  setMinValue={data.setMin}
                  setMaxValue={data.setMax}
                  statusMin={data.minError ? "error" : "default"}
                  statusMax={data.maxError ? "error" : "default"}
                />
              ))}
            </Card>
            <Card bordered={true} className="mt-2 bg-light">
              {inputDataEQ.map((data, index) => (
                <InputMinMax
                  key={index}
                  className="mt-2"
                  title={data.title}
                  minValue={data.min}
                  maxValue={data.max}
                  minX={data.minX}
                  maxX={data.maxX}
                  minY={data.minY}
                  maxY={data.maxY}
                  setMinValue={data.setMin}
                  setMaxValue={data.setMax}
                  statusMin={data.minError ? "error" : "default"}
                  statusMax={data.maxError ? "error" : "default"}
                />
              ))}
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
              {inputDataP.map((data, index) => (
                <InputMinMax
                  key={index}
                  className="mt-2"
                  title={data.title}
                  minValue={data.min}
                  maxValue={data.max}
                  minX={data.minX}
                  maxX={data.maxX}
                  minY={data.minY}
                  maxY={data.maxY}
                  setMinValue={data.setMin}
                  setMaxValue={data.setMax}
                  statusMin={data.minError ? "error" : "default"}
                  statusMax={data.maxError ? "error" : "default"}
                />
              ))}
            </Card>
            <Card bordered={true} className="mt-2  bg-light">
              {inputDataQ.map((data, index) => (
                <InputMinMax
                  key={index}
                  className="mt-2"
                  title={data.title}
                  minValue={data.min}
                  maxValue={data.max}
                  minX={data.minX}
                  maxX={data.maxX}
                  minY={data.minY}
                  maxY={data.maxY}
                  setMinValue={data.setMin}
                  setMaxValue={data.setMax}
                  statusMin={data.minError ? "error" : "default"}
                  statusMax={data.maxError ? "error" : "default"}
                />
              ))}
            </Card>
            <Card bordered={true} className=" mt-2 bg-light">
              {inputDataS.map((data, index) => (
                <InputMinMax
                  key={index}
                  className="mt-2"
                  title={data.title}
                  minValue={data.min}
                  maxValue={data.max}
                  minX={data.minX}
                  maxX={data.maxX}
                  minY={data.minY}
                  maxY={data.maxY}
                  setMinValue={data.setMin}
                  setMaxValue={data.setMax}
                  statusMin={data.minError ? "error" : "default"}
                  statusMax={data.maxError ? "error" : "default"}
                />
              ))}
            </Card>
            <Card bordered={true} className="mt-2 bg-light">
              {inputDataPf.map((data, index) => (
                <InputMinMax
                  key={index}
                  className="mt-2"
                  title={data.title}
                  minValue={data.min}
                  maxValue={data.max}
                  minX={data.minX}
                  maxX={data.maxX}
                  minY={data.minY}
                  maxY={data.maxY}
                  setMinValue={data.setMin}
                  setMaxValue={data.setMax}
                  statusMin={data.minError ? "error" : "default"}
                  statusMax={data.maxError ? "error" : "default"}
                />
              ))}
            </Card>
            <Card bordered={true} className="mt-2 bg-light">
              {inputDataEs.map((data, index) => (
                <InputMinMax
                  key={index}
                  className="mt-2"
                  title={data.title}
                  minValue={data.min}
                  maxValue={data.max}
                  minX={data.minX}
                  maxX={data.maxX}
                  minY={data.minY}
                  maxY={data.maxY}
                  setMinValue={data.setMin}
                  setMaxValue={data.setMax}
                  statusMin={data.minError ? "error" : "default"}
                  statusMax={data.maxError ? "error" : "default"}
                />
              ))}
            </Card>
          </div>
          {/* Cột 3 */}

          <div className="col-4">
            <Card bordered={true} className="bg-light">
              {inputDataT.map((data, index) => (
                <InputMinMax
                  key={index}
                  className="mt-2"
                  title={data.title}
                  minValue={data.min}
                  maxValue={data.max}
                  minX={data.minX}
                  maxX={data.maxX}
                  minY={data.minY}
                  maxY={data.maxY}
                  setMinValue={data.setMin}
                  setMaxValue={data.setMax}
                  statusMin={data.minError ? "error" : "default"}
                  statusMax={data.maxError ? "error" : "default"}
                />
              ))}
            </Card>
            <Card bordered={true} className="mt-2 bg-light">
              {inputDataThdI.map((data, index) => (
                <InputMinMax
                  key={index}
                  className="mt-2"
                  title={data.title}
                  minValue={data.min}
                  maxValue={data.max}
                  minX={data.minX}
                  maxX={data.maxX}
                  minY={data.minY}
                  maxY={data.maxY}
                  setMinValue={data.setMin}
                  setMaxValue={data.setMax}
                  statusMin={data.minError ? "error" : "default"}
                  statusMax={data.maxError ? "error" : "default"}
                />
              ))}
            </Card>
            <Card bordered={true} className="mt-2 bg-light">
              {inputDataThdV.map((data, index) => (
                <InputMinMax
                  key={index}
                  className="mt-2"
                  title={data.title}
                  minValue={data.min}
                  maxValue={data.max}
                  minX={data.minX}
                  maxX={data.maxX}
                  minY={data.minY}
                  maxY={data.maxY}
                  setMinValue={data.setMin}
                  setMaxValue={data.setMax}
                  statusMin={data.minError ? "error" : "default"}
                  statusMax={data.maxError ? "error" : "default"}
                />
              ))}
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
