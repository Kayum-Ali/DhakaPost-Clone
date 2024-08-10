// import Footer from "../components/Footer/Footer";
import { useEffect, useState } from "react";
import Header from "../components/Header/Header";

import Footer from "../components/Footer/Footer";
import PoliticsData from "../components/PoliticsData/PoliticsData";
import { Link } from "react-router-dom";

const Politics = () => {
  const addsImg = "https://i.ibb.co/PDbWbYR/BG.jpg";
  const addsImg2 = "https://i.ibb.co/djXGFmT/300X250.jpg";
  const addsImg3 = "https://i.ibb.co/XkGS4QT/namaz.jpg";
  const addsImg4 = "https://i.ibb.co/dgvFkbP/weather.jpg";
  const adds = "https://res.cloudinary.com/dqescabbl/image/upload/v1723278216/970X90_xdcz0g.jpg";
  const beutina = 'https://res.cloudinary.com/dqescabbl/image/upload/v1723278695/BG_1_mrxtki.jpg'

  const [politicsData, setPoliticsData] = useState([]);
  const [dataLength, setDataLength] = useState(10);

  useEffect(() => {
    fetch("politics.json")
      .then((res) => res.json())
      .then((data) => setPoliticsData(data));
  }, []);

  return (
    <div className="bg-[#EFF3F6]">
      <Header></Header>
      <div className="py-3 px-2 z-0 mx-auto mt-12">
        <img className="basis-3/4 mx-auto" src={adds} alt="" />
      </div>
      <hr className="border-black opacity-80" />
      <div>
        <div className="container mx-auto px-3 lg:px-0">
          <div>
            <h2 className="mt-3 text-2xl">রাজনীতি</h2>
            <div className="flex gap-5 py-5">
              <a href="" className="border-r pr-5 border-r-gray-400">
              আওয়ামী লীগ
              </a>
              <a href="" className="border-r pr-5 border-r-gray-400">
              বিএনপি
              </a>
              <a href="">জাতীয় পার্টি</a>
            </div>
            <hr className="border-black opacity-80" />
          </div>

            {/* custom link */}
            <div className="grid grid-cols-1 md:grid-cols-10 lg:grid-cols-12 gap-5 py-5">
             <Link to={`/politics/29`} className="md:col-span-5 lg:col-span-4 hover:h2:text-blue-400">
              <h2 className="text-xl  font-medium">ঢাকা কলেজের শিক্ষার্থীদের চিকিৎসা ব্যয় দেবে কলেজ প্রশাসন</h2>
              <p className="opacity-80  mt-5">বৈষম্যবিরোধী ছাত্র আন্দোলনে আহত ঢাকা কলেজের শিক্ষার্থীদের যাবতীয় চিকিৎসা ব্যয় কলেজ প্রশাসন বহন করবে। একইসঙ্গে পরবর্তীতে কর্তৃপক্ষের নির্দেশনা অনুযায়ী</p>

             </Link>
              <Link to={`/politics/29`} className="md:col-span-5 lg:col-span-5 lg:border-r-2 border-r-black pr-4 overflow-hidden">
                  <img className="w-full transform scale-100 hover:scale-105 duration-700 h-full" src={`https://res.cloudinary.com/dqescabbl/image/upload/v1723274328/dhaka-colege-bg-20240326143646-20240810131648_etiwm6.webp`} alt="" />
              </Link>
              <div className="lg:col-span-3 md:hidden lg:block  overflow-hidden">
                 <img className="w-full h-full transform scale-100 hover:scale-105 duration-700" src={`https://res.cloudinary.com/dqescabbl/image/upload/v1723301012/9897608973079833257_uif7yn.gif`} alt="" />
              </div>


          </div>
          
          <hr className="border-black opacity-80" />

          <div className="grid grid-cols-1 md:grid-cols-10 lg:grid-cols-12 lg:gap-2">
            <div className="grid lg:grid-cols-10 md:grid-cols-10 grid-cols-5  lg:col-span-10 md:col-span-10 lg:border-r lg:pr-2 border-r-gray-800 md:border-r-0 md:pr-0">
              {politicsData.slice(0, dataLength).map((data, idx) => (
                <PoliticsData key={idx} data={data}></PoliticsData>
              ))}


            <div className=" border lg:w-[1050px] w-[100vw] ">
                <div className={ dataLength === politicsData.length ? "hidden" : "my-3 text-center  "} >
                    <button onClick={() => setDataLength(politicsData.length)}
                      className="bg-[#25566D]  text-white py-2.5 px-5"
                    > আরও দেখুন</button>
                  </div>
                </div>
            </div>

            <div className="lg:col-span-2 block md:hidden lg:block">
              <div className="flex flex-col gap-5 adds overflow-hidden">
                <img src={addsImg} alt="" />
                <img src={addsImg2} alt="" />
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

export default Politics;
