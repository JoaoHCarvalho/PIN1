import React from 'react';
import './CamposLogin.css';
import CampoPadrao from '../CampoPadrao';
import BotaoPadrao from '../BotaoPadrao';

const CamposLogin = ({ campos = [], rodape = {}, formData = {}, onInputChange = () => {}, onSubmit = () => {} }) => {
    return (
        <form className="campos-login" onSubmit={onSubmit}>
            {campos.map((campo) => (
                <CampoPadrao
                    key={campo.name}
                    type={campo.type}
                    label={campo.label}
                    name={campo.name}
                    value={formData[campo.name] || ''}
                    onChange={onInputChange}
                />
            ))}
            <div className="rodape">
                <BotaoPadrao titulo="Confirmar" type="submit" />
                <span className="rodape__cadastre-se">
                    {rodape.texto} <a href={rodape.link}>{rodape.tituloLink}</a>
                </span>
            </div>
        </form>
    );
};

export default CamposLogin;
