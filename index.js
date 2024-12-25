
// create the change variable for stop watch
 let minute=0;
 let second=0;
 let miliseconds=0;
 let interval;
 //create a function for each button

 //function to start
 $("#startBtn").click(()=>{
    interval =setInterval(updateTimer);
   $("#startBtn").attr('disabled', true);
 });
 //function to stop and display lap time
 $("#stopBtn").click(()=>{
    clearInterval(interval);
    addlist();
    resetTimerData();
 $("#startBtn").attr('disabled', false);
});
//functio for pause button
$("#pauseBtn").click(()=>{
 clearInterval(interval);
 $("#startBtn").attr('disabled', false);
});
//function for reset button
$("#resetBtn").click(()=>{
    clearInterval(interval);
    resetTimerData();
 $("#startBtn").attr('disabled', false);
});
//function to update time
function updateTimer()
{
    miliseconds++;
    if(miliseconds===100)
    {
        miliseconds=0;
        second++;
        if(second===60)
        {
            second=0;
            minute++;
        }
    }
    dispayTimer();
}
//function todisplay timer
function dispayTimer()
{
    $("#milisecond").text(padTime(miliseconds));
    $("#seconds").text(padTime(second));
    $("#minutes").text(padTime(minute));
}
//function to add pad in minute seconds and miliseconds
function padTime(time)
{
    return time.toString().padStart(2,'0');
}
// block  function to reset timer
function resetTimerData(){
    miliseconds=0;
    second=0;
    minute=0;
    dispayTimer();
}
//block code for display or stop button callback function
function addlist()
{
   const laptime=`${padTime(minute)}:${padTime(second)}:${padTime(miliseconds)}`;
   const lapitem=document.createElement("li");
   lapitem.innerHTML=`<span>Lap  ${$("#lap-list li").length+1} </span> ${laptime}`;
   $("#lap-list").append(lapitem);
}