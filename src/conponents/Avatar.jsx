import React from "react";

function Avatar({ cardObj }) {
    return (
        <>
            <img src={cardObj.src} alt={cardObj.alt} />
        </>
    );
}

export default Avatar;
