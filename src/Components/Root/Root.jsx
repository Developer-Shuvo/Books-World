import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import BubbleCursor from "../BubbleCursor/BubbleCursor";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-[1440px] mx-auto">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>

      {/* Bubble Cursor Here */}
      <BubbleCursor />
    </div>
  );
};

export default Root;
