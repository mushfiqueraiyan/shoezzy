import React from "react";
import Hero from "../../components/Hero";
import Boost from "../../components/Boost";
import PopularProduct from "../../components/PopularProduct";
import Service from "../../components/Service";
import Discount from "../../components/Discount";

const Home = () => {
  return (
    <div>
      <Hero />

      <div className="max-w-6xl mx-auto mt-15">
        <Boost />
        <PopularProduct />
        <Service />
        <Discount />
      </div>
    </div>
  );
};

export default Home;
