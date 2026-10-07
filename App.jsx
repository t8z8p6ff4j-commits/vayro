import { useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Shop from './components/Shop'
import Collection from './components/Collection'
import About from './components/About'
import Journal from './components/Journal'
import Footer from './components/Footer'
export default function App() {
  const [cart, setCart] = useState(0)
  return (<>
    <div className="grain" aria-hidden="true" />
    <Nav cart={cart} />
    <main><Hero /><Shop add={() => setCart(c => c + 1)} /><Collection /><About /><Journal /></main>
    <Footer />
  </>)
}
