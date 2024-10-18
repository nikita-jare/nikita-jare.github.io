import Subtitle from "./Subtitle";
import Resume from "./Resume";
import Contact from "./Contact";

const Header = () => {
  return (
    <div className="flex justify-center">
      <div className="flex border-b border-black items-center">
        <img
          src="/assets/me.png"
          className="p-5 h-48 w-52 rounded-full"
          alt="Profile"
        />
        <div>
          <h1 className="font-bold text-xl">Nikita Jare</h1>
          <Subtitle />
        </div>
        <div>
          <h1 className="my-3 mx-32 mr-auto ">
            <Resume />
          </h1>
          <div className="ml-10">
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
