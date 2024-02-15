import Link from "next/link";
import React from "react";

const Signup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("request");
  };
  return (
    <div>
      <div className=" flex flex-col items-center justify-center w-full  mx-auto h-screen">
        <div className="w-full mx-auto md:w-96 md:border border-gray-400 rounded-lg  max-w-lg py-12 bg-white ">
          <h1 className="text-lg font-medium text-center mb-6">Sign Up</h1>
          <form className="" onSubmit={handleSubmit}>
            <input
              className="pl-2 block  border-b border-gray-400  w-10/12 md:w-2/3 mb-6 py-1 mx-auto"
              type="text"
              placeholder="Username"
            />
            <input
              className="pl-2 block  border-b border-gray-400  w-10/12 md:w-2/3 mb-6 py-1 mx-auto"
              type="text"
              placeholder="First name"
            />
            <input
              placeholder="Password"
              className="pl-2 block border-b border-gray-400 w-10/12 mb-6 md:w-2/3 py-1 mx-auto"
              type="text"
            />
            <button
              className="border border-gray-400 rounded  p-1 px-2 mb-6 mx-auto block md:w-1/3 hover:bg-gray-200"
              type="submit"
            >
              Sign Up
            </button>
          </form>
          <span className=" block text-center">
            Already have an account?
            <Link
              href="/login"
              className="text-blue-500 py-1 px-2 mx-2 hover:font-bold"
            >
              Login
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
