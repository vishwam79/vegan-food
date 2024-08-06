import React from "react";
import { assets } from "../../assets/assets";

const AppDownload = () => {
  return (
    <div className="app-download m-auto mt-20 text-3xl font-bold text-center border border-orange-200 pt-10 pb-10 rounded-xl shadow-md bg-slate-50  ">
      <p>For Better Experience Download The App Now</p>
      <div className="app-download-plateform flex justify-center gap-4 mt-10">
        <img className="cursor-pointer min-w-20 max-w-40 " src={assets.play_store} alt="" />
        <img className="cursor-pointer min-w-20 max-w-40   "src={assets.app_store} alt="" />
      </div>
    </div>
  );
};

export default AppDownload;
