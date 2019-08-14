import React, { Component } from 'react';

const ThemeContext = React.createContext('light')

class App extends Component {
    render() {
        return (
            <ThemeContext.Provider value={'ThemeContext Provider Test'}>
                < Toolbar />
            </ThemeContext.Provider>
        )
    }
}

function Toolbar() {
    return (
        <ThemedButton />
    )
}

class ThemedButton extends Component {
    static contextType = ThemeContext

    render() {
        return (
            <Button theme={this.context} />
        )
    }
}

class Button extends Component {
    render() {
        return (
            <h1>
                {this.props.theme}
            </h1>
        )
    }
}

export default App;

