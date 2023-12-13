import { Alert, Grid, MenuItem } from '@mui/material';
import { FastField, Form as FormikForm, Formik } from 'formik';
import styled from 'styled-components';
import Botao from './Componentes/Botao/Botao';
import CampoTexto from './Componentes/CampoTexto/CampoTexto';
import { useState , useContext} from 'react';
import CampoSenha from './Componentes/CampoSenha/CampoSenha';

import { AuthContext } from '../../contexts/auth'; 
import ListaSuspensa from './Componentes/ListaSuspensa';
import axios from 'axios'
function SingupPage (props) {

    const {authenticated, login} = useContext(AuthContext) ;


    const [nome, setNome] = useState('')
    const [data, setData] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [identifier, setIdentifier] = useState('')
    

    const handleSubmit = (e) =>{
        e.preventDefault();
        const usuario = {
            nome,
            email,
            data,
            senha,
            identifier

        }

        axios.post('http://localhost:8080/api/cliente', usuario)
            .then(() => {
                alert('Usuário foi cadastrado com sucesso!')
                setNome('')
                setData('')
                setEmail('')
                setSenha('')
                setIdentifier('')
                
            })
            .catch(() => {
                alert('OPS! Alguma coisa deu errado!')
            })
        console.log("submit", {nome,data, email,senha,identifier});

        
    }


    return (
        <Fundo>
            <CardContainer>
                <FormularioFormat onSubmit={handleSubmit}>
                    
                    <CampoTexto
                        label="Nome:"
                        valor = {nome}
                        aoAltera = {valor => setNome(valor)}
                    />
                    <CampoTexto
                        label="Data de Aniversário:"
                        valor = {data}
                        aoAltera = {valor => setData(valor)}

                    />
                    <CampoTexto
                        label="Email:"
                        valor = {email}
                        aoAltera = {valor => setEmail(valor)}

                    />
                    <CampoSenha
                        label="Senha:"
                        valor = {senha}
                        aoAltera = {valor => setSenha(valor)}

                    />
                
                    
                    <ListaSuspensa
                        label="Tipo"
                        valor ={identifier}
                        aoAltera = {valor =>setIdentifier(valor)}
                    />

                    <Botao label ="Entrar"/>
                </FormularioFormat>


            </CardContainer>
        </Fundo>

    )
} 
export default SingupPage

const Fundo = styled.div `
    background-color: #732929;
    height: 28rem;
    @media (min-width: 1920px) {
        height: 38rem;
    }
    
`;
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
const FormularioFormat = styled.form`
    background: #ECECEC;
    border-radius: 0px 10px 10px 0px;
    width: 50%;
    height: 100%;
    display: inline-block;
`;