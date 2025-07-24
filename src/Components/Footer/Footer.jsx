import { Link } from "react-router-dom";
import profile from "../Footer/images/profile.png";
import shuvo from "../Footer/images/Shuvo.jpg";

const Footer = () => {
  return (
    <div>
      <footer class="relative flex flex-col justify-center mt-40 bg-gray-900 px-4 pt-20 ">
        {/* Footer image */}
        <div class="absolute -top-10 left-1/2 h-20 w-20 -translate-x-1/2 rounded-xl  bg-lime-600 hover:bg-orange-500 hover:text-lime-600 ease-in-out duration-300 p-[2px] ">
          <img class="h-full w-full object-cover rounded-xl" src={shuvo} alt="" />
        </div>
        <nav
          aria-label="Footer Navigation"
          class="mx-auto mb-10 flex max-w-lg flex-col gap-10 text-center sm:flex-row sm:text-left"
        >
          <Link to="/GetinTouch" class="font-medium text-white hover:text-lime-600 ease-in-out duration-300">
            Get in Touch
          </Link>

          <Link to="Support" class="font-medium text-white hover:text-lime-600 ease-in-out duration-300">
            Support
          </Link>
          <Link to="/PrivacyPolicy" class="font-medium text-white hover:text-lime-600 ease-in-out duration-300">
            Privacy Policy
          </Link>
          <Link to="Profile" class="font-medium text-white hover:text-lime-600 ease-in-out duration-300">
            <div className="flex items-center gap-2">
              <img className="h-6 w-6" src={profile} alt="" />
              <h1>Profile</h1>
            </div>
          </Link>
        </nav>
        <p class="py-10 text-center text-gray-300">
         <span className="text-lime-600"> © 2025</span> Developer-Shuvo |<span className="text-red-600"> All Rights Reserved</span>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
