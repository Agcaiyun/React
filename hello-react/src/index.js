import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';
// import CommentApp from './CommentApp';
import registerServiceWorker from './registerServiceWorker';

class Comment extends Component {
  static propTypes = {
    comment: PropTypes.object
  }

  render() {
    const { comment } = this.props

    return (
      <div>
        <span>
          {comment.username}
        </span>
        <p>
          {comment.content}
        </p>
      </div>
    )
  }
}


ReactDOM.render(
  <div>
    < Comment />
  </div>,
  document.getElementById('root')
);

registerServiceWorker();
