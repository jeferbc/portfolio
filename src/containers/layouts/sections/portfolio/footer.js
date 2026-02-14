import React from 'react';
import { PersonalInfo } from '../../../../database/layouts/portfolio/database';
import { Container, Row, Col } from 'reactstrap';

const whatsappUrl = `https://wa.me/${PersonalInfo.phone.replace(/[\s+\-]/g, '')}`;

const Footer = () => (
    <footer className="resume copyright copyright-bg">
        <Container>
            <Row>
                <Col xs="12">
                    <div className="text-center">
                        <div className="social-link link-horizontal footer-social">
                            <ul className="justify-content-center">
                                <li>
                                    <a className="copyright-text" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                                        <i aria-hidden="true" className="fa fa-whatsapp"></i>
                                    </a>
                                </li>
                                <li>
                                    <a className="copyright-text" href={PersonalInfo.github} target="_blank" rel="noopener noreferrer">
                                        <i aria-hidden="true" className="fa fa-github"></i>
                                    </a>
                                </li>
                                <li>
                                    <a className="copyright-text" href={PersonalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                                        <i aria-hidden="true" className="fa fa-linkedin"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Col>
                <Col xs="12">
                    <div className="m-l-auto center-para">
                        <h6 className="copyright-text text-center">
                            &copy; {new Date().getFullYear()} {PersonalInfo.name}
                        </h6>
                    </div>
                </Col>
            </Row>
        </Container>
    </footer>
);

export default Footer;
