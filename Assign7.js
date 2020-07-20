console.log("Print the prime numbers greater than 2");



//let n=parseInt(window.prompt("Enter any value of n:"))
//for(let i=2;i<=n;i++)
//{
   //let output=
    //}
//}
function primeFactorsTo(max)
{
    var store  = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) 
    {
        if (!store [i]) 
          {
            primes.push(i);
            for (j = i << 1; j <= max; j += i) 
            {
                store[j] = true;
            }
        }
    }
    return primes;
}

console.log(primeFactorsTo(10));