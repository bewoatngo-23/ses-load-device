import { Button, Card, Input, Select } from "antd";
import { Option } from "antd/es/mentions";
import React, { useState } from "react";
function FormExample() {
  const [formInput, setFormInput] = useState();
  const [formTextarea, setFormTextarea] = useState();
  const [formSelect, setFormSelect] = useState();
  const handleChangeFormInput = (event) => {
    setFormInput(event.target.value);
  };
  const handleChangeFormTexarea = (event) => {
    setFormTextarea(event.target.value);
  };
  const handleChangeFormSelect = (value) => {
    setFormSelect(value);
  };
  const onSubmit = () => {
    alert("value form input: " + formInput);
  };
  const onReset = () => {
    setFormInput("");
  };
  const onSubmit1 = () => {
    alert("value form textarea: " + formTextarea);
  };
  const onReset1 = () => {
    setFormTextarea("");
  };
  const onSubmit2 = () => {
    alert("value form select: " + formSelect);
  };

  return (
    <>
      <h1>Form Example</h1>
      <div className="">
        <span className="title">1.Form input</span>
        <p className="content">
          <Card
            title={"Input"}
            bordered={false}
            style={{
              width: 500,
            }}
          >
            <Input
              value={formInput}
              onChange={(event) => handleChangeFormInput(event)}
            />
            <p>{formInput}</p>
            <Button onClick={onSubmit}>Submit</Button>
            <Button className="ms-2" onClick={onReset}>
              Reset Form
            </Button>
          </Card>
        </p>
      </div>
      <div className="">
        <span className="title">2.Form textarea</span>
        <p className="content">
          <Card
            title={"Textarea"}
            bordered={false}
            style={{
              width: 500,
            }}
          >
            <Input.TextArea
              type="text"
              value={formTextarea}
              onChange={(event) => handleChangeFormTexarea(event)}
            />
            <p>{formTextarea}</p>
            <Button onClick={onSubmit1}>Submit</Button>
            <Button className="ms-2" onClick={onReset1}>
              Reset Form
            </Button>
          </Card>
        </p>
      </div>
      <div className="">
        <span className="title">3.Form Select/Option</span>
        <p className="content">
          <Card
            title={"Selection"}
            bordered={false}
            style={{
              width: 500,
            }}
          >
            <Select
              defaultValue="jack"
              style={{
                width: 120,
              }}
              onChange={handleChangeFormSelect}
              options={[
                {
                  value: "jack",
                  label: "Jack",
                },
                {
                  value: "lucy",
                  label: "Lucy",
                },
                {
                  value: "Yiminghe",
                  label: "yiminghe",
                },
                {
                  value: "disabled",
                  label: "Disabled",
                  disabled: true,
                },
              ]}
            />
            <Button className="ms-2" onClick={onSubmit2}>
              Submit
            </Button>
          </Card>
        </p>
      </div>
    </>
  );
}
export default FormExample;
