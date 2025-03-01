// import { Link } from "react-router-dom";


// export default function Navigation(){
//     return(
//         <>
        
//     <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
//             <div className="container px-4 px-lg-5">
//                 <Link className="navbar-brand" to="#page-top">Blessing gate</Link>
//                 <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
//                     Menu
//                     <i className="fas fa-bars"></i>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarResponsive">
//                     <ul className="navbar-nav ms-auto">
//                         <li className="nav-item"><Link className="nav-link" to="#about">About</Link></li>
//                         <li className="nav-item"><Link className="nav-link" to="#projects">Projects</Link></li>
//                         <li className="nav-item"><Link className="nav-link" to="#signup">Contact</Link></li>
//                         <li className="nav-item"><Link className="nav-link" to="#Volunteer">Volunteer</Link></li>
//                     </ul>
//                 </div>
//             </div>
//         </nav> 
//         </>
//     )
// }


import React from "react";

export default function Navigation({ scrollToSection, aboutRef, projectsRef, contactRef, volunteerRef }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div className="container px-4 px-lg-5">
                <span className="navbar-brand" style={{ cursor: "pointer" }} onClick={() => scrollToSection(aboutRef)}>Blessing Gate</span>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <span className="nav-link" style={{ cursor: "pointer" }} onClick={() => scrollToSection(aboutRef)}>About</span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link" style={{ cursor: "pointer" }} onClick={() => scrollToSection(projectsRef)}>Projects</span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link" style={{ cursor: "pointer" }} onClick={() => scrollToSection(contactRef)}>Contact</span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link" style={{ cursor: "pointer" }} onClick={() => scrollToSection(volunteerRef)}>Volunteer</span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav> 
    );
}

// import React from "react";

// export default function Navigation({ scrollToSection, aboutRef, projectsRef, contactRef, volunteerRef }) {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
//             <div className="container px-4 px-lg-5">
//                 <span className="navbar-brand" style={{ cursor: "pointer" }} onClick={() => scrollToSection(aboutRef)}>Blessing Gate</span>
//                 <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
//                     Menu
//                     <i className="fas fa-bars"></i>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarResponsive">
//                     <ul className="navbar-nav ms-auto">
//                         <li className="nav-item">
//                             <span className="nav-link" style={{ cursor: "pointer" }} onClick={() => scrollToSection(aboutRef)}>About</span>
//                         </li>
//                         <li className="nav-item">
//                             <span className="nav-link" style={{ cursor: "pointer" }} onClick={() => scrollToSection(projectsRef)}>Projects</span>
//                         </li>
//                         <li className="nav-item">
//                             <span className="nav-link" style={{ cursor: "pointer" }} onClick={() => scrollToSection(contactRef)}>Contact</span>
//                         </li>
//                         <li className="nav-item">
//                             <span className="nav-link" style={{ cursor: "pointer" }} onClick={() => scrollToSection(volunteerRef)}>Volunteer</span>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </nav> 
//     );
// }
// import React from "react";

// export default function Navigation({ scrollToSection, aboutRef, supportRef }) {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
//             <div className="container px-4 px-lg-5">
//                 <span className="navbar-brand" style={{ cursor: "pointer" }} onClick={() => scrollToSection(aboutRef)}>Blessing Gate</span>
//                 <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
//                     Menu
//                     <i className="fas fa-bars"></i>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarResponsive">
//                     <ul className="navbar-nav ms-auto">
//                         <li className="nav-item">
//                             <span className="nav-link" style={{ cursor: "pointer" }} onClick={() => scrollToSection(aboutRef)}>About</span>
//                         </li>
//                         <li className="nav-item">
//                             <span className="nav-link" style={{ cursor: "pointer" }} onClick={() => scrollToSection(supportRef)}>Volunteer</span>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     );
// }
