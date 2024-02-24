import { useState } from 'react';
import './App.css';
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from './consts.js';
import Header from './components/Header.js';
import AttributesSideBar from './components/AttributesSideBar.js';
import ClassList from './components/ClassList.js';

function App() {
  const [num, setNum] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise</h1>
      </header>
      <section className="App-section">
        <Header />
        <div>
          Value:
          {num}
          <button>+</button>
          <button>-</button>
        </div>
        <AttributesSideBar />
        
      </section>
    </div>
  );
}

export default App;
