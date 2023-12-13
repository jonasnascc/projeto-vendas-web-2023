import React, { useEffect, useState } from "react";
import { AnunciosGrid } from "./Anuncios";
import { Container } from "@mui/system";
import { SearchBar } from "./components/SearchBar";

export const UserAnuncios = () => {
    const [imoveis, setImoveis] = useState([]);
    const [search, setSearch] = useState("jacket");

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


    return (
        <>
        <SearchBar onSearchChange={(value) => handleSearchChange(value)}/>
        <Container sx={{marginTop:"50px", marginBottom:"50px", padding:"10px"}}> 
            <AnunciosGrid imoveis={imoveis} search={search}/>
        </Container>
        </>
        
    )
}