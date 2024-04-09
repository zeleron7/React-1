import React, {useState} from 'react'

export function PersonTable06(props) {



  return (
    <>
    <div>PersonTable06</div>
    <table>
        <thead>
            <tr> 
                {props.headers.map((item, idx) => {

                  let title = item;
                  return (<th key={idx} data-cell-index={idx}>{title}</th>)}
                )}
             </tr>
        </thead>
        <tbody>
            {
              props.initialData.map((item, idx) =><tr key = {item.id}>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.address.city}</td>
                <td>{item.address.country}</td>
                <td>{item.birthDate}</td>
              </tr> )
            }
        </tbody>
    </table>
    </>
  )
}
