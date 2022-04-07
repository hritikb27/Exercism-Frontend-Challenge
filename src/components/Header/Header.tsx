import React from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { GiLadder } from "react-icons/gi";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { FaCode } from "react-icons/fa";

function Header() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 bg-white w-full h-[64px] flex justify-between items-center">
        <section className="flex gap-6">
            <img src="https://d24y9kuxp2d7l2.cloudfront.net/assets/icons/exercism-with-logo-black-b427c06c6a068ba9f391734115e4d22dfa876d1d.svg" />
            <div className="w-full flex items-center gap-3">
                <div style={{background: "linear-gradient(#2200FF, #9E00FF)"}} className="flex items-center justify-center text-white rounded-full w-[42px] h-[42px] ">
                    <AiOutlineDashboard size={'28px'} />
                </div>
                <h2>Dashboard</h2>
            </div>
            <div className="w-full flex items-center text-[#5C5589] ">
                <div className="flex items-center justify-center rounded-full w-[42px] h-[42px] ">
                    <GiLadder size={'28px'} />
                </div>
                <h2>Tracks</h2>
            </div>
            <div className="w-full flex items-center gap-2 text-[#5C5589]">
                <div className="flex items-center justify-center text-[#5C5589] rounded-full w-[42px] h-[42px] ">
                    <HiOutlineChatAlt2 size={'28px'} />
                </div>
                <h2>Mentoring</h2>
            </div>
            <div className="w-full flex items-center gap-2 text-[#5C5589]">
            <div className="flex items-center justify-center rounded-full w-[42px] h-[42px] ">
                    <FaCode size={'28px'} />
                </div>
                <h2>Contribute</h2>
            </div>
        </section>

        <section className="flex gap-5">
            <h2>H</h2>
            <a style={{backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzEiIGhlaWdodD0iMjciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTExIDQuNzMyYTIgMiAwIDAgMSAyIDBMMjAuMzkyIDlhMiAyIDAgMCAxIDEgMS43MzJ2OC41MzZhMiAyIDAgMCAxLTEgMS43MzJMMTMgMjUuMjY4YTIgMiAwIDAgMS0yIDBMMy42MDggMjFhMiAyIDAgMCAxLTEtMS43MzJ2LTguNTM2YTIgMiAwIDAgMSAxLTEuNzMyTDExIDQuNzMyWiIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSJ1cmwoI2EpIiBzdHJva2Utd2lkdGg9IjIiLz48Y2lyY2xlIGN4PSIyNCIgY3k9IjciIHI9IjUuNSIgZmlsbD0iI0VCNTc1NyIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjMiLz48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSIxMiIgeTE9IjMiIHgyPSIxMiIgeTI9IjI3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iIzIwRiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzlFMDBGRiIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjwvc3ZnPg==')`}}
            className="h-[28px] w-[28px] ">
                
            </a>
            <h2>H</h2>
            <h2>H</h2>
            <h2>H</h2>
        </section>
    </div>
  );
}

export default Header;
