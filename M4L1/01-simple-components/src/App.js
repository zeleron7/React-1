import logo from './logo.svg';
import './App.css';
import HelloWorld02 from './components/02-hello-world';
import HelloWorld03 from './components/03-class-components';
import { QuoteListFunc04,  QuoteListClass04} from './components/04-quote-lists';
import { HelloFunc05,  HelloClass05a, HelloClass05b} from './components/05-conditional-jsx';

function App() {
  return (

    //from the React template
    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    */

    //Adding a component from App.js
    /*
    <HelloWorld02/>
    */

    //Class and function components from App.js
    /*
    <>
    <HelloWorld02/>
    <HelloWorld03/>
    </>
    */

    //Class and function components mixing javascript
    /*
    <>
    <QuoteListFunc04/>
    <QuoteListClass04/>
    </>
    */

    //Class and function components conditional rendering in JSX
    <>
    <HelloFunc05/>
    <HelloClass05a/>
    <HelloClass05b/>
    </>
    );
}

export default App;
