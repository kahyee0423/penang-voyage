import React from "react";
import Card from "../components/Food/FoodCard";
import foodData from "../data/food-page.json";

export const Food = () => {
  return (
    <div>
      <header className="bg-[#FFECDE] py-[80px] px-[137px] flex flex-col items-center gap-[48px] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]">
        <h1 className="text-center text-4xl font-bold py-2.5 leading-tight text-[#333333]">
          Penang's <span className="text-[#FF8A2A]">Top Picks</span>: Scrumptious{" "}
          <span className="text-[#4169E1] font-bold">Food & Beverages</span>
        </h1>
        <p className="text-center max-w-[800px] m-0">
          Penang, often hailed as the food capital of Malaysia, offers a vibrant culinary scene that blends flavors
          from Malay, Chinese, Indian, and Peranakan influences. Here are some citations or highlights on Penang's
          renowned food culture:
        </p>
      </header>

      <div className="flex flex-wrap justify-center gap-5 py-10 px-5 max-w-screen-xl mx-auto">
        {foodData.foods.map((food, index) => (
          <Card
            key={index}
            title={food.title}
            description={food.description}
            image={food.image}
            locations={food.locations}
          />
        ))}
      </div>
    </div>
  );
};

export default Food;
