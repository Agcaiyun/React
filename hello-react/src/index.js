import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import CommentApp from './CommentApp';
import registerServiceWorker from './registerServiceWorker';

class Card extends Component {
  render() {
    return (
      <div>
        {this.props.children}
        <hr />
        {this.props.children[0]}
        <hr />
        {this.props.children[1]}
        <hr />
        {this.props.children[2]}
        <hr />
        {this.props.children[3]}
        <hr />
      </div>
    )
  }
}

ReactDOM.render(
  <Card>
    <h2>
      React.js 小书
    </h2>
    <div>
      开源xxxx <span>dengyixia </span>
    </div>
    订阅：<input />
  </Card>,
  document.getElementById('root')
);

registerServiceWorker();
