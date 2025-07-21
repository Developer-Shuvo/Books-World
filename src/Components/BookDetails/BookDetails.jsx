import bannerBook from "../../assets/images/banner-book.jpg";

const BookDetails = () => {
  return (
    <div className="grid lg:grid-cols-2 items-center  lg:gap-10">
      <div className="borders">
        <img className="lg:h-[600px] " src={bannerBook} alt="" />
      </div>
      {/* Details Text */}
      <div>
        <h1 className="text-5xl font-bold">Atomic Habits</h1>
        <h2 className="mt-6 text-lg text-gray-700 font-semibold">Writer</h2>
        {/* line____________________________ */}
        <div className="border-b  border-lime-500 mt-6"></div>
        <h2 className="text-lg text-gray-700 font-semibold mt-2 mb-2">
          Fiction
        </h2>
        {/* line____________________________ */}
        <div className="border-b border-lime-500 "></div>
        {/* Review */}
        <p className="text-gray-700 mt-6 ">
          <span className=" text-lg text-black font-bold">Review : </span> Sit
          amet consectetur. Interdum porta pulvinar non sit aliquam. Aenean
          pulvinar blandit vel non enim elementum penatibus pellentesque ac. Nec
          accumsan euismod nulla adipiscing lectus. Morbi elementum a auctor
          erat diam tellus. Fermentum faucibus nulla enim ornare. Id neque neque
          pretium enim platea urna non dictum. Faucibus dignissim ridiculus nibh
          tristique massa non.
        </p>

        {/* HashTags */}
        <div className="flex items-center gap-8 mt-6">
          <h1 className="text-lg font-bold ">Tag :</h1>
          <a
            className="bg-slate-200 py-1 px-3 rounded-lg text-sky-600 font-semibold hover:text-green-700 cursor-pointer"
            to=""
          >
            #Young Adult
          </a>

          <a
            className="bg-slate-200 py-1 px-3 rounded-lg text-sky-600 font-semibold hover:text-green-700 cursor-pointer"
            to=""
          >
            #Identity
          </a>
        </div>
        {/* Details */}
        <div>
          <div className="flex items-center text-center gap-6 mt-6">
            <h1 className="text-gray-700">Number of Pages :</h1>
            <div className=" bg-green-600 h-[1px] w-[200px]"></div>
            <h2 className=" font-bold">281</h2>
          </div>

          <div className="flex items-center gap-6 text-center mt-2">
            <h1 className="text-gray-700">Writer :</h1>
            <div className=" bg-green-600 h-[1px] w-[200px]"></div>
            <h2 className="font-bold">Shuvo</h2>
          </div>
          <div className="flex items-center text-center gap-6 mt-2">
            <h1 className="text-gray-700">Year of Publishing :</h1>
            <div className=" bg-green-600 h-[1px] w-[200px]"></div>
            <h2 className="font-bold">1980</h2>
          </div>
          <div className="flex items-center text-center gap-6 mt-2">
            <h1 className="text-gray-700">Raing :</h1>
            <div className="bg-green-600 h-[1px] w-[200px]"></div>
            <h2 className="font-bold">4.8</h2>
          </div>
        </div>

        {/* Button */}
        <div className="flex items-center gap-6 mt-8" >
            <a to="">
                <button className="border-2 border-gray-400 py-2 px-5 font-bold rounded-lg hover:border-blue-700">Read</button>
            </a>
            <a to="">
                <button className="bg-blue-700 text-white py-2 px-5 font-bold rounded-lg hover:border-lime-600">Wishlist</button>
            </a>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
