import React from "react";
import { Typewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import { me } from "../public/bhavya.jpeg";
import Link from "next/link";
type Props = {};

const Hero = (props: Props) => {
  const handleType = (count: number) => {
    // access word count number
    console.log(count);
  };

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };
  return (
    <div className="h-screen flex flex-col items-center justify-center space-y-8 text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="h-32 w-32 relative rounded-full mx-auto object-cover"
        src="https://avatars.githubusercontent.com/u/56181880?v=4"
        alt=""
      />
      <div className="z-20">
        <h2 className="text-md uppercase text-gray-500 pb-2 tracking-[14px]">
          Software Engineer
        </h2>
        <h1>
          <span className="text-xl">
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={[
                "Hi I am Bhavya Gor",
                "Passionate about Technology",
                "Code + Lofi Beats",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              delaySpeed={2000}
              onLoopDone={handleDone}
              onType={handleType}
            />
          </span>
        </h1>
        <div className="pt-5">
          {/* <Link href="#about">
          <button className="heroButton">About</button>
          </Link> */}
          <Link href="#experience">
          <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
          <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
          <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
