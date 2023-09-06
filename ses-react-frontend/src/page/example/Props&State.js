import React from "react";
import "../../styles/Style.css";
import { Table } from "antd";
function PropsAndState() {
  const dataSource = [
    {
      key: "1",
      title: "Có thể nhận giá trị ban đầu từ component cha",
      props: "Có",
      state: "Có",
    },
    {
      key: "2",
      title: "Có thể thay đổi bởi component cha",
      props: "Có",
      state: "Không",
    },
    {
      key: "3",
      title: "Có thể set giá trị mặc định bên trong component",
      props: "Có",
      state: "Có",
    },
    {
      key: "4",
      title: "Có thể thay đổi bên trong component",
      props: "Không",
      state: "Có",
    },
    {
      key: "5",
      title: "Có thể set giá trị ban đầu cho các component con",
      props: "Có",
      state: "Có",
    },
    {
      key: "6",
      title: "Có thể thay đổi trong các component con",
      props: "Có",
      state: "Không",
    },
  ];
  const columns = [
    {
      title: "",
      dataIndex: "title",
      key: "name",
    },
    {
      title: "Props",
      dataIndex: "props",
      key: "age",
    },
    {
      title: "State",
      dataIndex: "state",
      key: "address",
    },
  ];
  return (
    <>
      <div>
        <span className="title">So sánh</span>
        <Table pagination={false} dataSource={dataSource} columns={columns} />;
      </div>
    </>
  );
}
export default PropsAndState;
