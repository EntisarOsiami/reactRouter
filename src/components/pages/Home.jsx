import React from "react";
import { useNavigate } from "react-router";


export default function Home() {
  let navigate = useNavigate();

  return (
    
    <div className="h-screen bg-white flex justify-center items-center">
      <div className="flex flex-col justify-center items-center h-full  p-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to The Tech Academy Website</h1>
        <p className="text-lg text-center max-w-md">
          The academy have been established to provide high-quality education and resources for the future.

        </p>
        <button onClick={() => navigate("/Programs")} className="mt-6 px-4 py-2 bg-amber-500 text-white rounded hover:bg-blue-600 transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
}
