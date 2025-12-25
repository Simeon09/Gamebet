import React from 'react';

const Button = ({ children, onClick, className }) => {
    return (
        <button
            className={`rounded-lg px-4 py-2 ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;