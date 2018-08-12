import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import CommentApp from './CommentApp';
import registerServiceWorker from './registerServiceWorker';

// getPostData 已经可以直接使用
// 小提示：本系统可以直接 async/await

// 在点击【刷新】按钮刷新页面时，会先显示‘数据加载中’，然后再显示具体的从
// getPostDate 函数中获取到的页面内容，所以需要先 setState({content: '数据加载中...'})
// 然后再将 getPostDate 返回的内容用 setState 渲染到页面中
class Post extends Component {
    constructor() {
         super()
         this.state = {
             content: '数据加载中...'
         }
     }
 
     componentWillMount () {
       this.setPostContent()
     }
     
     setPostContent () {
       getPostData().then((postContent) => {
         this.setState({
           content: postContent 
         })
       })
     }
     
     reload () {
       this.setState ({
         content: '数据加载中...'
       })
       this.setPostContent()
     }
     
   render () {
       return (
         <div>
             <div className='post-content'>
             {this.state.content }
             </div>
             <button onClick={this.reload.bind(this)}>
               刷新
             </button>
         </div>
       )
   }
 }
 

ReactDOM.render(
    <Post />,
    document.getElementById('root')
);

registerServiceWorker();
