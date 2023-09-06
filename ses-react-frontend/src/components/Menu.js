import {
  FacebookOutlined,
  ChromeOutlined,
  WindowsOutlined,
  GooglePlusOutlined,
  TwitterOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
  HomeOutlined,
  FormOutlined,
  RedoOutlined,
  StockOutlined,
  SlidersOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Image, Layout, Menu, theme } from "antd";
import { Footer } from "antd/es/layout/layout";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../asset/images/logo.png";
const { Header, Content, Sider } = Layout;

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem(<Link to={"/"}>Home</Link>, "1", <HomeOutlined />),
  // getItem("React example", "2", <MailOutlined />, [
  //   getItem("Props and State", "3", <MailOutlined />, [
  //     getItem(<Link to={"/props"}>Props</Link>, "4", <MailOutlined />),
  //     getItem(<Link to={"/state"}>State</Link>, "5", <MailOutlined />),
  //     getItem(
  //       <Link to={"/propsvsstate"}>Props with State</Link>,
  //       "6",
  //       <MailOutlined />
  //     ),
  //   ]),
  //   getItem(
  //     <Link to={"/event"}>Event Handling</Link>,
  //     "7",
  //     <DesktopOutlined />
  //   ),
  //   getItem(
  //     <Link to={"/component"}>Component API</Link>,
  //     "8",
  //     <ContainerOutlined />
  //   ),
  //   getItem(<Link to={"/lifecycle"}>Life Cycle</Link>, "5", <RedoOutlined />),
  //   getItem(
  //     <Link to={"/reactrefs"}>React Refs</Link>,
  //     "69",
  //     <FacebookOutlined />
  //   ),
  //   getItem("List And Key", "10", <ChromeOutlined />, [
  //     getItem(<Link to={"/list"}>List</Link>, "11", <FormOutlined />),
  //     getItem(<Link to={"/key"}>Key</Link>, "12", <FormOutlined />),
  //   ]),
  //   getItem(<Link to={"/form"}>React Form</Link>, "13", <FormOutlined />),
  //   getItem(
  //     <Link to={"/reactrouter"}>React Router</Link>,
  //     "14",
  //     <GooglePlusOutlined />
  //   ),
  //   getItem(<Link to={"/redux"}>Redux</Link>, "15", <WindowsOutlined />),
  //   getItem(
  //     <Link to={"/transition"}>React-Transition-Group</Link>,
  //     "16",
  //     <TwitterOutlined />
  //   ),
  // ]),
  getItem("Load", "100", <StockOutlined />, [
    getItem(
      <Link to={"/load/frame1"}>Load Frame 1</Link>,
      "101",
      <SlidersOutlined />
    ),
    getItem(
      <Link to={"/load/frame2"}>LoadFrame 2</Link>,
      "102s",
      <SlidersOutlined />
    ),
  ]),
];
const MenuHome = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, white },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        theme="dark"
        style={{ backgroundColor: "#E8E8E8", color: "rgba(0, 0, 0, 0.88)" }}
      >
        <div className="demo-logo-vertical mb-3">
          <img src={logo} style={{ width: "190px" }} />
        </div>
        <Menu
          theme="light"
          // defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
          style={{
            backgroundColor: "#E8E8E8",
            color: "rgba(0, 0, 0, 0.88)",
            fontSize: "",
          }}
        />
      </Sider>
      <Layout>
        {/* <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        /> */}
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item></Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="text-start"
            style={{
              padding: 24,
              minHeight: 700,
              background: colorBgContainer,
            }}
          >
            {children}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontWeight: "600",
              fontSize: "20px",
              fontFamily: "Times",
            }}
          >
            SES COMPANY
          </p>
        </Footer>
      </Layout>
    </Layout>
  );
};
export default MenuHome;
