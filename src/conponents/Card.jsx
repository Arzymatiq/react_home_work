import React from "react";
import Avatar from "./Avatar";

function Card({ cardObj }) {
    console.log(cardObj);
    return (
        <div>
            <Avatar cardObj={cardObj} />
        </div>
    );
}

export default Card;
