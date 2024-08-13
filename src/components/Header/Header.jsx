import {  CiSearch } from "react-icons/ci";
import { IoIosArrowDown, IoMdNotificationsOutline } from "react-icons/io";
import { IoMenuSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { IoIosArrowUp } from "react-icons/io";

import "./Header.css";
import { useState } from "react";
import useThemeMode from "../../api/useThemeMode";
import { BsSun } from "react-icons/bs";
import { MdOutlineDarkMode } from "react-icons/md";

const Header = () => {
  const logo = "https://i.ibb.co/Z1v1j7K/download-10-removebg-preview.png";

  const [open, setOpen] = useState(false);
  const [otherOpen, setOtherOpen] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  const [search, setSearch] = useState(false);

  const { changeTheme, mode } = useThemeMode();
  console.log(mode)


  return (
    <div>
      <header
        className={`bg-[#124B65]  text-white ${
          search ? "hidden" : "block"
        }  basis-full fixed top-0 w-full z-10 `}
      >
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
            <ul className="flex lg:gap-6 md:gap-3 lg:space-x-3 md:space-x-1 lg:pl-3  md:text-sm lg:text-base">
              <li>
                <NavLink to={`/`} className={`active:text-violet-500`}>সর্বশেষ</NavLink>
              </li>

              <li>
                <NavLink to={`/national`} className={`active:text-violet-500`}>জাতীয়</NavLink>
              </li>

              <li>
                <NavLink to={`/politics`} className={`active:text-violet-500`}>রাজনীতি</NavLink>
              </li>

              <li>
                <NavLink to={`/economy`} className={`active:text-violet-500`}>অর্থনীতি</NavLink>
              </li>

              <li>
                <NavLink to={`/international`} className={`active:text-violet-500`}>আন্তর্জাতিক</NavLink>
              </li>

              <div className="dropdown-container">
                <div className="flex gap-2 items-center">
                  <NavLink to={`/country`} className={`active:text-violet-500`}>সারাদেশ </NavLink>
                  <IoIosArrowDown className="text-xl"></IoIosArrowDown>
                </div>
                <div className="dropdown-content   shadow-xl p-2 text-black">
                  <a href="">
                    <NavLink to={`/country-map`} className={`active:text-violet-500`}>জেলার খবর</NavLink>
                  </a>
                </div>
              </div>

              <li className="hidden md:hidden lg:hidden xl:block">
                <NavLink to={`/sports`} className={`active:text-violet-500`}>খেলা</NavLink>
              </li>

              <li className="hidden md:hidden lg:hidden xl:block">
                <NavLink to={`/entertainment`} className={`active:text-violet-500`}>বিনোদন</NavLink>
              </li>

              <li className="hidden md:hidden lg:hidden xl:block">
                <NavLink to={`/jobs`} className={`active:text-violet-500`}>জবস</NavLink>
              </li>
            </ul>
          </div>
          
          {/* nav right/icon */}
          <div className="lg:col-span-2 md:col-span-2 col-span-1 justify-self-center md:justify-self-end lg:justify-self-end">
            <div className="flex lg:gap-5 gap-4 md:gap-2 md:pr-5  lg:text-3xl md:text-xl text-[26px]">
           <button onClick={changeTheme}>
               {mode === "dark" ? <BsSun className='text-3xl'></BsSun> : <MdOutlineDarkMode className='text-3xl'></MdOutlineDarkMode>}
           </button>

              <IoMdNotificationsOutline className="cursor-pointer"></IoMdNotificationsOutline>
              <CiSearch onClick={() => setSearch(!search)} className="cursor-pointer disabled:"></CiSearch>

              <div onClick={() => setToggleMenu(!toggleMenu)} className="cursor-pointer">
                {toggleMenu ? (
                  <RxCross2></RxCross2>
                ) : (
                  <IoMenuSharp></IoMenuSharp>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/* nav search */}
      <div className="container mx-auto ">
        <div
          className={` ${
            search
              ? "fixed block "
              : "hidden "
          }  z-50 bg-[#EFF3F6] top-0 justify-center container mx-auto  text-black`}
        >
          <div className="flex  items-center ">
            <div className=" flex-grow ">
              <input 
                className="py-2.5 pl-2  outline-none w-full bg-gray-50 flex-grow"
                type="text"
                placeholder="ঢাকা পোস্টে খুঁজুন..."
              />
            </div>
            <div className=" w-14 md:w-32 lg:w-32 text-2xl flex justify-center bg-[#D1D5DB] hover:bg-[#A8ABAE] py-2.5 px-5">
              <CiSearch></CiSearch>
            </div>
            <div className=" w-14 md:w-32 lg:w-32 bg-[#e5e7eb] hover:bg-[#A8ABAE] flex justify-center  py-2.5 px-5 text-2xl">
              <RxCross2 onClick={() => setSearch(!search)}></RxCross2>
            </div>
          </div>
        </div>
      </div>

      {/* sidebar */}
      <div
        className={`mt-12   h-auto absolute z-50 right-0   overflow-auto touch-auto hover:will-change-scroll ${
          toggleMenu ? "" : " top-0 hidden "
        }  lg:w-80 md:w-80 w-60 bg-white p-2  top-0`}
      >
        <ul>
          <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6]">
            <NavLink to={`/national`}>জাতীয়</NavLink>
          </li>

          <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6]">
             <NavLink to={`/politics`}>রাজনীতি</NavLink>
          </li>

          <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6]">
             <NavLink to={`/economy`}>অর্থনীতি</NavLink>
          </li>
          <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6]">
            <NavLink to={`/exclusive`}>এক্সক্লুসিভ</NavLink>
          </li>

          <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6]">
            <NavLink to={`/international`}>আন্তর্জাতিক</NavLink>
          </li>
          <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6]">
            <NavLink to={`/entertainment`}>বিনোদন</NavLink>
          </li>
          <p className=" border-b flex items-center border-b-gray-400 text-base">
            <div className="hover:bg-[#F3F4F6] w-4/5 py-3 px-2 h-full">
              <NavLink to={`/country`}>সারাদেশ </NavLink>
            </div>
            <div className=" hover:bg-[#F3F4F6] p-4 flex justify-center  w-1/5 text-xs     px-2 h-auto">
              {open ? (
                <IoIosArrowUp onClick={() => setOpen(!open)}></IoIosArrowUp>
              ) : (
                <IoIosArrowDown onClick={() => setOpen(!open)}></IoIosArrowDown>
              )}
            </div>
          </p>

         

          <p
            className={`${
              open ? "block" : "hidden"
            } py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6]`}
          >
            <NavLink to={`/country-map`}>জেলার খবর</NavLink>
          </p>
          <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6]">
            <NavLink to={`/sports`}>খেলা</NavLink>
          </li>

          <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6]">
            <NavLink to={`/health`}>স্বাস্থ্য</NavLink>
          </li>

          <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6]">
            <NavLink to={`/jobs`}>জবস</NavLink>
          </li>

          <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6]">
            <NavLink to={`/lifeStyle`}>লাইফস্টাইল</NavLink>
          </li>

          <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6]">
            <NavLink to={`/technology`}>তথ্যপ্রযুক্তি</NavLink>
          </li>
          <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6]">
            <NavLink to={`/tourism`}>ট্যুরিজম</NavLink>
          </li>
          <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6]">
            <NavLink to={`/education`}>শিক্ষা</NavLink>
          </li>
          <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6]">
            <NavLink to={`/probas`}>প্রবাস</NavLink>
          </li>
          <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6]">
            <NavLink to={`/opinion`}>মতামত</NavLink>
          </li>
          <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6]">
            <NavLink to={`/religion`}>ধর্ম</NavLink>
          </li>
          <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6]">
            <NavLink to={`/campas`}>ক্যাম্পাস</NavLink>
          </li>
          <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6]">
            <NavLink to={`/law-courts`}>আইন-আদালত</NavLink>
          </li>
          <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6]">
            <NavLink to={`/aviation`}>এভিয়েশন</NavLink>
          </li>
          <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6]">
            <NavLink to={`/mass-medis`}>গণমাধ্যম</NavLink>
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
              <NavLink to={`/agriculture-nature`}>কৃষি ও প্রকৃতি</NavLink>
            </li>

            <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6]">
              <NavLink to={`/children-post`}>ছোটদের পোস্ট</NavLink>
            </li>

            <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6]">
              <NavLink to={`/study`}>পড়াশুনা</NavLink>
            </li>
          </div>

          <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6]">
            <NavLink to={`https://www.dhakapost.com/unicode-to-bijoy-converter`} target="_blank">কনভার্টার</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
