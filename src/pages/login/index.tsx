import InputGroup from "@/components/InputGroup";
import Link from "next/link";
import React, { FormEvent, useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<any>({});
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("request");
  };
  return (
    <div>
      <div className=" flex flex-col items-center justify-center w-full  mx-auto h-screen">
        <div className="w-full mx-auto md:w-96 md:border border-gray-400 rounded-lg  max-w-lg py-12 bg-white ">
          <h1 className="text-lg font-medium text-center mb-6">Login</h1>
          <form className="" onSubmit={handleSubmit}>
            <InputGroup
              placeholder="Username"
              value={username}
              setValue={setUsername}
              error={errors.username}
            />
            <InputGroup
              placeholder="Password"
              value={password}
              setValue={setPassword}
              error={errors.password}
            />
            <button
              className="border border-gray-400 rounded  p-1 px-2 mb-6 mx-auto block md:w-1/3 hover:bg-gray-200"
              type="submit"
            >
              Login
            </button>
          </form>
          <span className=" block text-center">
            New to VocaMaster?
            <Link
              href="/signup"
              className="text-blue-500 py-1 px-2 mx-2 hover:font-bold"
            >
              Sign up
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
