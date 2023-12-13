import { Box, Button } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";

const menuItems = [
    {
        label: "Início",
        path: "/"
    },
    {
        label: "Anúncios",
        path: "/anuncios"
    },
    {
        label: "Quem somos",
        path: "/sobre"
    }
]

export const Navbar = () => {
    return (
        <NavbarContainer>
            <Stack direction={"row"}>
                {
                    menuItems.map(item => {
                        return <MenuButton label={item.label} path={item.path}/>
                    })
                }

                <LoginBox>
                    <Button variant="contained"><Link to="/login" style={{ textDecoration: 'none', color : "inherit"}}>Login</Link></Button>
                </LoginBox>
            </Stack>
            
            
        </NavbarContainer>
    )
}

export const MenuButton = ({label = "", path = "/", ...other}) => {
    return (
        <MenuBtn 
            {...other} 
            style={{color:"white", fontWeight:"bold"}}
        >
            <Link to={path} style={{ textDecoration: 'none', color : "inherit"}}>
                {label}
            </Link>
        </MenuBtn>
    )
}

const LoginBox = styled(Box)`
    position:absolute;
    right:50px;
`

const LinkBtn = styled(Link)`
    text-decoration:none;
`


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

const MenuBtn = styled(Button)`
    font-weight : bold;
    padding: 6px 8px;
    text-decoration: none;
    font-size: 18px;
    display: inline;
`