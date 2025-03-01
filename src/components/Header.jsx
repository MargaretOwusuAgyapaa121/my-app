import { Link } from "react-router-dom";

export default function Header(){
    return(
        <>
          <header className="masthead">
            <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
                <div className="d-flex justify-content-center">
                    <div className="text-center">
                        <h1 className="mx-auto my-0 text-uppercase">Blessing gate charity foundation</h1>
                        <h2 className="text-white-50 mx-auto mt-2 mb-5">Tourching lives, Changing tomorrow.</h2>
                        {/* <Link className="btn btn-primary" to="#volunteer">Volunteer</Link> */}
                        {/* <li className="nav-item">
                            <span className="btn btn-primary" style={{ cursor: "pointer" }} onClick={() => scrollToSection(volunteerRef)}>Volunteer</span>
                        </li> */}
                    </div>
                </div>
            </div>
        </header>
        </>
    )
}