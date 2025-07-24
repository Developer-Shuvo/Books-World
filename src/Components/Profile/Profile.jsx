import { Link } from "react-router-dom";
import profile from "../Profile/images/Shuvo.jpg";

const Profile = () => {
  return (
    // Start From Here .....
  
    <div className=" flex items-center justify-center mt-8">
      {/* Profile Card */}
      <div className="w-[700px] h-[500px] bg-gray-900 rounded text-left overflow-hidden  transform transition-all">
        <div className="relative w-full h-full mx-auto flex flex-col justify-center items-center text-center">
          <img
            src={profile}
            alt="Profile"
            className="w-40 h-40 rounded-xl object-cover shadow-lg shadow-yellow-600 "
          />
          {/* Name */}
          <p className="mt-8 text-5xl font-semibold text-white tracking-tight">
            SHUVO
          </p>
          {/* Description */}
          <p className="mt-3 text-lg text-gray-200 leading-relaxed px-10">
            I am a fullstack software developer <br /> with ReactJS for frontend and
            NodeJS for backend
          </p>

          {/* Button */}
          <div className="w-full mt-8 flex justify-center  px-12">
            <Link
              to="#"
              className="w-full p-4 text-base font-medium text-white bg-indigo-600 rounded hover:bg-lime-600 focus:outline-none focus:ring-1 focus:ring-yellow-400 transition-transform duration-500 ease-in-out hover:-translate-y-2.5"
            >
              Hire me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
