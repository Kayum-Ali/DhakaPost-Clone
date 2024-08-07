import { Link, useLoaderData, useParams } from "react-router-dom";
import { IoIosShareAlt } from "react-icons/io";
import { IoCopyOutline } from "react-icons/io5";
import { MdWhatsapp } from "react-icons/md";
import { TiSocialFacebook } from "react-icons/ti";
import { MdOutlineLocalPrintshop } from "react-icons/md";

const LatestNewsDetails = () => {
  const adds = "https://i.ibb.co/bPctdNy/11725643505918156321.png";
  const adds1 = "https://i.ibb.co/mBQTmJR/img1.png";
  const icon = "https://i.ibb.co/QXFd0p7/icon.webp";
  const nogodAdd = "https://i.ibb.co/L8dCVjP/17716574972985266077.gif";
  const ksrm = 'https://i.ibb.co/X8BkG9B/11762138729451261380.png'
  const jomunaAC= 'https://i.ibb.co/NCNSSYQ/img2.png';

  const details = useLoaderData();
  const { id } = useParams();
  const detail = details.find((detail) => detail.id == id);
  console.log(id, details, detail);
  const { news_title, news_description, post_date, post_time, img } = detail;
  return (
    <div className=" px-2 mx-auto">
      <div className="grid lg:grid-cols-12 gap-3 py-3">
        <div className="lg:col-span-8 w-full lg:w-auto border-r-[3px] p-3">
          <h3 className="border-b-2 w-max text-black border-black">জাতীয়</h3>
          <h2 className="text-base lg:text-2xl text-black font-medium my-3">{news_title}</h2>
          <hr className="bg-black border-black opacity-80 " />

          <div className="my-3 flex flex-col gap-5 lg:gap-0 lg:flex-row lg:justify-between lg:items-center">
            {/* profile div */}
            <div className="flex gap-3">
              <img className="w-[50px]" src={icon} alt="" />
              <div>
                <p>নিজস্ব প্রতিবেদক</p>
                <p>
                  {post_date} {post_time}
                </p>
              </div>
            </div>

            {/* icon div */}
            <div className="flex gap-3 items-center flex-wrap-reverse">
              <div className="text-[14px] opacity-80 ">
                <p>957</p>
                <p>views</p>
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

              <div className="bg-[#E5E6E6] rounded  p-2 hover:-translate-y-1">
                <MdOutlineLocalPrintshop className="text-[22px] "></MdOutlineLocalPrintshop>
              </div>

              <div className="bg-[#E5E6E6] rounded  p-2 hover:-translate-y-1">
                <p className="">অ+</p>
              </div>
              <div className="bg-[#E5E6E6] rounded  p-2 hover:-translate-y-1">
                <p className="">অ-</p>
              </div>
            </div>
        </div>

          <div className="my-3">
            <img className="basis-full w-full" src={img} alt="" />
            <h4>ফাইল ছবি</h4>
          </div>

          <div>
            <h2 className=" lg:text-2xl lg:font-bold mb-4">
              {news_description.slice(0, 150)}
            </h2>
            <hr className="border-black opacity-80" />

            <div className="flex justify-center py-4">
              <img src={nogodAdd} alt="" />
            </div>
            <hr className=" border-black opacity-80" />

            {/* table */}
            
            <div className="overflow-x-auto rounded-lg border border-gray-200 my-10">
              <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <thead className="">
                  <tr className="">
                    <th className=" px-4 py-2 font-bold bg-[#C2DAF5] text-black text-start">
                    আরও পড়ুন
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="w px-4 py-2 font-medium text-gray-900 bg-[#EEF6FF] hover:text-blue-500">
                    আইজিপির পদ থেকে সরিয়ে দেওয়া হলো চৌধুরী আব্দুল্লাহ মামুনকে
                    </td>
                  </tr>

                  <tr>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 bg-[#EEF6FF] hover:text-blue-500">
                    সংকট উত্তরণে দ্রুত চেইন অব কমান্ড প্রতিষ্ঠার চেষ্টায় পুলিশ
                    </td>
                    
                  </tr>

                  <tr>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 bg-[#EEF6FF] hover:text-blue-500">
                    অজ্ঞাত স্থান থেকে আইজিপির ভিডিও বার্তা
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="mb-5">{news_description.slice(151, 250)}</h2>

            <hr className=" border-black opacity-80"/>
              
              <div className="flex justify-center mt-5">
                  <img src={ksrm} alt="" />
              </div>

              <hr className="my-3  border-black opacity-80"/>

              <h2 className="p-3 ">{news_description.slice(251, 500)}</h2>

              <div className="flex justify-center items-center my-5"> 
                    <Link to={`https://www.whatsapp.com/channel/0029VaN81AfBvvscJ9n2xD2Y`} target="_blank" className="bg-[#249833] flex outline-none  justify-center w-max py-2.5 px-5 rounded text-white ">ঢাকাপোস্টচ্যানেল <MdWhatsapp className="mx-1"></MdWhatsapp> ফলো করুন</Link>
              </div>

              {/* 3 page */}
              <div className="*:bg-[#E3E3E3] flex gap-3 *:rounded-lg">
                  <Link className="p-3 lg:p-2 hover:text-cyan-900">ব্যাংক</Link>
                  <Link className="p-3 hover:text-cyan-900">বাংলাদেশ ব্যাংক</Link>
                  <Link className="p-3 hover:text-cyan-900">বিক্ষোভ</Link>
              </div>

              {/* adds */}

              <div className="w-[250px] lg:w-[500px] mx-auto my-3">
                 <img className="w-full" src={adds} alt="" />
              </div>





          </div>
        </div>

        <div className="lg:col-span-4 hidden  md:flex  lg:flex flex-col gap-5">
          <div className="w-auto">
            <img className="w-auto md:w-[50%] lg:w-full" src={adds1} alt="" />
          </div>
          <hr />


          <h2>ঢাকা পোস্ট ভিডিও</h2>
          <div className="w-auto">
            <img className="w-auto md:w-[50%] lg:w-full" src={jomunaAC} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNewsDetails;
