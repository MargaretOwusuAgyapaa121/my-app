import { Link } from "react-router-dom";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Forms(){

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_maxp0as', 'template_qm3fgxg', form.current, {
          publicKey: '9h8VCu15mc06EGiF7',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            alert("message sent")
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
    return(
        <><div className="volunteer-container">
        <div className="text-center volunteer-text">
          <h2 className="section-heading text-uppercase">Volunteer</h2>
          <h3 className="section-subheading text-muted">Please fill the form.</h3>
        </div>
      
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <label for="user_name">Name</label>
          <input type="text" id="user_name" name="user_name" required />
      
          <label for="user_email">Email</label>
          <input type="email" id="user_email" name="user_email" required />
      
          <label for="message">Message</label>
          <textarea id="message" name="message" rows="4" required></textarea>
      
          <input type="submit" value="Send" />
        </form>
      </div>
      

        {/* <form ref={form} onSubmit={sendEmail} class="contact-form">
  <label for="user_name">Name</label>
  <input type="text" id="user_name" name="user_name" required />

  <label for="user_email">Email</label>
  <input type="email" id="user_email" name="user_email" required />

  <label for="message">Message</label>
  <textarea id="message" name="message" rows="4" required></textarea>

  <input type="submit" value="Send" />
</form> */}

        {/* <form ref={form} onSubmit={sendEmail}> */}
      {/* <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form> */}
         {/* <section className="page-section" id="contact">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">volunteer</h2>
                    <h3 className="section-subheading text-muted">please fill the form.</h3>
                </div>
                
                <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                    <div className="row align-items-stretch mb-5">
                        <div className="col-md-6">
                            <div className="form-group">
                              
                                <input className="form-control" id="name" type="text" placeholder="Your Name *" data-sb-validations="required" />
                                <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                            </div>
                            <div className="form-group">
                               
                                <input className="form-control" id="email" type="email" placeholder="Your Email *" data-sb-validations="required,email" />
                                <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                            </div>
                            <div className="form-group mb-md-0">
                               
                                <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" data-sb-validations="required" />
                                <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group form-group-textarea mb-md-0">
                            
                                <textarea className="form-control" id="message" placeholder="Your Message *" data-sb-validations="required"></textarea>
                                <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                            </div>
                        </div>
                    </div>
                    <div className="d-none" id="submitSuccessMessage">
                        <div className="text-center text-white mb-3">
                            <div className="fw-bolder">Form submission successful!</div>
                            To activate this form, sign up at
                            <br />
                            <Link to="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</Link>
                        </div>
                    </div>
                    
                    <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                    <div className="text-center"><button className="btn btn-primary btn-xl text-uppercase disabled" id="submitButton" type="submit">Send Message</button></div>
                </form>
            </div>
        </section> */}
        </>
    )
}