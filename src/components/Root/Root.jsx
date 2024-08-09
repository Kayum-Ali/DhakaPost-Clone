import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const adds = "https://i.ibb.co/bPctdNy/11725643505918156321.png";

const Root = () => {
  return (
    <div className="bg-[#EFF3F6] ">
        <Header></Header>
            <div className="py-3 px-2 z-0 mx-auto mt-12">
                <img className="basis-3/4 mx-auto" src={adds} alt="" />
            </div>
            <hr className="border-black opacity-80" />
            <div className="lg:w-3/4 w-full  container overflow-hidden basis3/4 mx-auto px-3">
                <Outlet></Outlet>
            </div>

            <Footer></Footer>
    </div>
  );
};

export default Root;
