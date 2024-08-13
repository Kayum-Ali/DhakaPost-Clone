import { useContext } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { DarkContext } from "../../context/App.context";


const TermsOfUsePage = () => {
    const karkuma = 'https://res.cloudinary.com/dqescabbl/image/upload/v1723283002/15657995981450099518_zq3ioo.jpg';

    const {
      dark: [isDark],
  } = useContext(DarkContext);
    return (
        <div className={`${isDark ? "bg-[#26292C] text-white" : "bg-[#EFF3F6]"}`}>
        <Header></Header>
        <div className="py-3 px-2 z-0 mx-auto mt-12">
          <img className="basis-3/4 mx-auto" src={karkuma} alt="" />
        </div>
        <hr className="border-black opacity-80" />
  
        <div className="container mx-auto basis-[900px] max-w-[900px] px-3 lg:px-0">
          {/* 1st paragraph */}
              <div className="my-6 space-y-3">
                   <h2 className="text-xl font-bold">Terms of Use</h2>
                   
                   <p className="font-medium pb-3">Dhaka Post welcomes readers and visitors to the terms and conditions for use of Dhaka Post and its associated contents, services and applications. One can access the content of Dhaka Post in several ways by using multiple channels including www (world wide web), digital and social platforms.</p>

                   <p className="font-medium pb-3">o use our content, services, pictures, videos, information or whatsoever, readers and visitors must have to accept the ‘Terms and Conditions’ of use including Dhaka Post’s Privacy Policy. However, if anyone has any objection or reservation to any clause in the ‘Terms and Conditions’ of use or the Privacy Policy, one may raise the issue with Dhaka Post by sending an email at: [info@dhakapost.com]. But the authority of Dhaka Post reserves all right to reject or accept any such objection or reservation.</p>

                   <p className="font-medium">All the users of Dhaka Post are required to abide by this ‘Terms and Conditions’ of use. Failure to comply with the terms may lead to suspension of the account or prohibition from access to the website.</p>
  
              </div>
  
                  {/* 2nd paragraph */}
              <div className="space-y-1">
                  <h2 className="font-bold text-[18px]">Intellectual Property Rights</h2>
                  <p className="font-medium pb-3">Dhaka Post’s content, logos, copyright, trademarks, patents, images, text, graphics, domain names, audio, video and other related intellectual property rights or other features of Dhaka Post and name belong to Dhaka Post. Users cannot claim any rights in Dhaka Post’s intellectual property whether for commercial or non-commercial use. In addition, users are prevented from making any derivative work from the content of Dhaka Post.</p>
              </div>
  
              {/* 3rd paragraph */}
              <div className="space-y-1 my-3">
                    <h2 className="font-bold text-[18px]">Your use of our services</h2>
                    <p className="font-medium pb-3">Users are required to use Dhaka Post services only for lawful means and for read-only purpose. The audio and video elements of the website can only be listened and viewed and nothing beyond. However, Dhaka Post encourages its users to share its contents in their social media profile, groups and related communities. But the contents must not be shared with anyone or any digital platforms with any modification or alteration.</p>
                    <p  className="font-medium ">The users must use the services only for non-commercial purpose. Users may use available services for personal and private purposes only, the users must not exploit, sell or use any content appearing on our services for any kind of commercial purposes.</p>
              </div>
  
              {/* 4th paragraph */}
              <div className=" my-3">
                   <h2 className="font-bold text-[18px]">Taking down contents</h2>
                   <p className="font-medium ">Dhaka Post can take down any of its contents at any time from its website. The users cannot refuse to remove content from their respective devices if asked by Dhaka Post.</p>
              </div>
  
              {/* 5th paragraph */}
              <div className=" my-4">
                   <h2 className="font-bold text-[18px]">Unauthorized and prohibited activities</h2>
                   <p className="font-medium ">The user is specifically required not to associate Dhaka Post with any political party, racism, sexism or otherwise damage its reputation. The user is also prohibited from defaming Dhaka Post. Harassing, bullying or upsetting the people or any other user is strongly prohibited. The user must not post or upload any image or comment which is offensive or obscure or immoral. Personal attack by way of comment or image is likewise prohibited.</p>
              </div>
  
              {/* 6th paragraph */}
              <div className=" my-4">
                    <h2 className="font-bold text-[18px]">Prohibition on sharing mark, contents, images</h2>
                    <p className="font-medium ">Dhaka Post prohibits the users from sharing marks, contents or images for whatever purpose, be it commercial or not. All users are prohibited from taking credit from the contents or images shared, published or generated by Dhaka Post.</p>
              </div>
  
  
  
              
        </div>
  
        <Footer></Footer>
      </div>
    );
};

export default TermsOfUsePage;