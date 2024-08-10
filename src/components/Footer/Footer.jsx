import { Link } from "react-router-dom";
import { IoMdCall } from "react-icons/io";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdWhatsapp } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGooglePlay } from "react-icons/fa6";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const Footer = () => {
  const logo = "https://i.ibb.co/BTWCVWW/logo-removebg-preview.png";

  const [hide, setHide] = useState(false)
  return (
    <div>
      <footer className="bg-[#EFF5F4]">
        <hr className="border-t-[4px] border-t-[#234E67]" />

        <div className="container mx-auto py-10 ">
          {/* logo */}
          <div className="flex lg:justify-between gap-5 items-center text-center md:justify-around flex-col md:flex-row lg:flex-row">
            <img className="w-48" src={logo} alt="" />
            <p className="text-xl font-medium">সম্পাদক: মহিউদ্দিন সরকার</p>
          </div>

          {/* footer Link */}
          <div className="">
            <ul className="flex lg:gap-5 gap-3   flex-wrap justify-center my-8">
              <Link to={`/privacy`} className="hover:underline">গোপনীয়তার নীতি</Link>

              <Link to={`/terms-of-use`} className="hover:underline">ব্যবহারের শর্তাবলি</Link>
            
              <Link to={`/contact`} className="hover:underline">যোগাযোগ</Link>

              <Link to={`/about-us`} className="hover:underline">আমাদের সম্পর্কে</Link>

              <Link to={`/team`} className="hover:underline">আমরা</Link>
              <Link className="hover:underline">আর্কাইভ</Link>
              <Link to={`/advertise`} className="hover:underline">বিজ্ঞাপন</Link>
            </ul>
          </div>

          {/* footer contact */}
          <div>
            <ul className="flex flex-col flex-wrap justify-center text-center lg:flex-row lg:gap-5 gap-3 items-center text-black">
              <li className="px-3 lg:px-0">
                <a href="">
                  ৯৫ সোহরাওয়ার্দী এভিনিউ, বারিধারা ডিপ্লোমেটিক জোন, ঢাকা ১২১২।
                </a>
              </li>

              <div className="flex  lg:gap-5 gap-3">
                <li>
                  <a className="flex items-center gap-1" href="">
                    <IoMdCall className="font-bold"></IoMdCall>
                    +৮৮০ ৯৬১৩ ৬৭৮৬৭৮
                  </a>
                </li>

                <li>
                  <a className="flex items-center gap-1" href="">
                    <IoIosPhonePortrait className="font-bold"></IoIosPhonePortrait>
                    +৮৮০ ১৩১৩ ৭৬৭৭৪২
                  </a>
                </li>
              </div>

              <div className="flex  lg:gap-5 gap-3">
                <li>
                  <a className="flex items-center gap-1" href="">
                    <MdWhatsapp className="font-bold"></MdWhatsapp>+৮৮০ ১৭৭৭
                    ৭০৭৬০০
                  </a>
                </li>

                <li>
                  <a className="flex items-center gap-1" href="">
                    <MdOutlineMail className="font-bold"></MdOutlineMail>
                    info@dhakapost.com
                  </a>
                </li>
              </div>
            </ul>
          </div>

          {/* footer icon */}
          <div className="flex gap-3 justify-center my-5">

                <Link to={`https://www.facebook.com/DPostOnline/`} className="border border-[rgba(0,0,0,0.3)] hover:border-[rgba(0,0,0,0.8)] p-2" target="_blank">
                   <FaFacebookF></FaFacebookF>
                </Link>

                <Link target="_blank" to={`https://x.com/dpostonline`} className="border border-[rgba(0,0,0,0.3)] hover:border-[rgba(0,0,0,0.8)] p-2">
                   <BsTwitterX></BsTwitterX>
                </Link>

                <Link target="_blank" to={`https://www.instagram.com/dpostonline/`} className="border border-[rgba(0,0,0,0.3)] hover:border-[rgba(0,0,0,0.8)] p-2">
                   <IoLogoInstagram></IoLogoInstagram>
                </Link>


                <Link  target="_blank" to={`https://www.youtube.com/c/DhakaPostOfficial`} className="border border-[rgba(0,0,0,0.3)] hover:border-[rgba(0,0,0,0.8)] p-2">
                    <IoLogoYoutube></IoLogoYoutube>
                </Link>

                <Link  target="_blank" to={`https://www.linkedin.com/company/dpostonline/`}  className="border border-[rgba(0,0,0,0.3)] hover:border-[rgba(0,0,0,0.8)] p-2">
                     <IoLogoLinkedin></IoLogoLinkedin>
                </Link>


                <Link  target="_blank" to={`https://play.google.com/store/apps/details?id=com.dhakapost&pli=1`}  className="border border-[rgba(0,0,0,0.3)] hover:border-[rgba(0,0,0,0.8)] p-2">
                     <FaGooglePlay></FaGooglePlay>
                </Link>
          </div>

          <div className={`flex justify-center relative ${hide ? 'hidden' : ''}`}>

              <img className="lg:w-full w-2/3 lg:basis-full basis-1/2 mx-auto" src={`https://res.cloudinary.com/dqescabbl/image/upload/v1723301204/15193642038362954150_lvycyl.gif`} alt="" />
              
              <RxCross2 onClick={()=> setHide(!hide)} className={`absolute top-0 right-0 text-white text-2xl animate-bounce bg-gray-300 ${hide ? 'hidden' : ''}`} ></RxCross2>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
