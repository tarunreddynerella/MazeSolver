import React, { useState } from "react";
import "./Contact.css";

const Contact = (props) => {
    const [formData, setFormData] = useState({
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <section className="section" id="Contact">
            <h4 className="heading-contact">CONTACT ME</h4>
            <br />
            <div className="container">
                <div className="contact-card">
                    <form action="https://api.web3forms.com/submit" method="POST">
                        <input type="hidden" name="access_key" value="3fee74a3-ad6e-48c5-9344-94f94a177641" />

                        <div className="input-field">
                            <input
                                type="email"
                                name="email"
                                id="sendersEmailId"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="sendersEmailId">Your Email</label>
                        </div>

                        <div className="input-field">
                            <input
                                type="text"
                                name="subject"
                                id="sendersSubject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="sendersSubject">Subject</label>
                        </div>

                        <div className="input-field">
                            <textarea
                                id="sendersMessage"
                                name="message"
                                className="materialize-textarea"
                                value={formData.message}
                                onChange={handleChange}
                                required></textarea>
                            <label htmlFor="sendersMessage">Message</label>
                        </div>

                        <br />
                        <div className="center">
                            <button
                                className="btn waves-effect waves-light"
                                type="submit"
                                name="submit">
                                Submit<i className="material-icons right">send</i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
