import styled from 'styled-components';

import { Card, Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';

import { Outlet } from 'react-router';

export const AutenticacaoBase = () => {
    return (
        <Container>
            <LoginCard sx={{height:"500px", display:"flex", justifyContent:"center", alignItems:"center", margin:"40px"}}>
                <Grid container>
                    <Grid item xs={12} md={6} padding={"20px"} textAlign={"center"}>
                        <Typography variant="h1">J & J Imóveis</Typography>
                    </Grid>

                    <Grid item xs={12} md={6} padding={"20px"}>
                        <Card>
                            <Outlet/>
                        </Card>
                    </Grid>
                </Grid>
            </LoginCard>
                
        </Container>
    );
}

const Formulario = styled.form`
    margin:40px;
`

const LoginCard = styled(Card)`
    width:"100%";
    min-height: "80vh"
`