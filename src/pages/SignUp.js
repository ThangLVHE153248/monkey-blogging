import React from "react";
import AuthHeader from "components/AuthHeader";
// import { Label } from "components/label";
import { LabelAuth } from "components/label";

const SignUp = () => {
  return (
    <div>
      <AuthHeader></AuthHeader>
      <div className="w-[600px] mx-auto">
        <form className="signup-form">
          <div className="mb-[40px]">
            <LabelAuth htmlFor="fullname">Fullname</LabelAuth>
            <input
              className="border-gray_2 border-[1px] rounded w-full h-12 py-2 px-3 text-dark_1 leading-tight focus:outline-1 focus:outline-teal_1 placeholder:text-gray_1"
              id="fullname"
              type="text"
              placeholder="Please enter your fullname"
            />
          </div>
          <div className="mb-[40px]">
            <label
              className="block text-dark_1 font-semibold mb-3"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              className="border-gray_2 border-[1px] rounded w-full h-12 py-2 px-3 text-dark_1 leading-tight focus:outline-1 focus:outline-teal_1 placeholder:text-gray_1"
              id="email"
              type="text"
              placeholder="Please enter your email address"
            />
          </div>
          <div className="mb-[40px]">
            <label
              className="block text-dark_1 font-semibold mb-3"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="border-gray_2 border-[1px] rounded w-full h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-teal_1 placeholder:text-gray_1"
              id="password"
              type="password"
              placeholder="Please enter your password"
            />
          </div>
          <button
            type="submit"
            className="auth-button block w-[200px] h-[50px] rounded-lg mx-auto font-medium text-lg text-white"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
