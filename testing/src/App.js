import './App.css';
import Addtask from './Component/Addtask';
import Listtask from './Component/Listtask';


function App() {
 

  return (
    <div className="App">
        <h1> TO DO  LIST  </h1>
      <Addtask />
       <Listtask /> 
    </div>
  );
}

export default App;
