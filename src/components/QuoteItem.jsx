import React, { Component } from 'react';

class QuoteItem extends Component {

    constructor(props) {
        super(props)

        this.state = {
            quote: '',
            author: '',
            randomNum: this.getRandomNum()
        }

        this.getQuote = this.getQuote.bind(this)
        this.getRandomNum = this.getRandomNum.bind(this)
    }

    getQuote() {
        const randomNum = this.getRandomNum();
        this.setState({
            quote: this.props.quotes[randomNum],
            author: this.props.authors[randomNum]
        })
    }

    getRandomNum() {
        return (Math.floor(Math.random() * (120 - 1) + 1))
    }


    render() {
        return (
            <div className="container" id="quote-box">
                <div className="quote-box" id="text">
                    {this.state.quote || this.props.quotes[this.state.randomNum]}
                </div>

                <div className="author-box" id="author">
                    {this.state.author || this.props.authors[this.state.randomNum]}
                </div>

                <div className="btn"  >
                    <button id="new-quote" onClick={this.getQuote} >Get Quote</button>
                </div>

                <div className="tweet" >
                    <button><a id="tweet-quote" href="https://twitter.com/intent/tweet" target="_blank" rel="noopener noreferrer">Tweet</a></button>
                </div>
            </div>
        );
    }
}

export default QuoteItem;