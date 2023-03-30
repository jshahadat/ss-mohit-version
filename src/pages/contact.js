import React from "react";
import NavBarUpdated2 from "../components/NavBarUpdated/NavBarUpdated2";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import StickyChatBot from "../components/stickyChatBot";
import ContactContainer from "../containers/contact";
import PageBanner from "../containers/global/page-banner";
import Footer from "../components/FooterUpdated/Footer";
import Layout from "../layouts/index";
import "./Project.css"
import { MainSearchBar } from "../components/intro";

const ContactPage = () => {
    return (
        <div>
            <NavBarUpdated2></NavBarUpdated2>
            <React.Fragment>
                <Layout>
                    <SEO title="Ssebowa – Contact" />
                    <div className="wrapper" style={{ paddingTop: "170px" }}>
                        <div className="contact-back">
                            <div className="mains-searchbar">
                                <MainSearchBar></MainSearchBar>
                            </div>
                            {/* <PageBanner
                            title="Contact us"
                            excerpt="Pleasure rationally encounter consequences <br />
                        are extremely painful great oppurtunity"
                            image="./images/contact/1.png"
                        /> */}

                            <div>
                                <h1 className="page-titles text-center">Get Closer to Know Us</h1>
                                <p className="page-headers " style={{ paddingBottom: "400px" }}>
                                    Pleasure rationally encounter consequences <br />
                                    are extremely painful great oppurtunity
                                </p>
                            </div>
                        </div>
                        <ContactContainer />

                        <Footer />
                        <ScrollToTop />
                        <StickyChatBot />
                    </div>
                </Layout>
            </React.Fragment>
        </div>
    );
};

export default ContactPage;
