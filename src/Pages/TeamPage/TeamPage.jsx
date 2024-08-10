import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const TeamPage = () => {
  const pijja =
    "https://res.cloudinary.com/dqescabbl/image/upload/v1723291019/16872915612011507007_atty22.png";

  const mohiuddinSorkar =
    "https://res.cloudinary.com/dqescabbl/image/upload/v1723291505/mohiuddin-sarker-20201221163114_zxwmqb.webp";

    const adnan = 'https://res.cloudinary.com/dqescabbl/image/upload/v1723293121/md-adnan-rahman-20201223174335_zg2waw.webp';
    const ShorifulIslam = 'https://res.cloudinary.com/dqescabbl/image/upload/v1723293267/md-shofiqul-islam-20201223174307_caenbp.webp';

    const AbuSaleh = 'https://res.cloudinary.com/dqescabbl/image/upload/v1723293386/abu-saleh-saadat-20201223174410_ug9ln7.webp';
    const Nur = 'https://res.cloudinary.com/dqescabbl/image/upload/v1723293508/nur-muhammad-20201223174800_xhlerf.webp';

    const Ripon = 'https://res.cloudinary.com/dqescabbl/image/upload/v1723293661/shaid-ripon-20201223174831_bineja.webp';
    const josim ='https://res.cloudinary.com/dqescabbl/image/upload/v1723293798/md-jasim-uddin-20201223174902_ligok8.webp'

  return (
    <div className="bg-[#EFF3F6]">
      <Header></Header>
      <div className="py-3 px-2 z-0 mx-auto mt-12">
        <img className="basis-3/4 mx-auto" src={pijja} alt="" />
      </div>
      <hr className="border-black opacity-80" />

      <div className="container mx-auto">
        {/* আমরা */}
        <div className="my-5  mb-10 flex justify-center">
          <h2 className="text-center text-[#124B65] text-3xl border-b-2 border-b-gray-400 w-max">
            আমরা
          </h2>
        </div>
        {/* Author img */}
        <div className="flex justify-center my-5">
          <div className=" relative overflow-hidden  shadow-lg">
            <img
              className="rounded-xl transform scale-100 hover:scale-105 duration-700"
              src={mohiuddinSorkar}
              alt=""
            />
            <div className="absolute bottom-1 bg-white text-black w-[95%] flex flex-col text-center ml-3">
              <h2 className="text-xl font-bold my-2">মহিউদ্দিন সরকার</h2>
              <p className="opacity-80">সম্পাদক</p>
            </div>
          </div>
        </div>

        {/* রিপোর্টিং বিভাগ */}
        <div className="my-12  flex justify-center">
          <h2 className="text-center text-[#124B65] text-3xl border-b-2 border-b-gray-400 w-max">
            রিপোর্টিং বিভাগ
          </h2>
        </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
            {/* 1st  */}
                <div className=" relative overflow-hidden  shadow-lg">
                    <img
                    className="rounded-xl w-full transform scale-100 hover:scale-105 duration-700"
                    src={adnan}
                    alt=""
                    />
                    <div className="absolute bottom-1 bg-white text-black w-[95%] flex flex-col text-center ml-3">
                    <h2 className="text-xl font-bold my-2">আদনান রহমান</h2>
                    <p className="opacity-80">প্রধান প্রতিবেদক</p>
                    </div>
                </div>
                {/* 2nd  */}
                <div className=" relative overflow-hidden  shadow-lg">
                    <img
                    className="rounded-xl w-full transform scale-100 hover:scale-105 duration-700"
                    src={ShorifulIslam}
                    alt=""
                    />
                    <div className="absolute bottom-1 bg-white text-black w-[95%] flex flex-col text-center ml-3">
                    <h2 className="text-xl font-bold my-2">শফিকুল ইসলাম</h2>
                    <p className="opacity-80">উপ-প্রধান প্রতিবেদক</p>
                    </div>
                </div>
                {/* 3rd  */}
                <div className=" relative overflow-hidden  shadow-lg">
                    <img
                    className="rounded-xl w-full transform scale-100 hover:scale-105 duration-700"
                    src={AbuSaleh}
                    alt=""
                    />
                    <div className="absolute bottom-1 bg-white text-black w-[95%] flex flex-col text-center ml-3">
                    <h2 className="text-xl font-bold my-2">আবু সালেহ সায়াদাত</h2>
                    <p className="opacity-80">জ্যেষ্ঠ প্রতিবেদক</p>
                    </div>
                </div>
                {/* 4th  */}
                <div className=" relative overflow-hidden  shadow-lg">
                    <img
                    className="rounded-xl w-full transform scale-100 hover:scale-105 duration-700"
                    src={Nur}
                    alt=""
                    />
                    <div className="absolute bottom-1 bg-white text-black w-[95%] flex flex-col text-center ml-3">
                    <h2 className="text-xl font-bold my-2">নূর মোহাম্মদ</h2>
                    <p className="opacity-80">জ্যেষ্ঠ প্রতিবেদক</p>
                    </div>
                </div>
                {/* 5th  */}
                <div className=" relative overflow-hidden  shadow-lg">
                    <img
                    className="rounded-xl w-full transform scale-100 hover:scale-105 duration-700"
                    src={Ripon}
                    alt=""
                    />
                    <div className="absolute bottom-1 bg-white text-black w-[95%] flex flex-col text-center ml-3">
                    <h2 className="text-xl font-bold my-2">সাইদ রিপন</h2>
                    <p className="opacity-80">জ্যেষ্ঠ প্রতিবেদক</p>
                    </div>
                </div>
                {/* 6th  */}
                <div className=" relative overflow-hidden  shadow-lg">
                    <img
                    className="rounded-xl w-full transform scale-100 hover:scale-105 duration-700"
                    src={josim}
                    alt=""
                    />
                    <div className="absolute bottom-1 bg-white text-black w-[95%] flex flex-col text-center ml-3">
                    <h2 className="text-xl font-bold my-2">জসীম উদ্দীন</h2>
                    <p className="opacity-80">জ্যেষ্ঠ প্রতিবেদক</p>
                    </div>
                </div>
                {/* 7th  */}
                <div className=" relative overflow-hidden  shadow-lg">
                    <img
                    className="rounded-xl w-full transform scale-100 hover:scale-105 duration-700"
                    src={`https://res.cloudinary.com/dqescabbl/image/upload/v1723293898/mahidi-hasan-dalim-20201223174928_sel7vv.webp`}
                    alt=""
                    />
                    <div className="absolute bottom-1 bg-white text-black w-[95%] flex flex-col text-center ">
                    <h2 className="text-xl font-bold my-2">মেহেদী হাসান ডালিম</h2>
                    <p className="opacity-80">জ্যেষ্ঠ প্রতিবেদক</p>
                    </div>
                </div>
                {/* 8th  */}
                <div className=" relative overflow-hidden  shadow-lg">
                    <img
                    className="rounded-xl w-full transform scale-100 hover:scale-105 duration-700"
                    src={`https://res.cloudinary.com/dqescabbl/image/upload/v1723294544/fm-abdur-rahman-masum-1-20201226140556_i8kuff.webp`}
                    alt=""
                    />
                    <div className="absolute bottom-1 bg-white text-black w-[95%] flex flex-col text-center ">
                    <h2 className="text-xl font-bold my-2">এফ এম আবদুর রহমান মাসুম</h2>
                    <p className="opacity-80">জ্যেষ্ঠ প্রতিবেদক</p>
                    </div>
                </div>
                {/* 9th */}
                <div className=" relative overflow-hidden  shadow-lg">
                    <img
                    className="rounded-xl w-full transform scale-100 hover:scale-105 duration-700"
                    src={`https://res.cloudinary.com/dqescabbl/image/upload/v1723294711/mani-acharjya-20201223161853_azu1fk.webp`}
                    alt=""
                    />
                    <div className="absolute bottom-1 bg-white text-black w-[95%] flex flex-col text-center ">
                    <h2 className="text-xl font-bold my-2">মনি আচার্য্য</h2>
                    <p className="opacity-80">নিজস্ব প্রতিবেদক</p>
                    </div>
                </div>
                {/* 10th  */}
                <div className=" relative overflow-hidden  shadow-lg">
                    <img
                    className="rounded-xl w-full transform scale-100 hover:scale-105 duration-700"
                    src={`https://res.cloudinary.com/dqescabbl/image/upload/v1723294776/shahadat-hosen-rakib-20201223175634_ptuc8l.webp`}
                    alt=""
                    />
                    <div className="absolute bottom-1 bg-white text-black w-[95%] flex flex-col text-center ">
                    <h2 className="text-xl font-bold my-2">শাহাদাত হোসেন (রাকিব)</h2>
                    <p className="opacity-80">নিজস্ব প্রতিবেদক</p>
                    </div>
                </div>
                {/* 11th  */}
                <div className=" relative overflow-hidden  shadow-lg">
                    <img
                    className="rounded-xl w-full transform scale-100 hover:scale-105 duration-700"
                    src={`https://res.cloudinary.com/dqescabbl/image/upload/v1723294989/tanvirul-islam-2-20210103164521_ncbdjo.webp`}
                    alt=""
                    />
                    <div className="absolute bottom-1 bg-white text-black w-[95%] flex flex-col text-center ">
                    <h2 className="text-xl font-bold my-2">তানভীরুল ইসলাম</h2>
                    <p className="opacity-80">নিজস্ব প্রতিবেদক</p>
                    </div>
                </div>
                {/* 12th  */}
                <div className=" relative overflow-hidden  shadow-lg">
                    <img
                    className="rounded-xl w-full transform scale-100 hover:scale-105 duration-700"
                    src={`https://res.cloudinary.com/dqescabbl/image/upload/v1723295030/hasnat-nayem-20201223180030_ltkpxr.webp`}
                    alt=""
                    />
                    <div className="absolute bottom-1 bg-white text-black w-[95%] flex flex-col text-center ">
                    <h2 className="text-xl font-bold my-2">হাসনাত নাঈম</h2>
                    <p className="opacity-80">নিজস্ব প্রতিবেদক</p>
                    </div>
                </div>
                {/* 13th */}
                <div className=" relative overflow-hidden  shadow-lg">
                    <img
                    className="rounded-xl w-full transform scale-100 hover:scale-105 duration-700"
                    src={`https://res.cloudinary.com/dqescabbl/image/upload/v1723295089/nazrul-islam-20230405153639_wvvx25.webp`}
                    alt=""
                    />
                    <div className="absolute bottom-1 bg-white text-black w-[95%] flex flex-col text-center ">
                    <h2 className="text-xl font-bold my-2">নজরুল ইসলাম</h2>
                    <p className="opacity-80">নিজস্ব প্রতিবেদক</p>
                    </div>
                </div>
                {/* 14th */}
                <div className=" relative overflow-hidden  shadow-lg">
                    <img
                    className="rounded-xl w-full transform scale-100 hover:scale-105 duration-700"
                    src={`https://res.cloudinary.com/dqescabbl/image/upload/v1723295126/abdul-halim-rimon-20201223180828_t55bic.webp`}
                    alt=""
                    />
                    <div className="absolute bottom-1 bg-white text-black w-[95%] flex flex-col text-center ">
                    <h2 className="text-xl font-bold my-2">আদিত্য রিমন</h2>
                    <p className="opacity-80">নিজস্ব প্রতিবেদক</p>
                    </div>
                </div>
                {/* 15th */}
                <div className=" relative overflow-hidden  shadow-lg">
                    <img
                    className="rounded-xl w-full transform scale-100 hover:scale-105 duration-700"
                    src={`https://res.cloudinary.com/dqescabbl/image/upload/v1723295187/saiful-islam-20221113151516_zw7m59.webp`}
                    alt=""
                    />
                    <div className="absolute bottom-1 bg-white text-black w-[95%] flex flex-col text-center ">
                    <h2 className="text-xl font-bold my-2">মো. সাইফুল ইসলাম</h2>
                    <p className="opacity-80">নিজস্ব প্রতিবেদক</p>
                    </div>
                </div>
                {/* 16th */}
                <div className=" relative overflow-hidden  shadow-lg">
                    <img
                    className="rounded-xl w-full transform scale-100 hover:scale-105 duration-700"
                    src={`https://res.cloudinary.com/dqescabbl/image/upload/v1723295232/musa-mollick-20221113151700_sjo84z.webp`}
                    alt=""
                    />
                    <div className="absolute bottom-1 bg-white text-black w-[95%] flex flex-col text-center ">
                    <h2 className="text-xl font-bold my-2">মুছা মল্লিক</h2>
                    <p className="opacity-80">নিজস্ব প্রতিবেদক</p>
                    </div>
                </div>
                

            </div>


            
        {/* সারাদেশ বিভাগ */}
        <div className="my-12  flex justify-center">
          <h2 className="text-center text-[#124B65] text-3xl border-b-2 border-b-gray-400 w-max">
          সারাদেশ বিভাগ
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-center my-12">
            {/* 1st */}
            <div className=" relative overflow-hidden  shadow-lg">
                    <img
                    className="rounded-xl w-full transform scale-100 hover:scale-105 duration-700"
                    src={`https://res.cloudinary.com/dqescabbl/image/upload/v1723295442/ruhul-amin-royel-20201223163427_t7w9ar.webp`}
                    alt=""
                    />
                    <div className="absolute bottom-1 bg-white text-black w-[95%] flex flex-col text-center ml-3">
                    <h2 className="text-xl font-bold my-2">মোঃ রুহুল আমিন</h2>
                    <p className="opacity-80">জেষ্ঠ সহ সম্পাদক</p>
                    </div>
                </div>
                {/* 2nd */}
                <div className=" relative overflow-hidden  shadow-lg">
                    <img
                    className="rounded-xl w-full transform scale-100 hover:scale-105 duration-700"
                    src={`https://res.cloudinary.com/dqescabbl/image/upload/v1723295678/rabeya-khatun-20221104101128_rulojl.webp`}
                    alt=""
                    />
                    <div className="absolute bottom-1 bg-white text-black w-[95%] flex flex-col text-center ml-3">
                    <h2 className="text-xl font-bold my-2">রাবেয়া খাতুন</h2>
                    <p className="opacity-80"> সহ সম্পাদক</p>
                    </div>
                </div>
                {/* 3rd */}
                <div className=" relative overflow-hidden  shadow-lg">
                    <img
                    className="rounded-xl w-full transform scale-100 hover:scale-105 duration-700"
                    src={`https://res.cloudinary.com/dqescabbl/image/upload/v1723295779/jasim-uddin-20221105112420_jfv8vj.webp`}
                    alt=""
                    />
                    <div className="absolute bottom-1 bg-white text-black w-[95%] flex flex-col text-center ml-3">
                    <h2 className="text-xl font-bold my-2">জসিম উদ্দিন</h2>
                    <p className="opacity-80"> সহ সম্পাদক</p>
                    </div>
                </div>

        </div>




      </div>
      

      <Footer></Footer>
    </div>
  );
};

export default TeamPage;
