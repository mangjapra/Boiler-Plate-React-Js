import React from "react";
import DashboardPage from "./dashboard";
import PageNotFound from "../components/page404";
import IndexProduct from "./Product";

function ContentBoiler({ activePage }) {
  console.log("active Page", activePage);

  return (
    <div>
      {activePage === "dashboard" ? (
        <DashboardPage />
      ) : activePage === "productpage" ? (
        <IndexProduct />
      ) : (
        <PageNotFound />
      )}
    </div>
  );
}

export default ContentBoiler;
