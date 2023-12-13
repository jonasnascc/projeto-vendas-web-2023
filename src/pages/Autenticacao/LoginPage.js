import styled from 'styled-components';
import Botao from '../../Componentes/LoginPage/Componentes/Botao/Botao';
import CampoTexto from '../../Componentes/LoginPage/Componentes/CampoTexto/CampoTexto';
import { useState , useContext} from 'react';
import CampoSenha from '../../Componentes/LoginPage/Componentes/CampoSenha/CampoSenha';

import axios from 'axios'
import { Button, Card, Grid, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import { Link, Navigate } from 'react-router-dom';

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
            <Navigate to="/anuncios"/>
        })
        .catch(erro => {
                console.log(erro);
        })

    }


    return (
        <Formulario>
            <CampoTexto
                label="Email:"
                valor = {login}
                aoAlterar = {valor => setLogin(valor)}

            />
            <CampoSenha
                label="Senha:"
                valor = {senha}
                aoAlterar = {valor => setSenha(valor)}

            />

            <Box sx={{textAlign:"center"}}>
                <Button 
                    variant='contained' 
                    type='submit' 
                    onClick={handleSubmit}
                    fullWidth
                >
                    Entrar
                </Button>
            </Box>

            <Box sx={{textAlign:"center", marginTop:"10px"}}>
                <Button 
                    variant='outlined' 
                    type='submit' 
                    fullWidth
                    style={{color:'#f38630', borderColor:"#f38630"}}
                >
                    <Link to="/signup" style={{ textDecoration:"none", color:"inherit"}}> Cadastrar-se</Link>
                </Button>
            </Box>
        </Formulario>


    )
} 
export default LoginPage

const Formulario = styled.form`
    margin:40px;
`

const LoginCard = styled(Card)`
    width:"100%";
    min-height: "80vh"
`