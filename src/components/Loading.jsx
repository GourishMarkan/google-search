// import React from "react";

import { Audio } from "react-loader-spinner";
// import Loader from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
export const Loading = () => {
  return (
    <div className="flex justify-center items-center ">
      <Audio type="Puff" color="#00BFFF" height={550} width={80} />
    </div>
  );
};
