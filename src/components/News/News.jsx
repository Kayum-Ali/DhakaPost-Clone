import PropTypes from "prop-types";
import "./News.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkContext } from "../../context/App.context";

const News = ({ item }) => {
    // const keys = Object.keys(item).join(",");
    // console.log(keys);
    // console.log(item);
    const { id, news_title, news_description, post_date, post_time, img } =
        item;

    const {
        dark: [isDark, changeTheme],
    } = useContext(DarkContext);
    return (
        <div>
            <Link
                to={`/latest-news/${id}`}
                className="grid grid-cols-8 py-2 singleNews "
            >
                <div className="col-span-6 py-2 ">
                    <h2
                        className={`leading-7 mb-2 title font-medium ${
                            isDark ? "dark-theme" : ""
                        }`}
                    >
                        {news_title}
                    </h2>
                    <p
                        className={`text-[#525252] text-[14px] hidden md:block lg:block mb-2 opacity-90 ${
                            isDark ? "dark-theme" : ""
                        }`}
                    >
                        {news_description.slice(0, 100)}...
                    </p>
                    <p
                        className={`opacity-80 text-[14px] ${
                            isDark ? "dark-theme" : ""
                        }`}
                    >
                        ০৬ আগস্ট {post_date} at {post_time}
                    </p>
                </div>
                <div className="col-span-2 overflow-hidden">
                    <img
                        className="basis-44 lg:h-[120px] h-full"
                        src={img}
                        alt=""
                    />
                </div>
            </Link>
            <hr className="border bg-gray-200" />
        </div>
    );
};

News.propTypes = {
    item: PropTypes.object.isRequired,
};

export default News;
