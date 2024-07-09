import Header from "./components/header";
import Hero from "./components/hero";
import Services from "./components/services";
import About from "./components/about";
import Stats from "./components/stats";
import Testimonal from "./components/testimonal";
import Footer from "./components/footer";
import ContactUs from "./components/Contact";

export default function Home() {
  return (
    <main className="items-center justify-between ">
     <Header/>
     <Hero/>
     <Services/>
     <About/>
     <Stats/>
     <Testimonal/>
     <ContactUs/>
     <Footer/>
    </main>
  );
}
