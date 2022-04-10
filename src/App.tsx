import React, { useState, createContext } from "react"
import Header from "./components/Header/Header";
import MainTitle from "./components/MainTitle/MainTitle";
import TestimonialTable from "./components/TestimonialTable/TestimonialTable";
import { Track } from './components/SelectDropDown/SelectDropdown';



function App() {


  interface contextType {
    [key: string]: any,
    setTrack?: React.Dispatch<React.SetStateAction<Track>>,
  }

  const [track, setTrack] = useState<Track>({
    title: 'string',
    icon_url: 'string',
    num_exercises: 1,
    slug: 'string',
  });

  return (
      <div className="bg-white w-full mx-auto h-full">
        <div className="sticky top-0  w-full border-b border-gray-200">
          <Header />
        </div>
        <div className="max-w-[1440px] min-w-[80%] mx-auto ">
          <MainTitle />
          <TestimonialTable selectedTrack={track} setSelectedTrack={setTrack} />
        </div>
      </div>
  );
}

export default App;
