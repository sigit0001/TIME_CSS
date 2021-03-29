function realtimeClock(){
    var rtClock = new Date();

    var tanggal = rtClock.getUTCDate()
    var hours   = rtClock.getHours();
    var minutes = rtClock.getMinutes();
    var seconds = rtClock.getSeconds();

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var month = rtClock.getMonth();

    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var day = rtClock.getDay();

    var year = rtClock.getFullYear();

    // menambah AM dan PM sistem
    var amPm = ( hours < 12 ) ? "AM" : "PM";

    // mengubabah jam ke format 12 jam 
    hours = (hours > 12) ? hours - 12 : hours;

    
    hours   = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);

    //menampilkan jam
    document.getElementById('clock').innerHTML =
    hours + "  :  " + minutes + "  :  " + seconds + "  " + amPm;

    document.getElementById('month-day').innerHTML =
    days[day] +" "+tanggal + " " + months[month] + " " + year;

    var t = setTimeout(realtimeClock,500);


} 