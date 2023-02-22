const income = document.querySelector('.income');
const outcome = document.querySelector('.outcome');
const txt=document.querySelector('.tishi');
const txt1=document.querySelector('.check');

var sum= new Number;
if(!localStorage.getItem('summ')){
    sum=0;
}else 
sum=localStorage.getItem('summ');
txt.textContent='现在有'+sum+'元';
income.onclick=function(){
    var inin=new Number;
    inin= prompt('收入金额');
    if(inin>10000000){
        alert('Wake up! You DO DNT have so much money!');

    }else{
        if(inin<=0){
            alert('请输入正数！');
        }
        else{
            sum=(sum-(-inin));
            localStorage.setItem('summ', sum);
            txt.textContent='现在有'+sum+'元';
            txt1.textContent+='收入'+inin+'元--';
    }    
    }
    
}
outcome.onclick=function(){
    let outout = prompt('支出金额');
    if(outout>sum){
        alert('Wake up! You DO DNT have so much money!');

    }else{
        if(outout<=0){
            alert('请输入正数！');
        }
        else{
            sum=sum-outout;
            localStorage.setItem('summ', sum);
            txt.textContent='现在有'+sum+'元';
            txt1.textContent+='支出'+outout+'元--';
    }    
    }
}