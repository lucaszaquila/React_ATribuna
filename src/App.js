import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Container from './components/layout/Container.js'

import Navbar from './components/layout/navbar/Navbar.js'
import Footer from './components/layout/Footer.js'
import Home from './components/pages/Home.js'

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="center">
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App