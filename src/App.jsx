
import './App.css'
import DaisyNav from './components/daisynav/DaisyNav'
import Navbar from './components/nav/Navbar'
import PricingOptions from './components/PricingOptions/PricingOptions'

const pricingPromise = fetch('../public/pricing.json').then(res=>res.json())

function App() {

  return (
    <>
    <Navbar></Navbar>
      <PricingOptions pricingPromise={pricingPromise}></PricingOptions>

    </>
  )
}

export default App
