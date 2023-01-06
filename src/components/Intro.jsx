import React from "react";

function Intro() {
  return (
    <div className="flex items-center justify-center w-full h-96 flex-col text-center relative">
      <img
        src="assets/IntroBackdrop.jpg"
        alt=""
        className="pointer-events-none w-full h-full object-cover absolute scale-125 sm:scale-100 mix-blend-lighten object-bottom"
      />
      <h1 className="text-white pb-3 sm:pb-5 text-4xl md:text-7xl font-bold pt-15 drop-shadow-lg shadow-black">
        Bradley Beamish
      </h1>
      <p className="pb-3 sm:pb-5 text-base md:text-xl font-medium drop-shadow-lg shadow-black">
        Sotware Developer
      </p>
      <p className="pb-3 sm:pb-5 px-4 sm:px-2 md:px-0 text-sm max-w-xl font-bold drop-shadow-lg shadow-black">
        As a student at Algonquin College in Ottawa, I am constantly learning
        and expanding my skillset as a programmer. I have experience working
        with a variety of languages including Java and Python, as well as
        various web technologies. I am passionate about using my coding skills
        to build innovative and functional projects.
      </p>
      <a
        href="https://github.com/BradleyBeamish"
        target="_blank"
        rel="noopener norefferer"
      >
        <img
          src="assets/github-mark.svg"
          alt="logo"
          className="object-cover cursor-pointer h-10"
        />
      </a>
    </div>
  );
}

export default Intro;
