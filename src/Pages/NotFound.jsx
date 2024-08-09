import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";


const NotFound = () => {
    return (
        <div>
            <Header></Header>
               <div className="h-[90vh] bg-[#EFF3F6]  flex justify-center items-center flex-col">
                    <h2 className="text-4xl border-b pb-1 mb-3">404 - Not Found</h2>
                    <p className="text-2xl font-medium mb-5">অনুসন্ধানকৃত তথ্য পাওয়া যায়নি</p>
                    <Link to={`/`} className="border-b border-dashed pb-2 focus:text-purple-400 hover:bg-gray-300 p-4 rounded-lg bg-gray-200">সর্বশেষ খবর জানতে এখানে চাপুন</Link>
               </div>

            <Footer></Footer>
            
        </div>
    );
};

export default NotFound;