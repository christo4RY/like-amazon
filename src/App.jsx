import React from "react";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import Carousel from "./components/carousel/carousel";
import Virtual from "./components/virtual/virtual";
import Products from "./components/products/products";
import Rated from "./components/rateds/rated";
import Footer from "./components/footer/footer";
const App = () => {
  return (
    <div className="px-6 ">
      <Header />
      <Hero />
      <Carousel />
      <Virtual />
      <Products />
      <Rated />
      <Footer />
    </div>
  );
};

export default App;
