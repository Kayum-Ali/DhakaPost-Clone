// import Footer from "../components/Footer/Footer";
import { useEffect, useState } from "react";


import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import { Link } from "react-router-dom";

import EntertainmentData from "../../components/EntertainmentData/EntertainmentData";


const EntertainmentPage = () => {
  const addsImg = "https://i.ibb.co/PDbWbYR/BG.jpg";
  const addsImg2 = "https://i.ibb.co/djXGFmT/300X250.jpg";
  const addsImg3 = "https://i.ibb.co/XkGS4QT/namaz.jpg";
  const addsImg4 = "https://i.ibb.co/dgvFkbP/weather.jpg";
  const walton = "https://res.cloudinary.com/dqescabbl/image/upload/v1723283697/11262198246645138598_xjbefy.jpg";
  const beutina= 'https://res.cloudinary.com/dqescabbl/image/upload/v1723278695/BG_1_mrxtki.jpg'

  const [entertainment, setIntertainmentData] = useState([]);
  const [dataLength, setDataLength] = useState(10);

  useEffect(() => {
    fetch("entertainment.json")
      .then((res) => res.json())
      .then((data) => setIntertainmentData(data));
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
            <h2 className="mt-3 text-2xl">বিনোদন</h2>
            <div className="flex gap-5 flex-wrap py-5">
              <a href="" className="border-r pr-5 border-r-gray-400">
              বলিউড
              </a>
              <a href="" className="border-r pr-3 border-r-gray-400">
              হলিউড
              </a>
              <a href="" className="border-r pr-3 border-r-gray-400">ঢালিউড</a>
            
              
            </div>
            <hr className="border-black opacity-80" />
          </div>


          
            {/* custom link */}
            <div className="grid grid-cols-1 md:grid-cols-10 lg:grid-cols-12 gap-5 py-5">
             <Link to={`/entertainment/30`} className="md:col-span-5 lg:col-span-4 hover:h2:text-blue-400">
              <h2 className="text-xl  font-medium">স্বামীর উদ্দেশে ফারিণ‘তুমিই হতে পারো একমাত্র শেখ, যে কখনো পালাবে না</h2>
              <p className="opacity-80  mt-5">বাগদানের এক বছর পূর্ণ হলো ছোট পর্দার জনপ্রিয় অভিনেত্রী তাসনিয়া ফারিণ ও তার স্বামী শেখ রেজওয়ানের। গত বছরের ১১ আগস্ট ঘরোয়া আয়োজনে তাদের আকদ সম্পন্ন হয়েছে। র্ঘদিনের প্রেমের সম্পর্কের পর বিয়ের সিদ্ধান্ত নেন এই জুটি। গত বছরই সেরে ফেলেন বাগদানপর্ব। এক বছর পূর্তিতে জীবনের বিশেষ এই দিনটি স্মরণ করেছেন তাসনিয়া ফারিণ।</p>

             </Link>
              <Link to={`/entertainment/30`} className="md:col-span-5 lg:col-span-5 lg:border-r-2 border-r-black pr-4 overflow-hidden">
                  <img className="w-full transform scale-100 hover:scale-105 duration-700 h-full" src={`https://res.cloudinary.com/dqescabbl/image/upload/v1723377270/tasnia-farin-husband-20240811171412_v6chro.webp`} alt="" />
              </Link>
              <div className="lg:col-span-3 md:hidden lg:block  overflow-hidden">
                 <img className="w-full h-full transform scale-100 hover:scale-105 duration-700" src={`https://res.cloudinary.com/dqescabbl/image/upload/v1723301012/9897608973079833257_uif7yn.gif`} alt="" />
              </div>


          </div>
          
          <hr className="border-black opacity-80" />

          <div className="grid grid-cols-1 md:grid-cols-10 lg:grid-cols-12 lg:gap-2">
            <div className="grid lg:grid-cols-10 md:grid-cols-10 grid-cols-5  lg:col-span-10 md:col-span-10 lg:border-r lg:pr-2 border-r-gray-800 md:border-r-0 md:pr-0">
              {entertainment.slice(0, dataLength).map((data, idx) => (
                <EntertainmentData key={idx} data={data}></EntertainmentData>
              ))}


            <div className=" border lg:w-[1050px] w-[100vw] ">
                <div className={ dataLength === entertainment.length ? "hidden" : "my-3 text-center  "} >
                    <button onClick={() => setDataLength(entertainment.length)}
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

export default EntertainmentPage;
