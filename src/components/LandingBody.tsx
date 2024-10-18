import { useState } from "react";

const LandingBody = () => {
  const [activeTab, setActiveTab] = useState("TLDR");

  return (
    <>
      <div className="flex flex-col items-center">
        {/* Adjust button layout for small vs. larger screens */}
        <div className="flex flex-col sm:flex-row justify-center mt-10">
          <div className="px-5 sm:px-10 mb-2 sm:mb-0">
            <button
              className={`border border-black px-2 py-1 ${
                activeTab === "TLDR" ? "font-bold" : ""
              }`}
              onClick={() => setActiveTab("TLDR")}
            >
              # TLDR About me
            </button>
          </div>
          <div className="px-5 sm:px-10">
            <button
              className={`border border-black px-2 py-1 ${
                activeTab === "LongStory" ? "font-bold" : ""
              }`}
              onClick={() => setActiveTab("LongStory")}
            >
              # Long Story
            </button>
          </div>
        </div>

        <div className="my-5 w-full px-5 sm:px-10 lg:px-20">
          <div className="border border-black px-5 py-5">
            {activeTab === "TLDR" && (
              <div>
                <h1 className="font-bold"># TLDR About me</h1>
                <p>
                  Yo I'm Nikita J! The TL;DR of it all is I'm a Software
                  Engineer by day @Network tree and a plethora of other things
                  by night. Say what's up!
                </p>
              </div>
            )}

            {activeTab === "LongStory" && (
              <div>
                <h1 className="font-bold"># Long Story</h1>
                <p>Coming Up...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingBody;
