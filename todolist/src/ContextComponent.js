import React, { Component, Fragment } from 'react';

const ThemeContext = React.createContext('light')

class App extends Component {
    render() {
        return (
            <Fragment>
                <ThemeContext.Provider value={'test'}>
                    < Toolbar />
                </ThemeContext.Provider>
            </Fragment >
        )
    }
}

function Toolbar() {
    return (
        <Fragment>
            <ThemedButton />
        </Fragment>
    )
}

class ThemedButton extends Component {
    // static contextType = ThemeContext;

    render() {
        return (
            <ThemeContext.Cousumer>
                {
                    (value) => (
                        <Fragment>
                            <h1>
                                {value}
                            </h1>
                        </Fragment>
                    )
                }
            </ThemeContext.Cousumer>
        )
    }
}

// function Button(props) {
//     return (
//         <Fragment>
//             {
//                 props.theme
//             }
//         </Fragment>
//     )
// }

export default App;

