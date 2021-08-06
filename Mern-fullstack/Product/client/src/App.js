
import './App.css';
import Main from './views/Main';
import { Router } from '@reach/router';
import Detail from './views/Detail';
import Update from './views/Update';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
        <Main path="products/"/>
        <Detail path="product/:id" />
        <Update path="product/update/:id"/>
       </Router>
      </header>
    </div>
  );
}

export default App;
