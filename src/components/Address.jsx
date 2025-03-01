import { Link } from "react-router"
export default function Add(){
    return(
        <>
         <section className="contact-section bg-black">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5">
                    <div className="col-md-4 mb-3 mb-md-0">
                        <div className="card py-4 h-100">
                            <div className="card-body text-center">
                                <i className="fas fa-map-marked-alt text-primary mb-2"></i>
                                <h4 className="text-uppercase m-0">Address</h4>
                                <hr className="my-4 mx-auto" />
                                <div className="small text-black-50">Church Of God Abrahams Temple, Kumasi </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3 mb-md-0">
                        <div className="card py-4 h-100">
                            <div className="card-body text-center">
                                <i className="fas fa-envelope text-primary mb-2"></i>
                                <h4 className="text-uppercase m-0">Email</h4>
                                <hr className="my-4 mx-auto" />
                                <div className="small text-black-50"><a to="#!">blessinggatefoundation@gmail.com</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3 mb-md-0">
                        <div className="card py-4 h-100">
                            <div className="card-body text-center">
                                <i className="fas fa-mobile-alt text-primary mb-2"></i>
                                <h4 className="text-uppercase m-0">Phone</h4>
                                <hr className="my-4 mx-auto" />
                                <div className="small text-black-50">+233 (543) 6096</div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="social d-flex justify-content-center">
                    <Link className="mx-2" to="#!"><i className="fab fa-twitter"></i></Link>
                    <Link className="mx-2" to="#!"><i className="fab fa-facebook-f"></i></Link>
                    <Link className="mx-2" to="#!"><i className="fab fa-github"></i></Link>
                </div> */}
            </div>
        </section>
        
        </>
    )
}