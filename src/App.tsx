import './App.css';
import CounterState from './components/CounterState';
import { CustomButton } from './components/CustomButton';
import PersonState from './components/PersonState';
import Photos from './components/Photos';
import ShowState from './components/ShowState';
import TodoState from './components/TodoState';

function App() {

const handleButton1 = () => alert('click btn 1');
const handleButton2 = () => alert('click btn 2');
const handleButton3 = () => alert('click btn 3');


  return (
    <div className="App" style={{backgroundColor: 'gray'}}>
      <header>
        <h1>teste</h1>
      </header>
      <body>
        <div className="w-screen h-screen flex justify-center items-center">
          <CustomButton label="Clique Aqui" onCLick={handleButton1} />
          <CustomButton label="Clique Aqui 2" onCLick={handleButton2} />
          <CustomButton label="Clique Aqui 3" onCLick={handleButton3} />

        </div>

        <CounterState />
        <ShowState />
        <PersonState />

        <TodoState />

        <Photos />
      </body>
    </div>
  );
}

export default App;

/*<img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>*/