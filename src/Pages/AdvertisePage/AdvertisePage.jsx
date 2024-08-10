import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const AdvertisePage = () => {
    const pijja =
    "https://res.cloudinary.com/dqescabbl/image/upload/v1723291019/16872915612011507007_atty22.png";

  return (

    <div className="bg-[#EFF3F6]">
        <Header></Header>
      <div className="py-3 px-2 z-0 mx-auto mt-12">
        <img className="basis-3/4 mx-auto" src={pijja} alt="" />
      </div>
      <hr className="border-black opacity-80" />

      <div className="container mx-auto basis-[900px] max-w-[900px] px-3 lg:px-0">
          <div className="space-y-3 my-5">
              <h2 className="font-bold text-xl">Advertisement</h2>
              <p className="font-medium">Dhaka Post is an online base bangla news portal to provide news articles and features content using multimedia dimension to attract next generation. The aim of Dhaka Post is to provide accurate, objective, and real-time news to its audience across the country. With the slogan of ‘সত্যের সাথে সন্ধি’, the online news portal started its journey in 16th February 2021.</p>

              <p className="font-medium">This online is different and unique than other online news portals because it practices ‘multimedia’ journalism, which provides readers news of home and abroad along with audio, video, infographic, and web story. Dhaka Post puts an extra priority on national news and news from every district. However, it also covers different segments like politics, economics, international, sports, entertainment, education, information and technology, features, lifestyle, and columns.</p>
          </div>

          <div>
               <h2 className="text-xl font-bold mt-10">REACH US FOR ADVERTISEMENT</h2>
               <p className="font-medium">Phone: <Link to={`tel:+8809613678678`} className="underline">+8809613678678</Link> </p>

               <p className="font-medium">Email: <Link to={`mailto:murtuza@dhakapost.com`} className="underline">murtuza@dhakapost.com</Link> </p>
          </div>
          <Link to={`https://cdn.dhakapost.com/media/doc/2023January/Dhaka_Post_Media_Kit_Jan_23.pdf?_gl=1*5iwui8*_gcl_au*NDI0ODUyMzM1LjE3MjMwNDk5MDk.*_ga*MjAyODc4ODQ5MS4xNzIzMDQ5OTA5*_ga_PY16ZWGKXE*MTcyMzI4NzgwMy4xNS4xLjE3MjMzMDQ3NDYuNjAuMC4w`} target="_blank" className="underline my-12 block text-xl font-bold">Download Media Kit</Link>

      </div>
      <Footer></Footer>
    </div>
  );
};

export default AdvertisePage;
