import React, { Component, Fragment } from 'react';

export default class Test extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }


    render() {
        return (
            <Fragment>
                <Greeting isLoggedIn={false} />
            </Fragment>
        )
    }
}

function UserGreeting() {
    return <h1>Welcome back!</h1>
}

function GuestGreeting() {
    return <h1>Please sign up.</h1>
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn

    if (isLoggedIn) {
        return <UserGreeting />
    }

    return <GuestGreeting />
}
