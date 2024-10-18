import "./App.css";
import Header from "./components/Header";
import LandingBody from "./components/LandingBody";
import Experience from "./components/Experience";
import Blog from "./components/Blogs";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="font-mono font-semibold absolute min-h-screen min-w-screen bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
        <div className="mx-5 md:mx-16 lg:mx-32 my-5 border-x shadow-xl">
          <Header />
          <div className="mx-5 md:mx-16 lg:mx-32">
            <LandingBody />
            <Experience />
            <Blog />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
