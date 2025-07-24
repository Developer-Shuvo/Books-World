import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import { books } from "../Books/Books";

const BookDetails = () => {
  //step:1 -- এখানে Books.jsx থেকে পাঠানো আইডি কে UseParams দিয়ে ধরা হয়েছে ।
  const { id } = useParams();

  //Step: 3 --  getSingleBook দিয়ে find করে আমরা যে আইডি/ডাটা পেয়েছি সেটা এই স্টেটে ব্যবহারের জন্য সেট করা হইছে।
  const [getSingleBook, setBook] = useState();

  // Step: 2 --
  // প্রথমে useEffect Hook কল করা হইছে useEffect (()=>{........},[]) ।
  //  Find করে প্রত্যেকটা বইয়ের আইডি কে ধরা হইয়েছে এবং
  //  Number(id); এটা দিয়ে স্ট্রিং এ থাকা আইডি কে নাম্বারে পরিবর্তন করা হইছে।
  useEffect(() => {
    const result = books?.find((book) => book?.id === Number(id));
    setBook(result);
  }, [id]);

  return (
    // -----_______Start from Here_______-----
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 md:gap-8 lg:gap-10 mt-4 px-4 sm:px-6">
      {/* Image Section */}
      <div className="flex justify-center lg:justify-start">
        <img
          className="h-[250px] w-[250px] sm:h-[300px] md:h-[400px] md:w-[400px] lg:h-[600px] lg:w-[500px]  object-cover rounded-lg"
          src={`${getSingleBook?.cover}`}
          alt="Book Cover"
        />
      </div>

      {/* Details Text */}
      <div className="px-2 sm:px-4 md:px-6 lg:px-2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          {getSingleBook?.title}
        </h1>

        <h2 className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 font-semibold">
          Author : {getSingleBook?.writer}
        </h2>

        <div className="border-b border-green-700 mt-4 sm:mt-6"></div>

        <h2 className="text-base sm:text-lg text-gray-700 font-semibold mt-2 mb-2">
          Fiction
        </h2>

        <div className="border-b border-green-700"></div>

        {/* Review */}
        <p className="text-gray-700 mt-4 sm:mt-6 text-sm sm:text-base leading-relaxed">
          <span className="text-base sm:text-lg text-black font-bold">
            Review:{" "}
          </span>
          Sit amet consectetur. Interdum porta pulvinar non sit aliquam. Aenean
          pulvinar blandit vel non enim elementum penatibus pellentesque ac...
        </p>

        {/* HashTags */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-6">
          <h1 className="text-base sm:text-lg font-bold">Tag :</h1>
          <span className="bg-slate-200 py-1 px-3 rounded-lg text-sky-600 font-semibold hover:text-green-700 cursor-pointer transition-transform duration-500 ease-in-out">
            #Young Adult
          </span>
          <span className="bg-slate-200 py-1 px-3 rounded-lg text-sky-600 font-semibold hover:text-green-700 cursor-pointer transition-transform duration-500 ease-in-out">
            #Identity
          </span>
        </div>

        {/* Meta Details */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4 mt-6">
          <div className="flex items-center gap-3">
            <h1 className="text-gray-700 whitespace-nowrap">
              Number of Pages :
            </h1>
            <div className="flex-1 bg-green-600 h-[1px] max-w-[100px]"></div>
            <h2 className="font-bold">{getSingleBook?.page}</h2>
          </div>

          <div className="flex items-center gap-3">
            <h1 className="text-gray-700 whitespace-nowrap">Writer :</h1>
            <div className="flex-1 bg-green-600 h-[1px] max-w-[100px]"></div>
            <h2 className="font-bold">{getSingleBook?.writer}</h2>
          </div>

          <div className="flex items-center gap-3">
            <h1 className="text-gray-700 whitespace-nowrap">
              Year of Publishing :
            </h1>
            <div className="flex-1 bg-green-600 h-[1px] max-w-[100px]"></div>
            <h2 className="font-bold">{getSingleBook?.publish}</h2>
          </div>

          <div className="flex items-center gap-3">
            <h1 className="text-gray-700">Rating :</h1>
            <div className="flex-1 bg-green-600 h-[1px] max-w-[100px]"></div>
            <h2 className="font-bold">4.8</h2>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-8">
          <button className="border-2 border-gray-400 py-2 px-5 font-bold rounded-lg hover:border-blue-700 transition-transform duration-500 ease-in-out hover:-translate-x-1.5">
            Read
          </button>
          <button className="bg-blue-700 text-white py-2 px-5 font-bold rounded-lg hover:bg-lime-600 transition-transform duration-500 ease-in-out hover:-translate-x-1.5">
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
