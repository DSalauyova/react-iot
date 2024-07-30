import React from 'react';
import './Button.module.css'; // Importer le fichier CSS

const Button = ({ label, href, className }) => {
    if (href) {
        // Rend un élément <a> avec les styles de bouton
        return (
            <a href={href} className={`button ${className}`}>
                {label}
            </a>
        );
    }
    return (
        <button className="button">
            {label}
        </button>
    );
};

export default Button;