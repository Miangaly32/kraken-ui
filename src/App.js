import React from 'react';
import Container from '@material-ui/core/Container';
import { Header, Footer } from './components';
//import './App.css';

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <Header />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
