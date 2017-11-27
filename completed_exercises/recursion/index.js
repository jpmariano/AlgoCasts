let total = 0;

for (let i=0; i<3; i++ ){
    total += i;
}

console.log(total);

//https://www.youtube.com/watch?v=VtG0WAUvq2w
//Downside - recursion tree, memory hoghttps://www.youtube.com/watch?v=GM9sA5PtznY
//solves nested function
let add = function(n){
    if (n<=0){
        return 0;
    } else {
        return n + add(n-1);
    }
}

console.log(add(3));