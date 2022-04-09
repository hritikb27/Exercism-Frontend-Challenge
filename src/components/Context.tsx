import { createContext } from "react";
import { Track } from "./SelectDropDown/SelectDropdown";

interface contextType {
    [key: string]: any,
    setTrack: React.Dispatch<React.SetStateAction<Track>>,
}

const ContextState = createContext<contextType|[]>([]);

export default ContextState;