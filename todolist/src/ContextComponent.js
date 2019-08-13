import React, { Component } from 'react';

const ThemeContext = React.createContext('light')

class App extends Component {
    render() {
        return (
            <ThemeContext.Provider value={'ThemeContext Provider'}>
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

    render() {
        return (
            <ThemeContext.Consumer>
                {
                    (value) => (
                        <h1>
                            {value}
                        </h1>
                    )
                }
            </ThemeContext.Consumer>
        )
    }
}

export default App;

