import { useState } from 'react'
import './App.css'
import MyButton from './components/myButton'
import MyProfile from './components/MyProfile'

function App() {
  const [count, setCount] = useState(0)
  const [isTrue, setTrue] = useState(false)

  const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };

  const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ];

  function handleIncreaseClick() {
    setCount(count + 1)
  }

  function handleDecreaseClick() {
    setCount(count - 1)
  }

  return (
    <>
      <div>
        <MyProfile data={user} />
      </div>

      <>
        <MyButton />
      </>

      <div>
        <button onClick={() => setCount((count) => count + 1)}>count is: {count}</button></div>

      <button onClick={() => setTrue((isTrue) => !isTrue)}>isTrue is: {isTrue.toString()}</button>
      <div>
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      </div>
      <button onClick={handleIncreaseClick}>Increase +</button>
      <button onClick={handleDecreaseClick}>Decrease -</button>
      </>
  )
}

export default App
