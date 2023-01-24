import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigator from './components/navigator/Navigator.js';
import RGB from './components/RGB/RGB.js';

function App() {
  return (
    <div>
      <main className="App">
        <Router>
          <Route
            path="/rgb/:r/:g/:b"
            element={
              <>
                <Navigator />
                <RGB />
              </>
            }
          />
        </Router>
      </main>
    </div>
  );
}

export default App;
