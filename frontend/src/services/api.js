import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:5000',
});

export const generatePassword = async (criteria) => {
    try {
        const response = await api.post('/generate-password', criteria);
        return response.data.password;
    } catch (error) {
        console.error('Erro ao gerar a senha: ', error);
        throw new Error('Não foi possível gerar a senha. Tente novamente.');
    }
};
