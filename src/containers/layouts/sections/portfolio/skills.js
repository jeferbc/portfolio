import React from 'react';
import { SkillsData } from '../../../../database/layouts/portfolio/database';
import { Container, Row, Col } from 'reactstrap';

const Skills = () => (
    <section className="resume services bg-pink" id="skills">
        <Container>
            <Row>
                <Col md="8" className="offset-md-2">
                    <div className="title title2">
                        <h6 className="font-primary borders main-text text-uppercase"><span>expertise</span></h6>
                        <div className="sub-title">
                            <div>
                                <h2 className="title-text">Technical Skills</h2>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                {SkillsData.map((skill, i) => (
                    <Col lg="4" sm="6" key={i} className="mb-4">
                        <div className="service bg-white skill-card">
                            <div className="service-feature text-center">
                                <i className={`${skill.icon} skill-icon`} aria-hidden="true"></i>
                                <h4 className="feature-text">{skill.category}</h4>
                                <div className="skill-tags">
                                    {skill.items.map((item, j) => (
                                        <span key={j} className="skill-tag">{item}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    </section>
);

export default Skills;
