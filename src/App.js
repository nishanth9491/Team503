
import './App.css';
import Navbar from './components/Navbar/navbar';
import Today from './components/Today/today';
import Implement from './components/Calendar/implement';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Today/>
      <Implement/>
      
      
    </div>
  );
}

export default App;
