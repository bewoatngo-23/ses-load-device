import { Input } from "antd";
import React from "react";
import className from "classnames";

const InputMinMax = (props) => {
  const inputMinClass = className({
    "ms-3": true,
    "ant-input": true,
    "error-input": props.statusMin === "error" || false,
  });

  const inputMaxClass = className({
    "ant-input": true,
    "error-input": props.statusMax === "error" || false,
  });

  return (
    <div className={props.className}>
      <div className="row">
        <span className="ms-4 col-3" style={{ fontWeight: "bold" }}>
          {props.title}
        </span>
        <Input
          status={props.statusMin}
          className={inputMinClass}
          type="number"
          bordered="true"
          style={{ width: "100px" }}
          min={props.minX}
          max={props.maxX}
          value={props.minValue}
          onChange={(event) => props.setMinValue(event.target.value)}
        />
        {"~"}
        <Input
          status={props.statusMax}
          type="number"
          className={inputMaxClass}
          bordered="true"
          style={{ width: "100px" }}
          value={props.maxValue}
          min={props.minY}
          max={props.maxY}
          onChange={(event) => props.setMaxValue(event.target.value)}
        />
      </div>
    </div>
  );
};

export default InputMinMax;
