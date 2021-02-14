var plMonthNames=[
    "Stycznia",
    "Lutego",
    "Marca",
    "Kwietnia",
    "Maja",
    "Czerwca",
    "Lipca",
    "Sierpnia",
    "Września",
    "Października",
    "Listpoada",
    "Grudnia"
];

var plDayNames = [
    "Niedziela","Poniedziałek","Wtorek","Środa","Czwartek","Piątek","Sobota"
];

function buildToday(){
    var d=new Date();
    var aday=d.getDay(), amonth=d.getMonth(), adate=d.getDate(), ayear=d.getFullYear();
    var ahour=d.getHours(), amin=d.getMinutes(), asec=d.getSeconds();

    if (ahour<=9) ahour="0"+ahour;
    if (amin<=9) amin="0"+amin;
    if(asec<=9) asec="0"+asec;

    var pldatetext=plDayNames[aday]+", "+adate+" "+plMonthNames[amonth]+", "+ayear;
    var timetext=ahour+":"+amin+":"+asec;
    
    document.getElementById('datebox').innerHTML=pldatetext;
    document.getElementById('timebox').innerHTML=timetext;
}

buildToday();
setInterval(buildToday,1000);