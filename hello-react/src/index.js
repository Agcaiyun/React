import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import CommentApp from './CommentApp';
import registerServiceWorker from './registerServiceWorker';

class BlackBorderContainer extends Component {
  render () {
   return (
     <div>
       {this.props.children.map((el) => {
         return (<div>{el}</div>)
       })}
     </div>
   )
 }
}

ReactDOM.render(
  <BlackBorderContainer>
  <div className='name'>My Name：Lucy</div>
  <p className='age'>
    My Age：<span>12</span>
  </p>
</BlackBorderContainer>,
  document.getElementById('root')
);

registerServiceWorker();
