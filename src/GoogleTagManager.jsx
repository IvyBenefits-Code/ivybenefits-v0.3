import React from "react";

const GoogleTagManager = () => {
    return (
        <noscript>
            <iframe
                src="https://www.googletagmanager.com/ns.html?id=GTM-PWR7WMB"
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
            ></iframe>
        </noscript>
    );
};

export default GoogleTagManager;
