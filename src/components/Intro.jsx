import React from "react";

function Intro() {
    return (
        <div className="h-screen flex items-center justify-center w-full flex-col text-center relative">
            <img
                src="assets/IntroBackdrop.jpg"
                alt=""
                className="pointer-events-none w-full h-full object-cover absolute scale-125 sm:scale-100 mix-blend-lighten object-bottom"
            />
            <h1 className="text-white pb-3 sm:pb-5 text-4xl md:text-7xl font-bold drop-shadow-lg shadow-black p-4 border-8 border-white">
                Bradley Beamish
            </h1>
            <p className="pb-3 pt-5 sm:pb-5 text-base md:text-xl font-medium drop-shadow-lg shadow-black">
                Sotware Developer
            </p>
            <a
                href="https://github.com/BradleyBeamish"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
            >
                <img
                    src="assets/github-mark.svg"
                    alt="logo"
                    className="object-cover cursor-pointer h-10"
                />
                <p>Projects</p>
            </a>
        </div>
    );
}

export default Intro;
