import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListData } from "../../store/redux/action";
import { Table } from "antd";
import ButtonComponent from "../../components/button";
import imageProduct from "../../assets/sample1.png";

function TableProduct({ setDetailProduct, setProductPage }) {
  const dispatch = useDispatch();

  const { listdata } = useSelector((state) => state.reducerGlobal);

  const column = [
    {
      title: "No",
      dataIndex: "id",
      key: "id",
      align: "center",
      width: "10vh",
    },
    {
      title: "Product Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Product Image",
      width: "20vh",
      align: "center",
      render: () => {
        return <img src={imageProduct} width={"100px"} />;
      },
    },
    {
      title: "Product Desc",
      dataIndex: "body",
      key: "body",
    },
    {
      title: "Action",
      align: "center",
      render: (_, record) => {
        return (
          <div>
            {/* BUTTON COMPONENT */}
            <ButtonComponent
              labelButton={"Detail"}
              backgroundColor={"#f5426c"}
              color={"white"}
              borderRadius={8}
              onClick={() => {
                setDetailProduct(record);
                setProductPage("detail");
              }}
            />
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    dispatch(getListData());
  }, [dispatch]);

  return (
    <div>
      <p className="font-bold text-3xl mb-10">Product List</p>
      <Table columns={column} dataSource={listdata} scroll={{ y: 500 }} />
    </div>
  );
}

export default TableProduct;
