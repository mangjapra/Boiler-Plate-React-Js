import React from "react";
import notFound from "../assets/404-snow.gif";

function PageNotFound() {
  return (
    <div className="grid justify-center mb-10">
      <img src={notFound} />
      <p className="m-0 text-5xl">Page Not Found</p>
    </div>
  );
}

export default PageNotFound;
