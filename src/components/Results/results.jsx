import React from 'react';
import './results.css';

function Results() {
    return(
        <div>
            <h1 className="results">Before / After </h1>
            <div className="before-after-b">
                <h3 className="botox">Botox Injection</h3>
                <img src="/images/before-after-botox.jpg" className="w3-image" alt="Before After Botox Injection"></img>
            </div>

            <div className="before-after-m">
                <h3 className="micro">Microdermabrasion</h3>
                <img src="/images/before-after-microdermabrasion.jpg" className="w3-image" alt="Before After Microdermabrasion"></img>
            </div>
        </div>
    );
}

export default Results;
