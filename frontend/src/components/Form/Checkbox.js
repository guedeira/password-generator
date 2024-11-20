import React from 'react';
import './Checkbox.css';

function Checkbox({ label, checked, onChange }) {
    return (
        <div>
            <label>
                <input 
                    type='checkbox'
                    checked={checked}
                    onChange={onChange}
                />
                {label}
            </label>
        </div>
    );
}

export default Checkbox;
