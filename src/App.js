// import logo from './logo.svg';
import './App.css';
import Counter from './components/counter/Counter';

function App() {
  return (
    <div className="App">
      <Counter increment={1} />
      <Counter increment={5} />
      <Counter increment={10} />
    </div>
  );
}

export default App;
