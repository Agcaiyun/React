import React, { Component } from 'react'
import { ThemeContext } from './theme-context'


export default class ThemedButton extends Component {
    static contextType = ThemeContext

    render() {
        const props = this.props
        const theme = this.context

        return (
            <button
                {...props}
                style={{ backgroundColor: theme.background }}
            />
        )
    }
}