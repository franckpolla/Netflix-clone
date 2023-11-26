import React from "react";
import { Link } from "react-router-dom";

function login() {
  return (
    <div className="w-full h-screen">
      <img
        className="hidden sm:block absolute"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/04253b8c-a366-4158-b704-8ac470f636a5/TR-en-20231120-popsignuptwoweeks-perspective_alpha_website_small.jpg"
      />
      <div className="bg-black/60 fixed  top-0, left-0 w-full h-screen"></div>
      <div className="fixed w-full px-4 py-24 z-50">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
          <div className="max-w-[320px]  mx-auto py-16">
            <h1 className="text-3xl font-bold"> Sign In</h1>
            <form className="w-full flex flex-col py-4">
              <input
                className="p-3 my-2 bg-gray-700 rounded"
                type="email"
                placeholder="Email"
                required
                autoComplete="email"
              />
              <input
                type="password"
                className="p-3 my-2 bg-gray-700 rounded"
                placeholder="password"
                autoComplete="current-password"
                required
              />

              <button className="bg-red-600 py-3 my-6 rounded font-bold">
                {" "}
                Sign In
              </button>
              <div className="flex justify-between items-center">
                <p>
                  <input className="mr-2" type="checkbox" /> Remenber me
                </p>
                <p>Need Help? </p>
              </div>
              <p className="py-4">
                <span className="text-gray-600 mr-4">New to Netflix?</span>
                <Link to="/SignUp"> Sign Up </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default login;
