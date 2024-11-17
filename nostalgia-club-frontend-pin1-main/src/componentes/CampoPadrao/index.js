import React from 'react';
import './CampoPadrao.css';

const CampoPadrao = ({ type, label, name, value, onChange, tamanho }) => {
    return (
        <div className={"campo-padrao " + tamanho}>
            <label>{label}</label>
            <input type={type} name={name} value={value} onChange={onChange} required />
        </div>
    );
};

export default CampoPadrao;
