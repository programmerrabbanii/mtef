document.getElementById('deposit-button').addEventListener('click', function(){
  const  depositinput=document.getElementById('deposit-input')
  const depositValu=depositinput.value;
  const depositSt = parseFloat(depositValu)

  
  
  const depositTotal=document.getElementById('deposit-total')
  const getDeposti=depositTotal.innerText;
  const depositString = parseFloat(getDeposti);
  const newAmount=depositSt+depositString;
  depositTotal.innerText=newAmount;
   

  const totalMoney=document.getElementById('totalBalance');
  const totalDollar=totalMoney.innerText;
  const getTotalDollar = parseFloat(totalDollar);
   const newmoney=depositSt+getTotalDollar;
    
   
   totalMoney.innerText=newmoney;

  depositinput.value=' '
 


})
document.getElementById('withdraw-btn').addEventListener('click', function(){
  const witdhdrawinput=document.getElementById('witdhdraw-input')
  const withdrawString=witdhdrawinput.value;
  const withdrawV=parseFloat(withdrawString);

  const widhdrawtotal=document.getElementById('widhdraw-total')
  const widhdrawTotalString=widhdrawtotal.innerText;
  const widhraValu=parseFloat(widhdrawTotalString);
  const newWithdraw=widhraValu+withdrawV;
  
  widhdrawtotal.innerText=newWithdraw;

  

  const totalalance=document.getElementById('totalBalance');
  const totalAstring=totalalance.innerText;
  const totalCler=parseFloat(totalAstring);

  const allAmount=  totalCler-withdrawV ;
   totalalance.innerText=allAmount;






  witdhdrawinput.value= ' '
})

