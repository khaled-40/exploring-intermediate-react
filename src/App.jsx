
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './components/daisynav/DaisyNav'
import Navbar from './components/nav/Navbar'
import PricingOptions from './components/PricingOptions/PricingOptions'
import ResultsChart from './components/ResultsChart/ResultsChart'

const pricingPromise = fetch('../public/pricing.json').then(res => res.json())

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Suspense fallback={<span className="loading loading-infinity loading-xl"></span>}>
        <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
      </Suspense>
      <ResultsChart></ResultsChart>

    </>
  )
}

export default App
