import React from "react";
import './bio.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// This is static top section of the page and gives it semantic value.
function Bio() {

    return (
        <section>
            <Container>
                <h2
                    id="bioTitle"
                >Acerca</h2>

                <Row
                    className="bioContainer justify-content-md-center g_negative-margin"
                >
                    <Col className="g_white-color" lg={8}>
                        <p className="g__body-lg">
                            Soy un apasionado desarrollador y diseñador web front-end de Lima, Perú.<br/>Mi propósito es crear cosas únicas para internet.
                        </p>
                        <p>
                            Actualmente estoy trabajando como freelancer mientras estudio Ingeniería de Software. He llegado a obtener una cantidad decente de experiencia y conocimientos valiosos de todos los diferentes tipos de campos a lo largo de mis proyectos/trabajo.
                        </p>
                        <p>
                            En estos días tengo la alegría de diseñar y desarrollar entorno a la web. 
                        </p>
                    </Col>
                </Row>

            </Container>

        </section>
    )
}


export default Bio;
