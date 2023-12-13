import { Alert, Button, Grid, MenuItem } from '@mui/material';
import { FastField, Form as FormikForm, Formik } from 'formik';
import styled from 'styled-components';
import Botao from '../../Componentes/LoginPage/Componentes/Botao/Botao';
import CampoTexto from '../../Componentes/LoginPage/Componentes/CampoTexto/CampoTexto';
import { useState , useContext} from 'react';
import CampoSenha from '../../Componentes/LoginPage/Componentes/CampoSenha/CampoSenha';

import { AuthContext } from '../../contexts/auth'; 
import ListaSuspensa from '../../Componentes/LoginPage/Componentes/ListaSuspensa';
import axios from 'axios'
import { Box } from '@mui/system';
function SingnupPage (props) {

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
        <Formulario onSubmit={handleSubmit}>
            
            <CampoTexto
                label="Nome:"
                valor = {nome}
                aoAlterar = {valor => setNome(valor)}
            />
            <CampoTexto
                label="Data de Aniversário:"
                valor = {data}
                aoAlterar = {valor => setData(valor)}

            />
            <CampoTexto
                label="Email:"
                valor = {email}
                aoAlterar = {valor => setEmail(valor)}

            />
            <CampoSenha
                label="Senha:"
                valor = {senha}
                aoAlterar = {valor => setSenha(valor)}

            />
            
            <ListaSuspensa
                label="Tipo"
                valor ={identifier}
                aoAlterar = {valor =>setIdentifier(valor)}
            />

            <Box sx={{textAlign:"center"}}>
                <Button 
                    variant='contained' 
                    type='submit' 
                    onClick={handleSubmit}
                    fullWidth
                >
                    Cadastrar
                </Button>
            </Box>
        </Formulario>
    )
} 
export default SingnupPage

const Formulario = styled.form`
`;