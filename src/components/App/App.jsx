import { Route, HashRouter as Router } from 'react-router-dom';
import Character from '../Character/Character';
import MovieList from '../MovieList/MovieList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Solo Project Spike!</h1>
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        
        {/* Details page */}

        {/* Add Movie page */}
        <Route path="/character">
          <Character />
        </Route>
      </Router>
    </div>
  );
}

export default App;
