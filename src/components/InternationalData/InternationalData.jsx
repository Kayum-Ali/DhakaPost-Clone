import propTypes from 'prop-types'
import { Link } from 'react-router-dom';

const InternationalData = ({data}) => {
   
    const {id,news_title,post_date,post_time,img}= data;
    return (
        <div className='col-span-5'>
             <Link to={`/international/${id}`}  className=" grid grid-cols-5 py-2  singleNews lg:border-r border-r-gray-500 lg:pr-3 md:border-r md:pr-3 border-b border-b-gray-500 p-3">

                <div className="col-span-3  py-2 ">
                    <h2 className="leading-7 mb-2 title font-medium">{news_title.slice(0, 40)}</h2>
                    {/* <p className="text-[#525252] text-[14px] hidden md:block lg:block mb-2 opacity-90">{news_description.slice(0, 100)}...</p> */}
                    <p className="opacity-80 text-[14px]">
                    ০৬ আগস্ট {post_date} at {post_time}
                    </p>
                </div>
                    <div className="col-span-2 overflow-hidden ">
                             <img className="basis-44 lg:h-[120px] h-full" src={img} alt="" />
                    </div>
        </Link>
            
        </div>
    );
};

InternationalData.propTypes = {
    data: propTypes.object.isRequired
}

export default InternationalData;