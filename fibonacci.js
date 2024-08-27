let int = 0
let int2 = 1

console.log(int2);
console.log(int);

for(i=0;i<18;i++){
    let newNum = int + int2;
console.log(newNum);
int2 = int;
int = newNum;
}

