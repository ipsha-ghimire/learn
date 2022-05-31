const updateTime= ()=>{
    let dateTime= new Date();
    let hours = dateTime.getHours();
    let minutes= dateTime.getMinutes();
    let seconds= dateTime.getSeconds();
    let am_pm= document.getElementById('AM_PM');
   //  let dates= dateTime.toLocaleDateString(); gives the date only
   let dates= dateTime.toDateString();



    if(hours>=12){
    am_pm.innerHTML='PM';
    }
    else{
        am_pm.innerHTML='AM';
    }
    if(hours>12)
    {
        hours-=12;
    }

    document.getElementById('hours').innerHTML=`${hours}`;
    document.getElementById('minutes').innerHTML=`${minutes}`;
    document.getElementById('seconds').innerHTML=`${seconds}`;
document.getElementById('date').innerHTML=`${dates}`;

}

setInterval( updateTime,1000);





   
