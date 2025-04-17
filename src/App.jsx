import Navbar from "./navbar";
import "./index.css";
import Heropage from "./heropage";
import Contact from "./contactus";
import Aboutme from "./aboutme";
import Footer from "./footer";
import Skills from "./skills";
import { useRef } from "react";
import Project from "./projects";
import background from "./assets/backgroundsky.webp";
// Import CSS for slick-carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const homeRef = useRef(null);
  const contactRef = useRef(null);
  const aboutmeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);

  const scroll = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      console.error("Reference is not defined or accessible");
    }
  };

  return (
    <>
      <div className="fixed inset-0 -z-50">
        <img
          src={background}
          alt="Background"
          className="opacity-25 w-full h-full object-cover object-center"
        />
      </div>
      <Navbar
        scroll={scroll}
        aboutmeRef={aboutmeRef}
        homeRef={homeRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <Heropage scroll={scroll} homeRef={homeRef} contactRef={contactRef} />
      {/* <Projects/>   */}
      <Aboutme aboutmeRef={aboutmeRef} />
      <Skills skillsRef={skillsRef} />
      <Project projectsRef={projectsRef} />
      <Contact contactRef={contactRef} />
      <Footer />
    </>
  );
}

export default App;
