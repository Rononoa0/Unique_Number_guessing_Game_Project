<p align="center">
  <a href="" rel="noopener">
 <img src="https://docs.reach.sh/assets/logo.png" alt="Project logo"></a>
</p>
<h3 align="center">Unique-Number-Guessing-Game</h3>

<div align="center">


</div>

---

<p align="center"> Workshop : Unique-Number-Guessing-Game
    <br> 
</p>

## Unique-Number-Guessing-Game
This is a fun game were Players submit a number within a predetermined range. Players who submit a unique number get a percentage of the pot, Reach was used to write the smart contract of the game and javascript was used for the frontend, but we python for the testing of the smartcontract with the aid of the rpc server. 
This workshop assumes you have gone through the reach docs and have completed at least one of the tutorials, The workshop provides a detailed explanation of the implementation of the unique number guessing game.

We are going to write two files in this workshop the index.rsh and index.py, the first file we are going to be writing is the index.rsh, the smart contract code will be written here.
```js
'reach 0.1'

const player_common = {
    ...hasRandom,
    seeWinner: Fun([Bytes(3)], Null),
    informTimeout: Fun([], Null)
}

export const main = Reach.App(() => {
    const NumGenAi = Participant('NumGenAi', {
        ...player_common,
        deadline: UInt,
        getunique_numset: Tuple(UInt, UInt, UInt, UInt, UInt)
    })
    const Player1 = Participant('Player1', {
        ...player_common,
        wager: UInt,
        getnum: Fun([], UInt)
    })
    const Player2 = Participant('Player2', {
        ...player_common,
        acceptwager: Fun([UInt], Null),
        getnum: Fun([], UInt)
    })

    init();
})
```
Our reach application makes use of 3 participants, The random number Ai generator and the two players.
* The first step in writing a reach program is to define the version at the top of the application.
* We then defined the similar functions the participants have in common and store them in a variable to be called later in the program.
* We create the reach application, define the participants and their individual functions.
* We use init() to initalize the reach application
```js
const informTimeout = () => {
        each([NumGenAi, Player1, Player2], () => {
            interact.informTimeout();
        })
    }

    const informWinner = (i) => {
        if (i == 10) {
            each([NumGenAi, Player1, Player2], () => {
                interact.seeWinner("one");
            })
        } 
        else if (i == 11) {
            each([NumGenAi, Player1, Player2], () => {
                interact.seeWinner("two");
            })
        } else {
            each([NumGenAi, Player1, Player2], () => {
                interact.seeWinner("tie");
            })
        } 
    }

```
Here we create two functions 
* `informTimeout()` : the informtimeout function informs the players of the timeout of the contract.
* `informWinner()` :  The informWinner function checks for the winner of the game.

```js
    NumGenAi.only(() => {
        const _getnumset = interact.getunique_numset
        const [_commitgetnumset, _saltgetnumset] = makeCommitment(interact, _getnumset)
        const commitgns = declassify(_commitgetnumset)
        const deadline = declassify(interact.deadline)
    })
    NumGenAi.publish(commitgns, deadline);
    commit()
    unknowable(Player1, NumGenAi(_getnumset, _saltgetnumset))
    unknowable(Player2, NumGenAi(_getnumset, _saltgetnumset))
    Player1.only(() => {
        const wager = declassify(interact.wager)
    })
    Player1.publish(wager)
        .pay(wager)
    commit()

    Player2.only(() => {
        const acceptwager = declassify(interact.acceptwager(wager))
    });
    Player2.publish(acceptwager)
        .pay(wager)
```
In is code block we do something pretty interesting we access the number set that contains the computer generates but we dont declassify it just yet, rather we publish the commitment(the commitment in this case is a raw digest that can be change).
We use certain functions to make this possible
* `makeCommitment` : this is used to make the commitment for the value we are yet to declassify and publish to the contract
* `unknowable` : The unknowable makes sure none of the participants in the contract knows the value been hidden
After this Player1 proposes a wager and pays it, Player2 has to choice to accept or deny 
```js
var i = 0
    invariant(balance() == (2 * wager));
    while (i < 3) {
        commit();

        Player1.only(() => {
            const _getnum = interact.getnum();
            const [_commitgetnum, _saltgetnum] = makeCommitment(interact, _getnum)
            const commitgetnum = declassify(_commitgetnum)
        });

        Player1.publish(commitgetnum)
        commit();
        unknowable(Player2, Player1(_getnum, _saltgetnum))
        unknowable(NumGenAi, Player1(_getnum, _saltgetnum))

        Player2.only(() => {
            const player2num = declassify(interact.getnum());
        })
        Player2.publish(player2num)
        commit();

        Player1.only(() => {
            const saltplayer1 = declassify(_saltgetnum)
            const player1num = declassify(_getnum)
        })
        Player1.publish(saltplayer1, player1num);
        checkCommitment(commitgetnum, saltplayer1, player1num)
        commit()
        NumGenAi.only(() => {
            const saltnumAi = declassify(_saltgetnumset)
            const numset = declassify(_getnumset)
        })
        NumGenAi.publish(saltnumAi, numset)
        checkCommitment(commitgns, saltnumAi, numset)
        const [num1, num2, num3, num4, num5] = numset

        if (num1 == player1num && num1 != player2num || num2 == player1num && num2 != player2num || num3 == player1num && num3 != player2num || num4 == player1num && num4 != player2num || num5 == player1num && num5 != player2num) {
            i = 10
            continue;
        } else {
            if (num1 == player2num && num1 != player1num || num2 == player2num && num2 != player1num || num3 == player2num && num3 != player1num || num4 == player2num && num4 != player1num || num5 == player2num && num5 != player1num) {
                i = 11
                continue;
            } else {
                if (num1 == player2num && num1 == player1num || num2 == player2num && num2 == player1num || num3 == player2num && num3 == player1num || num4 == player2num && num4 == player1num || num5 == player2num && num5 == player1num) {
                    i = 12
                    continue
                }
            }
            i = i + 1
            continue

        }
    }
```
A while loop is used to for the 3 rounds of the game, inside this while loop we use some of the special inbuilt reach functions the makeCommitment() and unknowable()
* We use this function to hide player1's guess to avoid player2 imitating every player1's guess
We use one more special function
* `checkCommitment` : This is used to check the commitment made above to ensure it wasn't tampered with.
We use this function to check both player1 and  NumberAi's commitments after Player2 has published their guess.
The game runs for 3 rounds and the best 2 out of three wins.

