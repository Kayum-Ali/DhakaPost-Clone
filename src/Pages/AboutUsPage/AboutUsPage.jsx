import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { DarkContext } from "../../context/App.context";
import { useContext } from "react";


const AboutUsPage = () => {
    const tibbot = 'https://res.cloudinary.com/dqescabbl/image/upload/v1723288976/970X90_1_vbkxoj.jpg'

    const {
      dark: [isDark],
  } = useContext(DarkContext);
    return (
        <div className={`${isDark ? "bg-[#26292C] text-white" : "bg-[#EFF3F6]"}`}>
        <Header></Header>
        <div className="py-3 px-2 z-0 mx-auto mt-12">
          <img className="basis-3/4 mx-auto" src={tibbot} alt="" />
        </div>
        <hr className="border-black opacity-80" />
  
        <div className="container mx-auto basis-[900px] max-w-[900px] px-3 lg:px-0">
          {/* 1st paragraph */}
              <div className="my-6 space-y-3">
                   <h2 className="text-xl font-bold">About Dhaka Post</h2>
                   
                   <p className="font-medium pb-3">Dhaka Post is an online news portal that aims to provide accurate and objective news and views for the audience across the country. With the slogan of ‘সত্যের সাথে সন্ধি’, the online news portal started its journey in 16th February 2021. On July 24, 2022, Dhakapost.com got registered as an online media by the Ministry of Information and Broadcasting, Government of the People’s Republic of Bangladesh. Dhaka Post is owned by Bijoy Bangla Media Limited (BBML). The Bijoy Bangla Media Limited (BBML) is a sister concern of the US Bangla Group of Companies.</p>

                   <p className="font-medium pb-3">Dhaka Post puts an extra emphasis on national news and news from every district. However, it also covers different segments like politics, economics, international, sports, entertainment, education, information and technology, features, lifestyle, and columns</p>

                   <p className="font-medium">This online is different and unique than other online news portals because it practices ‘multimedia’ journalism, which provides readers news of home and abroad along with audio, video, infographic, and web story.</p>
                   

                   <p className="font-medium"> <Link to={`https://www.dhakapost.com/author/mohiuddin-sarker`} target="_blank" className="underline">Mohiuddin Sarker</Link>, Editor of Dhaka Post, is a very prominent face in the field of the country’s journalism sector for more than 20 years. Throughout his long career as a journalist, he served institutions like Ajker Kagoj, Jugantor, Jagonews24.com and so on.</p>

                   <p className="font-medium">Powered by a group of young, enthusiastic, and experienced journalists, Dhaka Post prioritizes on the storytelling pattern of the news to guide its readers to understand the most complicated issues easily.</p>

  
              </div>
  
                  {/* 2nd paragraph */}
              <div className="space-y-1">
                  <h2 className="font-bold text-[18px]">Objective</h2>

                  <p className="font-medium pb-3">Dhaka Post aims to provide the most updated news to its readers within the shortest possible time. In this journey to provide news quickly, Dhaka Post always tries to be accurate, objective and unbiased.</p>

                  <p className="font-medium pb-3">Following the basic fundamental principles of the Bangladesh constitution, Dhaka Post aims to strengthen public opinion in favor of the liberation war.</p>

                  <p className="font-medium pb-3">Dhaka Post is committed to the fundamental values of the country, especially, national sovereignty, democracy and secularism. In addition, Dhaka Post will speak for the human and civil rights of the citizen of the country.</p>
              </div>
              {/* 3rd double */}
            <div className="space-y-1">
                 <h2 className="font-bold text-[18px]">Ethics Policy</h2>
                 <p className="font-medium pb-3">Dhaka Post is committed to the highest ethical standards. Fairness, accuracy and objectivity are among our core values to maintain our integrity. We believe that the trustworthiness of the public is our most important asset. We are transparent to our readers as well.</p>

                 <p className="font-medium pb-3">Dhaka Post takes a non-partisan position in political issues as no political parties can influence us. Besides, it remains neutral in conflicts between justice and injustice or right and wrong.</p>

                 <p className="font-medium pb-3">Whatever the consequence is, Dhaka Post never compromises on issues like national interests, human rights, rule of law, gender issues and freedom of the press.</p>

                   
              </div>
  
              {/* 3rd paragraph */}
              <div className="space-y-1 my-3">
                    <h2 className="font-bold text-[18px]">Fact-Checking Policy</h2>
                    <p className="font-medium pb-3">Fact-checking is considered as one of the most important elements of journalism. Dhaka Post cross-checks the information several times before publishing it to its website. We have correspondents in all the 64 districts of the country. These huge numbers of correspondents across the country helped Dhaka Post to cover different news and to take statements from both of the concerned sides of any incident while making any news. Besides, our correspondents cross-check the information provided by the witnesses, locals and administration.</p>
              </div>
  
              {/* 4th paragraph */}
              <div className="space-y-3 my-3">
                   <h2 className="font-bold text-[18px]">Corrections Policy</h2>
                   
                   <p className="font-medium ">Dhaka Post always tries to provide accurate information to its audience. However, mistakes can happen in journalism despite following proper procedures. In these circumstances, Dhaka Post does not hesitate to acknowledge the error.</p>

                   <p className="font-medium ">After checking the facts correctly, the target of Dhaka Post is to tell its readers, as quickly as possible, what was wrong and what is correct. We tried to make the thing very clear to all of our audience as anyone would be able to understand how and why that mistake has been corrected.</p>

                   <p className="font-medium ">In times of major correction, Dhaka Post provides a ‘rejoinder’ at its website, and we clearly indicate the change.</p>
              </div>
  
              {/* 5th paragraph */}
              <div className="space-y-3 my-4">
                   <h2 className="font-bold text-[18px]">Organogram</h2>
                   <p className="font-medium ">The Editor leads all the departments including news, reporting and editorial units of Dhaka Post. The Editor, however, is assisted by chief reporter and news editor.</p>

                   <p className="font-medium ">There are designated ‘In-charges’ of every department to run the workflow of their respective teams. The chief reporter leads the reporting team while the news editor is responsible for the central desk of Dhaka Post. All other departments including digital, technology and web, sports, entertainment, international, English, country and feature are headed by the In-charges of the respective departments. All the department heads are assisted by the senior sub-editors.</p>

                   <p className="font-medium ">The research and development department are responsible for writing editorials, opinions and columns in line with the instruction of the Editor of Dhaka Post. In addition, they also collect editorials from other renowned writers.</p>

                   <p className="font-medium ">The Admin and Human Resources department is responsible for supervising the whole management including the accounts, production, store and establishment units. The Accounts department are concerned for the finance and accounts sections of Dhaka Post.</p>

              </div>
  
              {/* 6th paragraph */}
              <div className=" space-y-3 my-4">
                    <h2 className="font-bold text-[18px]">Ownership & Funding Info</h2>
                    <p className="font-medium ">Dhaka Post is owned by Bijoy Bangla Media Limited (BBML). The BBML is a sister concern of the US Bangla Group.</p>

                    <p className="font-medium ">The Bijoy Bangla Media Limited (BBML) launch ‘Dhaka Post’ to serve the countrymen. The BBML is the owner of Dhaka Post while the US Bangla Group is the fund provider.</p>

                    <p className="font-medium ">With a vision of building a brighter future for the upcoming generations, the US Bangla group, one of the fastest-growing companies in Bangladesh, started its journey in 2009.</p>
              </div>

              {/* 7th */}
              <div className="mb-5">
                  <h2 className="font-bold text-[18px]">Know more about <Link to={`https://www.usbassets.com/about/us-bangla-group/`} target="_blank" className="text-base font-medium underline mb-1">US Bangla Group.</Link></h2>
              </div>
  
  
  
              
        </div>
  
        <Footer></Footer>
      </div>
    );
};

export default AboutUsPage;