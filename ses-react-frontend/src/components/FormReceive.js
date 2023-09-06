import {
  FieldNumberOutlined,
  FieldStringOutlined,
  UserOutlined,
  LinkOutlined,
} from "@ant-design/icons";
import { Input } from "antd";
import React from "react";

const FormReceive = (props) => {
  const isInputEmpty = (value) => (value ? value.trim() === "" : true);
  return (
    <>
      <Input
        style={{
          width: "90%",
          backgroundColor: isInputEmpty(props.url) ? "red" : "",
        }}
        placeholder="tcp://localhost:1883"
        addonAfter={<LinkOutlined />}
        value={props.url}
        onChange={(event) => props.setUrl(event.target.value)}
      />
      <Input
        className="mt-3"
        style={{
          width: "90%",
          backgroundColor: isInputEmpty(props.username) ? "red" : "",
        }}
        placeholder="Username"
        addonAfter={<UserOutlined />}
        value={props.username}
        onChange={(event) => props.setUsername(event.target.value)}
      />
      <Input
        className="mt-3"
        style={{
          width: "90%",
          backgroundColor: isInputEmpty(props.password) ? "red" : "",
        }}
        placeholder="Password"
        type="password"
        addonAfter={<FieldNumberOutlined />}
        value={props.password}
        onChange={(event) => props.setPassword(event.target.value)}
      />
      <Input
        style={{
          width: "90%",
          backgroundColor: isInputEmpty(props.client) ? "red" : "",
        }}
        className="mt-3"
        addonAfter={<FieldStringOutlined />}
        placeholder="Client id"
        value={props.client}
        onChange={(event) => props.setClient(event.target.value)}
      />
      <Input
        className="mt-3"
        placeholder="Toppic"
        style={{
          width: "90%",
          backgroundColor: isInputEmpty(props.topic) ? "red" : "",
        }}
        addonAfter={<FieldStringOutlined />}
        value={props.topic}
        onChange={(event) => props.setTopic(event.target.value)}
      />
      <Input
        className="mt-3"
        style={{
          width: "90%",
          backgroundColor: isInputEmpty(props.typeSystem) ? "red" : "",
        }}
        placeholder="TypeSystem"
        addonAfter={<FieldStringOutlined />}
        value={props.typeSystem}
        onChange={(event) => props.setTypeSystem(event.target.value)}
      />
      <Input
        className="mt-3"
        style={{
          width: "90%",
          backgroundColor: isInputEmpty(props.typeDevice) ? "red" : "",
        }}
        placeholder="TypeDevice"
        addonAfter={<FieldStringOutlined />}
        value={props.typeDevice}
        onChange={(event) => props.setTypeDevice(event.target.value)}
      />
      <Input
        className="mt-3"
        style={{
          width: "90%",
          backgroundColor: isInputEmpty(props.country) ? "red" : "",
        }}
        placeholder="Country"
        addonAfter={<FieldStringOutlined />}
        value={props.country}
        onChange={(event) => props.setCountry(event.target.value)}
      />
      <Input
        className="mt-3"
        style={{
          width: "90%",
          backgroundColor: isInputEmpty(props.province) ? "red" : "",
        }}
        placeholder="Province"
        addonAfter={<FieldStringOutlined />}
        value={props.province}
        onChange={(event) => props.setProvince(event.target.value)}
      />
      <Input
        style={{
          width: "90%",
          backgroundColor: isInputEmpty(props.codeCustomer) ? "red" : "",
        }}
        className="mt-3"
        addonAfter={<FieldStringOutlined />}
        placeholder="CodeCustomer"
        value={props.codeCustomer}
        onChange={(event) => props.setCodeCustomer(event.target.value)}
      />
    </>
  );
};

export default FormReceive;
