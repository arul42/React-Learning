import logo from './logo.svg';
import './App.css';

function App() {

    const callMe = (name) => {
      console.log("hello" + name);
    }
      
    callMe('arul');

  return (
    <div className="App">
     <h1> Testing phase 12</h1>
      <p>Hello Test </p>
    </div>
  );
}

export default App;
