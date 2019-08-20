import React, { Fragment, Component, createRef, forwardRef } from 'react';

const FancyButton = forwardRef((props, ref) => (
    <button ref={ref}> {props.children} </button>
))

const Fuck = () => {
    const ref = React.useRef()

    React.useEffect(() => {
        console.log(ref.current)
    }, [])

    return (
        <div ref={ref}>123</div>
    )
}

export default class Ref extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }

        this.onDivClick = this.onDivClick.bind(this)
    }

    ref = createRef()

    componentDidMount() {
        console.log(this.ref.current)
    }

    render() {
        return (
            // <Fuck />
            <Fragment>
                <FancyButton ref={this.ref}>{'Click me!'}</FancyButton>
                <div onClick={this.onDivClick}> {'div'}</div>
            </Fragment>
        )
    }

    onDivClick() {
        console.log('onDivClick')
        console.log(this.ref.current)
    }
}