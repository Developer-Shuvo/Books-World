import bannerImg from "../../assets/images/books.png";

const Home = () => {
  return (
<div className="bg-[#212121]  rounded-2xl lg:mt-8 mt-4">
  <div className="flex flex-col lg:flex-row items-center justify-between px-16 py-12  lg:px-20 lg:py-20 gap-10 lg:gap-[40px]">
    {/* Text Section */}
    <div className="text-center lg:text-left">
      <h1 className="text-4xl text-white lg:text-6xl font-bold">
        Books to Freshen Up <br /> your Bookshelf
      </h1>
      <button className="text-white bg-lime-600 px-6 py-3 rounded-lg lg:mt-8 mt-5">
        View The List
      </button>
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
