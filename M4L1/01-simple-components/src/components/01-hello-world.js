import React from 'react'

//Making Hello World into a component
function HelloWorld() {
  return (
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
  )
}

export default HelloWorld