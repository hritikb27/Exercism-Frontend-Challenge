import React from "react";
import Mentoring from "../../assets/Header/Mentoring.png"
import Tracks from "../../assets/Header/Tracks.png"
import Contribute from "../../assets/Header/Contribute.png"
import DashboardImg from "../../assets/Header/Dashboard.png"
import DashboardImgBG from "../../assets/Header/DashboardImgBG.png"
import ChatEmoji from "../../assets/Header/ChatEmoji.png"
import NotificationBell from "../../assets/Header/alarm-bell.png"
import badge from "../../assets/Header/badge.png"
import profilepic from "../../assets/Header/profilepic.png"
import NavDots from "../../assets/Header/NavDots.png"

function Header(): JSX.Element {
  return (
    <div className="border-b border-gray-200">
    <div className="px-4 sm:px-6 lg:px-8 bg-white max-w-[1440px] mx-auto h-[64px] flex justify-between items-center">
        <img src="https://d24y9kuxp2d7l2.cloudfront.net/assets/icons/exercism-with-logo-black-b427c06c6a068ba9f391734115e4d22dfa876d1d.svg" className="cursor-pointer mr-2" />
        <section className="hidden lg:flex gap-2 xl:gap-6 text-sm">
            <div className="w-full flex items-center gap-1 cursor-pointer">
                <div style={{backgroundImage: `url(${DashboardImgBG})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}} className="flex items-center justify-center w-[62px] h-[62px] ">                    
                    <img src={DashboardImg} className="h-[26px] mb-1 " />
                </div>
                <h2>Dashboard</h2>
            </div>
            <div className="w-full flex items-center text-[#5C5589] cursor-pointer">
                <div className="flex items-center justify-center rounded-full w-[42px] h-[42px] ">
                    <img src={Tracks} />
                </div>
                <h2>Tracks</h2>
            </div>
            <div className="w-full flex items-center gap-2 text-[#5C5589] cursor-pointer">
                <div className="flex items-center justify-center text-[#5C5589] rounded-full w-[42px] h-[42px] ">
                    <img src={Mentoring} />
                </div>
                <h2>Mentoring</h2>
            </div>
            <div className="w-full flex items-center gap-2 text-[#5C5589] cursor-pointer">
                <div className="flex items-center justify-center rounded-full w-[42px] h-[42px] ">
                        <img src={Contribute} /> 
                    </div>
                    <h2>Contribute</h2>
            </div>
        </section>

        <section className="flex items-center gap-4 lg:gap-6 xl:gap-12 right-0">
            <div className="cursor-pointer">
                <img src={ChatEmoji} />
            </div>


            <a style={{backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzEiIGhlaWdodD0iMjciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTExIDQuNzMyYTIgMiAwIDAgMSAyIDBMMjAuMzkyIDlhMiAyIDAgMCAxIDEgMS43MzJ2OC41MzZhMiAyIDAgMCAxLTEgMS43MzJMMTMgMjUuMjY4YTIgMiAwIDAgMS0yIDBMMy42MDggMjFhMiAyIDAgMCAxLTEtMS43MzJ2LTguNTM2YTIgMiAwIDAgMSAxLTEuNzMyTDExIDQuNzMyWiIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSJ1cmwoI2EpIiBzdHJva2Utd2lkdGg9IjIiLz48Y2lyY2xlIGN4PSIyNCIgY3k9IjciIHI9IjUuNSIgZmlsbD0iI0VCNTc1NyIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjMiLz48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSIxMiIgeTE9IjMiIHgyPSIxMiIgeTI9IjI3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iIzIwRiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzlFMDBGRiIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjwvc3ZnPg==')`}}
            className="h-[28px] w-[28px] cursor-pointer" />

            <div className="w-[42px] h-[38px] bg-[#FFF4E3] flex items-center justify-center relative rounded-md shadow-xl shadow-gray-300 text-white cursor-pointer">
                <img src={NotificationBell} className=" " />
                <span className="absolute top-[-10px] right-[-10px] py-[1.7px] px-[8px] bg-[#D85050] rounded-[50%] text-center text-white text-sm font-thin ">2</span>
            </div>

            <div className="rounded-full w-28 h-10 bg-gradient-to-b p-[4px] from-[#CC00FF] to-[#3300FF] cursor-pointer">
               <div className="flex flex items-center justify-between h-full bg-[#130B43] text-white rounded-full p-4 relative">
                    <img src={badge} />
                    <span>300K</span>
                    <span className="absolute rounded-full bg-white top-[-14px] right-[-12px] py-[1px] px-[3px] p-[8px]">
                        <span className="py-[0.1px] px-[6px] bg-[#D85050] rounded-[50%] text-center text-white text-sm font-thin ">
                        &nbsp;&nbsp;
                        </span>
                    </span>
               </div>
            </div>
            
            <div className="flex items-center gap-6 cursor-pointer">
                <img src={profilepic} />
                <img src={NavDots} className=" h-5 " />
            </div>
        </section>
    </div>
    </div>
  );
}

export default Header;
