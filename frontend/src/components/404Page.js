import React from 'react';

export default function Page() {
    return (
        <div className="w3-display-container" style={{ height: "100vh", width: "100vw" }}>

            <div className="w3-display-middle">

                <h1 className="bold">Oops, Something went wrong</h1>

                <h2>Try this helpful links</h2>

                <a href={"/"} className="w3-button w3-black w3-margin w3-padding-large w3-round">Home</a>

                <a href={"/blog"} className="w3-button w3-black w3-margin w3-padding-large w3-round">Blog</a>

            </div>

        </div>
    );
};