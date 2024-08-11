// import Footer from "../components/Footer/Footer";
import { useEffect, useState } from "react";


import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import { Link } from "react-router-dom";
import SportsData from "../../components/SportsData/SportsData";


const SportsPage = () => {
  const addsImg = "https://i.ibb.co/PDbWbYR/BG.jpg";
  const addsImg2 = "https://i.ibb.co/djXGFmT/300X250.jpg";
  const addsImg3 = "https://i.ibb.co/XkGS4QT/namaz.jpg";
  const addsImg4 = "https://i.ibb.co/dgvFkbP/weather.jpg";
  const walton = "https://res.cloudinary.com/dqescabbl/image/upload/v1723283697/11262198246645138598_xjbefy.jpg";
  const beutina= 'https://res.cloudinary.com/dqescabbl/image/upload/v1723278695/BG_1_mrxtki.jpg'

  const [sportsData, setSportsData] = useState([]);
  const [dataLength, setDataLength] = useState(10);

  useEffect(() => {
    fetch("sports.json")
      .then((res) => res.json())
      .then((data) => setSportsData(data));
  }, []);

  return (
    <div className="bg-[#EFF3F6]">
      <Header></Header>
      <div className="py-3 px-2 z-0 mx-auto mt-12">
        <img className="basis-3/4 mx-auto" src={walton} alt="" />
      </div>
      <hr className="border-black opacity-80" />
      <div>
        <div className="container mx-auto px-3 lg:px-0">
          <div>
            <h2 className="mt-3 text-2xl">খেলা</h2>
            <div className="flex gap-5 flex-wrap py-5">
              <a href="" className="border-r pr-5 border-r-gray-400">
              ক্রিকেট
              </a>
              <a href="" className="border-r pr-3 border-r-gray-400">
              ফুটবল
              </a>
              <a href="" className="border-r pr-3 border-r-gray-400">হকি</a>
              <a href="" className="border-r pr-3 border-r-gray-400">টেনিস</a>
              <a href="" className="border-r pr-3 border-r-gray-400">অন্যান্য</a>
              <a href="" className="border-r pr-3 border-r-gray-400">টিভিতে আজকের খেলা</a>
              <a href="" className="border-r pr-3 border-r-gray-400">অলিম্পিক গেমস</a>
              
            </div>
            <hr className="border-black opacity-80" />
          </div>


          
            {/* custom link */}
            <div className="grid grid-cols-1 md:grid-cols-10 lg:grid-cols-12 gap-5 py-5">
             <Link to={`/sports/15`} className="md:col-span-5 lg:col-span-4 hover:h2:text-blue-400">
              <h2 className="text-xl  font-medium">আগেভাগেই পাকিস্তান যাচ্ছে বাংলাদেশ দল</h2>
              <p className="opacity-80  mt-5">পাকিস্তান প্রস্তাব দিয়ে রেখেছিল আগেই। চলমান অস্থিরতার সময়ে আগেভাগে রাওয়ালপিন্ডিতে গিয়েই নিজেদের প্রস্তুতি নিতে পারবে টাইগার ক্রিকেটাররা– সেটা জানিয়ে দিয়েছিল পিসিবি</p>

             </Link>
              <Link to={`/sports/15`} className="md:col-span-5 lg:col-span-5 lg:border-r-2 border-r-black pr-4 overflow-hidden">
                  <img className="w-full transform scale-100 hover:scale-105 duration-700 h-full" src={`https://res.cloudinary.com/dqescabbl/image/upload/v1723371890/bangladesh-test-20240810194128_aspjyg.webp`} alt="" />
              </Link>
              <div className="lg:col-span-3 md:hidden lg:block  overflow-hidden">
                 <img className="w-full h-full transform scale-100 hover:scale-105 duration-700" src={`https://res.cloudinary.com/dqescabbl/image/upload/v1723301012/9897608973079833257_uif7yn.gif`} alt="" />
              </div>


          </div>
          
          <hr className="border-black opacity-80" />

          <div className="grid grid-cols-1 md:grid-cols-10 lg:grid-cols-12 lg:gap-2">
            <div className="grid lg:grid-cols-10 md:grid-cols-10 grid-cols-5  lg:col-span-10 md:col-span-10 lg:border-r lg:pr-2 border-r-gray-800 md:border-r-0 md:pr-0">
              {sportsData.slice(0, dataLength).map((data, idx) => (
                <SportsData key={idx} data={data}></SportsData>
              ))}


            <div className=" border lg:w-[1050px] w-[100vw] ">
                <div className={ dataLength === sportsData.length ? "hidden" : "my-3 text-center  "} >
                    <button onClick={() => setDataLength(sportsData.length)}
                      className="bg-[#25566D]  text-white py-2.5 px-5"
                    > আরও দেখুন</button>
                  </div>
                </div>
            </div>

            <div className="lg:col-span-2 block md:hidden lg:block">
              <div className="flex flex-col gap-5 adds overflow-hidden">
                <img src={addsImg} alt="" />
                <img src={addsImg2} alt="" />
                <div className="my-3">
                         <hr className="border-black opacity-80" />
                         <h2 className="py-3">সর্বশেষ</h2>
                         <hr className="border-black opacity-80" />
                         <Link to={`/nayional/8`} className="hover:text-blue-500 py-2 flex ">
                            <h2>বিএনপিতে আপাতত কাউকে যোগদান করানো যাবে না</h2>
                            <img src={`https://i.ibb.co/VxQ4mXY/bnp-bg-20240808224524.jpg`} alt="" />
                         </Link>
                         <hr className="border-black opacity-80" />
                     
                </div>
                <img src={addsImg3} alt="" />
                <img src={addsImg4} alt="" />
                <img src={beutina} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default SportsPage;
