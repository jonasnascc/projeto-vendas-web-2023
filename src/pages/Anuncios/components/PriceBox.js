import { TextField } from "@mui/material";
import React from "react";

export const PriceBox = ({text = ""}) => {
    return(
        <TextField 
            label={text}
            variant="outlined" 
            sx={{width:"100%", margin:"0px 10px 0px 20px", backgroundColor:"white", maxWidth:"100px"}}
            size="small"
        />
    )
}