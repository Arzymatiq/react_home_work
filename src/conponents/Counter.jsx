import { useState } from "react";

let Counter = () => {
    let [num, setnum] = useState(0);
    return (
        <>
            <h1>{num}</h1>
            <button
                onClick={() => {
                    return setnum(num++);
                }}>
                Plus
            </button>
            <button
                onClick={() => {
                    return setnum(num--);
                }}>
                Minus
            </button>
        </>
    );
};
export default Counter;
