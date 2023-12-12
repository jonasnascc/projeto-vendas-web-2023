import React, { useEffect, useState } from "react";
import { Box, Container, Grid } from "@mui/material";
import { ImovelThumbCard } from "./components/ImovelThumbCard";


export const HomePage = () => {
    const [imoveis, setImoveis] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(response=>response.json())
        .then(data=>{
            setImoveis(data);
        });
    }, [])

    return(
        <Container sx={{marginTop:"50px", marginBottom:"50px"}}>
            <Grid container spacing={2} rowSpacing={2}>
                {
                    imoveis.map(imovel => {
                        let product = {id:imovel.id, titulo:imovel.title, preco:imovel.price, imagem:imovel.image, anunciante: {nome:"Joao", email:"joao@mail.com", cpf:"12341423455"}};
                        return(
                            <Grid key={product.id} item xs={12} sm={12} md={5} lg={4}>
                                <Box>
                                    <ImovelThumbCard product={product}/>
                                </Box>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Container>
    )
}