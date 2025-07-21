import { Link } from "react-router-dom";
import lightBook from "../../assets/images/light-book.jpg";
const Books = () => {
  //Here is Books Object 12
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

  return (
    <>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7">
        {/* Here I do Map and inside my card content */}
        {books?.map((book) => (
          <>
            <article
              key={book?.id}
              class="mb-4 overflow-hidden rounded-xl border text-gray-700 shadow-md duration-500 ease-in-out hover:shadow-xl"
            >
              {/* card image */}
              <div className="">
                <img
                  className=" h-[80px] w-[100%] "
                  src={book.cover}
                  alt=""
                  class=""
                />
              </div>

              <div class="p-4">
                {/* title */}
                <div class="pb-6">
                  <a
                    href="#"
                    class="text-lg hover:text-green-600 font-medium duration-500 ease-in-out"
                  >
                    {book.title}
                  </a>
                </div>
                {/* Writer & Details */}
                <div class="box-border flex list-none justify-between items-center border-t border-b border-solid border-gray-200 px-0 py-3">
                  <div>
                    <h1 className="text-sm text-gray-500">
                      Writer :{" "}
                      <span className="border rounded py-1 px-3 border-gray-200">
                        {" "}
                        {book.writer}
                      </span>
                    </h1>
                  </div>
                  {/*Details Button */}
                  <Link to="/Books/:id">
                    <button className="text-sm font-semibold bg-green-700 rounded-lg py-1 px-3 text-white">
                      See Details
                    </button>
                  </Link>
                </div>

                <ul class="m-0 flex list-none items-center justify-between px-0 pt-6 pb-0">
                  <li class="text-left">
                    <span class="text-sm text-gray-400">Price</span>
                    <p class="m-0 text-base font-medium">$5000</p>
                  </li>

                  <li class="text-left">
                    <span class="text-sm text-gray-400 flex items-center justify-center">
                      Rating
                    </span>
                    <ul class="m-0 flex items-center p-0 font-medium">
                      <li class="inline text-yellow-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </li>
                      <li class="inline text-yellow-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </li>
                      <li class="inline text-yellow-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </li>
                      <li class="inline text-yellow-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </li>
                      <li class="inline text-yellow-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                          />
                        </svg>
                      </li>
                      <li class="ml-2 inline text-base">{book.rating}</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </article>
          </>
        ))}
      </div>
    </>
  );
};

export default Books;
