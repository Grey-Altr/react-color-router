import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigator from './components/navigator/Navigator.js';
import RGB from './components/RGB/RGB.js';

function App() {
  return (
    <div>
      <main className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Navigator} />
            <Route path="/rgb/:r/:g/:b" component={RGB} />
          </Switch>
        </Router>
      </main>
    </div>
  );
}

export default App;
