import React from "react";

import ContactForm from "../../components/contact-form";
import ContactInfo from "../../components/contact-info";
import ContactData from "../../data/contact.json";
import { GrLocation } from 'react-icons/gr';
import { HiOutlineMail } from "react-icons/hi"
import { MdOutlineCall, MdOutlineLocationOn } from "react-icons/md"
import "./Contact.css"


const ContactContainer = () => {
    return (
        <section className="contact-section section-py">
            <div className="container">
                <div className="row mb-n7" >
                    <div className="contact-hedsInfo">
                        <div className="text-justify">
                            <h1 className="contact-us">Contact Us</h1>
                            <p className="contacts-para" >Top rated construction packages we pleasure rationally encounter consequences interesting who loves or pursue or desires</p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 mb-7" style={{ backgroundColor: "#011627", display: "flex", flexDirection: "column", justifyContent: "center", justifyItems: "center", margin: "auto" }}>
                        {/* <div className="contact-title-section">
                            <h3 className="title">Get in touch</h3>
                            <p>
                                Top rated construction packages we pleasure
                                rationally encounter
                                <br className="d-none d-xl-block" />
                                consequences interesting who loves or pursue or
                                desires
                            </p>
                        </div> */}

                        <ContactForm />
                    </div>

                    <div className="col-xl-5 col-lg-6 mb-7 offset-xl-1">
                        <div className="contact-address" style={{ background: "#E6E6E6" }}>
                            {/* {ContactData &&
                                ContactData.map((single, key) => {
                                    return (
                                        <ContactInfo key={key} data={single} />
                                    );
                                })} */}

                            <div>
                                <div className="contactHeadsmall">
                                    <div className="text-justify">
                                        <h1 className="contact-us">Contact Us</h1>
                                        <p className="contacts-para" >Top rated construction packages we pleasure rationally encounter consequences interesting who loves or pursue or desires</p>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="contacts-info me-5" style={{
                                        color: "#3FAF04"
                                    }}>
                                        <MdOutlineLocationOn style={{
                                            color: "#3FAF04",

                                        }}></MdOutlineLocationOn>
                                    </div>
                                    <div className="contacts-info">
                                        <h2>Head Office</h2>
                                        <p>30 N Gould St, Sheridan, WY 82801, USA</p>
                                    </div>
                                </div>

                                <div className="d-flex">
                                    <div className="contacts-info me-5" style={{
                                        color: "#3FAF04"
                                    }}>
                                        <HiOutlineMail style={{
                                            color: "#3FAF04",

                                        }}></HiOutlineMail>
                                    </div>
                                    <div className="contacts-info">
                                        <h2>Our Email</h2>
                                        <p>supoort@ssebowa.ai</p>
                                    </div>
                                </div>

                                <div className="d-flex">
                                    <div className="contacts-info me-5" style={{
                                        color: "#3FAF04"
                                    }}>
                                        <MdOutlineCall style={{
                                            color: "#3FAF04",

                                        }}></MdOutlineCall>
                                    </div>
                                    <div className="contacts-info">
                                        <h2>Call Center</h2>
                                        <p>+32474171274</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactContainer;
