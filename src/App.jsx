import './App.css'
import ExUm from './pages/ExUm';
import Footer from './compontes/Footer';
import MainPage from './pages/MainPage';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
  <MainPage/>
  <Footer/>
  </BrowserRouter>
  )
}

export default App;
