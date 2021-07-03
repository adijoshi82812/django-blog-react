import React from 'react';

import img from '../media/loading.gif';

export default function Loading() {
    return (
        <div className="w3-display-container w3-white" style={{ width: "100vw", height: "100vh" }}>

            <div className="w3-display-middle w3-center">

                <img src={img} alt="Loading" />

                <p>Loading...</p>

            </div>

        </div>
    );
};