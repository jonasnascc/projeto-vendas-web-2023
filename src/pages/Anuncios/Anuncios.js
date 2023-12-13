import React, { useEffect, useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { ImovelThumbCard } from "./components/ImovelThumbCard";
import { SearchBar } from "./components/SearchBar";


export const Anuncios = () => {
    const [imoveis, setImoveis] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(response=>response.json())
        .then(data=>{
            setImoveis(data);
        });
    }, [])

    const handleSearchChange = (value) => {
        setSearch(value);
    }

    return(
        <>
        <SearchBar onSearchChange={(value) => handleSearchChange(value)}/>
        <Container sx={{marginTop:"50px", marginBottom:"50px", padding:"10px"}}>
  
            <Grid container spacing={2} rowSpacing={2}>
                {
                    imoveis.map(imovel => {
                        if(imovel.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
                            let product = {id:imovel.id, titulo:imovel.title, preco:imovel.price, imagem:imovel.image, anunciante: {nome:"Joao", email:"joao@mail.com", cpf:"12341423455"}};
                            return(
                                <Grid key={product.id} item xs={12} sm={12} md={5} lg={4}>
                                    <Box>
                                        <ImovelThumbCard product={product}/>
                                    </Box>
                                </Grid>
                            )
                        }
                        return null;
                    })
                }
            </Grid>
        </Container>
        </>
    )
}