import { Card } from "@mui/material";
import React from "react";
import styled from "styled-components";

export const ImovelCard = ({children}) => {
    return(
        <CardContainer>
            {children}
        </CardContainer>
    )
}

const CardContainer = styled(Card)`
    min-height: 200px;
    background-color: light-gray;
    margin-top : 40px;
`