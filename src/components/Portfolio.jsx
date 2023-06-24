import React from "react";
import portfolio from "../data/portfolio";

function Portfolio() {
    return (
        <div>
            <h1 className="text-xl font-bold text-center pb-4">Projects</h1>
            <div className="flex justify-center snap-x">
                <div
                    className="w-full flex overflow-x-auto snap-center text-sm md:text-md"
                    style={{ scrollSnapType: "x mandatory" }}
                >
                    {portfolio.map((project) => (
                        <div
                            className="w-3/4 h-auto mb-4 flex-shrink-0 ease-in duration-300 border-4 border-gray-600 bg-slate-800 rounded-xl overflow-hidden mr-4 md:flex"
                            style={{ scrollSnapAlign: "center" }}
                        >
                            <div className="w-full md:w-1/4 border-r-4 border-gray-600">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={project.imgURL}
                                        alt="portfolio"
                                        className="w-full h-40 md:h-full"
                                    />
                                </a>
                            </div>
                            <div className="w-full md:w-3/4 flex flex-col">
                                <div className="h-full">
                                    <h1 className="w-full text-lg font-bold text-center p-2">
                                        {project.title}
                                    </h1>
                                    {project.description.map((line, index) => (
                                        <p
                                            className="px-2 pb-2 text-slate-300"
                                            key={index}
                                        >
                                            {line}
                                        </p>
                                    ))}
                                </div>
                                <div className="text-center text-black bg-gray-700 hidden md:flex">
                                    <div className="flex w-full">
                                        {project.stack.map((item, index) => (
                                            <span
                                                className="text-xs md:text-sm p-1 m-1 md:m-2 rounded-md bg-white bg-opacity-10 text-gray-200"
                                                key={index}
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="text-sm text-white p-2 bottom-0 right-0 flex items-center justify-center">
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <button className="hover:underline">
                                                Code
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
