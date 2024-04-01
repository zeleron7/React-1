import React, { Component } from 'react'

export default class HelloWorld03 extends Component {
  render() {
    return (
        <>
        <h1>A class component</h1>
        <h1 id="my-heading">
        text before span tag:&nbsp;
        <span>
          hello&nbsp;<em>Wonderful&nbsp;</em>World
        </span>
        &nbsp;:text after span tag 
        </h1>
      </>
    )
  }
}

/*
Exercises:
1. In folder html-for-exercises->flexbox_5.html
    - implement <div class="FlexWrap">...</> as a React Class Component in JSX
    - in React instead of class= you have to use className=
2. Have App.js to render muliple instances of the class and function component you created

*/
