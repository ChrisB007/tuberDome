import Hero from "./Hero";
import Creators from "./Creators";
import Footer from "./Footer";

function Home() {
  return (
      <div className="homesection">
        <Hero />
        <Creators />
        <Footer />
      </div>
  );
}

export default Home;