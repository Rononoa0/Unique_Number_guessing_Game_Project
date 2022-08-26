import { useState } from 'react'
import './index.css'

export function GetNumber({play}){
  const [ number, setNumber] = useState(0)
  return(
    <div className='section'>
      <h4>Choose a number between 1 and 20</h4>
      <input 
        type='number'
        min={1}
        max={20}
        value={number}
        onChange={ e => setNumber(parseInt(e.target.value))}
      />
      <hr/>
      <button disabled={!number} onClick={() => play(number)} className='button'>Play</button> 
    </div>
  )
}