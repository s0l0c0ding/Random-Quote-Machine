import { connect } from "react-redux";
import { getNewQuote } from "../redux/actions";
import React from 'react';

class Qutoe extends React.Component {

    render() {
        const tweet = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text='${this.props.quote}' '${this.props.author}'`
        const quotes = this.props.quotes;
        const id =  this.props.id 
        return (
        <div id='quote-box'>
        <h1 id='text'>{quotes[id].quote}</h1>
        <h1 id='author' >{quotes[id].author}</h1>
        <button id='new-quote' onClick={() => this.props.getNewQuote()} >getNewOne</button>
        <a id='tweet-quote' href= {tweet} target='_blank'  rel='noreferrer'>tweet it</a>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps =  {getNewQuote};

export default connect(mapStateToProps, mapDispatchToProps)(Qutoe)