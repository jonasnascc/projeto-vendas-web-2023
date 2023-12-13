import styled from 'styled-components';

function Botao(props){
    return(
        <BotaoST>{props.label}</BotaoST>
    )
}
export default Botao;

const BotaoST = styled.button`
    width: 118px;
    height: 54px;
    background: #7E1515;
    border-radius: 5px;
    font-family: 'Laila';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 31px;
    text-align: center;
    color: #FFFFFF;
    border-color: #7E1515;
    margin-top: 5rem;
    margin-left: 35%;
`;