import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
const adds = "https://i.ibb.co/bPctdNy/11725643505918156321.png";

const Root = () => {
  return (
    <div className="bg-[#EFF3F6]">
        <Header></Header>
            <div className="py-3 mx-auto mt-12">
                <img className="basis-3/4 mx-auto" src={adds} alt="" />
            </div>
            <hr />
            <div className="lg:w-3/4 w-11/12 basis3/4 mx-auto">
                <Outlet></Outlet>
            </div>
    </div>
  );
};

export default Root;
