;


import React, { useRef } from "react";
import ErrorBoundary from "../components/Error";
import Navigation from "../components/Nav";
import Header from "../components/Header";
import Marquee from"../components/Mas";
import About from "../components/Section";
import ImageSlider from "../components/slider";
import Forms from "../components/Contact";
import Add from "../components/Address";
import Footer from "../components/Footer"


export default function App(){
    const aboutRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);
    const volunteerRef = useRef(null);

    const scrollToSection = (ref) => {
       try{
            ref.current.scrollIntoView({ behaviour: "smooth"});
        } catch(error){
            console.error("scrolling error",error);
        }
    };

    return(
        <>
        <ErrorBoundary>
        
        <Navigation 
        scrollToSection={scrollToSection}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
        volunteerRef={volunteerRef}
        // footerRef={footerRef}

        />

        <Header/>
        <Marquee/>
        <div ref={aboutRef}>
            <About/>
        </div>

        <div ref={projectsRef}>
            <ImageSlider/>
        </div>

        <div ref={volunteerRef}>
            <Forms/>
        </div>

        <div ref={contactRef}>
            <Add/>
            <Footer/>
            
        </div>
        
        
        </ErrorBoundary>
        </>
    )

};







