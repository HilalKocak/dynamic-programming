/*
 function, countingChange, that takes in an amount and an array of coins. The function should return the number of different ways it is possible to make change for the given amount using the coins.

You may reuse a coin as many times as necessary.

For example,

countingChange(4, [1,2,3]) -> 4

There are four different ways to make an amount of 4:

1. 1 + 1 + 1 + 1
2. 1 + 1 + 2
3. 1 + 3
4. 2 + 2

*/

const countingChange = (amount, coins, i=0, memo={}) => {
    const key = amount + ',' + i
    if(key in memo) return memo[key]

    if(amount === 0) return 1
    const coin = coins[i]
    let total = 0

    for(let qty=0; qty*coin <= amount; qty++){
        remainder = amount - qty*coin
        total += countingChange(remainder, coins, i+1, memo)
    }

    memo[key] = total
    return memo[key]
}

console.log(countingChange(4, [1,2,3]))