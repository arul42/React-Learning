import logo from './logo.svg';
import './App.css';

function App() {

    const callMe = (name) => {
      console.log("hello" + name);
    }
      
    callMe('arul');

  return (
    <div className="App">
     <h1> Testing phase </h1>
    </div>
  );
}

export default App;
