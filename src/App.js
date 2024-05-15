import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='ali'>halo mmy name is ali</h1>
      </header>
    </div>
  );
}

//example 4
const CONFIG = {
  maxUsers: 100,
  serverAddress: "https://badmintonsportslover.blogspot.com/"
};
console.log("Max users: " + CONFIG.maxUsers);
console.log("Server address: " + CONFIG.serverAddress);


export default App;
