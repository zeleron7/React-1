import React from 'react'

export function PersonTable06(props) {


  return (
    <>
    <div>PersonTable06</div>
    <table>
        <thead>
            <tr> 
                {props.headers.map((item, idx) => <th key={idx}>{item}</th>)}
             </tr>
        </thead>
    </table>
    </>
  )
}
