import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { SearchBox } from "./SearchBox";
import { PriceBox } from "./PriceBox";

export const SearchBar = ({onSearchChange = (value) => {}}) => {

    return(
        <SearchBarContainer>
            <Container>
                <Grid container>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <SearchBox onChange={onSearchChange}/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Stack direction={"row"} sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                            <Typography >Preço: </Typography>
                            <PriceBox text="Min."/>
                            <Typography >-</Typography>
                            <PriceBox text="Max."/>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </SearchBarContainer>
    )
}

const SearchBarContainer = styled(Box)`
    background-color : #c1c2ba;
    min-height : 80px;
    width : 100%;
    z-index: 1;
    top: 0;
    left: 0;
    display : flex;
    align-items: center;
    justify-content: center;
`