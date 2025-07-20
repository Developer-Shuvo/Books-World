import bannerImg from "../../assets/images/banner-book.jpg";

const Home = () => {
  return (
<div className="bg-red-50 rounded-2xl lg:mt-8 mt-4">
  <div className="flex flex-col lg:flex-row items-center justify-between px-16 py-12  lg:px-20 lg:py-20 gap-10 lg:gap-[40px]">
    {/* Text Section */}
    <div className="text-center lg:text-left">
      <h1 className="text-4xl lg:text-6xl font-bold">
        Books to Freshen Up <br /> your Bookshelf
      </h1>
      <button className="text-white bg-lime-600 px-6 py-3 rounded-lg mt-6">
        View The List
      </button>
    </div>

    {/* Image Section */}
    <img
      className="h-[260px] w-[260px] lg:h-[400px] lg:w-[500px] rounded-lg object-cover lg:pr-20"
      src={bannerImg}
      alt="Books Banner"
    />
  </div>
</div>

  );
};

export default Home;
