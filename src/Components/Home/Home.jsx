import { Link } from "react-router-dom";
import bannerImg from "../../assets/images/books.png";

const Home = () => {
  return (
    <div className="bg-[#212121]  rounded-2xl lg:mt-8 mt-4 ">
      <div className="flex flex-col lg:flex-row items-center justify-between px-16 py-12  lg:px-20 lg:py-20 gap-10 lg:gap-[40px]">
        {/* Text Section */}
        <div className="text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl text-white lg:text-6xl xl:text-7xl font-bold ">
            Books to Freshen Up <br /> your Bookshelf
          </h1>
          {/* Button */}
          <Link to="/Books">
            <button className="text-white bg-lime-600 hover:bg-purple-600 transition-transform duration-500 ease-in-out hover:-translate-x-2.5 px-3 md:px-4 lg:px-5 xl:px-6 py-2 md:py-3  rounded-lg lg:mt-10 mt-6">
              View The List
            </button>
          </Link>
        </div>

        {/* Image Section */}
        <img
          className="h-[260px] w-[260px] lg:h-[500px] lg:w-[500px] rounded-lg object-cover lg:pr-20"
          src={bannerImg}
          alt="Books Banner"
        />
      </div>
    </div>
  );
};

export default Home;
