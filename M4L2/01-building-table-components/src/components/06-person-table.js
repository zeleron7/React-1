import React, {useState} from 'react'

export function PersonTable06(props) {

  const [sortedColumn, setSortedColumn] = useState();
  const [descending, setDescending] = useState(false);
  const [data, setData] = useState(props.initialData);


  const onClickHeader = (e) => 
  {
    let desc = descending;
    const cidx = Number(e.target.dataset.cellIndex);
    const sortedData = JSON.parse(JSON.stringify(data));

    if (cidx === sortedColumn)
    {
      desc = !desc;
      console.log(cidx, desc);
    }
    else
      console.log(cidx);

    const pKeys = Object.keys(sortedData[0]);
    const pValues = Object.values(sortedData[0]);
    console.log("sorted by prop", pKeys[cidx+1]);
    console.log("sortedData[0] value", pValues[cidx+1]);

    sortedData.sort((aObject, bObject)=> {

      //field in the table to sort accoring to - correspond to this value
      const aValue = Object.values(aObject)[cidx+1];
      const bValue = Object.values(bObject)[cidx+1];

      if (aValue === bValue) {
        return 0;
      }

      //tell sort how to objects compare relative descending
      if (desc)
        return aValue < bValue ?1 :-1;
      else
        return aValue > bValue ?1 :-1;
    });

    setDescending(desc);
    setSortedColumn(cidx);
    setData(sortedData);
  }


  return (
    <>
    <div>PersonTable06</div>
    <table>
        <thead onClick={onClickHeader}>
            <tr> 
                {props.headers.map((item, idx) => {

                  let title = item;
                  if (idx === sortedColumn)
                  {
                    title += (descending) ?"-" :"+";
                  }

                return (<th key={idx} data-cell-index={idx}>{title}</th>)}
                )}
             </tr>
        </thead>
        <tbody>
            {
              data.map((item, idx) =><tr key = {item.id}>
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
