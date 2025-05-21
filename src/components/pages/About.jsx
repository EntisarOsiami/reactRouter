import React from "react";

function About() {
  return (
    <div className="h-110 mx-auto mt-8 p-4 bg-white shadow-md rounded-lg items-center flex flex-col">
      <h1 className="font-bold text-3xl mb-5">About us:</h1>
      <p className="text-lg text-center max-w-md">
        the Academy provides diverges programs and courses by competent trainers
        in technologies needed in the job market{" "}
      </p>
      <p className="text-lg text-center max-w-md mt-4">
        Our mission is to provide high-quality education and resources for the
        future.
      </p>
    </div>
  );
}

export default About;
