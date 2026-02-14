import React from 'react';
import { DigitalGrowthData } from '../../../../database/layouts/portfolio/database';
import { Container, Row, Col } from 'reactstrap';

const DigitalGrowth = () => (
    <section className="resume about" id="digital-growth">
        <Container>
            <div className="title title2">
                <Row>
                    <Col md="8" className="offset-md-2">
                        <h6 className="font-primary borders main-text text-uppercase"><span>{DigitalGrowthData.title}</span></h6>
                        <div className="sub-title">
                            <div>
                                <h2 className="title-text">{DigitalGrowthData.subtitle}</h2>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <Row>
                <Col lg="8" className="offset-lg-2">
                    <p className="font-secondary font-large text-center mb-4">
                        {DigitalGrowthData.intro}
                    </p>
                </Col>
            </Row>
            <Row className="mb-4">
                {DigitalGrowthData.capabilities.map((cap, i) => (
                    <Col lg="4" sm="6" key={i} className="mb-3">
                        <div className="growth-capability">
                            <h5 className="font-primary">{cap.name}</h5>
                            <p className="font-secondary">{cap.desc}</p>
                        </div>
                    </Col>
                ))}
            </Row>
            <Row>
                {DigitalGrowthData.metrics.map((metric, i) => (
                    <Col md="4" key={i} className="mb-3">
                        <div className="growth-metric text-center">
                            <h3 className="color-light">{metric.value}</h3>
                            <p className="font-secondary">{metric.label}</p>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    </section>
);

export default DigitalGrowth;
