import React, { FC } from 'react';
//Components
import './faqMain.css';
import AccordionPanel from './AccordionPanel.tsx';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Image, Accordion } from 'react-bootstrap';
//Animation
import AOS from 'aos';
import 'aos/dist/aos.css';
//images
import ImgStar from '../assets/images/icon-star.svg';

interface textProp {
    head_1: string;
    acc_head_1: string;
    acc_par_1: string;
    acc_head_2: string;
    acc_par_2: string;
    acc_head_3: string;
    acc_par_3: string;
    acc_head_4: string;
    acc_par_4: string;
}

const FaqMain = () => {
    const textProp: textProp = {
        head_1: "FAQs",
        acc_head_1: "What is Frontend Mentor, and how will it help me?",
        acc_par_1: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
        acc_head_2: "Is Frontend Mentor free?",
        acc_par_2: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
        acc_head_3: "Can I use Frontend Mentor projects in my portfolio?",
        acc_par_3: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
        acc_head_4: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
        acc_par_4: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
    };

    AOS.init();

    return (
        <Container fluid className='cs-h cs-bg-image d-flex flex-column justify-content-center'>
            <Container data-aos="fade-down" className='rounded cs-w shadow bg-white p-4'>
                <Container fluid className='d-flex flex-row mb-3'>
                    <Image src={ImgStar} alt='star' className='me-2' />
                    <h1 className='display-3 cs-fw-7 cs-fc'>{textProp.head_1}</h1>
                </Container>
                <AccordionPanel
                    acc_head_1={textProp.acc_head_1}
                    acc_par_1={textProp.acc_par_1}
                    acc_head_2={textProp.acc_head_2}
                    acc_par_2={textProp.acc_par_2}
                    acc_head_3={textProp.acc_head_3}
                    acc_par_3={textProp.acc_par_3}
                    acc_head_4={textProp.acc_head_4}
                    acc_par_4={textProp.acc_par_4} />
            </Container>
        </Container>
    );
}

export default FaqMain;