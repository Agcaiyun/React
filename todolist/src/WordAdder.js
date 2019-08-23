import React, { Component, Fragment, PureComponent } from 'react';

class ListOfWords extends PureComponent {
    render() {
        return (
            <div>
                {
                    this.props.words.join()
                }
            </div>
        )
    }
}

class WordAdder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            words: ['a', 'b']
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({
            words: [...this.state.words, 'hello']
        })

        // const words = this.state.words;
        // // PureComponent 仅仅会对新老 this.props.words 的值进行简单的对比（浅比较）
        // // push 方法改变的还是原来的 words 数组，使得新老 this.props.words 比较的其实还是同一个数组。
        // // 即使实际上数组中的单词已经变了，但是比较结果是相同的。
        // words.push('marklar');
        // this.setState({ words: words });
    }

    render() {
        return (
            <Fragment>
                <button type='button' onClick={this.handleClick}>Add Words </button>
                <ListOfWords words={this.state.words} />
            </Fragment>
        )
    }
}

export default WordAdder;