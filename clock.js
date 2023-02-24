function clockChaaluHoJaa()
{
    let date = new Date(); //predefined class Date... object date using new keyword...
    let hours = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();

    if(hours>=12 && hours<=24) // TO SET MEREDIAN... BEFORE CLOCK GETS INTO 12 HOURS FORMAT
     {
         document.getElementById("ampm").innerText = "PM";
     }
     else
     {
     document.getElementById("ampm").innerText = "AM";
    }

    let message = document.getElementById("greet"); //greet message before converting to 12 hours format

    if(hours>12 && hours<16)
    {
        message.innerText = "GOOD AFTERNOON!!";  
    }
    if(hours>=16 && hours<=20)
    {
        message.innerText = "GOOD EVENING !!";  
    }
    if(hours>=20 && hours<=24)
    {
        message.innerText = "GOODNIGHT!!";  
    }

    if(hours > 12) // to get the date in 12-HOURS format
    hours=hours-12;

    //to display hours, mins, secs

    let hrs=document.getElementById("hrs");
    hrs.innerText = hours;
    let minutes=document.getElementById("minutes");
    minutes.innerText = mins;
    let seconds=document.getElementById("seconds");
    seconds.innerText = secs;

    
    let btn = document.getElementById("setAlarmBtn");
    btn.addEventListener("click", TimeTable);
    btn.addEventListener("click", ChangeMessageTheme);

    btn.addEventListener("mouseover", ChangeText);
    btn.addEventListener("mouseout", ChangeTextBack);
    
    } //clockChaaluHoJaa ends here

setInterval(clockChaaluHoJaa, 1000) //1000 means 1000 milliseconds means 1 second




    function ChangeText(){
    document.getElementById("setAlarmBtn").innerText = "Party Time!";
    }
    function ChangeTextBack(){
    document.getElementById("setAlarmBtn").innerText = "Set Alarm";
    }
    


    function TimeTable(){
    let Time=document.getElementsByClassName("Time");

    // console.log(wake.value); was checking value if consoling or not
    Time[0].innerText = wake.options[wake.selectedIndex].text;
    Time[1].innerText = lunch.options[lunch.selectedIndex].text;
    Time[2].innerText = nap.options[nap.selectedIndex].text;
    Time[3].innerText = night.options[night.selectedIndex].text;
    }

    function ChangeMessageTheme(){
        let dates = new Date();
        hourss = dates.getHours();
    
        let textMessage = document.getElementById("message");
        let theme = document.getElementById("imageTheme");
    
    
        if(parseInt(wake.value)===hourss)
        {
        textMessage.innerText="GRAB SOME HEALTHY BREAKFAST!!!";
        theme.style.backgroundImage= "url('./goodmorning.svg')";
        }
        else if(parseInt(lunch.value)===hourss)
        {
        textMessage.innerText="LET'S HAVE SOME LUNCH !!";
        theme.style.backgroundImage= "url('./lunch.svg')";
        }
        else if(parseInt(nap.value)===hourss)
        {
        textMessage.innerText="STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
        theme.style.backgroundImage= "url('./lunch_image@2x.png')";
        }
        else if(parseInt(night.value)===hourss)
        {
        textMessage.innerText="GREAT DAY AHEAD, GO TO SLEEP!!!";
        theme.style.backgroundImage= "url('./sleep.svg')";
        }
    }

 

