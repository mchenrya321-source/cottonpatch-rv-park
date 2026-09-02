import Header from "./components/Header";
import Hero from "./components/Hero";
import QuickInfo from "./components/QuickInfo";
import Introduction from "./components/Introduction";
import Amenities from "./components/Amenities";
import Rates from "./components/Rates";
import MetaLocation from "./components/MetaLocation";
import Gallery from "./components/Gallery";
import ParkMap from "./components/ParkMap";
import Location from "./components/Location";
import Reviews from "./components/Reviews";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <QuickInfo />
        <Introduction />
        <Amenities />
        <Rates />
        <MetaLocation />
        <Gallery />
        <ParkMap />
        <Location />
        <Reviews />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
