import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import './leftInfoPin.css';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';


function LeftInfoPin() {

    // Ref for icons
    const leftInfoPinContainerRef = useRef(null);


    // GSAP ANIMATIONS
    useEffect(() => {

        const tl = gsap.timeline();

        tl.from(leftInfoPinContainerRef.current, {
            duration: 1,
            autoAlpha: 0,
            x: -20,
            ease: 'back.out(2)',
            delay: 1.3
        })


    }, [])


    return (
        <div className="leftInfoPin" ref={leftInfoPinContainerRef}>
            <a
                href="https://www.linkedin.com/in/mpgsebastian/"
                target="_blank"
                rel="noopener noreferrer"
                className="leftInfoPin_link"
            >
                <FaLinkedinIn />
            </a>
            <a
                href="https://github.com/sebastianbash"
                target="_blank"
                rel="noopener noreferrer"
                className="leftInfoPin_link"
            >
                <FaGithub />
            </a>
            <a
                href="https://twitter.com/ohheybash"
                target="_blank"
                rel="noopener noreferrer"
                className="leftInfoPin_link"
            >
                <FaTwitter />
            </a>

        </div>
    )
}


export default LeftInfoPin;