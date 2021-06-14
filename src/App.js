import './App.css';
import TodoInputs from './components/TodoInputs';
import TodoList from './components/TodoList';
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <TodoInputs />
      <TodoList />
    </div>
  );
}

export default App;
