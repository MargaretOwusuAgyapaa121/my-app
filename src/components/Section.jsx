import { Link } from "react-router-dom";


export default function About(){
    return(
        <>
        

        <section className="about-section text-center" id="about">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-lg-8">
                        <h2 className="text-white mb-4">Blessing Gate Charity Foundation</h2>
                        <p className="text-white-50">
                      Blessing Gate Foundation is a charitable organization dedicated to providing food and support to orphans, widows, and people with disabilities. Our mission is to bring hope and relief to those in need by ensuring they have access to essential meals and care. Through kindness and generosity, 
                      we strive to make a positive impact in their lives and communities. 
                            <Link to="https://chat.whatsapp.com/Ktmp2AIZxwLIKYq1QfeQNX ">the WhatsApp page.</Link>
                        </p>
                    </div>
                </div>
                <img className="img-fluid" src="assests/blessing-gate/banner.jpg" alt="..." />
            </div>
        </section>
        
        </>
    )
}