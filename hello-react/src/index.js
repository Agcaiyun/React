import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import CommentApp from './CommentApp';
import registerServiceWorker from './registerServiceWorker';

// 普通写法
// const getDefaultStyledPost = (defaultStyle) => {
// return (
// class Post extends React.Component {
//   render() {
//     const style = { ...defaultStyle, ...this.props.style }
//     return (
//       <p style={style}>Just a test</p>
//     )
//   }
// }
// )
// }


// 函数式组件
const getDefaultStyledPost = (defaultStyle) => {
  return props => <p style={{ ...defaultStyle, ...props.style }}>
    test test test
  </p>
}

const A = getDefaultStyledPost({ color: 'red' })

ReactDOM.render(
  <div>
    < A style={{ color: 'blue', fontSize: '20px' }} />
    < A style={{ fontSize: '50px' }} />
  </div>,
  document.getElementById('root')
);

registerServiceWorker();
