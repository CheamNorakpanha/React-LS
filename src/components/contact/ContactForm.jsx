import React from "react";

function ContactForm() {
    return (
        <div className="container">
            <div className="row justify-content-center text-center mb-2 mb-lg-4">
                <div className="col-lg-8 col-xxl-7">
                    <h2 className="display-5 fw-bold mb-3">Contact Us</h2>
                    <p className="lead mb-0">Hearing comments on how our content has been helpful to instructors and IFL students and how they have applied it to their work is an honor. It shows why it's worthwhile to create this website! Please inform us if you have found us to be helpful.</p>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-10 col-lg-6">
                    <form>
                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <input className="bg-light p-2 w-100 border border-secondary" placeholder="First name" type="text" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <input className="bg-light p-2 w-100 border border-secondary" placeholder="Last name" type="text" />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="mb-3">
                                    <textarea className="bg-light p-2 w-100 border border-secondary" placeholder="Your message" rows="4"></textarea>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="d-grid">
                                    <button className="text-bg-dark px-4 py-2" type="submit">Send message</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;