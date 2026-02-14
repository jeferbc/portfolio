import React from 'react';
import CountUp from 'react-countup';
import { CounterData } from '../../../../database/layouts/portfolio/database';
import { Container, Row, Col } from 'reactstrap';

const Counter = () => (
    <section className="resume counter bg-pink">
        <Container>
            <Row>
                {CounterData.map((item, i) => (
                    <Col xl="3" xs="6" className="counter-container" key={i}>
                        <div className="counters">
                            <div className="counter-text">
                                <h3 className="count-text counts">
                                    <CountUp
                                        end={item.count}
                                        duration={3}
                                        decimals={item.count % 1 !== 0 ? 1 : 0}
                                        suffix={item.suffix}
                                    />
                                </h3>
                                <h5 className="count-desc">{item.desc}</h5>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    </section>
);

export default Counter;
