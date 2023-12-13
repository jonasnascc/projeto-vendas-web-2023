import styled from 'styled-components';
import Botao from './Componentes/Botao/Botao';
import CampoTexto from './Componentes/CampoTexto/CampoTexto';
import { useState , useContext} from 'react';
import CampoSenha from './Componentes/CampoSenha/CampoSenha';

import { AuthContext } from '../../contexts/auth'; 
import axios from 'axios'

function LoginPage (props) {

    


    const [login, setLogin] = useState('')
    const [senha, setSenha] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault();
        const usuario = {
            login,
            senha
           

        }
        console.log("submit", {login, senha});
        axios.post('http://localhost:8080/Api/login', usuario)
            .then(resposta => {
                console.log(resposta)
            })
            .catch(erro => {
                 console.log(erro);
            })

        
    }


    return (
        <Fundo>
            <CardContainer>
                <CardText>
                    <TextoBemVindo> BEM VINDO AO PORTAL DE GOVERNANÇA </TextoBemVindo>
                    <TextoDesktop> DESKTOP </TextoDesktop>
                    
                    <TextoDescritivo> Aqui você vai conhecer quem somos e o que fazemos! </TextoDescritivo>
                </CardText>
                <FormularioFormat onSubmit={handleSubmit}>
                    <Logo src='/imagens/logoo.png' alt='logo'/>
                    <CampoTexto
                        label="Email:"
                        valor = {login}
                        aoAltera = {valor => setLogin(valor)}
            
                    />
                    <CampoSenha
                        label="Senha:"
                        valor = {senha}
                        aoAltera = {valor => setSenha(valor)}

                    />

                    <Botao label ="Entrar"/>
                </FormularioFormat>


            </CardContainer>
        </Fundo>

    )
} 
export default LoginPage

const CardContainer = styled.div`
    width: 65rem;
    height: 42rem;
    display: flex;
    justify-content: center;
    padding: 4rem;
    position: relative;
    margin-left: 15%;
    @media (min-width: 1920px) {
        width: 70%;
        height: 48rem;
    }
   
`;

const CardText = styled.section`
    background-color: #E4DADA;
    color: #732929;
    font-family: 'Laila';
    font-size: 50%;
    text-align: center;
    border-radius: 10px 0px 0px 10px;
    display: inline-block;
    width: 35%;
    height: 100%;
    margin-top: 0rem;
`;

const TextoBemVindo = styled.p`
    font-family: 'Laila';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    text-align: center;
    margin-top: 5rem;
`;
const TextoDesktop = styled.p`
    font-family: 'Laila';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    text-align: center;
`;
const TextoDescritivo = styled.p`
    font-family: 'Laila';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    text-align: center;
    padding: 4rem;
`;
const FormularioFormat = styled.form`
    background: #ECECEC;
    border-radius: 0px 10px 10px 0px;
    width: 50%;
    height: 100%;
    display: inline-block;
`;

const Logo = styled.img`
    width: 100%;
    margin-top: 1rem;
`;
const Fundo = styled.div `
    background-color: #732929;
    height: 28rem;
    @media (min-width: 1920px) {
        height: 38rem;
    }
    
`;