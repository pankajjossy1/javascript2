//Sum and Multiple of 3 and 5 between 0 and 1000
var sum3=0, sum5=0;
for(i=0; i<=1000; i++){
    if((i % 3) == 0) sum3 = sum3 + i;
    if ((i % 5) == 0) sum5 = sum5 + i;
}

console.log(sum3);
console.log(sum5);