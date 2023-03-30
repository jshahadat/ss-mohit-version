import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { Label, Input, Row, Col } from "reactstrap";
import Logo from "../../assets/images/download.png";
import SocialIcon from "../../components/social-icon";
import { faFacebook, faInstagram, faLinkedin, faTiktok } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <>
            <div className="fotter-box" style={{ marginTop: "60px" }}>
                <Row style={{ backgroundColor: "#011627", color: "white" }}>
                    <Col className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
                        <div className="footer-link logo-box">
                            <img src={Logo} alt="logo"></img>
                            <p>Make your daily searches with Ssebowa and see how you will make this 21st century not look like this 21th century</p>

                            <div className="row">
                                <i className="bi bi-instagram" style={{ fontSize: 14, color: "white" }}></i>
                                <i className="bi bi-facebook" />
                                <i className="bi bi-twitter"></i>
                                <i className="bi bi-youtube"></i>
                                <i className="bi bi-telegram"></i>
                            </div>
                        </div>
                    </Col>
                    <Col className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
                        <div className="footer-link link-box">
                            <h4 style={{ color: "white", fontWeight: "bold" }}>Quick Link</h4>
                            <p><Link className="text-white" to="privacy-policy">Terms and Conditions</Link></p>
                            <p><Link className="text-white" to="privacy-policy">Privacy Policy</Link></p>
                            <p><Link className="text-white" to="/team">Team</Link></p>
                            <p><Link className="text-white" to="contact">Contact Us</Link></p>
                            <p><Link className="text-white" to="about">About Us</Link></p>
                        </div>
                    </Col>
                    <Col className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
                        <div className="footer-link info-boxs">
                            <h4 style={{ color: "white", fontWeight: "bold" }}>Contact Info</h4>
                            <p>30 N Gould St, Sheridan, WY 82801, USA</p>
                            <p>info@ssebowa.org</p>
                            <ul className="footer-social-links" >
                                <SocialIcons icon={faFacebook} size={"xl"} link={"https://www.facebook.com/Ssebowasearchengine"} />
                                <SocialIcons icon={faInstagram} size={"xl"} link={"https://www.instagram.com/ssebowa_official/"} />
                                <SocialIcons icon={faLinkedin} size={"xl"} link={"https://www.linkedin.com/showcase/ssebowa/"} />
                                <SocialIcons icon={faTiktok} size={"xl"} link={"https://www.tiktok.com/@disanssebowabasal"} />
                            </ul>
                        </div>
                    </Col>
                    <Col className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
                        <div className="footer-link join-box">
                            <h4 style={{ color: "white", fontWeight: "bold" }}>Join A Newsletter</h4>
                            <Label>Email</Label>
                            <Input type="email" name="email" id="email" placeholder="Enter Your Email" />

                            <button
                                style={{
                                    background: "#3faf04",
                                    padding: "16px 40px",
                                    marginTop: "20px",
                                    boxShadow: " 0px 24px 64px rgb(0 0 0 / 12%)",
                                    borderRadius: "8px",
                                    color: "white",
                                }}
                                className="header-banner-search-button"
                            // style={{ marginTop: 20 }}
                            >
                                Send
                            </button>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default Footer;

const SocialIcons = ({icon,size,link}) =>{
    return(
      <a href={link} target="_blank" rel="noreferrer" className="HLSBOTTOMSocialLink"  >
        <FontAwesomeIcon icon={icon} size={size}  />
      </a>
    )
  }