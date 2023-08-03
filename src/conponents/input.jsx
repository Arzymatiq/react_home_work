import { useState } from "react";

const Input = () => {
    const [text, settext] = useState("");
    return (
        <>
            <h1>{text}</h1>
            <input
                type="text"
                onChange={(e) => {
                    settext(e.target.value);
                }}
            />
        </>
    );
};

export default Input;
