import { useEffect, useState } from "react";
import { IoIosShareAlt } from "react-icons/io";
import { IoCopyOutline } from "react-icons/io5";
import { MdWhatsapp } from "react-icons/md";
import { TiSocialFacebook } from "react-icons/ti";
import News from "../News/News";
import './LatestNews.css'

const LatestNews = () => {

    const addsImg = 'https://i.ibb.co/PDbWbYR/BG.jpg';
    const addsImg2 = 'https://i.ibb.co/djXGFmT/300X250.jpg';
    const addsImg3 = 'https://i.ibb.co/XkGS4QT/namaz.jpg';
    const addsImg4 = 'https://i.ibb.co/dgvFkbP/weather.jpg';


  const [news, setNews] = useState([]);
  const [dataLength, setDataLength] = useState(10);


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
          
          <div className="bg-[#E5E6E6] rounded cursor-pointer  p-2 hover:-translate-y-1">
            <TiSocialFacebook className="text-[22px] "></TiSocialFacebook>
          </div>
          <div className="bg-[#E5E6E6] cursor-pointer rounded p-2 hover:-translate-y-1">
            <MdWhatsapp className="text-[22px] "></MdWhatsapp>
          </div>
          <div className="bg-[#E5E6E6] cursor-pointer rounded p-2 hover:-translate-y-1">
            <IoIosShareAlt className="text-[22px] "></IoIosShareAlt>
          </div>
          <div className="bg-[#E5E6E6] cursor-pointer rounded  p-2 hover:-translate-y-1">
            <IoCopyOutline className="text-[22px] "></IoCopyOutline>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1  lg:grid-cols-12 gap-2 my-3 text-[#000]">
            <div className="lg:col-span-8  lg:border-r-2 lg:border-gray-300 pr-3">
                {news.slice(0, dataLength).map((item, idx) => (
                    <News key={idx} item={item}></News>
                ))}

                <div className={dataLength === news.length ? 'hidden' : 'my-3 text-center'}>
                     <button onClick={()=> setDataLength(news.length)} className="bg-[#25566D] text-white py-2.5 px-5">আরও দেখুন</button>
                </div>
            </div>

            <div className="lg:col-span-4">
                 <div className="flex flex-col gap-5 adds overflow-hidden">
                    <img src={addsImg} alt="" />
                    <img src={addsImg2} alt="" />
                    <img src={addsImg3} alt="" />
                    <img src={addsImg4} alt="" />
                 </div>
                 
            </div>
      </div>
    </div>
  );
};

export default LatestNews;