```js
informWinner(i);

    if (i == 10) {
        transfer(2 * wager).to(Player1)
    } else {
        if (i == 11) {
            transfer(2 * wager).to(Player2)
        } else {
            if (i == 12) {
                transfer(wager).to(Player1)
                transfer(wager).to(Player2)
            } else {
                transfer(wager).to(Player1)
                transfer(wager).to(Player2)
            }
        }
    }
    commit();
```
* The informWinner() function we created above is used to inform the players of the winner after the 3 rounds 
* Based on the outcome of the game the funds are distributed

`index.py` for testing
```py
from threading import Thread
from reach_rpc import mk_rpc
import time
import random

def main():
    rpc, rpc_callbacks = mk_rpc()

    starting_balance = rpc("/stdlib/parseCurrency", 100)
    NumGenAi = "NumGenAi"
    player_1 = input("Enter your name player1: ")
    player_2 =input("Enter your name player2: ")
    acc_player1 = rpc("/stdlib/newTestAccount", starting_balance)
    acc_player2 = rpc("/stdlib/newTestAccount", starting_balance)
    acc_NumGenAi = rpc("/stdlib/newTestAccount", starting_balance)
    randomlist = random.sample(range(10,30), 5)

    print(randomlist)

    def fmt(x):
        return rpc("/stdlib/formatCurrency", x, 4)

    def get_balance(w):
        return fmt(rpc("/stdlib/balanceOf", w))

    before_player1 = get_balance(acc_player1)
    before_player2 = get_balance(acc_player2)
    before_NumGenAi = get_balance(acc_NumGenAi)
    print("%s starting balance is %s algo" %(NumGenAi,before_NumGenAi))
    print("%s starting balance is %s algo" %(player_1,before_player1))
    print("%s starting balance is %s algo"%(player_2,before_player2))
    contract_numai = rpc("/acc/contract", acc_NumGenAi)
    OUTCOME = [
        "%s wins" %(player_2),
        "Draw",
        "%s wins"%(player_1),
    ]
    def player(who):
        def informTimeout():
            print("%s observed a timeout" % who)

        def seeWinner(n):
            print(
                "%s saw outcome %s this round"
                % (who, OUTCOME[rpc("/stdlib/bigNumberToNumber", n)])
            )

        return {
            "stdlib.hasRandom" : True,
            "informTimeout" : informTimeout,
            "seeWinner" : seeWinner
        }

    def NumGenerate():
        rpc_callbacks(
            "/backend/NumGenAi",
            contract_numai,
            dict(
                getunique_numset = randomlist, deadline = 10, **player(NumGenAi)
            ),
        )
    Ai = Thread(target = NumGenerate)
    Ai.start()

    def play_p1() :
        def getnum():
            num = input("please your number guess player1: ")
            return num
        wager = input("enter wager: ")
        ctc_p1 = rpc("/acc/contract", acc_player1, rpc("/ctc/getInfo", contract_numai))
        rpc_callbacks(
            "/backend/Player1",
            ctc_p1,
            dict( wager=rpc("/stdlib/parseCurrency", wager),getnum = getnum, deadline = 10, **player(player_1) ),
        )
        rpc("/forget/ctc", ctc_p1)
    p1 = Thread(target = play_p1)
    p1.start()

    def play_p2():
        wag = input("do u accept wager: ")

        if wag == "yes" or wag == "y" or wag == "Y" or wag == "YES":

            def acceptwager(amt):
                print("%s accepts the wager of %s" % (player_2, fmt(amt)))
            def getnum():
                num = input("please your number guess player1: ")
                return num
            ctc_p1 = rpc("/acc/contract", acc_player1, rpc("/ctc/getInfo", contract_numai))
            ctc_p2 = rpc("/acc/contract", acc_player2, rpc("/ctc/getInfo", ctc_p1))
            rpc_callbacks(
                "/backend/Player2",
                ctc_p2,
                dict(acceptwager=acceptwager,getnum = getnum, **player(player_2)),
            )
            rpc("/forget/ctc", ctc_p2)
        elif wag == "n" or wag == "no" or wag == "NO" or wag == "N":
            print("wager not accepted")
            quit()

    p2 = Thread(target = play_p2)
    p2.start()

    Ai.join()
    p1.join()
    p2.join()

    after_p1 = get_balance(acc_player1)
    after_p2 = get_balance(acc_player2)
    after_Ai = get_balance(acc_NumGenAi)

    print("%s went from %s to %s" % (player_1,before_player1, after_p1))
    print("%s went from %s to %s" % (player_2,before_player2, after_p2))
    print("%s went from %s to %s" % (NumGenAi,before_NumGenAi, after_Ai))

    rpc("/forget/acc", acc_player1, acc_player2, acc_NumGenAi)
    rpc("/forget/ctc", contract_numai)

if __name__ == "__main__":
    main()
```
