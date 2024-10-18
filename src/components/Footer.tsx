import { SiLazyvim } from "react-icons/si";
import Contact from "./Contact";

const Footer = () => {
  return (
    <div className=" my-5">
      <div className="flex justify-center p-5 border-t border-black">
        <div>
          <Contact />
          <p className="font-light text-sm ">
            © 2024 Nikita Jare. All rights reserved.
          </p>
          <div className="flex justify-center m-2">
            <p className="font-bold text-sm ">Made with </p>
            <SiLazyvim className="mx-2" />
            <p className="font-bold text-sm ">by Nikita</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
