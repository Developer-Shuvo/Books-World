import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import lightBook from "../../assets/images/banner-book.jpg";

const books = [
  {
    id: 1,
    title: "Atomic Habits",
    writer: "James Clear",
    rating: 4.8,
    cover: lightBook,
  },
  {
    id: 2,
    title: "The Subtle Art of Not Giving a F*ck",
    writer: "Mark Manson",
    rating: 4.5,
    cover: lightBook,
  },
  {
    id: 3,
    title: "Deep Work",
    writer: "Cal Newport",
    rating: 4.7,
    cover: lightBook,
  },
  {
    id: 4,
    title: "Rich Dad Poor Dad",
    writer: "Robert T. Kiyosaki",
    rating: 4.6,
    cover: lightBook,
  },
  {
    id: 5,
    title: "Think and Grow Rich",
    writer: "Napoleon Hill",
    rating: 4.4,
    cover: lightBook,
  },
  {
    id: 6,
    title: "The Alchemist",
    writer: "Paulo Coelho",
    rating: 4.3,
    cover: lightBook,
  },
  {
    id: 7,
    title: "Start With Why",
    writer: "Simon Sinek",
    rating: 4.6,
    cover: lightBook,
  },
  {
    id: 8,
    title: "Can't Hurt Me",
    writer: "David Goggins",
    rating: 4.8,
    cover: lightBook,
  },
  {
    id: 9,
    title: "How to Win Friends and Influence People",
    writer: "Dale Carnegie",
    rating: 4.7,
    cover: lightBook,
  },
  {
    id: 10,
    title: "Ego is the Enemy",
    writer: "Ryan Holiday",
    rating: 4.5,
    cover: lightBook,
  },
  {
    id: 11,
    title: "The Power of Now",
    writer: "Eckhart Tolle",
    rating: 4.6,
    cover: lightBook,
  },
  {
    id: 12,
    title: "Zero to One",
    writer: "Peter Thiel",
    rating: 4.4,
    cover: lightBook,
  },
];

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
    const result = books.find((book) => book?.id === Number(id));
    setBook(result);
  }, []);

  return (
    // Start from Here
    <div className="grid lg:grid-cols-2 items-center  lg:gap-10 mt-4">
      <div className="">
        <img className="lg:h-[600px]" src={getSingleBook?.cover} alt="" />
      </div>
      {/* Details Text */}
      <div>
        <h1 className="text-5xl font-bold">{getSingleBook?.title}</h1>
        <h2 className="mt-6 text-lg text-gray-700 font-semibold">
          Author : {getSingleBook?.writer}
        </h2>
        {/* line____________________________ */}
        <div className="border-b  border-green-700 mt-6"></div>
        <h2 className="text-lg text-gray-700 font-semibold mt-2 mb-2">
          Fiction
        </h2>
        {/* line____________________________ */}
        <div className="border-b border-green-700 "></div>
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
            <h2 className=" font-bold">{getSingleBook?.page}</h2>
          </div>

          <div className="flex items-center gap-6 text-center mt-2">
            <h1 className="text-gray-700">Writer :</h1>
            <div className=" bg-green-600 h-[1px] w-[200px]"></div>
            <h2 className="font-bold">{getSingleBook?.writer}</h2>
          </div>
          <div className="flex items-center text-center gap-6 mt-2">
            <h1 className="text-gray-700">Year of Publishing :</h1>
            <div className=" bg-green-600 h-[1px] w-[200px]"></div>
            <h2 className="font-bold">{getSingleBook?.publish}</h2>
          </div>
          <div className="flex items-center text-center gap-6 mt-2">
            <h1 className="text-gray-700">Raing :</h1>
            <div className="bg-green-600 h-[1px] w-[200px]"></div>
            <h2 className="font-bold">4.8</h2>
          </div>
        </div>

        {/* Button */}
        <div className="flex items-center gap-6 mt-8">
          <a to="">
            <button className="border-2 border-gray-400 py-2 px-5 font-bold rounded-lg hover:border-blue-700">
              Read
            </button>
          </a>
          <a to="">
            <button className="bg-blue-700 text-white py-2 px-5 font-bold rounded-lg hover:border-lime-600">
              Wishlist
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
