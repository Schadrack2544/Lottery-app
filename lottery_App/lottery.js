//defining global variables 

let numberArray=[];
let winningNumbers=[];
let checkArray=[];
let iterator=0;
let winnersCount=0;
//function to generate 20 numbers
const generate=()=>{
    numberArray=[];
    let number;
    for(let i=0;i<20;i++){
        number=Math.random()*1000;
        number=Math.floor(number);
        numberArray.push(number);
    }
    displayOnGenerate();
    return numberArray;
    }
//function to display generated numbers
const displayOnGenerate=()=>{
    let strObj="";
    numberArray.forEach((el)=>{
        strObj+="<button disabled id='genbtn'>"+el+"</button>";
    });
    lotChecker.disabled=false;
    genN.style.display='block';
    genN.innerHTML=strObj;
}

//function to display winners when check button is clicked
const displayOnCheck=()=>{
      let strObj="";
      winN.style.display='block';
      winningNumbers.forEach((el)=>{
        strObj+="<button disabled id='winbtn'>"+el+"</button>";
    });
     if(winningNumbers.length>0){
       winN.innerHTML="Winning numbers are :<br>"+strObj;
      }
   else{
      winN.innerHTML="No winning numbers yet!";
     }
}

//function to check the winning numbers
const winning=()=>{
let nonWinningNumbers=[];

//startAt:while(true){
numberArray.forEach((number,index)=>{
   
    number=number.toString();
    numberString=Array.from(number);
    let sum=0
    numberString.forEach((num)=>{
        num=parseInt(num);
        sum+=(num*num);
        
    });
    if(sum==1){
        winningNumbers.push(number);
        //if winner found update the winners number
        winnersCount+=1;
        
    }
    else{
        nonWinningNumbers.push(number);
        if(index==numberArray.length-1){
            numberArray=[];
            numberArray=nonWinningNumbers;
        }
    }
});
//verifying if we get 3 winners

//if(winnersCount!=2) continue startAt;
//break;
//}

console.log("Non Winning"+nonWinningNumbers);

displayOnCheck();

}
//function to write shorthand of getting element by Id
function _(id){
    return  document.getElementById(id);
 }

const lotGenerator=_('lot_generator');
const lotChecker=_('lot_checker');
const winN=_('winN');
const genN=_('genN');

lotGenerator.addEventListener('click',generate);
lotChecker.addEventListener('click',winning);

