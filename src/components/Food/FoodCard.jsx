import React from "react";

// Card Wrapper
const Card = ({ title, description, image, locations }) => {
  return (
    <div className="w-[300px] border border-[#ddd] rounded-lg shadow-lg overflow-hidden bg-white transition-transform duration-200 ease-in-out mx-2 flex-none hover:scale-105">
      <img src={image} alt={title} className="w-full h-[200px] object-cover" />
      <div className="p-4 text-center">
        <h3 className="my-2 text-lg font-bold text-[#333]">{title}</h3>
        <p className="text-base text-[#666] leading-6 mb-4">{description}</p>
        <div className="pt-4 mt-4 border-t border-[#eee]">
          <h4 className="text-sm text-[#333] mb-2">Places to try:</h4>
          <ul className="list-none p-0 m-0">
            {locations.map((location, index) => (
              <li key={index} className="text-sm text-[#666] mb-1 p-1 flex items-center gap-2 hover:bg-[#f5f5f5] rounded-md">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM12 11.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                {location}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;