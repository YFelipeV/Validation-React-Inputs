import React, { useState, useEffect } from 'react';

function Validation({ type, value, placeholder, isSelect = true, datos = null, name, onchange }) {
    const [inputValue, setInputValue] = useState(value);
    const [error, setError] = useState('');

    useEffect(() => {
        validate();
    }, [inputValue]);

    const validate = () => {
        if (type === 'text' && inputValue.trim() === '') {
            setError('Este campo no puede estar vacío');
        } else if (type === 'select' && inputValue === '') {
            setError('Este campo no puede tener el valor ');
        } else if (type === 'email' && inputValue.trim() === '') {
            setError('Este campo no puede estar vacío');
        } else {
            setError('');
        }
    };

    const handleChange = (e) => {
        const newValue = e.target.value;
        onchange(name, newValue); // Envía el nombre del campo y el nuevo valor al componente principal
        setInputValue(newValue); // Actualiza el valor local en Validation
      };

    return (
        <>
            {isSelect ? (
                <>
                    <input
                        type={type}
                        value={inputValue}
                        name={name}
                        placeholder={placeholder}
                        onChange={handleChange}
                    />
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </>
            ) : (
                <>
                    <select
                        name={name}
                        id=""
                        value={inputValue}
                        onChange={handleChange}

                    >
                        <option value="">selecciona</option>
                        {datos?.map((item) => (
                            <option key={item.title} value={item.title}>
                                {item.title}
                            </option>
                        ))}
                    </select>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </>
            )}
        </>
    );
}

export default Validation;
