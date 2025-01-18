import About from "./components/about";
import Application from "./components/application";
import Client from "./components/client";
import Contact from "./components/contact";
import Footer from "./components/footer";
import HeroSection from "./components/hero";
import Products from "./components/products";


const index = () => {
  return (
    <div>
      <div>
        <HeroSection />
        <About />
        <Application />
        <Products />
        <Client />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default index;