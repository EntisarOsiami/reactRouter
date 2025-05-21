import React from "react";

function Programs() {
  return (
    <div className="h-screen mx-auto mt-8 p-4 bg-white shadow-md rounded-lg items-center flex flex-col">
      <h1 className="font-bold text-3xl mb-5">Programs:</h1>
      <p className="text-lg text-center max-w-md mb-8">
        We offer a variety of programs to help you achieve your goals.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        <div className="bg-gray-50 shadow-md rounded-lg p-6 flex flex-col items-center">
          <h2 className="font-bold text-2xl mb-2">
            Fullstack Javascript program:
          </h2>
          <p className="text-lg text-center max-w-md">
            This program covers both front-end and back-end development using
            JavaScript. Its duration is 3 months.
          </p>
        </div>
        <div className="bg-gray-50 shadow-md rounded-lg p-6 flex flex-col items-center">
          <h2 className="font-bold text-2xl mb-2">Game development program:</h2>
          <p className="text-lg text-center max-w-md">
            This program covers game development using Unity and C#. Its duration
            is 6 months.
          </p>
        </div>
        <div className="bg-gray-50 shadow-md rounded-lg p-6 flex flex-col items-center">
          <h2 className="font-bold text-2xl mb-2">
            Mobile development using Flutter:
          </h2>
          <p className="text-lg text-center max-w-md">
            This program covers mobile development using Flutter and Dart. Its
            duration is 4 months.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Programs;
