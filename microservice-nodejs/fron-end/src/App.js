import './App.css';
import Divide from './components/Divide';
import Inputs from './components/Inputs';
import Minus from './components/Minus';
import Multipy from './components/Multipy';
import Plus from './components/Plus';




function App() {
  return (
    <div className='container'>
      <Inputs />
      <br></br>
      <Plus />
      <br></br>
      <Minus />
      <br></br>
      <Divide />
      <br></br>
      <Multipy />
    </div>
  );
}

export default App;
