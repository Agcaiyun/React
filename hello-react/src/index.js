import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import CommentApp from './CommentApp';
import registerServiceWorker from './registerServiceWorker';

class Post extends Component {
  consoleLogHeight() {
    console.log(this.p.clientHeight)
  }

  render() {
    return (
      <p ref={(p) => this.p = p} onClick={(e) => this.consoleLogHeight.bind(this)}>
        {this.props.content}
      </p>
    )
  }
}


ReactDOM.render(
  <Post content={'good lucky'} />,
  document.getElementById('root')
);

registerServiceWorker();
