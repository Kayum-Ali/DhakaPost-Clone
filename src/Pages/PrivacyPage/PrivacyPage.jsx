import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
const akijAdds= 'https://res.cloudinary.com/dqescabbl/image/upload/v1723280310/BG_2_mdtazj.jpg'

const PrivacyPage = () => {
  return (
    <div className="bg-[#EFF3F6]">
      <Header></Header>
      <div className="py-3 px-2 z-0 mx-auto mt-12">
        <img className="basis-3/4 mx-auto" src={akijAdds} alt="" />
      </div>
      <hr className="border-black opacity-80" />

      <div className="container mx-auto basis-[900px] max-w-[900px] px-3 lg:px-0">
        {/* 1st paragraph */}
            <div className="my-6 space-y-3">
                 <h2 className="text-xl font-bold">Privacy Policy</h2>
                 <h4 className="font-medium">Last Updated: 12 July, 2023</h4>
                 <p className="font-medium">Dhaka Post respects the privacy of its users. It is the foremost duty of Dhaka Post to protect your personal information while you are using its website. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>

            </div>

                {/* 2nd paragraph */}
            <div className="space-y-1">
                <h2 className="font-bold text-[18px]">Collection of your information</h2>
                <p className="font-medium ">We may collect information about you in a variety of ways including registering to the site, subscribing to the newsletter, responding to a survey or participating in a competition, etc.</p>
            </div>

            {/* 3rd paragraph */}
            <div className="space-y-1 my-3">
                  <h2 className="font-bold text-[18px]">Use of your information</h2>
                  <p className="font-medium pb-3">Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you to generate a personal profile about you to make future visits easy, analyze usage and trends to improve your experience, notify you many updates, request feedback from you.</p>
                  <p  className="font-medium ">If anybody wants to remove his/her personal data from our database the person has to email info@dhakapost.com requesting the removal of personal data. The person has to mention his/her email address in the email. The email subject should be Requesting personal data removal.</p>
            </div>

            {/* 4th paragraph */}
            <div className=" my-3">
                 <h2 className="font-bold text-[18px]">Disclosure of your information</h2>
                 <p className="font-medium ">Dhaka Post will not share your information to any third party.</p>
            </div>

            {/* 5th paragraph */}
            <div className=" my-4">
                 <h2 className="font-bold text-[18px]">Security of your information</h2>
                 <p className="font-medium ">We use administrative, technical, and physical security measures to help protect your personal information. However, any information disclosed online is vulnerable to interception and misuse by unauthorized parties. Therefore, we cannot guarantee complete security if you provide personal information.</p>
            </div>

            {/* 6th paragraph */}
            <div className=" my-4">
                  <h2 className="font-bold text-[18px]">Push Notifications</h2>
                  <p className="font-medium ">We may request you to send you push notifications on breaking news. If you wish to opt-out from receiving these notifications, you may turn them off in your device’s settings.</p>
            </div>

            {/* 7th paragrapg */}
            <div className="my-4">
                 <h2 className="font-bold text-[18px]">Comment Policy</h2>
                 <p className="font-medium ">Dhaka Post welcomes relevant debate on any specific topic but it discourages personal attacks on authors, other users or any individual. All abusive language, hate speech and anti-religious comments are strictly prohibited. We encourage users to keep your comment relevant to the topic or content of the news reports.</p>
            </div>
            {/* 8th para */}
            <div className="my-4">
                 <h2 className="font-bold text-[18px]">Cookie Policy</h2>
                 <p className="font-medium pb-4">We do not store any personal data based on cookies. The information collected through cookies is generally anonymized and used for statistical purposes or to enhance website functionality. We respect your privacy and take appropriate measures to ensure the protection of any personal data we may collect through other means, as outlined in our Privacy Policy.</p>

                 <p className="font-medium pb-4">Our website may contain content and links from third-party websites. These third parties may also set cookies on your device. We do not have control over the cookies used by these third parties, and we recommend reviewing their respective cookie policies for more information.</p>

                 <p className="font-medium ">Most web browsers are set to accept cookies by default. However, you can modify your browser settings to control or disable cookies if you prefer. Please note that blocking or deleting cookies may impact your browsing experience and restrict certain features of our website. Changes to this Cookie Policy: We may update this Cookie Policy from time to time. Any changes will be effective immediately upon posting the revised version on our website. We encourage you to review this policy periodically for any updates.</p>
            </div>

            <div className="my-4">
                <h2 className="font-bold text-[18px]">Modification of Privacy Policy</h2>
                <p className="font-medium ">Dhaka Post reserves the right to amend, modify, alter, or omit any terms in the ‘Privacy Policy’ at any time. Dhaka Post encourages users to periodically check back and review this policy so that visitors and readers will always know what information we collect, how we use it, and with whom we share it.</p>
            </div>


            
      </div>

      <Footer></Footer>
    </div>
  );
};

export default PrivacyPage;
