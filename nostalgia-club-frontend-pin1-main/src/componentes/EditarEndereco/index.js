import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BotaoPadrao from '../BotaoPadrao';
import CampoPadrao from '../CampoPadrao';
import './EditarEndereco.css';

const EditarEndereco = () => {
    const { codigo } = useParams(); // Obtém o código do parâmetro da rota
    const navigate = useNavigate(); // Para redirecionamento após exclusão ou atualização
    const [formData, setFormData] = useState({
        cep: '',
        numero: '',
        rua: '',
        bairro: '',
        cidade: '',
        estado: '',
    });

    useEffect(() => {
        const fetchEndereco = async () => {
            try {
                const response = await fetch(`http://localhost:8080/endereco/${codigo}`);
                if (response.ok) {
                    const enderecoData = await response.json();
                    setFormData({
                        cep: enderecoData.cep || '',
                        numero: enderecoData.numero || '',
                        rua: enderecoData.rua || '',
                        bairro: enderecoData.bairro || '',
                        cidade: enderecoData.cidade || '',
                        estado: enderecoData.estado || '',
                    });
                } else {
                    console.error('Erro ao buscar o endereço.');
                    alert('Erro ao carregar endereço.');
                }
            } catch (error) {
                console.error('Erro ao buscar o endereço:', error);
            }
        };

        fetchEndereco();
    }, [codigo]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleUpdate = async () => {
        try {
            const response = await fetch(`http://localhost:8080/endereco/update/${codigo}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Endereço atualizado com sucesso!');
                navigate('/perfil'); // Redireciona para a página de perfil
            } else {
                console.error('Erro ao atualizar o endereço.');
                alert('Erro ao atualizar o endereço.');
            }
        } catch (error) {
            console.error('Erro ao atualizar o endereço:', error);
        }
    };

    const handleDelete = async () => {
        try {
            const response = await fetch(`http://localhost:8080/endereco/delete/${codigo}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                alert('Endereço excluído com sucesso!');
                navigate('/perfil'); // Redireciona para a página de perfil
            } else {
                console.error('Erro ao excluir o endereço.');
                alert('Erro ao excluir o endereço.');
            }
        } catch (error) {
            console.error('Erro ao excluir o endereço:', error);
        }
    };

    return (
        <section className="editar-endereco">
            <h2>Endereço</h2>
            <form className="editar-endereco__form">
                <div className="agrupador">
                    <CampoPadrao
                        tamanho="w-79"
                        type="text"
                        label="CEP"
                        name="cep"
                        value={formData.cep}
                        onChange={handleChange}
                    />
                    <CampoPadrao
                        tamanho="w-20"
                        type="text"
                        label="Número"
                        name="numero"
                        value={formData.numero}
                        onChange={handleChange}
                    />
                </div>
                <CampoPadrao
                    tamanho="w-100"
                    type="text"
                    label="Rua"
                    name="rua"
                    value={formData.rua}
                    onChange={handleChange}
                />
                <CampoPadrao
                    tamanho="w-100"
                    type="text"
                    label="Bairro"
                    name="bairro"
                    value={formData.bairro}
                    onChange={handleChange}
                />
                <div className="agrupador">
                    <CampoPadrao
                        tamanho="w-79"
                        type="text"
                        label="Cidade"
                        name="cidade"
                        value={formData.cidade}
                        onChange={handleChange}
                    />
                    <CampoPadrao
                        tamanho="w-20"
                        type="text"
                        label="Estado"
                        name="estado"
                        value={formData.estado}
                        onChange={handleChange}
                    />
                </div>
                <div className="editar-endereco__form__botoes">
                    <BotaoPadrao
                        titulo="Excluir"
                        tamanho="w-49"
                        onClick={(e) => {
                            e.preventDefault();
                            if (window.confirm('Tem certeza que deseja excluir este endereço?')) {
                                handleDelete();
                            }
                        }}
                    />
                    <BotaoPadrao
                        titulo="Confirmar"
                        tamanho="w-49"
                        onClick={(e) => {
                            e.preventDefault();
                            handleUpdate();
                        }}
                    />
                </div>
            </form>
        </section>
    );
};

export default EditarEndereco;
