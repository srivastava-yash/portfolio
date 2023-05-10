import './App.css';
import Work from './PortfolioContainer/Work/Work';
import Home from './PortfolioContainer/Home/Home'
import Header from './PortfolioContainer/Header/Header';
import Education from './PortfolioContainer/Education/Education';

function App() {
  return (
    <div className="App">
        {/* <Header /> */}
        <Home />
        <Education />
        <Work />
    </div>
  );
}

export default App;