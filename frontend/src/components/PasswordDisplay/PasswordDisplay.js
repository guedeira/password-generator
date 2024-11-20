import React from "react";
import './PasswordDisplay.css';

function PasswordDisplay({ password }) {
    return (
        <div className='password-display'>
            <h3>Senha gerada: </h3>
            <p>{password || 'Senha ainda não gerada'}</p>
        </div>
    );
}

export default PasswordDisplay;
