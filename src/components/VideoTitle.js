import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-6 text-1xl text-justify w-1/4">{overview}</p>
      <div className="my-4 md:m-0">
        <button className="bg-white font-weight-500 text-black w-32 h-10 text-lg mr-4 rounded-lg hover:opacity-80">
          Play Now
        </button>
        <button className="bg-gray-400 font-weight-500 text-white w-32 h-10 text-lg rounded-lg">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
