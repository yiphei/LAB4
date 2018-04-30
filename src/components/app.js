import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import Immutable from 'immutable';
import '../style.scss';
import Nav from './navbar';
import Posts from './posts';
import Post from './post';
import NewPost from './newpost';


// const Welcome = (props) => {
//   return (<div>
//     <div>Welcome</div>
//     <Controls />
//     <Counter />
//           </div>);
// };

// const Test = (props) => {
//   return <div> ID: {props.match.params.id} </div>;
// };

// const FallBack = (props) => {
//   return <div>URL Not Found</div>;
// };
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: Immutable.Map(),
    };
  }

  // componentDidMount = () => {
  //
  // };
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Posts} />
            <Route path="/posts/new" component={NewPost} />
            <Route path="/posts/:postID" component={Post} />
            <Route render={() => (<div>post not found </div>)} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
