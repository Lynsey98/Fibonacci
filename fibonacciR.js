console.log(0);
console.log(1);

count = 2;

function fibonacci(int, int2){
    while (count <= 19){
        newNum = int + int2;
        console.log(newNum);
        int2 = int;
        int = newNum;
        count += 1;
        fibonacci(int, int2);
    }
}

fibonacci(1,0);