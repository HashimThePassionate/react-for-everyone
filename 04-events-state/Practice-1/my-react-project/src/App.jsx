import './App.css'; // CSS file ko import karein
import Add from './components/Add.jsx';
import Divide from './components/Divide.jsx';
import Multiply from './components/Multiply.jsx';
import Subtract from './components/Subtract.jsx';

function App() {
  return (
    <>
      <h1>React Calculator</h1>
      <Add />
      <Subtract />
      <Multiply />
      <Divide />
    </>
  );
}

export default App;