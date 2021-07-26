
import './App.css';
import Home from './components/Home';
import { Router } from '@reach/router'
import Hello from './components/Hello';
import Wordcolor from './components/Wordcolor';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Home path= "/home"/>
          <Hello path = "/:id"/>
          <Wordcolor path = "/:id/:color/:bgcolor" />
        </Router>
        

      </header>
    </div>
  );
}

export default App;
