import React, { useRef } from "react";
import Navigation from "./Nav";
import Header from "./Header"

function App() {
  // Create refs for sections
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const volunteerRef = useRef(null);

  // Function to scroll to a section
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* Pass scroll function & refs to Navigation */}
      <Navigation 
        scrollToSection={scrollToSection} 
        aboutRef={aboutRef} 
        projectsRef={projectsRef} 
        contactRef={contactRef} 
        volunteerRef={volunteerRef} 
      />

     <Header/>

      <section ref={projectsRef} id="projects" style={{ height: "100vh", padding: "50px", background: "#bbb" }}>
        <h1>Our Projects</h1>
      </section>

      <section ref={contactRef} id="signup" style={{ height: "100vh", padding: "50px", background: "#999" }}>
        <h1>Contact Us</h1>
      </section>

      <section ref={volunteerRef} id="Volunteer" style={{ height: "100vh", padding: "50px", background: "#888" }}>
        <h1>Become a Volunteer</h1>
      </section>
    </div>
  );
}

export default App;
