// import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const National = () => {
  const adds = "https://i.ibb.co/bPctdNy/11725643505918156321.png";
  return (
    <div className="bg-[#EFF3F6]">
      <Header></Header>
                <div className="py-3 px-2 z-0 mx-auto mt-12">
                    <img className="basis-3/4 mx-auto" src={adds} alt="" />
                </div>
                <hr className="border-black opacity-80" />
                <div>


        <div className="container mx-auto">
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


              
        </div>
      </div>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default National;
