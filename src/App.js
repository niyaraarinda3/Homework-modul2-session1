import logo from './logo.svg';
import './App.css';
import KodeForm from './components/kodeForm';
import KodeSong from './components/kodeSong';
import data from "./data";

function App() {
  return <
    KodeSong data={data} 
    />;
}

export default App;