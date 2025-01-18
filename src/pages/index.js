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
      <div className="bg-gray-300 max-w-[1440px] mx-auto">
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