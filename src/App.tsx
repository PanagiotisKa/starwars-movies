
import Navbar from './components/navbar/Navbar';
import Main from './components/main/Main';
import { Container, Grid } from '@mui/material';

function App() {
  return (
    <Container>

    <Grid container>
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
