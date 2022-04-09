import './App.css';

import Task1 from './components/Task1';
import Task2 from './components/Task2';
import Task3 from './components/Task3';
import Task4 from './components/Task4';
import Task5 from './components/Task5';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>The Base React</p>
            </header>
            <div className="task-container">
                <Task1 />
                <Task2 />
                <Task3 />
                <Task4 />
                <Task5 />
            </div>
        </div>
    );
}

export default App;
