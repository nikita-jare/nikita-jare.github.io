import { useState } from "react";

const LandingBody = () => {
  const [activeTab, setActiveTab] = useState("TLDR");

  return (
    <>
      <div className="justify-center">
        <div className="flex justify-center mt-10">
          <div className="px-10">
            <button
              className={`border border-black ${
                activeTab === "TLDR" ? "font-bold" : ""
              }`}
              onClick={() => setActiveTab("TLDR")}
            >
              # TLDR About me
            </button>
          </div>
          <div className="px-10">
            <button
              className={`border border-black ${
                activeTab === "LongStory" ? "font-bold" : ""
              }`}
              onClick={() => setActiveTab("LongStory")}
            >
              # Long Story
            </button>
          </div>
        </div>

        <div className="my-5">
          <div className="border border-black px-10 py-5">
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

            {/* <div className="m-3 my-10 p-5">
            <h1># Current Shenanigans</h1>
            <p>
              Here you can describe your current projects, interests, or
              activities. Make it engaging and informative.
            </p>
          </div> */}
            {/* )} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingBody;
