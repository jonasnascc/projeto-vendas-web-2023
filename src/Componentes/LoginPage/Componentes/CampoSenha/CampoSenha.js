import styled from 'styled-components';
import { useState } from "react";
import { Typography } from '@mui/material';
function CampoSenha(props) {
    const aoDigitar = (evento) => {
        props.aoAlterar(evento.target.value)
    }
    const [passwordShown, setPasswordShown] = useState(false);


    const togglePassword = () => {

        setPasswordShown(!passwordShown);
    };

    return (
        <Container>
            <Typography>{props.label}</Typography>
            <EmailInput type={passwordShown ? "text" : "password"} value={props.valor} onChange={aoDigitar} />
            {/* <BotaoPS onClick={togglePassword}>{passwordShown ? "Hide" : "Show"}</BotaoPS> */}
        </Container>

    )

}
export default CampoSenha;

const Container = styled.div`
    text-align:center;
`

const EmailInput = styled.input`
    color: #6F6F6F;
    background-color: #6f6f6f00;
    border-radius: 5px;
    width: 75%;
    height: 39.48px;
    font-family: 'Laila';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 31px;  
    box-sizing: border-box;
    margin-bottom: 1rem;
    
`;

const BotaoPS = styled.label`
    position: relative;
    right: 11%;
    font-weight: 600;
    
    
`;

const icone = styled.img`
    width: 40%;
   
`;