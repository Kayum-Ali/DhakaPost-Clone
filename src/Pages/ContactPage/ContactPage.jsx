import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { MdAddCall } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";






const ContactPage = () => {
    const walton = 'https://res.cloudinary.com/dqescabbl/image/upload/v1723283697/11262198246645138598_xjbefy.jpg'
  return (
    <div className="bg-[#EFF3F6]">
      <Header></Header>
        <div className="py-3 px-2 z-0 mx-auto mt-12">
            <img className="basis-3/4 mx-auto" src={walton} alt="" />
        </div>
        <hr className="border-black opacity-80" />

        <div className="container mx-auto">
            {/* contact us */}
            <div className="py-4 px-3 lg:px-0">
                 <h2 className="text-2xl pb-2 font-medium opacity-80">Contact Us</h2>
                 <hr className="border-black opacity-80" />
            </div>
            {/* icon and phn and email */}
            <div className="flex flex-col lg:flex-row justify-between my-3 px-3 lg:px-0">
                  <div className="1st space-y-4 border-b-2 lg:border-b-0 border-b-gray-300  py-4 lg:py-0">
                       <div className="flex gap-4 items-center">
                           <MdAddCall className="bg-[#124B65] text-6xl p-3 rounded-full text-white"></MdAddCall>
                             <div className=" font-medium">
                                 <h3 >ফোন</h3>
                                 <p>+৮৮০ ৯৬১৩ ৬৭৮৬৭৮</p>
                             </div>
                           
                       </div>

                       <div className="flex gap-4 items-center">
                           <FaWhatsapp className="bg-[#124B65] text-6xl p-3 rounded-full text-white"></FaWhatsapp>
                             <div className=" font-medium">
                                 <h3 >হোয়াটসঅ্যাপ</h3>
                                 <p >+৮৮০ ১৭৭৭ ৭০৭৬০০</p>
                             </div>
                           
                       </div>

                  </div>

                  <div className="2nd lg:border-l-2 lg:pl-4 lg:border-l-gray-300 border-b-2 lg:border-b-0 border-b-gray-300 space-y-4 py-4 lg:py-0">
                       <div  className="flex gap-4 items-center">
                           <IoIosPhonePortrait className="bg-[#124B65] text-6xl p-3 rounded-full text-white"></IoIosPhonePortrait>
                             <div className=" font-medium">
                                 <h3>মোবাইল</h3>
                                 <p >++৮৮০ ১৩১৩ ৭৬৭৭৪২</p>
                             </div>
                           
                       </div>

                       <div className="flex gap-4 items-center">
                           <MdOutlineMarkEmailUnread className="bg-[#124B65] text-6xl p-3 rounded-full text-white"></MdOutlineMarkEmailUnread>
                             <div className=" font-medium">
                                 <h3 >ই-মেইল</h3>
                                 <p >info@dhakapost.com</p>
                             </div>
                           
                       </div>

                  </div>
                  <div className="3rd  lg:border-l-2 lg:pl-4 lg:border-l-gray-300 border-b-2 lg:border-b-0 border-b-gray-300 space-y-4 py-4 lg:py-0">
                       <div className="flex gap-4 items-center">
                           <IoLocationOutline className="bg-[#124B65] text-6xl p-3 rounded-full text-white"></IoLocationOutline>
                             <div className=" font-medium">
                                 <h3>ঠিকানা</h3>
                                 <p>৯৫ সোহরাওয়ার্দী এভিনিউ</p>
                                 <p>বারিধারা ডিপ্লোমেটিক জোন, ঢাকা ১২১২</p>
                             </div>
                           
                       </div>

                     

                  </div>
            </div>
            <hr className="border-[#D5D4D4] opacity-80" />

            {/* বিজ্ঞাপন text */}
            <div className="text-center py-4 text-xl">
                 <h2>বিজ্ঞাপন প্রকাশের জন্য যোগাযোগ করুন ০১৩১৩৭৬৭৭৫০ নাম্বারে</h2>
            </div>
            <hr className="border-[#D5D4D4] opacity-80" />

            <div className="overflow-hidden h-0 pb-[30%] relative my-6">
                <iframe className="border-2 border-[#1A73E8] h-full w-full top-0 left-0 absolute" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29202.2578495744!2d90.38503091083986!3d23.808560999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7aa733150cd%3A0xa31586446172a480!2sDhaka%20Post!5e0!3m2!1sen!2sbd!4v1723288112612!5m2!1sen!2sbd" width="600" height="450" allowFullScreen   loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
              
        </div>
      <Footer></Footer>
    </div>
  );
};

export default ContactPage;
