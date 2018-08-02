import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

// class Lesson extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.lessons.title}</h1>
//                 <p>{this.props.lessons.description}</p>
//             </div>
//         )
//     }
// }

// class LessonsList extends Component {
//     render() {
//         const users = [
//             { title: 'Lesson 1: title', description: 'Lesson 1: description' },
//             { title: 'Lesson 1: title', description: 'Lesson 1: description' },
//             { title: 'Lesson 1: title', description: 'Lesson 1: description' },
//             { title: 'Lesson 1: title', description: 'Lesson 1: description' }
//         ]

//         return (
//             <div>
//                 {users.map((user, index) => {
//                     <Lesson lessons={lessons} />
//                 })}
//             </div>
//         )
//     }
// }

class Test extends Component {
    render() {
        return (
            <div>
                <h1>123</h1>
            </div>
        )
    }
}

ReactDOM.render(
    <Test />,
    document.getElementById('root')
)

// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
