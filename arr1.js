function sum(...num){
    // const sum = num.reduce((i,s) => (s+i)) .  // New Method
    sum=0;
    for( i=0 ; i<num.length ; i++){
        sum=sum+i;
    }
    return sum;
}
console.log(sum(1,2,3,4,5));