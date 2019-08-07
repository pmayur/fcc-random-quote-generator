import React, { Component } from 'react';
import QuoteItem from './QuoteItem'

class Quotes extends Component {
    constructor(props) {
        super(props)

        this.state = {
            quotesArray: "",
            authorsArray: "",
            fetchedQuotes: true
        }
    }

    componentWillMount() {
        fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
            .then(function (response) {
                return response.json();
            })
            .then((data) => {
                // console.log(data["quotes"]);
                this.setState({
                    quotesArray: data["quotes"].map((item) => {
                        return item['quote']
                    }),

                    authorsArray: data["quotes"].map((item) => {
                        return item['author']
                    })

                });
            })

    }

    render() {

        return (
            <div>
                <QuoteItem quotes={this.state.quotesArray} authors={this.state.authorsArray} />
            </div>
        );
    }

}

export default Quotes;