import { Box } from "@mui/material";
import React from "react";
import styled from "styled-components";

export const ImovelImage = () => {
    return (
        <ImageContainer>
            <img alt="imóvel" src={"https://queroficarrico.com/blog/wp-content/uploads/2017/05/como_comprar_um_imovel.jpg"} width={"100%"} height={"100%"}/>
        </ImageContainer>
    )
}

const ImageContainer = styled(Box)`
    position: relative;
    padding : 10px;
`