import styled from 'styled-components';
import Botao from './Componentes/Botao/Botao';
import CampoTexto from './Componentes/CampoTexto/CampoTexto';
import { useState , useContext} from 'react';
import CampoSenha from './Componentes/CampoSenha/CampoSenha';

import axios from 'axios'
import { Button, Card, Grid, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';

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
        <Container>
            <LoginCard sx={{height:"500px", display:"flex", justifyContent:"center", alignItems:"center", margin:"40px"}}>
                <Grid container>
                    <Grid item xs={12} md={6} padding={"20px"} textAlign={"center"}>
                        <Typography variant="h1">J & J Imóveis</Typography>:
                    </Grid>

                    <Grid item xs={12} md={6} padding={"20px"}>
                        <Card>
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
                            </Formulario>
                        </Card>
                    </Grid>
                </Grid>
            </LoginCard>
                
        </Container>

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