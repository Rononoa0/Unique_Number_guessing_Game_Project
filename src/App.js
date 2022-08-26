import './App.css';
import { loadStdlib } from '@reach-sh/stdlib';
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
import * as backend from './reach/build/index.main.mjs'
import { useState } from 'react';
import { views, Loader } from './utils/';
import { AcceptWager, ConnectAccount, GetNumber, PasteContractInfo, SeeWinner, SelectRole, TestView, WaitForAttacher, WaitForOpponent } from './screens';


const reach = loadStdlib('ALGO');
reach.setWalletFallback(reach.walletFallback( { providerEnv: 'TestNet', MyAlgoConnect } ));
const fmt = (x) => reach.formatCurrency(x, 4);

const random = []
for(let i = 0; i < 5; i++){
  random.push(Math.floor(Math.random() * 20) + 1)
}


function App() {
  const [ account, setAccount ] = useState({})
  const [ view, setView ] = useState(views.CONNECT_ACCOUNT)
  const [ contractInfo, setContractInfo ] = useState()
  const [ isPlayerOne, setIsPlayerOne ] = useState()
  const [ winner, setWinner ] = useState('one')
  const [ resolver, setResolver ] = useState({ resolve: ()=>{}})
  const [ wager, setWager ] = useState(1)

  const reachFunctions = {
    connect: async (secret, mnemonic = false) => {
      let result = ""
      try {
        const account = mnemonic ? await reach.newAccountFromMnemonic(secret) : await reach.getDefaultAccount();
        setAccount(account);
        setView(views.DEPLOY_OR_ATTACH);
        result = 'success';
      } catch (error) {
        result = 'failed';
      }
      return result;
    },

    setAsDeployer: (deployer = true) => {
      if(deployer){
        setView(views.SET_TOKEN_INFO);
      }
      else{
        setView(views.PASTE_CONTRACT_INFO);
      }
    },

    deploy: async () => {
      const contract = account.contract(backend);
      backend.NumGenAi(contract, NumGenAI);
      setView(views.DEPLOYING);
      const ctcInfo = JSON.stringify(await contract.getInfo(), null, 2)
      setContractInfo(ctcInfo);
      setView(views.WAIT_FOR_ATTACHER)
    },

    attach: (contractInfo ) => {
      setView(views.ATTACHING)
      const contract = account.contract(backend, JSON.parse(contractInfo));
      isPlayerOne ? 
        backend.Player1(contract, { ...Player1 , wager}) 
        : 
        backend.Player2(contract, Player2)
      if(isPlayerOne){
        setView(views.WAITING_FOR_OPPONENT)
      }
    },
  }

  //Participant Objects
  const Common = {
    random: () => reach.hasRandom.random(),

    seeWinner: (winner) => {
      setWinner(winner)
      setView(views.SEE_WINNER)
    },

    informTimeout: () => {
      setView(views.TIME_OUT)
    }
  }

  const NumGenAI = {
    ...Common,
    deadline: 10,
    getunique_numset: random
  }

  const PlayersCommon = {
    getnum: () => {
      setView(views.GET_NUMBER)
      return new Promise(resolve => {
        setResolver({ 
          resolve: (number) => {
            setView(views.WAITING_FOR_OPPONENT)
            resolve(number)
          }
        })
      })
    }
  }

  const Player1 = {
    ...Common,
    ...PlayersCommon
  }

  const Player2 = {
    ...Common,

    ...PlayersCommon,

    acceptwager: (wager) => {
      return new Promise((resolve) => {
        setWager(fmt(reach.parseCurrency(wager)))
        setView(views.ACCEPT_WAGER)
        setResolver({ 
          resolve: () => {
            setView(views.WAITING_FOR_OPPONENT)
            resolve()}
          })
      })
    }
  }
  
  return (
    <div className="App">
      <div className='top'>
        <h1>UNIQUE NUMBERS GAME</h1>
      </div>
      <header className="App-header">
        {
          view === views.CONNECT_ACCOUNT && 
          <ConnectAccount connect={reachFunctions.connect}/>
        }

        {
          view === views.DEPLOY_OR_ATTACH &&
          <SelectRole 
            deploy={reachFunctions.deploy} 
            attach={(player1 = true) => {
              player1 ? setIsPlayerOne(true) : setIsPlayerOne(false)
              setView(views.PASTE_CONTRACT_INFO)}
            }
            setWager={(w) => setWager(w)}
          />
            
        }

        {
          (view === views.DEPLOYING || view === views.ATTACHING) &&
          <Loader />
        }

        {
          view === views.PASTE_CONTRACT_INFO &&
          <PasteContractInfo attach={reachFunctions.attach}/>
        }

        {
          view === views.WAIT_FOR_ATTACHER &&
          <WaitForAttacher info={contractInfo}/>
        }

        {
          view === views.TEST_VIEW &&
          <TestView />
        }

        {
          view === views.ACCEPT_WAGER &&
          <AcceptWager wager={wager} accept={resolver.resolve} decline={() => setView(views.DEPLOY_OR_ATTACH)}/>
        }

        {
          view === views.SEE_WINNER &&
          <SeeWinner winner={winner} />
        }

        {
          view === views.GET_NUMBER &&
          <GetNumber play={resolver.resolve} />
        }

        {
          view === views.WAITING_FOR_OPPONENT &&
          <WaitForOpponent />
        }
      </header>
    </div>
  );
}

export default App;
