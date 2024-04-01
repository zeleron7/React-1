import React, { Component } from 'react'
import { uniqueId, seedGenerator } from '../services/seido-helpers';

//https://react.dev/learn/javascript-in-jsx-with-curly-braces

export function QuoteListFunc04() {

    const _seeder = new seedGenerator();
    const _quotes = _seeder.allQuotes;

    //I can have variables containing JSX
    let title = <h1>QuoteListFunc04</h1>;

    return (
        <div>{title}
            {/*Comments are JS so within brackets */}
            <ul>
                {
                _quotes.map(q => <li>{q.quote} {q.author}</li>)
                }
            </ul>
        </div>
    )
}

export class QuoteListClass04 extends Component {
    render() {
        const _seeder = new seedGenerator();
        const _quotes = _seeder.allQuotes;

        let title = <h1>QuoteListClass04</h1>;

        return (
        <div>{title}
            <ul>
                {
                //statemens not possible, only expressions in JSX
                //for (const q of _quotes) {
                    
                _quotes.map(q => <li>{q.quote} {q.author}</li>)
                }
            </ul>
        </div>
      )
    }
}
