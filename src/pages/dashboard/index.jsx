import { Card } from "antd";
import React from "react";
import ReactLogo from "../../assets/logo.svg";
import AntdLogo from "../../assets/ant-design-logo.png";
import AxiosLogo from "../../assets/axios-logo.png";
import TailwindLogo from "../../assets/tailwind-logo.png";
import ReduxLogo from "../../assets/redux-logo.png";
import "../../index.css";
import "../../App.css";
const { Meta } = Card;

function DashboardPage() {
  return (
    <div>
      <p className="font-bold text-7xl">This Boiler Plate Made With :</p>
      {/* REACT JS */}
      <div className="grid justify-center">
        <img
          className="hover:cursor-pointer hover:shadow-lg App-logo"
          src={ReactLogo}
          width={"500px"}
          onClick={() => window.open("https://reactjs.org")}
        />
      </div>

      {/* CARD */}
      <div className="flex justify-around my-10">
        {/* TAILWIND CARD */}
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={
            <img
              alt="TailwindCssLogo"
              style={{
                width: "150px",
                marginLeft: "auto",
                marginRight: "auto",
                padding: 10,
              }}
              src={TailwindLogo}
            />
          }
          onClick={() => {
            window.open("https://tailwindcss.com/");
          }}
        >
          <Meta title="Tailwind CSS" description="tailwindcss.com" />
        </Card>

        {/* ANT DESIGN CARD */}
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={
            <img
              alt="Antd Logo"
              style={{
                width: "150px",
                marginLeft: "auto",
                marginRight: "auto",
                padding: 10,
              }}
              src={AntdLogo}
            />
          }
          onClick={() => {
            window.open("https://ant.design/");
          }}
        >
          <Meta title="Ant Design" description="ant.design" />
        </Card>

        {/* REDUX CARD */}
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={
            <img
              alt="Redux Logo"
              style={{
                width: "150px",
                marginLeft: "auto",
                marginRight: "auto",
                padding: 10,
              }}
              src={ReduxLogo}
            />
          }
          onClick={() => {
            window.open("https://redux.js.org/");
          }}
        >
          <Meta title="Redux" description="redux.org" />
        </Card>

        {/* AXIOS CARD */}
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={
            <img
              alt="Antd Logo"
              style={{
                width: "150px",
                marginLeft: "auto",
                marginRight: "auto",
                padding: 50,
              }}
              src={AxiosLogo}
            />
          }
          onClick={() => {
            window.open("https://axios-http.com/");
          }}
        >
          <Meta title="AXIOS" description="axios-http.com" />
        </Card>
      </div>
    </div>
  );
}

export default DashboardPage;
