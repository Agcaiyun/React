import React, { Component, Fragment } from 'react';

function logProps(Component) {
    class LogProps extends Component {
        componentDidUpdate(prevProps) {
            console.log(`old porps: ${prevProps}`)
            console.log(`new props: ${this.props}`)
        }

        render() {
            return (
                <Fragment>
                    <div>
                        {'logProps'}
                    </div>
                    <Component {...this.props} />
                </Fragment>
            )
        }
    }

    return LogProps
}

class FancyButton extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }

        this.onClick = this.onClick.bind(this)
        this.refTest = this.refTest.bind(this)
    }


    render() {
        return (
            <div onClick={this.onClick}>
                1232323
            </div>
        )
    }

    refTest() {
        console.log('refTest')
    }

    onClick() {
        console.log('FancyButton div onClick')
    }
}


export default logProps(FancyButton)