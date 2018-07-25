import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';


class Index extends Component {
    render() {
        const users = [
            { username: 'Jerry', age: 21, gender: 'male' },
            { username: 'Tomy', age: 22, gender: 'male' },
            { username: 'Lily', age: 19, gender: 'female' },
            { username: 'Lucy', age: 20, gender: 'female' }
        ]
        const usersElements = []

        return (
            <div>
                {
                    users.map((user) => {
                        return (
                            <div>
                                <div>姓名：{user.username}</div>
                                <div>年龄：{user.age}</div>
                                <div>性别：{user.gender}</div>
                                <hr />
                            </div>
                        )
                    })
                }
            </div>
        )


    }
}

ReactDOM.render(
    <Index />,
    document.getElementById('root')
)

// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
