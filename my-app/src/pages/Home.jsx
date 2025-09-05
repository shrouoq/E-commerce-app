import Hero from "../components/sliders/Hero.jsx";
import Banner from "../components/banner.jsx";
import Offers from "../components/Offers/Offers.jsx";
import MilkProducts from "../components/milkProducts/MilkProducts.jsx";
import BestSeller from "../components/BestSeller/BestSeller.jsx";
import Featured from "../components/Featured/Featured.jsx";
import WeekendOffers from "../components/WeekendOffers/WeekendOffers.jsx";
import LittleProductsSlider from "../components/productsslider/LitteleProductsSlider.jsx";
import ExtraDiscound from "../components/ExtraDiscound.jsx";
import FigerSection from "../components/figer/FigerSection.jsx";

export default function Home() {
  return (
    <div>
      <div className="container mx-auto my-10 z-[-1] ">
        <Hero />
        <Banner />
        <Offers />
        <MilkProducts />
        <LittleProductsSlider />
        <BestSeller />
        <WeekendOffers />
        <Featured />
        <ExtraDiscound />
        <FigerSection />
      </div>
    </div>
  );
}
