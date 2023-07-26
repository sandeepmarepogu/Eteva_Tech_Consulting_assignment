let List1=["Arjun","Adwait","Swapnil","Amit","Vishal","Adnan"]
let List2=["Adwait","Laxman","Amit","Adnan","Nitin","Gaurav"]

let syntax=false
let output_A=[]
let output_B=[]
let output_C=[]

for (let i of List1){
    if (List2.includes(i)){
        syntax=true;
    }
    else{
     output_A.push(i)
    }
}

for (let j of List2){
    if (List1.includes(j)){
        syntax=true
    }
    else{
        output_B.push(j)
    }
}

for (let k of List1){
    if (List2.includes(k)){
        output_C.push(k)
    }
}


console.log(output_A)
console.log(output_B)
console.log(output_C)