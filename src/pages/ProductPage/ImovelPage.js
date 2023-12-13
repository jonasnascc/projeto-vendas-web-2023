import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { ImovelCard } from "./components/ImovelCard";
import { ImovelImage } from "../../shared/components/ImovelImage";
import { ContactBlock } from "./components/ContactBlock";

export const ImovelPage = () => {
    return (
        <Container>
            <ImovelCard>
                    <Grid container>
                       <Grid item xs={6}>
                            <ImovelImage/>
                       </Grid>
                       <Grid item xs={6}>
                            <Box>
                                <Typography variant="h3">Imóvel Nome</Typography>
                                <Typography variant="subtitle1" fontSize={"1.5em"}>R$ 1280,95</Typography>
                                <Typography variant="subtitle1" style={{fontWeight:"bold"}} fontSize={"1.2em"}>Anunciado</Typography>
                                <Typography variant="subtitle1">Paulo Roberto Nunes</Typography>

                                <ContactBlock/>
                            </Box>
                       </Grid>
                       <Grid item xs={12}>
                            <Button fullWidth variant="contained" style={{backgroundColor:"#f38630", fontWeight:"bold"}}>Comprar</Button>
                       </Grid>
                    </Grid>

                    
            </ImovelCard>
        </Container>
    )
}