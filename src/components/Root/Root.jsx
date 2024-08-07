import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
const adds = "https://i.ibb.co/bPctdNy/11725643505918156321.png";

const Root = () => {
  return (
    <div className="bg-[#EFF3F6] ">
        <Header></Header>
            <div className="py-3 px-2 mx-auto mt-12">
                <img className="basis-3/4 mx-auto" src={adds} alt="" />
            </div>
            <hr className="border-black opacity-80" />
            <div className="lg:w-3/4 w-full px-2 container overflow-hidden basis3/4 mx-auto">
                <Outlet></Outlet>
            </div>
    </div>
  );
};

export default Root;
