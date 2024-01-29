import React from "react";
import SavedShows from "../components/SavedShows";

function Account() {
  return (
    <>
      <div className="w-full text-white">
        <img
          className="w-full h-[400px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/04253b8c-a366-4158-b704-8ac470f636a5/TR-en-20231120-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        />
        <div className=" bg-black/60 fixed top-0 w-full left-0 h-[550px] "></div>

        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">My Shows</h1>
        </div>
      </div>
      <SavedShows />
    </>
  );
}

export default Account;
