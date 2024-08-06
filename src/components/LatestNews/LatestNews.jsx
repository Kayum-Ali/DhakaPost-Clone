import { useEffect, useState } from "react";
import { IoIosShareAlt } from "react-icons/io";
import { IoCopyOutline } from "react-icons/io5";
import { MdWhatsapp } from "react-icons/md";
import { TiSocialFacebook } from "react-icons/ti";
import News from "../News/News";

const LatestNews = () => {

    const addsImg = 'https://i.ibb.co/PDbWbYR/BG.jpg';
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("latestNews.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);
  return (
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row justify-between space-y-2 md:space-y-0 items-center py-3 border-b-2 border-b-[#234e67]">
        <h1 className="text-[#234e67] text-2xl">আজকের খবর</h1>
        <div className="flex items-center gap-2">
          <div className="text-[#555] ">
            {/* <h1 className="text-[#234e67]">4.8k <br /> Shares</h1> */}
            <p className="text-base font-medium">4.8k</p>
            <p className="text-[9px]">Shares</p>
          </div>
          <div className="bg-[#E5E6E6] rounded  p-2 hover:-translate-y-1">
            <TiSocialFacebook className="text-[22px] "></TiSocialFacebook>
          </div>
          <div className="bg-[#E5E6E6] rounded p-2 hover:-translate-y-1">
            <MdWhatsapp className="text-[22px] "></MdWhatsapp>
          </div>
          <div className="bg-[#E5E6E6] rounded p-2 hover:-translate-y-1">
            <IoIosShareAlt className="text-[22px] "></IoIosShareAlt>
          </div>
          <div className="bg-[#E5E6E6] rounded  p-2 hover:-translate-y-1">
            <IoCopyOutline className="text-[22px] "></IoCopyOutline>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-2 my-3 text-[#000]">
            <div className="col-span-8 border-r-2 border-gray-300 pr-3">
                {news.map((item, idx) => (
                    <News key={idx} item={item}></News>
                ))}
            </div>

            <div className="col-span-4">
                 <div>
                    <img src={addsImg} alt="" />
                 </div>
                 
            </div>
      </div>
    </div>
  );
};

export default LatestNews;
