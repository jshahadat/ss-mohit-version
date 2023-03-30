import React from "react";
import NavBarUpdated2 from "../components/NavBarUpdated/NavBarUpdated2";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import StickyChatBot from "../components/stickyChatBot";
import PageBanner from "../containers/global/page-banner";
import TeampPageContainer from "../containers/team-page-container";
import Footer from "../components/FooterUpdated/Footer";
import Layout from "../layouts/index";
import "./Project.css"
import { MainSearchBar } from "../components/intro";
const TeamPage = () => {
    return (
        <div>
            <NavBarUpdated2></NavBarUpdated2>
            <React.Fragment>
                <Layout>
                    <SEO title="Ssebowa – Team" />
                    <div className="wrapper" style={{ paddingTop: "160px" }}>
                        <div className="team-back" >
                            <div className="mains-searchbar">
                                <MainSearchBar></MainSearchBar>
                            </div>

                            <div>

                            </div>
                            <div>
                                {/* <PageBanner
                                    title="Our Team"
                                    excerpt="Our team is composed of talented, dedicated professionals who strive to bring the best possible experience to our customers. We believe in collaboration, creativity, and commitment to excellence. We take pride in our work, and are passionate about delivering outstanding user experience to our customers as we support soil, climate, starving children and also support the girl child"
                                    image="./images/team/5.png"
                                /> */}
                                <h1 className="page-titles text-center">Our Team</h1>
                                <p className="page-headers ">Our team is composed of talented, dedicated professionals who strive to bring the best possible experience to our customers. We believe in collaboration, creativity, and commitment to excellence. We take pride in our work, and are passionate about delivering outstanding user experience to our customers as we support soil, climate, starving children and also support the girl child</p>
                            </div>
                        </div>
                        <TeampPageContainer />

                        <Footer />
                        <ScrollToTop />
                        <StickyChatBot />
                    </div>
                </Layout>
            </React.Fragment>
        </div>
    );
};

export default TeamPage;
