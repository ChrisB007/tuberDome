import Hero from "./Hero";
import Creators from "./Creators";
import Footer from "./Footer";
import Navbar from './Navbar'

function Home() {
  return (
      <div className="homesection">
        <Navbar /> 
        <Hero />
        <Creators />
        <Footer />
      </div>
  );
}

export default Home;