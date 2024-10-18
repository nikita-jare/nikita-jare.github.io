import { SiLazyvim } from "react-icons/si";
import Contact from "./Contact";

const Footer = () => {
  return (
    <div className="my-5">
      <div className="flex flex-col sm:flex-row justify-center p-5 border-t border-black">
        <div className="text-center sm:text-left">
          <Contact />
          <p className="font-light text-xs sm:text-sm">
            © 2024 Nikita Jare. All rights reserved.
          </p>
          <div className="flex justify-center sm:justify-start m-2">
            <p className="font-bold text-sm">Made with</p>
            <SiLazyvim className="mx-2" />
            <p className="font-bold text-sm">by Nikita</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
