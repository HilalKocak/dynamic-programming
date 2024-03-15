const sumPossible = (amount, numbers, memo={}) => {

    if(amount === 0) return true 
    if(amount in memo) return memo[amount]
    if(amount < 0) return false

    for(let number of numbers){
        if(sumPossible(amount-number, numbers, memo)){
            memo[amount] = true
            return true
        }
    }

    memo[amount]=false
    return false
}


console.log(sumPossible(13, [5, 12, 4]))