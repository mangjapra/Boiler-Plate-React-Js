import React from "react";
import sample1 from "../../assets/sample1.png";
import ButtonComponent from "../../components/button";
import { ArrowLeftOutlined } from "@ant-design/icons";

function DetailProduct({ detailProduct, setProductPage }) {
  return (
    <div className="p-5">
      {/* CONTAINER */}
      <div className="flex">
        <img src={sample1} width={"500px"} />
        <div className="text-center my-auto">
          <p className="font-bold text-5xl mb-12">DETAIL PRODUCT</p>
          <p className="font-bold text-2xl">{detailProduct.title}</p>
          <p className="text-slate-400 text-lg">{detailProduct.body}</p>
          <ButtonComponent
            labelButton={"Back"}
            backgroundColor={"#001529"}
            color={"white"}
            marginTop={10}
            icon={<ArrowLeftOutlined />}
            onClick={() => {
              setProductPage("index");
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default DetailProduct;
