import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

export const Navbar = () => {
    return (
        <NavbarContainer>
            <MenuButton style={{color:"white", fontWeight:"bold"}}>Início</MenuButton>
            <MenuButton style={{color:"white", fontWeight:"bold"}}>Quem somos</MenuButton>
            <MenuButton style={{color:"white", fontWeight:"bold"}}>Contato</MenuButton>
        </NavbarContainer>
    )
}



const NavbarContainer = styled(Box)`
    background-color : #f38630;
    min-height : 80px;
    width : 100%;
    z-index: 1;
    top: 0;
    left: 0;
    overflow-x: hidden;
    display : flex;
    align-items: center;
    justify-content: center;
`

const MenuButton = styled(Button)`
    font-weight : bold;
    padding: 6px 8px;
    text-decoration: none;
    font-size: 18px;
    display: inline;
`