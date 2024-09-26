import React from "react";
import Hero from "../components/Hero";
import LatestCollections from "../components/LatestCollections";
import BestSeller from "../components/BestSeller";
import OurPolicy from "../components/OurPolicy";
import Subscription from "../components/Subscription";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Hero />
      <LatestCollections />
      <BestSeller />
      <OurPolicy />
      <Subscription />
      <Footer />
    </div>
  );
}

export default Home;
