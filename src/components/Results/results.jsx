import React from 'react';
import './results.css';

function Results(props) {
    return(
        <div>
            <div className="before-after">
                <h1>Before / After </h1>
            </div>
            <div className="before-after-botox">
                <h3>Before/After Botox Injection</h3>
                <img src="/images/before-after-botox.jpg" class="w3-image" alt="Before After Botox Injection"></img>
            </div>
            <div className="before-after-microdermabrasion">
            <h3>Before/After-Microdermabrasion</h3>
                <img src="/images/before-after-microdermabrasion.jpg" class="w3-image" alt="Before After Microdermabrasion"></img>
            </div>
        </div>
    )
}

export default Results;
