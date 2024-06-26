import React, {useState} from 'react';
import PropTypes from 'prop-types';


export default function TableAsFunc04(props)
{

  const [data, setData] = useState(props.initialData);
  const [sortedColumn, setSortedColumn] = useState();
  const [descending, setDescending] = useState(false);

  const sortByColumn = (e) => {

    const columnClicked = Number(e.target.dataset.cellIndex);
    const sortedData = clone(data);

    //toggle descending if already set before
    const desc =
      sortedColumn === columnClicked && !descending;
    
    //Sort the data according to the column clicked, either ascending or descending
    sortedData.sort((a, b) => {
      if (a.data[columnClicked] === b.data[columnClicked]) {
        return 0;
      }

      //tell sort how to objects compare relative descending
      if (desc)
        return a.data[columnClicked] < b.data[columnClicked] ?1 :-1;
      else
        return a.data[columnClicked] > b.data[columnClicked] ?1 :-1;
    });

    //updated the state
    setData(sortedData);
    setSortedColumn(columnClicked);
    setDescending(desc);
  }

  return (
    <table>
      <thead onClick={sortByColumn}>
        <tr>
          {props.headers.map((title, idx) => {
            if (sortedColumn === idx) {
              title += descending ? ' \u2191' : ' \u2193';
            }
            return <th key={idx} data-cell-index={idx}>{title}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (

          //assign the id to the row and the eventhandler from props
          <tr key={row.id} data-rowitemid={row.id}>
            {row.data.map((cell, idx) => (
              <td key={idx}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

//using React prop types to make the data more type secure
//https://reactjs.org/docs/typechecking-with-proptypes.html#gatsby-focus-wrapper
TableAsFunc04.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string),
  initialData: PropTypes.arrayOf(PropTypes.object),
};

//helper function to clone an object using deep copy. 
function clone(o) {
  return JSON.parse(JSON.stringify(o));
}


/* Exercise
In PersonTable06
1. Recognize header click
   -  Assign a unique cellindex (0,1,2 etc) to each cell in the header in an element property called data-cell-index
   -  Assign a click handler to the header
   -  Create a state sortedColumn and assign it to the cellindex value of the clicked header cell
   -  Make a console.log(sortedColumn)
*/