import "./App.css";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import Explore from "./components/explore/Explore";
import WhyUs from "./components/why-us/WhyUs";
import Footer from "./components/footer/Footer";
import ContactUs from "./components/contact-us/ContactUs";
import ExploreNorthEast from "./components/explore-north-east/ExploreNorthEast";

function App() {
  return (
    <>
      <h1 className="sr-only">
        Uncharted Voyage — Explore Northeast India and Hornbill Festival
      </h1>
      <Header />
      <Banner />
      <Explore />
      <ExploreNorthEast />
      <WhyUs />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
