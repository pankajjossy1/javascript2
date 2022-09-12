//factorial of all prmes between 1 and 100
function prime(lowIndex, highIndex){
    
    for ( num = lowIndex ; num < highIndex ; num++ ){
        fact = 1;
        if (num ==0 || num ==1) 
            continue;
        flag = 1;
        for(divisor =2 ; divisor <= num/2 ; divisor++ ){
            if((num % divisor) ==0 ){
                flag = 0;
                break;
            } 
        }
            if (flag == 1){
                for(i=1; i<=num; i++)
                    fact = fact * i;
           
            console.log(fact.toLocaleString());
            }
    }
}

prime(1,100); //call to prime function 