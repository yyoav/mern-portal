import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const baseUrl = 'https://mern-server-gamma.vercel.app/';
function App() {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState('');

  useEffect(() => {
    console.log('init');

    const getTitle = async () => {
      console.log('run fetch');

      const title =await (await fetch(`${baseUrl}/api/hello`)).text();
      console.log('title: ' + title);
      setTitle(title);
    };
    console.log('call getTitle');

    getTitle();
  }, []);

  console.log('render: ' + title);
  return (
    <div className="App">

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>{title}</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <h2>Yoav</h2>
    </div>
  )
}

export default App
