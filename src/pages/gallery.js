import { Box } from "@mui/material";

import React from "react";
import GallaryImageList from "../components/GallaryImageList/GallaryImageList";
import NavBarUpdated2 from "../components/NavBarUpdated/NavBarUpdated2";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import StickyChatBot from "../components/stickyChatBot";
import PageBanner from "../containers/global/page-banner";
import Footer from "../components/FooterUpdated/Footer";
import { useHistory, useLocation } from "react-router-dom";
import "./Project.css"
import { MainSearchBar } from "../components/intro";

function gallary(props) {


    return (
        <>
            <NavBarUpdated2></NavBarUpdated2>
            <Box style={{ paddingTop: "167px" }}>
                <SEO title="Ssebowa – Gallery" />
                <div className="gellary-back">
                    <div className="mains-searchbar">
                        <MainSearchBar></MainSearchBar>
                    </div>


                    {/* <PageBanner

                        title="Our Gallery"
                        excerpt="
                Welcome to Our Gallery! </br>
                We are so proud of the work our Ssebowa community has done to make our world a better place. Our gallery showcases the greatest moments of our journey, the people and organizations we'have helped, the incredible stories we've told, and the impact our work has had.
</br>
We invite you to explore our gallery and see how we've made a difference. Together, we can continue transforming our world and empower individuals to create a brighter future.

Thank you for your support!"
                        image="../assets/choose/choose1.webp"
                    /> */}
                    <h1 className="page-titles text-center">Our Gallery</h1>
                    <p className="page-headers ">
                        Welcome to Our Gallery <br />  We are so proud of the work our Ssebowa community has done to make our world a better place. Our gallery showcases the greatest moments of our journey, the people and organizations we have helped, the incredible stories we have told, and the impact our work has had. <br /> We invite you to explore our gallery and see how we have made a difference. Together, we can continue transforming our world and empower individuals to create a brighter future.Thank you for your support
                    </p>
                </div>
                <div>
                    <h1 className="sse-galler">
                        Have A look At <span style={{ color: "#3FAE04" }}>Ssebowa’s</span> Gallery
                    </h1>
                </div>
                <GallaryImageList></GallaryImageList>
                <Footer></Footer>
                <StickyChatBot />
                <ScrollToTop></ScrollToTop>
                {/* <SEO title="Ssebowa – Gallery" />
                <div className="wrapper">
                    <Header />
                    <PageBanner
                        title="Our Gallary"
                        excerpt="Pleasure rationally encounter consequences <br />
                        are extremely painful great oppurtunity"
                        image="./images/service/2.png"
                    />
                    {/* <ServiceListContainer />
                    <TestimonialReverse />
                    <FunFactContainer classOption="mt-0 mt-lg-0" />
                    <TeamContainer classOption="null" />
                    <BrandContainer />
                    <NewsletterArea /> */}
                {/* <GallaryImagesContainer></GallaryImagesContainer>
            <Footer />
            <ScrollToTop /> */} {/* */}
            </Box >
        </>
    );
}

export default gallary;
