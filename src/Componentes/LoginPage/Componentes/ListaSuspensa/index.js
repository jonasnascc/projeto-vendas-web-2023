import styled from 'styled-components'
import './ListaSuspensa.css'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'

const ListaSuspensa = (props) => {

    const aoDigitar = (evento)=>{
        props.aoAlterar(evento.target.value)

    }
    
    return (
        <Box sx={{textAlign:"center"}}>
            <Typography>{props.label}</Typography>            
            <TipoSelect onChange={aoDigitar} required={props.obrigatorio} value={props.valor}>
                <option value=""></option>
                <option value="C">Cliente</option>
                <option value="V">Vendedor</option>
            </TipoSelect>
        </Box>
    )

}
export default ListaSuspensa

const TipoSelect = styled.select`
    color: #6F6F6F;
    background-color: #6f6f6f00;
    border : 2px solid black;
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