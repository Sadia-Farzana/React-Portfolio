import './App.css';
import Header from './Components/Header/Header'
import Menu from './Components/Menu/Menu';
import About from './Components/About/About'
import Experience from './Components/Experience/Experience'
import Contact from './Components/Contact/Contact'
import Portfolio from './Components/Portfolio/Portfolio'
import Services from './Components/Services/Services';

function App() {
  return (
    <div className="App">
      <Header/>
      <Menu/>
      <About/>
      <Experience/>
      <Services/>
      <Contact/>
    </div>
  );
}

export default App;
