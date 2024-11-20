import React from "react";
import './SubmitButton.css';

function SubmitButton({ text }) {
    return (
        <button type='submit'>
            {text}
        </button>
    );
}

export default SubmitButton;
