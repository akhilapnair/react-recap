import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FunctionalComponent from './components/functional-based-component'
import ProductList from './components/products'
import ClassBasedComponent from './components/class-based-component'
import Users from './components/users'
import ContextTextComponent from './components/context-concept/text'
import ContextButtonComponent from './components/context-concept/button'
const productData = ['Product1','Product2','Product3','Product4'];

function App() {
  
  const [count, setCount] = useState(0)
  return (
      <div>
      <h4>React concepts 2024</h4>
{/* <FunctionalComponent /> */}
{/* <ProductList listOfProducts={productData} name="Akhila" city="Trivandrum"/> */}
{/* <ClassBasedComponent/> */}
{/* <Users/> */}
<ContextTextComponent/>
<ContextButtonComponent/>
      </div>
     
  )
}

export default App
