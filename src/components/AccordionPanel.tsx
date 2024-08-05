import React, { FC } from 'react';
import './faqMain.css';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Accordion } from 'react-bootstrap';
//Animation
import AOS from 'aos';
import 'aos/dist/aos.css';

type AccordionPanelProps = {
    acc_head_1: string;
    acc_par_1: string;
    acc_head_2: string;
    acc_par_2: string;
    acc_head_3: string;
    acc_par_3: string;
    acc_head_4: string;
    acc_par_4: string;
}

const AccordionPanel: FC<AccordionPanelProps> = ({ acc_head_1, acc_par_1, acc_head_2, acc_par_2, acc_head_3, acc_par_3, acc_head_4, acc_par_4 }) => {
    const accordionData = [
        {header: acc_head_1, body: acc_par_1},
        {header: acc_head_2, body: acc_par_2},
        {header: acc_head_3, body: acc_par_3},
        {header: acc_head_4, body: acc_par_4},
    ];
    
    return (
        <Accordion defaultActiveKey='0' flush>
            {accordionData.map((item, index) => (
                <Accordion.Item eventKey={index.toString()} key={index}>
                    <Accordion.Header className='acc-header'>{item.header}</Accordion.Header>
                    <Accordion.Body className='cs-fc-2'>{item.body}</Accordion.Body>
                </Accordion.Item>
            ))}
        </Accordion>
    );
}

export default AccordionPanel;