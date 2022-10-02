const prayer_api="http://api.aladhan.com/v1/timingsByCity?city=Riyadh&country=Kingdom%20Saudi%20Arabia&method=8"

async function get()
{
    const response= await fetch(prayer_api);
    const data= await response.json();
    console.log(data);
   // var curr_date=Object.keys(data).map(date=> date.data.date)
    //console.log(curr_date)
    presentDate(data);
    extractTimes(data);
    
}
get()

function presentDate(data)
{
    //this function is designed to extract the day and date
    
    document.querySelector(".container .box1 #date").innerHTML=`
    <h4> ${data.data.date.gregorian.weekday.en}</h4>
    <h5>${data.data.date.readable}
    / ${data.data.date.hijri.date}</h5> 
    `;

}

function extractTimes(data)
{
    const times=data.data.timings
    for( let time in times)
    {
        //inside this loop,I have to add each pray time to the html file
        //console.log(`${time}  ${times[time]}`);
        document.querySelector(".container .times-box2").innerHTML+=`<div>${time}  ${times[time]}</div>`;
        if (time =='Isha')
        break;
    }
}