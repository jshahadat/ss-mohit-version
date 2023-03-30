import React from "react";
import PropTypes from "prop-types"; // ES6
import { Col, Container, Row } from "react-bootstrap";
import NavBarUpdated2, { NavBarSearchBar, VoiceModal } from "../components/NavBarUpdated/NavBarUpdated2";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import StickyChatBot from "../components/stickyChatBot";
import BlogItemContainer from "../containers/blog/blog-item";
import PageBanner from "../containers/global/page-banner";
import BlogData from "../data/blog.json";
import Footer from "../components/FooterUpdated/Footer";
import Layout from "../layouts/index";
import Uganda from "../../src/assets/project/uganda.png"
import Indonasia from "../../src/assets/project/indonasia.png"
import Pakistan from "../../src/assets/project/pakistan.png"
import ChildGirl from "../../src/assets/project/childGirl.png"
import ChildMeal from "../../src/assets/project/mealChild.png"
import './Project.css'
import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { BASEURL } from "../connection/BaseUrl";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSpeechRecognition } from "react-speech-recognition";
import { MainSearchBar } from "../components/intro";
const BlogPage = () => {




    return (
        <div>
            <div>

                <NavBarUpdated2></NavBarUpdated2>
                <React.Fragment>
                    <Layout>
                        <SEO title="Ssebowa – Projects" />
                        <div className="wrapper " style={{ paddingTop: "170px" }}>
                            <div className="project-back">
                                <div className="mains-searchbar">
                                    <MainSearchBar></MainSearchBar>
                                </div>

                                {/* <div className="text-center" style={{ marginBottom: "600px", paddingTop: "50px" }}>
                                    <h1>Current Campaings</h1>
                                    <p>Projects around the world</p>
                                </div> */}
                                {/* <PageBanner title="Current Campaings" excerpt="Projects around the world" image="./images/blog/banner.png" /> */}
                                <h1 className="page-titles text-center">Current Campaings</h1>
                                <p className="page-headers " style={{ paddingBottom: "400px" }}>
                                    Projects around the world
                                </p>
                            </div>


                            <div style={{ paddingTop: "114px" }}>
                                <Container fluid={true}>
                                    <Row>
                                        <div className="text-center">
                                            <h1 className="projects-title">
                                                What <span style={{ color: "#4AB421" }}>Ssebowa</span> Does?
                                            </h1>
                                            <p className="home-para font-normal mt-0">
                                                Your searches make our planet pristine, verdant and comfortable just as it is intended to be.
                                            </p>
                                        </div>

                                    </Row>

                                    <Row className="" style={{ maxWidth: "fit-content", margin: "auto" }}>
                                        <Col className="container">

                                            <div className="project-container justify-items-center justify-content-center mx-auto mt-5">
                                                <div className="container">
                                                    <img style={{ borderRadius: "10%" }} className="img-fluid" src={Uganda} alt="" />

                                                    <div className="text-center bg-white project-infos">
                                                        <h6 className="infos-ProTilte  mx-auto">Your Searches In
                                                            Uganda</h6>
                                                    </div>
                                                </div>

                                                <div className="container">
                                                    <img style={{ borderRadius: "10%" }} className="img-fluid" src={Indonasia} alt="" />

                                                    <div className="text-center bg-white project-infos">
                                                        <h6 className="infos-ProTilte  mx-auto">Your Searches In
                                                            Indonasia</h6>
                                                    </div>
                                                </div>

                                                <div className="container">
                                                    <img style={{ borderRadius: "10%" }} className="img-fluid" src={Pakistan} alt="" />

                                                    <div className="text-center bg-white project-infos">
                                                        <h6 className="infos-ProTilte  mx-auto">Your Searches In
                                                            Pakistan</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>

                                    <div className="project-cardBox justify-items-center justify-content-center mx-auto mt-5">
                                        <div className="card-margin">
                                            <img
                                                style={{ borderRadius: "10%" }}
                                                className="mg-fluid"
                                                src={ChildGirl}
                                                alt=""
                                            />

                                            <div className="text-center bg-white project-infosCard">
                                                <h6 className="infos-ProTilteScond">Your Searches For A Child Girl</h6>
                                            </div>
                                        </div>

                                        <div className="">
                                            <img style={{ borderRadius: "10%" }} className="img-fluid" src={ChildMeal} alt="" />

                                            <div className="text-center bg-white  project-infosCard">
                                                <h6 className="infos-ProTilteScond">Your Searches For A Meal To A Child</h6>
                                            </div>
                                        </div>
                                    </div>
                                </Container>
                            </div>

                            {/* <PageBanner title="Current Campaings" excerpt="Projects around the world" image="./images/blog/banner.png" /> */}
                            {/* <BlogItemContainer data={BlogData} /> */}
                            {/* <NewsletterArea /> */}
                            <Footer />

                            <ScrollToTop />
                            <StickyChatBot />
                        </div>
                    </Layout>
                </React.Fragment>
            </div>
        </div>
    );
};

export default BlogPage;



