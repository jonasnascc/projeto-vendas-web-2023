import React from "react";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Box, Card, Paper, Stack, Typography } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';

export const ContactBlock = () =>{
    return (
        <Paper sx={{backgroundColor: "#E3E3E3"}} elevation={0}>
            <Box>
                <Stack direction="row" sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <WhatsAppIcon style={{color:"green"}}/>
                    <Typography sx={{marginLeft: "10px"}} >(83) 99435-2798</Typography>
                    <EmailIcon sx={{marginLeft: "10px"}} style={{color:"#9C0F0F"}}/>
                </Stack>
            </Box>
        </Paper>
    )
}

