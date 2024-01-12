import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useState } from "react";

export const DashboardPage = () => {
  const [count, setCount] = useState(0);
  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item lg={12}>
          <Typography component="h1" variant="h2" align="center">
            Vite + React + + Typescript + MUI 5 BoilerPlate
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={5}>
        <Grid item lg={4}>
          <Card>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Your count is {count}
              </Typography>

              <Typography variant="body2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde,
                assumenda cupiditate tenetur obcaecati laudantium minus libero
                nemo iure cum. Culpa sunt, eligendi perspiciatis sapiente autem
                fugit iste a voluptatem maiores?
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                onClick={() => setCount((count) => count + 1)}
              >
                Increment
              </Button>
              <Button onClick={() => setCount((count) => count - 1)}>
                Decrement
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item lg={4}>
          <Card>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Your count is {count}
              </Typography>
              <Typography variant="body2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde,
                assumenda cupiditate tenetur obcaecati laudantium minus libero
                nemo iure cum. Culpa sunt, eligendi perspiciatis sapiente autem
                fugit iste a voluptatem maiores?
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                onClick={() => setCount((count) => count + 1)}
              >
                Increment
              </Button>
              <Button onClick={() => setCount((count) => count - 1)}>
                Decrement
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item lg={4}>
          <Card>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Your count is {count}
              </Typography>
              <Typography variant="body2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde,
                assumenda cupiditate tenetur obcaecati laudantium minus libero
                nemo iure cum. Culpa sunt, eligendi perspiciatis sapiente autem
                fugit iste a voluptatem maiores?
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                onClick={() => setCount((count) => count + 1)}
              >
                Increment
              </Button>
              <Button onClick={() => setCount((count) => count - 1)}>
                Decrement
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};
