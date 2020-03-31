
var amount = 100;


function findPrimes(howMany) {

    var sieve = Array(amount).fill(true);
    var max = Math.sqrt(amount);

    for (let i = 2; i < max; i++) {
   
        if (sieve[i]) {
        
            let j = Math.pow(i,2);
            for (let k = j; k < amount; k += i) {
    
                sieve[k] = false;
            }
        }
    }

    return sieve
        .map(function getPrime(flag,prime){
           
            if (flag) return prime;
            return flag;
        })
        .filter(function onlyPrimes(v){
  
            return !!v;
        })
        .slice(1);
}

findPrimes(amount);
