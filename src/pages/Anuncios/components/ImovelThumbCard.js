import {Box, Card, CardActionArea, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import { ImovelCard } from "../../ProductPage/components/ImovelCard";
import { ImovelImage } from "../../../shared/components/ImovelImage";

export const ImovelThumbCard = ({product}) => {
    const [showInfo, setShowInfo] = useState(false);

    const handleHover = (state) => {
        setShowInfo(state);
    }

    return (
        <StyledCard>
            <CardActionArea sx={{width:"100%", height:"100%"}}  onMouseEnter={() => handleHover(true)} onMouseLeave={() => handleHover(false)}>
                <Box>
                    <ImovelImage/>
                </Box>

                <PriceBox>
                    <Typography variant={"subtitle1"} style={{fontWeight:"bold", fontSize:"1.5em"}}>{`R$ ${product.preco}`}</Typography>
                </PriceBox>

                {showInfo&&<Info>
                    <Typography variant={"subtitle1"} style={{fontWeight:"bold", color:"#f38630", fontSize:"1.5em"}}>{product.titulo}</Typography>
                    <Typography>{`por: R$ ${product.preco}`}</Typography>
                    <Typography>{`anunciado por: ${product.anunciante.nome}`}</Typography>
                </Info>}


            </CardActionArea>
        </StyledCard>
    )
}

const StyledCard = styled(Card)`
    border : 1px solid gray;
    height: 200px;
`
const PriceBox = styled(Box)`
    position: absolute;
    bottom: 0px;
    right: 0px;
    background-color: white;
    z-index: 1;
    width: 100%;
`

const Info = styled(Box)`
    position: absolute;
    bottom: 0px;
    background-color: white;
    z-index: 1;
    width: 100%;
    min-height: 60%;
  `

