import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import '../style.scss';
import Nav from './navbar';
import Posts from './posts';
import Post from './post';
import NewPost from './newpost';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('APP');
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
