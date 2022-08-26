import './index.css'

export function AcceptWager({wager, accept, decline}){

  return(
    <div className='section'>
      <h4>Do you accept wager of {wager} ALG?</h4>
      <button className='button' onClick={() => accept()}>Accept</button>
      <button className='button' onClick={() => decline()}>Decline</button>
    </div>
  )
}