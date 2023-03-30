import React, { Fragment } from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
    const { register, errors } = useForm({
        mode: "onBlur",
    });
    return (
        <Fragment>
            <form
                id="contactForm"
                className="row ms-lg-0 ms-5 me-lg-0 me-5"
                action="https://getform.io/f/a17a2715-d7ee-4ac4-8fcb-12f1eed43b2c"
                method="POST"
                style={{ justifyContent: "center", paddingBottom: "100px", paddingTop: "100px" }}
            >
                <div className="col-12 col-lg-8 mb-7">
                    <p style={{ color: "white" }}>First Name</p>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Enter your first name"
                        ref={register({ required: "Name is required" })}
                    />
                    {errors.name && <p>{errors.name.message}</p>}
                </div>
                <div className="col-12 col-lg-8 mb-7">
                    <p style={{ color: "white" }}>Last Name</p>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Enter your last name"
                        ref={register({ required: "Name is required" })}
                    />
                    {errors.name && <p>{errors.name.message}</p>}
                </div>

                <div className="col-12 col-lg-8  mb-7">
                    <p style={{ color: "white" }}>Your Email</p>
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        name="email"
                        cols="30"
                        rows="10"
                        placeholder="Enter your email"
                        ref={register({
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "invalid email address",
                            },
                        })}
                    />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>

                <div className="col-12 col-lg-8 mb-9">
                    <p style={{ color: "white" }}>Message</p>
                    <textarea
                        className="form-control massage-control"
                        name="message"
                        id="massage"
                        // cols="30"
                        // rows="10"
                        placeholder="Enter your message"
                        ref={register({
                            required: "Message is required",
                        })}
                    ></textarea>
                    {errors.message && <p>{errors.message.message}</p>}
                </div>

                <div className="col-12 col-lg-8">
                    <button
                        id="contactSubmit"
                        type="submit"
                        className="btn btn-hover-dark w-100 "
                        data-complete-text="Well Done!"
                        style={{ backgroundColor: "#3FAF04", color: "white", borderRadius: "8px" }}
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </Fragment>
    );
};

export default ContactForm;
