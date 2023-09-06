import { FieldStringOutlined } from "@ant-design/icons";
import { Input } from "antd";
import React from "react";
const FormDevice = (props) => {
  const isInputEmpty = (value) => (value ? value.trim() === "" : true);
  return (
    <>
      <Input
        className="mt-1"
        placeholder="CodeProject"
        style={{
          width: "90%",
          backgroundColor: isInputEmpty(props.codeProject) ? "red" : "",
        }}
        addonAfter={<FieldStringOutlined />}
        value={props.codeProject}
        onChange={(event) => props.setCodeProject(event.target.value)}
      />

      <Input
        style={{
          width: "90%",
          backgroundColor: isInputEmpty(props.a1) ? "red" : "",
        }}
        className="mt-3"
        placeholder="A1"
        addonAfter={<FieldStringOutlined />}
        value={props.a1}
        onChange={(event) => props.setA1(event.target.value)}
      />
      <Input
        className="mt-3"
        style={{
          width: "90%",
          backgroundColor: isInputEmpty(props.a2) ? "red" : "",
        }}
        placeholder="A2"
        addonAfter={<FieldStringOutlined />}
        value={props.a2}
        onChange={(event) => props.setA2(event.target.value)}
      />
      <Input
        className="mt-3"
        style={{
          width: "90%",
          backgroundColor: isInputEmpty(props.a3) ? "red" : "",
        }}
        placeholder="A3"
        addonAfter={<FieldStringOutlined />}
        value={props.a3}
        onChange={(event) => props.setA3(event.target.value)}
      />
      <Input
        style={{
          width: "90%",
          backgroundColor: isInputEmpty(props.a4) ? "red" : "",
        }}
        className="mt-3"
        addonAfter={<FieldStringOutlined />}
        placeholder="A4"
        value={props.a4}
        onChange={(event) => props.setA4(event.target.value)}
      />
      <Input
        className="mt-3"
        placeholder="A5"
        style={{
          width: "90%",
          backgroundColor: isInputEmpty(props.a5) ? "red" : "",
        }}
        addonAfter={<FieldStringOutlined />}
        value={props.a5}
        onChange={(event) => props.setA5(event.target.value)}
      />

      <Input
        className="mt-3"
        style={{
          width: "90%",
          backgroundColor: isInputEmpty(props.func) ? "red" : "",
        }}
        placeholder="Func"
        addonAfter={<FieldStringOutlined />}
        value={props.func}
        onChange={(event) => props.setFunc(event.target.value)}
      />
      <Input
        style={{
          width: "90%",
          backgroundColor: isInputEmpty(props.messageType) ? "red" : "",
        }}
        className="mt-3"
        addonAfter={<FieldStringOutlined />}
        placeholder="MessageType"
        value={props.messageType}
        onChange={(event) => props.setMessageType(event.target.value)}
      />
      <Input
        className="mt-3"
        placeholder="Crc"
        style={{
          width: "90%",
          backgroundColor: isInputEmpty(props.crc) ? "red" : "",
        }}
        addonAfter={<FieldStringOutlined />}
        value={props.crc}
        onChange={(event) => props.setCrc(event.target.value)}
      />
    </>
  );
};

export default FormDevice;
