import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const LinkButton = ({to="", label="", variant="contained", ...other}) => {
    return (
        <Button variant={variant} {...other}>
            <Link to={to} style={{ textDecoration:"none", color:"inherit"}}> 
                {label}
            </Link>
        </Button>
    )
}