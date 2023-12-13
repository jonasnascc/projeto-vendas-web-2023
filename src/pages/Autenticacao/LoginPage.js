import styled from 'styled-components';
import CampoTexto from '../../Componentes/LoginPage/Componentes/CampoTexto/CampoTexto';
import { useContext, useState} from 'react';
import CampoSenha from '../../Componentes/LoginPage/Componentes/CampoSenha/CampoSenha';

import { Button, Card } from '@mui/material';
import { Box } from '@mui/system';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';
import axios from '../../api/axios';

const LOGIN_URL = "/login"

function LoginPage (props) {
    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("");
    const {setAuth} = useContext(AuthContext)

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
        const response = await axios.post(
                    LOGIN_URL,
                    JSON.stringify({login, senha}),
                    {
                        headers: {"Content-Type" : "application/json" },
                        withCredentials: true
                    }
            )
                
            console.log(JSON.stringify(response?.data));

            const accessToken = response?.data?.token;
            const identifier = response?.data?.identifier;

            setAuth({login, senha, identifier, accessToken})
        } catch(err) {
           /* handle errors */
            if(!err?.response){
                console.log("No server response")
            }
            else if(err?.response?.status === 400){
                console.log("Missing username or Password")
            }
            else if(err?.response?.status === 401){
                console.log("Unauthorized")
            }else{
                console.log("Login error")
            }
        }
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