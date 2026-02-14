import React from 'react';
import Typewriter from 'typewriter-effect';
import { Container, Row, Col } from 'reactstrap';
import { PersonalInfo } from '../../../../database/layouts/portfolio/database';

const Banner = () => (
    <section className="resume header" id="header">
        <div className="header7-content">
            <div className="resume bg bg-pink">
                <Container>
                    <Row>
                        <Col lg="8" md="10" className="offset-lg-2 offset-md-1">
                            <div className="center-text">
                                <div>
                                    <div className="header-sub-text">
                                        <h5 className="text-hash text-uppercase">{PersonalInfo.availability}</h5>
                                    </div>
                                    <div className="header-text">
                                        <h1><span className="bold-text">Hi, I&apos;m</span><br /> {PersonalInfo.name}</h1>
                                    </div>
                                    <div className="header-sub-text">
                                        <h4 className="font-secondary d-flex justify-content-center">
                                            <span className="typed-resume">
                                                <Typewriter
                                                    options={{
                                                        strings: ['Ruby on Rails', 'React', 'TypeScript', 'Full-Stack Developer'],
                                                        autoStart: true,
                                                        loop: true,
                                                    }}
                                                />
                                            </span>
                                        </h4>
                                    </div>
                                    <div className="header-sub-text">
                                        <p className="font-secondary font-large">
                                            {PersonalInfo.bio}
                                        </p>
                                    </div>
                                    <div className="link-horizontal">
                                        <ul className="justify-content-center">
                                            <li>
                                                <a className="btn btn-default primary-btn back-white" href="#contact">
                                                    contact me
                                                </a>
                                            </li>
                                            <li>
                                                <a className="btn btn-default primary-btn back-white" href="#experience">
                                                    view experience
                                                </a>
                                            </li>
                                            <li>
                                                <a className="btn btn-default primary-btn btn-outline-cv" href="/CV_Jefferson_Bernal_Senior_Rails_Developer.pdf" target="_blank" rel="noopener noreferrer">
                                                    download cv
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    </section>
);

export default Banner;
