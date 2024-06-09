import Navbar from './components/navbar/Navbar';
import Main from './components/main/Main';
import { Container, Grid } from '@mui/material';

function App() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3} justifyContent="center" sx={{ minHeight: '100vh' }}>
          <Grid item md={12}>
            <Navbar/>
          </Grid>
          <Grid item md={12}>
            <Main/>
          </Grid>
      </Grid>
    </Container>
  );
}

export default App;
