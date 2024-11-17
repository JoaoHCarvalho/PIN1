import React, { useEffect, useState } from 'react';
import CampoPadrao from '../CampoPadrao';
import FormularioPadrao from '../FormularioPadrao';
import './FormularioDadosPessoais.css';
import BotaoPadrao from '../BotaoPadrao';

const FormularioDadosPessoais = () => {
    const [enderecos, setEnderecos] = useState([]);
    const [selectedEndereco, setSelectedEndereco] = useState(null);
    const [formData, setFormData] = useState({
        nome: '',
        cpf: '',
        telefone: '',
        cep: '',
        numero: '',
        rua: '',
        bairro: '',
        cidade: '',
        estado: '',
    });

    const [userId, setUsuarioId] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                // Buscar o status do usuário
                const responseStatus = await fetch('http://localhost:8080/usuario/status');
                if (!responseStatus.ok) {
                    throw new Error('Erro ao buscar status do usuário.');
                }
                const statusData = await responseStatus.json();
                const id = statusData.usuarioId;

                setUsuarioId(id);

                // Preencher dados do usuário
                setFormData((prevData) => ({
                    ...prevData,
                    nome: statusData.nome || '',
                    cpf: statusData.cpf || '',
                    telefone: statusData.telefone || '',
                }));

                // Buscar todos os endereços do usuário
                const responseEnderecos = await fetch(`http://localhost:8080/endereco/all/${id}`);
                if (responseEnderecos.ok) {
                    const enderecosData = await responseEnderecos.json();
                    setEnderecos(enderecosData);
                    if (enderecosData.length > 0) {
                        setSelectedEndereco(enderecosData[0]); // Selecionar o primeiro endereço por padrão
                        setFormData((prevData) => ({
                            ...prevData,
                            cep: enderecosData[0].cep || '',
                            numero: enderecosData[0].numero || '',
                            rua: enderecosData[0].rua || '',
                            bairro: enderecosData[0].bairro || '',
                            cidade: enderecosData[0].cidade || '',
                            estado: enderecosData[0].estado || '',
                        }));
                    }
                } else if (responseEnderecos.status === 404) {
                    console.log('Nenhum endereço encontrado, pronto para criar.');
                } else {
                    throw new Error('Erro ao buscar endereços do usuário.');
                }
            } catch (error) {
                console.error('Erro ao carregar dados do usuário:', error);
            }
        };

        fetchUserData();
    }, []);

    const handleEnderecoChange = (e) => {
        const enderecoSelecionado = enderecos.find((endereco) => endereco.codigo === parseInt(e.target.value, 10));
        setSelectedEndereco(enderecoSelecionado);
        setFormData((prevData) => ({
            ...prevData,
            cep: enderecoSelecionado.cep || '',
            numero: enderecoSelecionado.numero || '',
            rua: enderecoSelecionado.rua || '',
            bairro: enderecoSelecionado.bairro || '',
            cidade: enderecoSelecionado.cidade || '',
            estado: enderecoSelecionado.estado || '',
        }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSave = async () => {
        try {
            if (userId) {
                const responseCreate = await fetch('http://localhost:8080/endereco/create', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        userId,
                        ...formData,
                    }),
                });

                if (responseCreate.ok) {
                    alert('Endereço salvo com sucesso!');
                } else {
                    throw new Error('Erro ao salvar endereço.');
                }
            }
        } catch (error) {
            console.error('Erro ao salvar endereço:', error);
        }
    };

    return (
        <div className="formulario-dados-pessoais">
            <FormularioPadrao titulo="Informações Pessoais">
                <CampoPadrao
                    type="text"
                    label="Nome Completo"
                    tamanho="w-100"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                />
                <div className="agrupador">
                    <CampoPadrao
                        type="text"
                        label="CPF"
                        tamanho="w-49"
                        name="cpf"
                        value={formData.cpf}
                        onChange={handleChange}
                    />
                    <CampoPadrao
                        type="text"
                        label="Telefone"
                        tamanho="w-49"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                    />
                </div>
                <div className="agrupador">
                    <CampoPadrao
                        type="text"
                        label="CEP"
                        tamanho="w-79"
                        name="cep"
                        value={formData.cep}
                        onChange={handleChange}
                    />
                    <CampoPadrao
                        type="number"
                        label="Número"
                        tamanho="w-20"
                        name="numero"
                        value={formData.numero}
                        onChange={handleChange}
                    />
                </div>
                <CampoPadrao
                    type="text"
                    label="Rua"
                    tamanho="w-100"
                    name="rua"
                    value={formData.rua}
                    onChange={handleChange}
                />
                <CampoPadrao
                    type="text"
                    label="Bairro"
                    tamanho="w-100"
                    name="bairro"
                    value={formData.bairro}
                    onChange={handleChange}
                />
                <div className="agrupador">
                    <CampoPadrao
                        type="text"
                        label="Cidade"
                        tamanho="w-79"
                        name="cidade"
                        value={formData.cidade}
                        onChange={handleChange}
                    />
                    <CampoPadrao
                        type="text"
                        label="Estado"
                        tamanho="w-20"
                        name="estado"
                        value={formData.estado}
                        onChange={handleChange}
                    />
                </div>

                {/* Dropdown para selecionar o endereço */}
                <div className="agrupador">
                    <label className="w-100">
                        Escolher Endereço:
                        <select
                            className="campo-padrao"
                            value={selectedEndereco ? selectedEndereco.codigo : ''}
                            onChange={handleEnderecoChange}
                        >
                            {enderecos.map((endereco) => (
                                <option key={endereco.codigo} value={endereco.codigo}>
                                    {`${endereco.rua}, ${endereco.numero}, ${endereco.bairro}, ${endereco.cidade} - ${endereco.estado}`}
                                </option>
                            ))}
                        </select>
                    </label>
                </div>

                <BotaoPadrao titulo="Salvar" tamanho="w-49" onClick={handleSave} type="button" />
            </FormularioPadrao>
        </div>
    );
};

export default FormularioDadosPessoais;
