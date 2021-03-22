import logo from './logo.svg';
import './App.css';
import MemeList from "./MemeList"
import MemeForm from "./MemeForm"

function App() {
  return (
    <div className="App">
        <MemeForm />
        <MemeList />
    </div>
  );
}

export default App;
