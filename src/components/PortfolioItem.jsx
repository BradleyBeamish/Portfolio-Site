import React from "react";

function PortfolioItem({ title, imgURL, stack, link }) {
  return (
    <div className="hover:border-gray-600 ease-in duration-300 border-4 border-gray-700 rounded-xl overflow-hidden bg-gradient-to-tr from-slate-800 to-cyan-900 backdrop-blur-lg">
      <a href={link} target="_blank" rel="noopener norefferer">
        <img
          src={imgURL}
          alt="portfolio"
          className="w-full h-36 md:h48 object-cover cursor-pointer object-top"
        />
      </a>
      <div className="w-full p-4">
        <h3 className="text-center md:text-xl mb-2 md:mb-3 text-base font-semibold">
          {title}
        </h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-center text-xs md:text-sm">
          {stack.map((item) => (
            <span className="inline-block px-2 py-1 font-semibold border-2 border-gray-700 rounded-md text-white bg-white bg-opacity-20">
              {item}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}

export default PortfolioItem;
