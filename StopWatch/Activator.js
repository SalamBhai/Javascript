const [countDownHour, countDownMinute, countDownSecond, fixedHour, fixedMinute, fixedSec] = [
document.querySelector('.hr'), document.querySelector('.min'), document.querySelector('.sec'),
 document.querySelector('.fhr'), document.querySelector('.fmin'), document.querySelector('.fsec')];
countDownHour.innerText = localStorage.getItem('hr');
countDownMinute.innerText = localStorage.getItem('minute');
countDownSecond.innerText = localStorage.getItem('secs');

fixedHour.innerText = localStorage.getItem('hr');
fixedMinute.innerText = localStorage.getItem('minute');
fixedSec.innerText = localStorage.getItem('secs');


function DoCountDown(element,storageKey)  
{
  for(var i = parseInt(localStorage.getItem(`${storageKey}`)); i === 0; i--)
  {
      element.innerText = i;
      console.log(element);
  }
}


function CountMinuteDown()
{
    setInterval(()=>{
       DoCountDown(countDownMinute,minute)  
    },360000)
}
function CountSecondsDown()
{
    setInterval(()=>{
        DoCountDown(countDownMinute,'secs')  
     },1000)
}
function CountHoursDown()
{
    setInterval(()=>{
        DoCountDown(countDownHour,hr)  
     },1000)
}
CountSecondsDown();