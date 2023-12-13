import { Autocomplete, Box, TextField } from "@mui/material";
import React, { useState } from "react";

export const SearchBox = ({onChange = (value) => {}}) => {
    const [value, setValue] = useState("");

    const handleChange = (event) => {
        setValue(event.target.value);
        onChange(event.target.value);
    }
    
    return (
        <TextField 
            label="Pesquise por um anúncio" 
            variant="outlined" 
            sx={{width:"100%", margin:"0px 10px 0px 10px", backgroundColor:"white"}}
            size="small"
            value={value}
            onChange={(event) => handleChange(event)}
        />
    )
}