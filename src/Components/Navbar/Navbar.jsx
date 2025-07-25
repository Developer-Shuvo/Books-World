import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header class="text-slate-700 sticky top-0 z-50 bg-white mx-auto flex flex-col py-4 lg:flex-row lg:items-center ">
        <Link
          to="/"
          class="flex items-center whitespace-nowrap text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-black pl-2 md:pl-0 lg:pl-0 xl:pl-0"
        >
          <span class=" ">
            <img src="/images/JOJj79gp_Djhwdp_ZOKLL.png" alt="" />
          </span>
          <span className="hover:text-black transition-transform duration-300 ease-in-out hover:-translate-x-0.5">
            Books World
          </span>
        </Link>
        <input type="checkbox" class="peer hidden" id="navbar-open" />
        <label
          class="absolute top-5 right-5 cursor-pointer lg:hidden"
          for="navbar-open"
        >
          <svg
            class="h-7 w-7"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
        <nav
          aria-label="Header Navigation"
          class="peer-checked:pt-8 peer-checked:max-h-60 flex max-h-0 w-full flex-col items-center overflow-hidden transition-all lg:ml-24 lg:max-h-full lg:flex-row "
        >
          <ul class="flex w-full flex-col items-center space-y-2 lg:flex-row lg:justify-center  lg:space-y-0">
            <li class="mr-1">
              <Link
                href="/"
                className="text-gray-700 px-4 py-1 rounded border-transparent 
           transition duration-500 ease-in-out 
           focus:outline-none focus:bg-black focus:text-white 
           hover:text-black hover:-translate-y-1.5 hover:bg-slate-200"
              >
                Home
              </Link>
            </li>
            <li class="mr-1">
              <Link
                className="text-gray-700 px-4 py-1 rounded border-transparent 
           transition duration-500 ease-in-out 
           focus:outline-none focus:bg-black focus:text-white 
           hover:text-black hover:-translate-y-1.5 hover:bg-slate-200"
                to="/Books"
              >
                Listed Books
              </Link>
            </li>
            <li class="mr-1">
              <Link
                className="text-gray-700 px-4 py-1 rounded border-transparent 
           transition duration-500 ease-in-out 
           focus:outline-none focus:bg-black focus:text-white 
           hover:text-black hover:-translate-y-1.5 hover:bg-slate-200"
                to="/Dashboard"
              >
                Page To Read
              </Link>
            </li>
          </ul>
          <hr class="mt-4 w-full lg:hidden" />
          <div class="my-1 flex items-center space-x-4 lg:ml-auto lg:pr-1">
            <Link to="/SignIn" title="">
              <button class="whitespace-nowrap rounded bg-lime-600 px-6 py-2 font-medium text-white transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-green-800 focus:ring-offset-2 hover:bg-lime-700">
                Sign In
              </button>
            </Link>
            <Link to="/SignUp" title="">
              <button class="whitespace-nowrap rounded bg-blue-700 px-6 py-2 font-medium text-white transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-blue-800 focus:ring-offset-2 hover:bg-blue-600">
                Sign Up
              </button>
            </Link>
          </div>
        </nav>
      </header>{" "}
    </>
  );
};

export default Navbar;
