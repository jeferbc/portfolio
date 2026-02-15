import React from 'react';
import { PersonalInfo } from '../../../../database/layouts/portfolio/database';
import { Container, Row, Col } from 'reactstrap';

const whatsappUrl = `https://wa.me/${PersonalInfo.phone.replace(/[\s+\-]/g, '')}`;

const Contact = () => (
    <section className="resume subscribe" id="contact">
        <Container>
            <div className="title title2">
                <Row>
                    <Col md="8" className="offset-md-2">
                        <h6 className="font-primary borders main-text text-uppercase"><span>contact</span></h6>
                        <div className="sub-title">
                            <div>
                                <h2 className="title-text">Get In Touch</h2>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <Row className="justify-content-start">
                <Col lg="8">
                    <div className="contact-info">
                        <Row>
                            <Col sm="6" className="mb-4">
                                <div className="contact-item justify-content-start">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                    <div>
                                        <h5>Email</h5>
                                        <a href={`mailto:${PersonalInfo.email}`}>{PersonalInfo.email}</a>
                                    </div>
                                </div>
                            </Col>
                            <Col sm="6" className="mb-4">
                                <div className="contact-item justify-content-start">
                                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                                    <div>
                                        <h5>Location</h5>
                                        <span>{PersonalInfo.location}</span>
                                    </div>
                                </div>
                            </Col>
                            <Col sm="6" className="mb-4">
                                <div className="contact-item justify-content-start">
                                    <i className="fa fa-clock-o" aria-hidden="true"></i>
                                    <div>
                                        <h5>Timezone</h5>
                                        <span>{PersonalInfo.timezone}</span>
                                    </div>
                                </div>
                            </Col>
                            <Col sm="6" className="mb-4">
                                <div className="contact-item justify-content-start">
                                    <i className="fa fa-whatsapp" aria-hidden="true"></i>
                                    <div>
                                        <h5>WhatsApp</h5>
                                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                                            {PersonalInfo.phone}
                                        </a>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
);

export default Contact;
