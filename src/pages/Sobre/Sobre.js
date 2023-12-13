import { Card, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import styled from "styled-components";
import { EmailForm } from "./components/EmailForm";

export const Sobre = () => {
    return (
        <Container sx={{marginTop:"50px", marginBottom:"50px", padding:"10px"}}> 
            <SobreCard>
                <Grid container>
                    <Grid item md={4}></Grid>
                    <Grid item md={8}>
                        <Typography variant="h3">Quem somos</Typography>
                        <DescriptionBox>
                            <Typography>
                                Somos uma plataforma especializada em anúncios e vendas de imóveis. 
                                Onde o usuário pode pesquisar imóveis para comprar ou pôr os seus imóveis a venda.
                            </Typography>
                        </DescriptionBox>
                    </Grid>
                </Grid>
            </SobreCard>
            <SobreCard>
                <Typography variant="h3">Fale conosco</Typography>
                <Box>
                    <Typography>Nos mande um email</Typography>
                </Box>

                <EmailForm/>
            </SobreCard>

        </Container>
    )
}



const SobreCard = styled(Card)`
    padding:90px;
`

const DescriptionBox = styled(Box)`
    margin-left : 10px;
    padding: 10px;
`