import Counter from "./Counter"
import Total from "./Total";
import './App.css';

function App() {

  
  return (
    <div className="App">
      <Counter input={1} />
      <Counter input={2} />
      <Counter input={3} />

      <Total/>      

    </div>
  );
}

export default App;