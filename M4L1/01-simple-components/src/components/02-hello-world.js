import React from 'react'

//Making Hello World into a component
function HelloWorld02() {
  return (
    <>
    <h1>A function component</h1>
    <h1 id="my-heading">
      text before span tag:&nbsp;
      <span>
        hello&nbsp;<em>Wonderful&nbsp;</em>World
      </span>
      &nbsp;:text after span tag 
    </h1>
    </>
    
    /*
    React.createElement(
    'h1',
     {id: 'my-heading'}, 'text before span tag: ',
     React.createElement(
       'span',
       null,
       'Hello ',
       React.createElement('em', null, 'Wonderful'),
       ' World'
     ),
     ' :text after span tag',
   )
   */
  )
}

export default HelloWorld02

/*
Exercises:
1. In folder html-for-exercises->flexbox_5.html
    - implement <div class="FlexWrap">...</> as a React Function Component in JSX
    - in React instead of class= you have to use className=
2. Have App.js to render muliple instances of the component you created

*/