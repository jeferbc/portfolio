import React from 'react';
import { WorkingWithMeData } from '../../../../database/layouts/portfolio/database';
import { Container, Row, Col } from 'reactstrap';

const WorkingWithMe = () => (
    <section className="resume services bg-pink" id="working-with-me">
        <Container>
            <Row>
                <Col md="8" className="offset-md-2">
                    <div className="title title2">
                        <h6 className="font-primary borders main-text text-uppercase"><span>logistics</span></h6>
                        <div className="sub-title">
                            <div>
                                <h2 className="title-text">Working With Me</h2>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                {WorkingWithMeData.map((item, i) => (
                    <Col lg="4" sm="6" key={i} className="mb-4">
                        <div className="working-item">
                            <i className={item.icon} aria-hidden="true"></i>
                            <div>
                                <h5 className="font-primary">{item.title}</h5>
                                <p className="font-secondary">{item.desc}</p>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    </section>
);

export default WorkingWithMe;
