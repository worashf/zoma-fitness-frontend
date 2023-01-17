

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/nav/Navbar';
import Home from './page/home/Home';
import About from './About';
import Projects from './Projects'
import Contact from './Contact';
import VideoUpload from './component/landing/VideoUpload';
import Playlist from './component/landing/Playlist';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="main">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/project" component={Projects} />
          <Route exact path="/play-list" component={Playlist} />
          <Route exact path="/upload-video" component={VideoUpload} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
