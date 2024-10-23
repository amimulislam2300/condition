let marks = prompt("Enter your marks between:");
let fullmarks = 100;
marks = (marks/fullmarks)*100;

if(marks>=80){
    console.log("A+");
}else if(marks>=70){
    console.log("A");
}else if(marks>=60){
    console.log("B");
}else{
    console.log("fail");
}