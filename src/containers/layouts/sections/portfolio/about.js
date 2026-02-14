import React from 'react';
import { PersonalInfo } from '../../../../database/layouts/portfolio/database';
import { Container, Row, Col } from 'reactstrap';

const About = () => (
    <section className="resume about" id="about">
        <Container>
            <div className="title title2">
                <Row>
                    <Col md="8" className="offset-md-2">
                        <h6 className="font-primary borders main-text text-uppercase"><span>about</span></h6>
                        <div className="sub-title">
                            <div>
                                <h2 className="title-text">About Me</h2>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <Row>
                <Col lg="6">
                    <div className="about-content">
                        <p className="font-secondary font-large">
                            I architect and build production web applications end-to-end — from database schema design
                            to responsive UIs. Over 8+ years, I&apos;ve taken products from concept to scale across
                            fintech, healthtech, edtech, and SaaS.
                        </p>
                        <p className="font-secondary font-large">
                            At Tesote, I delivered 100% performance improvements on financial report generation.
                            At Gathersight, I led the backend architecture that achieved 45% faster response times
                            processing millions of scientific articles. At Tranquilamente, I built and maintained
                            a telemedicine platform serving 12,000+ therapy sessions with a 4.9/5 rating.
                        </p>
                        <p className="font-secondary font-large">
                            I combine deep Ruby on Rails expertise with React/TypeScript frontend skills,
                            a strong testing discipline (90%+ coverage standard), and production ownership
                            experience from deployment through monitoring and scaling.
                        </p>
                    </div>
                </Col>
                <Col lg="5" className="offset-lg-1">
                    <div className="about-info">
                        <ul className="about-list">
                            <li>
                                <span className="about-label">Name:</span>
                                <span className="about-value">{PersonalInfo.name}</span>
                            </li>
                            <li>
                                <span className="about-label">Email:</span>
                                <span className="about-value">
                                    <a href={`mailto:${PersonalInfo.email}`}>{PersonalInfo.email}</a>
                                </span>
                            </li>
                            <li>
                                <span className="about-label">Location:</span>
                                <span className="about-value">{PersonalInfo.location}</span>
                            </li>
                            <li>
                                <span className="about-label">Timezone:</span>
                                <span className="about-value">{PersonalInfo.timezone}</span>
                            </li>
                            <li>
                                <span className="about-label">LinkedIn:</span>
                                <span className="about-value">
                                    <a href={PersonalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                                        linkedin.com/in/jeffersonbernal
                                    </a>
                                </span>
                            </li>
                            <li>
                                <span className="about-label">GitHub:</span>
                                <span className="about-value">
                                    <a href={PersonalInfo.github} target="_blank" rel="noopener noreferrer">
                                        github.com/jeferbc
                                    </a>
                                </span>
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
);

export default About;
