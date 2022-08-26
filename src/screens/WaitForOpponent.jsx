import { Loader } from '../utils'
import './index.css'

export function WaitForOpponent(){

  return(
    <div className='section'>
      <h4>Waiting for opponent...</h4>
      <Loader />
    </div>
  )
}