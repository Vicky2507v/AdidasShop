import { Home } from "./Home";
import { NewArrival } from "./NewArrival";
import { OurProducts } from "./OurProducts";
import { Reviews } from "./Reviws";
import { Footer } from "./Footer";
import { NavBar } from "./NavBar";
import "./index.css";

export const Shop = () => {
  return (
    <>
      <NavBar />
      <Home />
      <NewArrival />
      <OurProducts />
      <Reviews />
      <Footer />
    </>
  );
};
