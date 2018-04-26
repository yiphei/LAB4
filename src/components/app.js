import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import React from 'react';
import '../style.scss';
import Counter from '../containers/counter';
import Controls from '../containers/controls';


const About = (props) => {
  return <div> All there is to know about me </div>;
};
const Welcome = (props) => {
  return (<div>
    <div>Welcome</div>
    <Controls />
    <Counter />
          </div>);
};

const Test = (props) => {
  return <div> ID: {props.match.params.id} </div>;
};

const FallBack = (props) => {
  return <div>URL Not Found</div>;
};

const App = (props) => {
  return (
    <Router>
      <div>
        <Nav />
        <Route exact path="/" component={Welcome} />
        <Route path="/about" component={About} />
        <Route exact path="/test/:id" component={Test} />
        <Route component={FallBack} />
      </div>
    </Router>
  );
};

const Nav = (props) => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/test/id1">test id1</NavLink></li>
        <li><NavLink to="/test/id2">test id2</NavLink></li>
      </ul>
    </nav>
  );
};

export default App;
