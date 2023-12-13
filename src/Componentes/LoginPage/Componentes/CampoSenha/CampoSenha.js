import styled from 'styled-components';
import { useState } from "react";
function CampoSenha(props) {
    const aoDigitar = (evento) => {
        props.aoAltera(evento.target.value)
    }
    const [passwordShown, setPasswordShown] = useState(false);


    const togglePassword = () => {

        setPasswordShown(!passwordShown);
    };

    return (
        <div>
            <EmailLabel>{props.label}</EmailLabel>
            <EmailInput type={passwordShown ? "text" : "password"} value={props.valor} onChange={aoDigitar} />
            <BotaoPS onClick={togglePassword}>{passwordShown ? "Hide" : "Show"}</BotaoPS>
        </div>

    )

}
export default CampoSenha;

const EmailLabel = styled.label`
    position: relative;
    color: #6F6F6F;
    font-family: 'Laila';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    margin-right: 50%;
    margin-left: 10%;
`;

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
    margin-left: 10%;
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