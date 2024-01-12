import {
    Container,
    Grid,
    Typography,
  } from "@mui/material";
  
export const ProductsPage = () => {
    return (
        <Container maxWidth="lg">
        <Grid container>
            <Grid item lg={12}>
            <Typography component="h1" variant="h2" align="center">
                Prodcuts Page
            </Typography>
            </Grid>
        </Grid>
        </Container>
    );
};
  