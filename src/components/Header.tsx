import Subtitle from "./Subtitle";
import Resume from "./Resume";
import Contact from "./Contact";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center">
      <div className="flex flex-col md:flex-row items-center border-b border-black">
        <img
          src="/assets/me.png"
          className="p-5 h-32 w-32 md:h-48 md:w-52 rounded-full"
          alt="Profile"
        />
        <div className="text-center md:text-left">
          <h1 className="font-bold text-lg md:text-xl">Nikita Jare</h1>
          <Subtitle />
        </div>
        {/* Responsive spacing for buttons */}
        <div className="mt-3 md:mt-0 md:ml-20 flex flex-col items-center">
          <Resume />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Header;
