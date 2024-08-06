import PropTypes from "prop-types";
import './News.css'

const News = ({ item }) => {
  const keys = Object.keys(item).join(",");
  console.log(keys);
  console.log(item);
  const { news_title, news_description, post_date, post_time, img } = item;
  return (
    <div>
        <div className="grid grid-cols-8 py-2 singleNews ">
            <div className="col-span-6 py-2 ">
            <h2 className="leading-7 mb-2 title font-medium">{news_title}</h2>
            <p className="text-[#525252] text-[14px] mb-2 opacity-90">{news_description.slice(0, 100)}...</p>
            <p className="opacity-80 text-[14px]">
            ০৬ আগস্ট {post_date} at {post_time}
            </p>
            </div>
            <div className="col-span-2 overflow-hidden">
            <img className="basis-44 h-[120px]" src={img} alt="" />
            </div>
        </div>
        <hr className="border bg-gray-200" />
    </div>
  );
};

News.propTypes = {
  item: PropTypes.object.isRequired,
};

export default News;