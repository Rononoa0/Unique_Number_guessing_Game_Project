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
