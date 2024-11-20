import React, { useState } from 'react';
import './Form.css';
import Input from './Input';
import Checkbox from './Checkbox';
import SubmitButton from './SubmitButton';

function Form({ onSubmit }) {
    const [length, setLenght] = useState(8);
    const [useUppercase, setUseUppercase] = useState(false);
    const [UseNumbers, setUseNumbers] = useState(false);
    const [useSpecialChars, setUseSpecialChars] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ 
            length, 
            use_uppercase: useUppercase,
            use_numbers: UseNumbers, 
            use_special_chars: useSpecialChars
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input
                label='Comprimento da Senha: '
                value={length}
                onChange={(e) => setLenght(Number(e.target.value))}
                min={8}
                max={64}
            />
            <Checkbox 
                label='Incluir Letras Maiúsculas'
                checked={useUppercase}
                onChange={(e) => setUseUppercase(e.target.checked)}
            />
            <Checkbox 
                label='Incluir Números'
                checked={UseNumbers}
                onChange={(e) => setUseNumbers(e.target.checked)}
            />
            <Checkbox 
                label='Incluir Caracteres Especiais'
                checked={useSpecialChars}
                onChange={(e) => setUseSpecialChars(e.target.checked)}
            />
            <SubmitButton text='Gerar Senha' />
        </form>
    );
}

export default Form;
