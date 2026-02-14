import React from 'react';
import { ExperienceData } from '../../../../database/layouts/portfolio/database';
import { Container, Row, Col } from 'reactstrap';

const Experience = () => (
    <section className="resume about" id="experience">
        <Container>
            <div className="title title2">
                <Row>
                    <Col md="8" className="offset-md-2">
                        <h6 className="font-primary borders main-text text-uppercase"><span>career</span></h6>
                        <div className="sub-title">
                            <div>
                                <h2 className="title-text">Experience</h2>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="experience-timeline">
                {ExperienceData.map((exp, i) => (
                    <Row key={i} className="experience-item mb-5">
                        <Col lg="3" md="4">
                            <div className="experience-meta">
                                <h4 className="color-light">{exp.company}</h4>
                                <p className="font-secondary">{exp.period}</p>
                            </div>
                        </Col>
                        <Col lg="9" md="8">
                            <div className="experience-content">
                                <h5 className="font-primary">{exp.role}</h5>
                                <p className="font-secondary">{exp.description}</p>
                                <ul className="experience-highlights">
                                    {exp.highlights.map((highlight, j) => (
                                        <li key={j} className="font-secondary">{highlight}</li>
                                    ))}
                                </ul>
                                <div className="skill-tags">
                                    {exp.techStack.map((tech, j) => (
                                        <span key={j} className="skill-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </Col>
                    </Row>
                ))}
            </div>
        </Container>
    </section>
);

export default Experience;
