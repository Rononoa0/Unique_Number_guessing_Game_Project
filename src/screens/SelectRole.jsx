import { useState } from 'react'
import './index.css'

export function SelectRole({deploy, attach, setWager}){
  const [ p1, setP1 ] = useState(false)
  return(
    <div className='section'>
      {
        p1 ?
        <>
          <h4>Set Wager (ALGO)</h4>
          <input
            type='number'
            onChange={(e) => setWager(parseInt(e.target.value))}
          />
          <button onClick={() => attach(true)} className='button'>Next</button>
        </>
        :
        <>
          <button className='button' onClick={() => deploy()}>Host Game</button>
          <hr />
          <button className='button' onClick={() => setP1(true)}>Attach as player one</button>
          <hr />
          <button className='button' onClick={() => attach(false)}>Attach as player two</button>
        </>
        
      }
    </div>
  )
}