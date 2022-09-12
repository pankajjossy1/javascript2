function Triangle(x , y , z){

        if (x == y && y == z )
            console.log("Equilteral");
        else
        if
           (x == y || y == z || z == x )
            console.log("Isosceles");
        else
            console.log("Scalene");
}
Triangle(1,2,1)