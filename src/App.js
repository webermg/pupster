import { Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About'
import Discover from './components/Discover'
import Search from './components/Search'
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>

        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/blog" component={Discover} />
          <Route path="/contact" component={Search} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
