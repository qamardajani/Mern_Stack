import { Router } from '@reach/router';
import './App.css';
import Main from './viwes/Main';
import AddAuthor from './viwes/AddAuthor';
import EditAuthor from './viwes/EditAuthor';


function App() {
  return (
    <div className="App">

      <Router>
            <Main path ="/"/>
            <AddAuthor path = "/new"/>
            <EditAuthor path = "/edit/:id"/>
      </Router>



    </div>
  );
}

export default App;
