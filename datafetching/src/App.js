import React from 'react'
import Joke from './components/Fetchsample'
import Product from './components/Axiossample'
import Sample from './components/Sample'

export const App = () => {
  return (
    <div>
      <Sample/>
      <Joke/>
      <Product/>
    </div>
  )
}

export default App;