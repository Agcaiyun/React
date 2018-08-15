import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import CommentApp from './CommentApp';
import registerServiceWorker from './registerServiceWorker';

class Editor extends Component {
  constructor() {
    super()
    this.state ={
      content: '<h1> React.js 小书</h1>'
    }
  }

  render () {
    return (
      <div className='editor-wrapper'>
        {this.state.content}
      </div>
    )
  }
}

ReactDOM.render(
  <Editor>
</Editor>,
  document.getElementById('root')
);

registerServiceWorker();
