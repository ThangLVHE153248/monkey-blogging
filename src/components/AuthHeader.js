import React from "react";
import mainLogo from "../assets/img/logo_1.png";

const AuthHeader = () => {
  return (
    <div className="flex flex-col items-center mt-[30px] mb-[50px]">
      <img
        src={mainLogo}
        alt="main_logo"
        className="w-[100px] object-cover mb-[20px]"
      />
      <div className="logo-name text-primary text-3xl font-semibold">
        Monkey Blogging
      </div>
    </div>
  );
};

export default AuthHeader;
