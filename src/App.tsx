import React from "react"
import Header from "./components/Header/Header";
import MainTitle from "./components/MainTitle/MainTitle";
import TestimonialTable from "./components/TestimonialTable/TestimonialTable";


function App() {
  return (
      <div className="bg-white w-full mx-auto h-full">
        <div className="z-40 sticky top-0  w-full border-b border-gray-200">
          <Header />
        </div>
        <div className="max-w-[1440px] min-w-[80%] mx-auto ">
          <MainTitle />
          <TestimonialTable />
        </div>
      </div>
  );
}

export default App;
