import { Button } from "flowbite-react";
import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Card } from "flowbite-react";
function Home() {
  return (
    <div className="h-screen">
       
        <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Blue</button>
      <h1 className="text-7xl font-bold bg-black text-white">
        Welcome to Nutraline
      </h1>
      <h2 className="text-4xl font-medium">Your Authentic Supplement Line</h2>

     <h1 className="text-7xl font-bold bg-black text-white">
        Welcome to Nutraline
      </h1>
      
     <Card href="#" className="max-w-sm">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
    </Card>
    
    </div>
  );
}

export default Home;
