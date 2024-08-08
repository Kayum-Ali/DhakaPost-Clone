import { CiDark, CiSearch } from "react-icons/ci";
import { IoIosArrowDown, IoMdNotificationsOutline } from "react-icons/io";
import { IoMenuSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { IoIosArrowUp } from "react-icons/io";


import "./Header.css";
import { useState } from "react";

const Header = () => {
  const logo = "https://i.ibb.co/Z1v1j7K/download-10-removebg-preview.png";

  const [open, setOpen] = useState(false);
  const [otherOpen, setOtherOpen] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div>
      <header className="bg-[#124B65] text-white  h-[50px] basis-full fixed overflow-hidden top-0 w-full z-10">
        <nav className="grid grid-cols-2 md:grid-cols-12 lg:grid-cols-12 container mx-auto items-center justify-between py-2 gap-4 md:gap-2 ">
          {/* logo */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 justify-self-start md:justify-self-start">
            <img
              className="lg:w-[240px] w-[190px] h-[28px] lg:h-[35px] md:w-[230px] md:h-[32px] "
              src={logo}
              alt=""
            />
          </div>

          {/* nav middle */}
          <div className="lg:col-span-8 md:col-span-8 hidden  md:block lg:block">
            <ul className="flex lg:gap-6 md:gap-3 lg:space-x-3 md:space-x-1 lg:pl-3 md:pl-1">
              <li>
                <NavLink>সর্বশেষ</NavLink>
              </li>

              <li>
                <NavLink to={`/national`}>জাতীয়</NavLink>
              </li>

              <li>
                <NavLink>রাজনীতি</NavLink>
              </li>

              <li>
                <NavLink>অর্থনীতি</NavLink>
              </li>

              <li>
                <NavLink>আন্তর্জাতিক</NavLink>
              </li>

              <div className="dropdown-container">
                <div className="flex gap-2 items-center">
                  <NavLink>সারাদেশ </NavLink>
                  <IoIosArrowDown className="text-xl"></IoIosArrowDown>
                </div>
                <div className="dropdown-content  z-20 shadow-xl p-2 text-black">
                  <a href="">
                    <NavLink>জেলার খবর</NavLink>
                  </a>
                </div>
              </div>

              <li className="hidden md:hidden lg:hidden xl:block">
                <NavLink>খেলা</NavLink>
              </li>

              <li className="hidden md:hidden lg:hidden xl:block">
                <NavLink>বিনোদন</NavLink>
              </li>

              <li className="hidden md:hidden lg:hidden xl:block">
                <NavLink>জবস</NavLink>
              </li>
            </ul>
          </div>
          {/* nav right/icon */}
          <div className="lg:col-span-2 md:col-span-2 col-span-1 justify-self-center md:justify-self-end lg:justify-self-end">
            <div className="flex lg:gap-5 gap-4 md:gap-3 lg:text-3xl md:text-2xl text-[26px]">
              <CiDark></CiDark>
              <IoMdNotificationsOutline></IoMdNotificationsOutline>
              <CiSearch></CiSearch>
             <div onClick={()=> setToggleMenu(!toggleMenu)}>
             {
                toggleMenu ? <IoMenuSharp ></IoMenuSharp>
                : <RxCross2></RxCross2>
              }
             </div>
              
            </div>
          </div>
        </nav>
      </header>

      <div className={`mt-12   h-auto absolute  overflow-auto touch-auto hover:will-change-scroll ${toggleMenu ? '-right-96' : 'right-0 top-0 z-50 '}  w-80 bg-white p-2  top-0`}>
        
        <ul>
          <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6]">
            <NavLink to={`/national`}>জাতীয়</NavLink>
          </li>

          <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6]">
            <NavLink>রাজনীতি</NavLink>
          </li>

          <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6]">
            <NavLink>অর্থনীতি</NavLink>
          </li>
          <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6]">
            <NavLink>এক্সক্লুসিভ</NavLink>
          </li>

          <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6]">
            <NavLink>আন্তর্জাতিক</NavLink>
          </li>
          <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6]">
            <NavLink>বিনোদন</NavLink>
          </li>
          <li className=" border-b flex items-center border-b-gray-400 text-base">
            <div className="hover:bg-[#F3F4F6] w-4/5 py-3 px-2 h-full">
              <NavLink>সারাদেশ </NavLink>
            </div>
          <div  className=" hover:bg-[#F3F4F6] p-4 flex justify-center  w-1/5 text-xs     px-2 h-auto">
             {open ? (
               <IoIosArrowUp  onClick={() => setOpen(!open)}></IoIosArrowUp>
              ) : (
                <IoIosArrowDown  onClick={() => setOpen(!open)}></IoIosArrowDown>
              )}
              </div>
          </li>

          {/* <div className="dropdown-container">
            <div className="flex gap-2 items-center py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6]">
             
            </div>
            <div className="dropdown-content  z-20 shadow-xl p-2 text-black">
              <a href="">
                <NavLink>জেলার খবর</NavLink>
              </a>
            </div>
          </div> */}

          <li
            className={`${
              open ? "block" : "hidden"
            } py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6]`}
          >
            <NavLink>জেলার খবর</NavLink>
          </li>
          <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6]">
            <NavLink>খেলা</NavLink>
          </li>

          <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6]">
            <NavLink>স্বাস্থ্য</NavLink>
          </li>

          <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6]">
            <NavLink>জবস</NavLink>
          </li>

          <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6]">
            <NavLink>লাইফস্টাইল</NavLink>
          </li>

          <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6]">
            <NavLink>তথ্যপ্রযুক্তি</NavLink>
          </li>
          <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6]">
            <NavLink>ট্যুরিজম</NavLink>
          </li>
          <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6]">
            <NavLink>শিক্ষা</NavLink>
          </li>
          <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6]">
            <NavLink>প্রবাস</NavLink>
          </li>
          <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6]">
            <NavLink>মতামত</NavLink>
          </li>
          <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6]">
            <NavLink>ধর্ম</NavLink>
          </li>
          <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6]">
            <NavLink>ক্যাম্পাস</NavLink>
          </li>
          <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6]">
            <NavLink>আইন-আদালত</NavLink>
          </li>
          <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6]">
            <NavLink>এভিয়েশন</NavLink>
          </li>
          <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6]">
            <NavLink>গণমাধ্যম</NavLink>
          </li>

          <li
            className="py-3 px-2 border-b flex items-center  border-b-gray-400 hover:bg-[#F3F4F6]"
            onClick={() => setOtherOpen(!otherOpen)}
          >
            <div className="flex items-center text-xl gap-3">
              <NavLink>অন্যান্য</NavLink>
              {otherOpen ? (
               <IoIosArrowUp></IoIosArrowUp>
              ) : (
                <IoIosArrowDown></IoIosArrowDown>
              )}
            </div>
          </li>

          <div className={`${otherOpen ? "block" : "hidden"}`}>
            <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6]">
              <NavLink>কৃষি ও প্রকৃতি</NavLink>
            </li>

            <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6]">
              <NavLink>ছোটদের পোস্ট</NavLink>
            </li>

            <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6]">
              <NavLink>পড়াশুনা</NavLink>
            </li>
          </div>

          <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6]">
            <NavLink>কনভার্টার</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
