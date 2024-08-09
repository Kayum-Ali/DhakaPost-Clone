// import Footer from "../components/Footer/Footer";
import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import NationalData from "../components/NationalData/NationalData";
import Footer from "../components/Footer/Footer";

const National = () => {
  const addsImg = "https://i.ibb.co/PDbWbYR/BG.jpg";
  const addsImg2 = "https://i.ibb.co/djXGFmT/300X250.jpg";
  const addsImg3 = "https://i.ibb.co/XkGS4QT/namaz.jpg";
  const addsImg4 = "https://i.ibb.co/dgvFkbP/weather.jpg";
  const adds = "https://i.ibb.co/bPctdNy/11725643505918156321.png";

  const [nationalData, setNationalData] = useState([]);
  const [dataLength, setDataLength] = useState(10);

  useEffect(() => {
    fetch("national.json")
      .then((res) => res.json())
      .then((data) => setNationalData(data));
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
            <h2 className="mt-3 text-2xl">জাতীয়</h2>
            <div className="flex gap-5 py-5">
              <a href="" className="border-r pr-5 border-r-gray-400">
                রাজধানীর খবর
              </a>
              <a href="" className="border-r pr-5 border-r-gray-400">
                জাতীয় সংসদ
              </a>
              <a href="">চট্টগ্রামের খবর</a>
            </div>
            <hr className="border-black opacity-80" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-10 lg:grid-cols-12 lg:gap-2">
            <div className="grid lg:grid-cols-10 md:grid-cols-10 grid-cols-5  lg:col-span-10 md:col-span-10 lg:border-r lg:pr-2 border-r-gray-800 md:border-r-0 md:pr-0">
              {nationalData.slice(0, dataLength).map((data, idx) => (
                <NationalData key={idx} data={data}></NationalData>
              ))}


            <div className=" border lg:w-[1050px] w-[100vw] ">
                <div className={ dataLength === nationalData.length ? "hidden" : "my-3 text-center  "} >
                    <button onClick={() => setDataLength(nationalData.length)}
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default National;
