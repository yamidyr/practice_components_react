import { useState } from 'react';
import './App.css';
import { Child } from './components/Child';
import { MyFirstComponent } from './components/MyFirstComponent';
import { SecondComponent } from './components/SecondComponent';
import { ThirdComponent } from './components/ThirdComponent';
import { FourthComponent } from './components/FourthComponent';

function App() {

  const [name,nameState] = useState("Yamid Yela");

  return (
    <div className="App">
      <header className="App-header">
        <h1>Fundamentos de React</h1>
        <hr className='white-hr'/>
        <MyFirstComponent />
        <hr className='white-hr'/>
        <SecondComponent/>
        <hr className='white-hr'/>
        <ThirdComponent
        name = "Yamid"
        last_name = "Yela"
        age = {20}
        />
        <hr className='white-hr'/>
        <Child
        name = { name }
        nameState = { nameState }
        />
        <hr className='white-hr'/>
        <FourthComponent/>
      </header>
    </div>
  )
};

export default App
