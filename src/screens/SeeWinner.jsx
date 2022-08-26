import './index.css'

export function SeeWinner({ winner }){
  return(
    <div className='section'>
      <h3>
        {
          winner === 'one' && 'Player One '
        }
        {
          winner === 'two' && 'Player Two '
        }
        {
          winner === 'tie' && 'Nobody '
        }
         Wins!!
      </h3>
    </div>
  )
}