import React from 'react';
import Prevention from './sections/prevention';
import Symptoms from './sections/symptoms';
import WhatIs from './sections/whatIs';
import Treatments from './sections/treatments';
import './PageHA.css';

const PageHA = () => {
    return (
        <div className="canvas-container">
            <h1>PageHA</h1>
            <WhatIs/>
            <Symptoms/>
            <Prevention/>
            <Treatments/>
        </div>
    );
};

export default PageHA;