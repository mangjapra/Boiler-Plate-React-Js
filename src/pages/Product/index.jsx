import React, { useState } from "react";
import TableProduct from "./tableProduct";
import PageNotFound from "../../components/page404";
import DetailProduct from "./detailProduct";

function IndexProduct() {
  const [productPage, setProductPage] = useState("index");
  const [detailProduct, setDetailProduct] = useState(null);
  return (
    <div>
      {productPage === "index" ? (
        <TableProduct
          setDetailProduct={setDetailProduct}
          setProductPage={setProductPage}
        />
      ) : productPage === "detail" ? (
        <DetailProduct
          detailProduct={detailProduct}
          setProductPage={setProductPage}
        />
      ) : (
        <PageNotFound />
      )}
    </div>
  );
}

export default IndexProduct;
