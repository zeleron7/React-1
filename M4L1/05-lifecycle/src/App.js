import logo from './logo.svg';
import './App.css';
import { LifeCycle01 } from './components/01-lifecycle';
import { ClassInheritance03 } from './components/03-class-inheritance';

function App() {
  return (
  //Override a Lifecycle event
  /*
  <>
  <LifeCycle01/>
  </>
  */

  //Using inheritance to make a parent class that logs lifecycles
  <>
  <ClassInheritance03/>
  </>

  );
}

export default App;
