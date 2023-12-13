import styled from 'styled-components';

function CampoTexto(props) {
    const aoDigitar = (evento) => {
        props.aoAltera(evento.target.value)

    }

    return (
        <div>
            <EmailLabel>{props.label}</EmailLabel>
            <EmailInput value={props.valor} onChange={aoDigitar} />
        </div>

    )

}
export default CampoTexto;

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