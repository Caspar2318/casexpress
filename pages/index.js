import React from "react";

import { Product, HeroBanner, FooterBanner } from "@/components";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <div className="products-heading">
        <h2>Populatest Products</h2>
        <p>Speakers of many variations.</p>
      </div>
      <div className="products-container">
        {["Produce1", "Product2"].map((product) => product)}
      </div>
      <FooterBanner />
    </>
  );
};

export default Home;
