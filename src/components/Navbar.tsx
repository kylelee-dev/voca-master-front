import Link from "next/link";
import React from "react";

const Navbar = () => {
  const authenticated = false;
  return (
    <div className="fixed top-0 z-10 flex items-center justify-between h-12 w-full max-w-screen-lg px-5">
      <span className="text-2xl font-semibold">Voca Master</span>

      {authenticated ? (
        <div>
          <Link href="/logout" className="p-2">
            Logout
          </Link>{" "}
        </div>
      ) : (
        <div>
          <Link href="/login" className="p-2 font-medium">
            Login
          </Link>
          <Link href="/signup" className="p-2 font-medium">
            Sign Up
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
