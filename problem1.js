//  Fibonacci Sequence;


function Fibonacci(n){
    const series=[0,1];

    for(let i=2;i<n;i++){
       series[i]=series[i-1]+series[i-2];
    }
    return series;
}



console.log(Fibonacci(10));



// Big-O=o(n);