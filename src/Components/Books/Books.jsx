import { Link } from "react-router-dom";

//Here is Books Object 12
export const books = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    booksType: "Self-help",
    writer: "James Clear",
    rating: 4.8,
    cover: "https://i.postimg.cc/s2xMk7rd/1.jpg",
    page: 211,
    publish: 1860,
    price: 1270,
  },
  {
    id: 2,
    title: "Deep Work",
    author: "Cal Newport",
    booksType: "Productivity",
    writer: "Cal Newport",
    rating: 4.6,
    cover: "https://i.postimg.cc/zvZ3HQR8/2.jpg",
    page: 304,
    publish: 2016,
    price: 1700,
  },
  {
    id: 3,
    title: "The Power of Now",
    author: "Eckhart Tolle",
    booksType: "Spirituality",
    writer: "Eckhart Tolle",
    rating: 4.7,
    cover: "https://i.postimg.cc/7h3h3Ng7/3.jpg",
    page: 236,
    publish: 1997,
    price: 1100,
  },
  {
    id: 4,
    title: "Can't Hurt Me",
    author: "David Goggins",
    booksType: "Memoir",
    writer: "David Goggins",
    rating: 4.9,
    cover: "https://i.postimg.cc/B61X63bm/4.jpg",
    page: 364,
    publish: 2018,
    price: 900,
  },
  {
    id: 5,
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    booksType: "Psychology",
    writer: "Daniel Kahneman",
    rating: 4.4,
    cover: "https://i.postimg.cc/xjMXV9WC/5.jpg",
    page: 499,
    publish: 2011,
    price: 700,
  },
  {
    id: 6,
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    booksType: "Self-help",
    writer: "Mark Manson",
    rating: 4.5,
    cover: "https://i.postimg.cc/8zPcvMsJ/6.jpg",
    page: 224,
    publish: 2016,
    price: 2300,
  },
  {
    id: 7,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    booksType: "Finance",
    writer: "Robert Kiyosaki",
    rating: 4.7,
    cover: "https://i.postimg.cc/KvbRZd25/7.jpg",
    page: 336,
    publish: 1997,
    price: 600,
  },
  {
    id: 8,
    title: "12 Rules for Life",
    author: "Jordan B. Peterson",
    booksType: "Philosophy",
    writer: "Jordan B. Peterson",
    rating: 4.6,
    cover: "https://i.postimg.cc/K8qzDjg9/8.jpg",
    page: 409,
    publish: 2018,
    price: 2200,
  },
  {
    id: 9,
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen R. Covey",
    booksType: "Self-help",
    writer: "Stephen R. Covey",
    rating: 4.8,
    cover: "https://i.postimg.cc/43Y3LG6X/9.jpg",
    page: 381,
    publish: 1989,
    price: 1700,
  },
  {
    id: 10,
    title: "Make Your Bed",
    author: "William H. McRaven",
    booksType: "Motivational",
    writer: "William H. McRaven",
    rating: 4.6,
    cover: "https://i.postimg.cc/Y0HqCmJS/10.jpg",
    page: 144,
    publish: 2017,
    price: 800,
  },
  {
    id: 11,
    title: "Ego is the Enemy",
    author: "Ryan Holiday",
    booksType: "Philosophy",
    writer: "Ryan Holiday",
    rating: 4.5,
    cover: "https://i.postimg.cc/J7NzdPkH/11.jpg",
    page: 256,
    publish: 2016,
    price: 2000,
  },
  {
    id: 12,
    title: "Start With Why",
    author: "Simon Sinek",
    booksType: "Leadership",
    writer: "Simon Sinek",
    rating: 4.6,
    cover: "https://i.postimg.cc/gjHcX2WH/12-white-book.jpg",
    page: 256,
    publish: 2009,
    price: 1600,
  },
];

const Books = () => {
  return (
    <>
      <div className="mt-16 px-6 md:px-4 lg:px-2 xl:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
        {/* Here I do Map and inside my card content */}
        {books?.map((book) => (
          <>
            <article
              key={book?.id}
              class="mb-4 overflow-hidden rounded-xl border  text-gray-700 shadow-md duration-500 ease-in-out hover:shadow-xl hover:shadow-orange-600"
            >
              {/* card image */}
              <div className="w-full h-[220px] overflow-hidden">
                <img
                  src={book.cover}
                  alt=""
                  className="w-full h-full object-cover"
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
                  {/* // এখান থেকে আমার সব বইয়ের আইডি Book Details পেইজে পাঠানো হয়েছে। */}
                  <Link
                    to={`/Books/${book?.id}`}
                    className="text-sm font-semibold bg-lime-700 hover:bg-purple-600 rounded-lg py-1 px-3 text-white inline-block transition-transform duration-300 ease-in-out hover:-translate-x-1.5"
                  >
                    See Details
                  </Link>
                </div>

                <ul class="m-0 flex list-none items-center justify-between px-0 pt-6 pb-0">
                  <li class="text-left">
                    <span class="text-sm text-gray-400">Price</span>
                    <p class="m-0 text-base font-medium">{book?.price} ৳</p>
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
