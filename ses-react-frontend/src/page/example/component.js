import React from "react";
import { ReactDOM } from "react";
import "../../styles/Style.css";
import { Button, Card } from "antd";
function ComponentExample() {
  return (
    <>
      <h1>Component API Example</h1>
      <div>
        <span className="title">1.Phương thức setState()</span>
      </div>
      <p className="content">
        Được sử dụng để cập nhật trạng thái{" "}
        <span style={{ fontWeight: "bold" }}>Component</span> đồng thời react sẽ
        re-render lại component trên giao diện.
      </p>
      <div>
        <span className="title">2.Phương thức forceUpdate()</span>
      </div>
      <p className="content">
        Có thể được dùng để cập nhật lại component một cách thủ công
      </p>

      <Card
        size="default"
        title="Example of forceUpade()"
        style={{
          width: 500,
        }}
      >
        <Random></Random>
      </Card>
      <span className="title">3. ReactDOM.findDOMNode()</span>
      <p className="content">
        Khi Component được render trên giao diện bạn sẽ có được một mô hình DOM.
        Để truy cập vào NODE của DOM từ component class ReactDOM cung cấp một
        phương thức để tìm đối tương Node tương ứng với tham số của phương thức
        ReactDOM.findDOMNode(param)
      </p>
      <Card
        size="default"
        title="Example of ReactDOM.findDOMNode()"
        style={{
          width: 500,
        }}
      >
        <Fruits></Fruits>
      </Card>
    </>
  );
}
class Random extends React.Component {
  constructor(props) {
    super(props);
  }

  newRandomValue(event) {
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <Button onClick={(event) => this.newRandomValue(event)}>Random</Button>
        <div className="content">Random Value: {Math.random()}</div>
      </div>
    );
  }
}
class Fruits extends React.Component {
  doFind() {
    let node = ReactDOM.findDOMNode(this);
    node.style.border = "1px solid red";
  }
  render() {
    return (
      <ul>
        <li>Apple</li>
        <li>Apricot</li>
        <li>Banana</li>
        <li>
          <Button onClick={() => this.doFind()}>Find Root Node</Button>
        </li>
      </ul>
    );
  }
}
export default ComponentExample;
