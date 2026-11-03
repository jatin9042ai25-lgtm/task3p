import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Gallery from "./components/Gallery.jsx";
import Subscribe from "./components/Subscribe.jsx";
import FeaturedSection from "./components/FeaturedSection.jsx";
import Footer from "./components/Footer.jsx";
import { articles, tutorials } from "./data/content.js";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <About />
        <Projects />
        <Gallery />
        <FeaturedSection title="Featured Articles" items={articles} buttonText="See all articles" />
        <FeaturedSection title="Featured Tutorials" items={tutorials} buttonText="See all tutorials" />
        <Subscribe />
      </main>
      <Footer />
    </>
  );
}