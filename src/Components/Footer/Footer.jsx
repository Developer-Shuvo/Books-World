import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer class="relative flex flex-col justify-center mt-20 bg-gray-900 px-4 pt-20">
        <div class="absolute -top-10 left-1/2 h-20 w-20 -translate-x-1/2 rounded-xl border-4 border-orange-500 bg-white p-2">
          <img class="h-full object-contain" src="" alt="" />
        </div>
        <nav
          aria-label="Footer Navigation"
          class="mx-auto mb-10 flex max-w-lg flex-col gap-10 text-center sm:flex-row sm:text-left"
        >
          <Link to="/GetinTouch" class="font-medium text-white">
            Get in Touch
          </Link>

          <Link to="Support" class="font-medium text-white">
            Support
          </Link>
          <Link to="/PrivacyPolicy" class="font-medium text-white">
            Privacy Policy
          </Link>
          <a href="#" class="font-medium text-white">
            Terms & Conditions
          </a>
        </nav>
        <p class="py-10 text-center text-gray-300">
          © 2025 Developer-Shuvo | All Rights Reserved
        </p>
      </footer>
    </div>
  );
};

export default Footer;
