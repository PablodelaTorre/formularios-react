import React from 'react'
import FormularioNoControlado from './components/FormularioNoControlado'
import FormControlado from './components/FormControlado'

const App = () => {
  return (
    <>
      <FormularioNoControlado/>
      <div className='marginy'>
        <hr />
      </div>
      <FormControlado/>
    </>
    
  )
}

export default App


