import React from "react";
import Header from "./components/Header/Header";
import TestimonialTable from "./components/TestimonialTable/TestimonialTable";

function App() {
  return (
    <div className="bg-white w-full mx-auto h-full">
      <Header />
      <div className="w-[75%] mx-auto ">
        <TestimonialTable />
      </div>
    </div>
  );
}

export default App;
