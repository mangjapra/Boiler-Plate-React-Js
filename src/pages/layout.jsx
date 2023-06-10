import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import React, { useState } from "react";
import logoReact from "../assets/logo.svg";
import ContentBoiler from "./contentBoiler";

const { Header, Content, Footer, Sider } = Layout;

function LayoutBoiler() {
  const [activePage, setActivePage] = useState("");
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <img src={logoReact} />
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["3"]}
          items={[
            {
              key: "dashboard",
              icon: <UserOutlined />,
              label: "Dashboard",
            },
            {
              key: "productpage",
              icon: <UploadOutlined />,
              label: "Products",
            },
            {
              key: "dataview",
              icon: <VideoCameraOutlined />,
              label: "Data View",
            },
          ]}
          onClick={(e) => {
            console.log("onClick Menu: ", e);
            setActivePage(e.key);
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
            margin: "24px 16px 0",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <ContentBoiler activePage={activePage} />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Boiler Plate ReactJs ©2023 Created by MangJapra
        </Footer>
      </Layout>
    </Layout>
  );
}

export default LayoutBoiler;
