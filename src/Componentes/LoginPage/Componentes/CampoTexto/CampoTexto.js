import { Typography } from '@mui/material';
import styled from 'styled-components';

function CampoTexto(props) {
    const aoDigitar = (evento) => {
        props.aoAlterar(evento.target.value)

    }

    return (
        <Container>
            <Typography>{props.label}</Typography>
            <EmailInput value={props.valor} onChange={aoDigitar} />
        </Container>

    )

}
export default CampoTexto;

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