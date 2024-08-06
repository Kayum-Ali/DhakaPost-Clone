import { CiDark, CiSearch } from "react-icons/ci";
import { IoIosArrowDown, IoMdNotificationsOutline } from "react-icons/io";
import { IoMenuSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const logo = "https://i.ibb.co/Z1v1j7K/download-10-removebg-preview.png";
  return (
    <div>
      <header className="bg-[#124B65] text-white  h-[50px] basis-full fixed overflow-hidden top-0 w-full z-10">
        <nav className="grid grid-cols-2 md:grid-cols-12 lg:grid-cols-12 container mx-auto items-center justify-between py-2 gap-4 md:gap-2 ">
          {/* logo */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 justify-self-start md:justify-self-start">
            <img className="lg:w-[240px] w-[200px] h-[28px] lg:h-[35px] md:w-[230px] md:h-[32px] " src={logo} alt="" />
          </div>

          {/* nav middle */}
          <div className="lg:col-span-8 md:col-span-8 hidden  md:block lg:block">
            <ul className="flex lg:gap-6 md:gap-3 lg:space-x-3 md:space-x-1 lg:pl-3 md:pl-1">
              <li>
                <NavLink>সর্বশেষ</NavLink>
              </li>

              <li>
                <NavLink>জাতীয়</NavLink>
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
                <div className="dropdown-content shadow-xl p-2 text-black">
                  <a href="">
                    <NavLink>জেলার খবর</NavLink>
                  </a>
                </div>
              </div>

              <li className="hidden md:hidden lg:hidden xl:block">
                <NavLink>খেলা</NavLink>
              </li>

              <li  className="hidden md:hidden lg:hidden xl:block">
                <NavLink>বিনোদন</NavLink>
              </li>

              <li className="hidden md:hidden lg:hidden xl:block">
                <NavLink>জবস</NavLink>
              </li>
            </ul>
          </div>
          {/* nav right/icon */}
          <div className="lg:col-span-2 md:col-span-2 col-span-1 justify-self-center md:justify-self-end lg:justify-self-end">
            <div className="flex lg:gap-5 gap-5 md:gap-3 lg:text-3xl md:text-2xl text-3xl">
              <CiDark></CiDark>
              <IoMdNotificationsOutline></IoMdNotificationsOutline>
              <CiSearch></CiSearch>
              <IoMenuSharp></IoMenuSharp>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
