// import Footer from "../components/Footer/Footer";
import { useContext, useEffect, useState } from "react";


import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import InternationalData from "../../components/InternationalData/InternationalData";
import { Link } from "react-router-dom";
import { DarkContext } from "../../context/App.context";


const InternationalPage = () => {
  const addsImg = "https://i.ibb.co/PDbWbYR/BG.jpg";
  const addsImg2 = "https://i.ibb.co/djXGFmT/300X250.jpg";
  const addsImg3 = "https://i.ibb.co/XkGS4QT/namaz.jpg";
  const addsImg4 = "https://i.ibb.co/dgvFkbP/weather.jpg";
  const walton = "https://res.cloudinary.com/dqescabbl/image/upload/v1723283697/11262198246645138598_xjbefy.jpg";
  const beutina= 'https://res.cloudinary.com/dqescabbl/image/upload/v1723278695/BG_1_mrxtki.jpg'

  const [internationalData, setInternationalData] = useState([]);
  const [dataLength, setDataLength] = useState(10);

  useEffect(() => {
    fetch("international.json")
      .then((res) => res.json())
      .then((data) => setInternationalData(data));
  }, []);


  const {
    dark: [isDark],
} = useContext(DarkContext);
  return (
    <div  className={`${isDark ? "bg-[#26292C] text-white" : "bg-[#EFF3F6]"}`}>
      <Header></Header>
      <div className="py-3 px-2 z-0 mx-auto mt-12">
        <img className="basis-3/4 mx-auto" src={walton} alt="" />
      </div>
      <hr className="border-black opacity-80" />
      <div>
        <div className="container mx-auto px-3 lg:px-0">
          <div>
            <h2 className="mt-3 text-2xl">আন্তর্জাতিক</h2>
            <div className="flex gap-5 flex-wrap py-5">
              <a href="" className="border-r pr-5 border-r-gray-400">
              মধ্যপ্রাচ্য
              </a>
              <a href="" className="border-r pr-3 border-r-gray-400">
              ভারত
              </a>
              <a href="" className="border-r pr-3 border-r-gray-400">পাকিস্তান</a>
              <a href="" className="border-r pr-3 border-r-gray-400">কাশ্মীর</a>
              <a href="" className="border-r pr-3 border-r-gray-400">চীন</a>
              <a href="" className="border-r pr-3 border-r-gray-400">আফ্রিকা</a>
              <a href="" className="border-r pr-3 border-r-gray-400">এশিয়া</a>
              <a href="" className="border-r pr-3 border-r-gray-400">ইউরোপ</a>
              <a href="" className="border-r pr-3 border-r-gray-400">আমেরিকা</a>
            </div>
            <hr className="border-black opacity-80" />
          </div>


          
            {/* custom link */}
            <div className="grid grid-cols-1 md:grid-cols-10 lg:grid-cols-12 gap-5 py-5">
             <Link to={`/international/16`} className="md:col-span-5 lg:col-span-4 hover:h2:text-blue-400">
              <h2 className="text-xl  font-medium">বাংলাদেশ সীমান্তবর্তী মংডুতে ভয়াবহ ড্রোন হামলা, ২০০ নিহতের শঙ্কা</h2>
              <p className="opacity-80  mt-5">বাংলাদেশ সীমান্তবর্তী মিয়ানমারের মংডুতে ভয়াবহ ড্রোন হামলার ঘটনা ঘটেছে। এতে বহু মানুষের মৃত্যু হয়েছে বলে শঙ্কা করা হচ্ছে। ব্রিটিশ বার্তাসংস্থা রয়টার্স</p>

             </Link>
              <Link to={`/international/16`} className="md:col-span-5 lg:col-span-5 lg:border-r-2 border-r-black pr-4 overflow-hidden">
                  <img className="w-full transform scale-100 hover:scale-105 duration-700 h-full" src={`https://res.cloudinary.com/dqescabbl/image/upload/v1723312621/rohingya-20240810194230_gnyomu.webp`} alt="" />
              </Link>
              <div className="lg:col-span-3 md:hidden lg:block  overflow-hidden">
                 <img className="w-full h-full transform scale-100 hover:scale-105 duration-700" src={`https://res.cloudinary.com/dqescabbl/image/upload/v1723301012/9897608973079833257_uif7yn.gif`} alt="" />
              </div>


          </div>
          
          <hr className="border-black opacity-80" />

          <div className="grid grid-cols-1 md:grid-cols-10 lg:grid-cols-12 lg:gap-2">
            <div className="grid lg:grid-cols-10 md:grid-cols-10 grid-cols-5  lg:col-span-10 md:col-span-10 lg:border-r lg:pr-2 border-r-gray-800 md:border-r-0 md:pr-0">
              {internationalData.slice(0, dataLength).map((data, idx) => (
                <InternationalData key={idx} data={data}></InternationalData>
              ))}


            <div className=" border lg:w-[1050px] w-[100vw] ">
                <div className={ dataLength === internationalData.length ? "hidden" : "my-3 text-center  "} >
                    <button onClick={() => setDataLength(internationalData.length)}
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

export default InternationalPage;
