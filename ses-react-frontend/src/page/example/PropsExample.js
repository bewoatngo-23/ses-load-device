import React from "react";
import props from "../../asset/images/props.png";
import "../../styles/Style.css";
import { Card, Image } from "antd";
function PropsExample() {
  return (
    <>
      <div>
        <span className="title">1. Props</span>
        <p className="content">
          Props là một object tích hợp trong react lưu trữ giá trị các thuộc
          tính của thẻ và hoạt động tương tự như thuộc tính HTML
        </p>
        <p className="content">
          Props cho phép chúng ta giao tiếp giữa các components với nhau bằng
          cách truyền qua lại giữa các components
        </p>
        <Card
          title={"Props"}
          bordered={false}
          style={{
            width: 700,
          }}
        >
          <Image width={300} src={props} />
          <Properties name={"Kieen ches rangf"}></Properties>
        </Card>
        <p className="content">
          <p>Bạn có thể khởi tạo giá trị mặc định cho props.someProp </p>
          <p>
            Bạn có thể sét đặt giá trị cho props.someProp từ attribute someProp
            của thẻ Bạn có thể khởi tạo giá trị mặc định cho props.someProp
          </p>
          <p>
            Từ bên trong Component (class) bạn không có cách nào để gán giá trị
            mới cho props.someProp.
          </p>
        </p>
      </div>
    </>
  );
}
export default PropsExample;

function Properties(props) {
  return (
    <>
      <h3>Welcome to website, {props.name}</h3>
    </>
  );
}
