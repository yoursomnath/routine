let classObj = {
  teacher: ["Ritesh Sir","CD Sir","Sanjay Sir","Chouby Sir","Aruna Ma'am","Vishnuva Ma'am"],
  subject: ["FUNDAMENTAL OF MOBILE APPLICATION","WEB TECHNOLOGY USING .NET","SOFTWARE ENGINEERING","BIG DATA ANALYTICS-I","CYBER SECURITY-I","FUNDAMENT OF SOFTWARE TESTING","ARTIFICIAL INTELLIGENCE AND ROBOTICS","SOFTWARE TESTING AUTOMATION"],
  room: ["Lab5","Lab7","ClassRoom P2","Lab12","Lab13"],
  type: ["Practical","Theory"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  months :["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  time: [9*60+15,10*60+10,11*60+5,12*60+0,13*60+0,13*60+55,14*60+50,15*60+45] 
};

var currentDate = new Date();
let text = document.getElementById("text");
let time = document.getElementById("time");

var currentHr = currentDate.getHours();
var currentMn = currentDate.getMinutes();
var currentDay = currentDate.getDay();
var currentMonth =  currentDate.getMonth();
var currentYear =  currentDate.getFullYear();
var currentDate =  currentDate.getDate();
var timePeriods;
if(currentHr>=12){
  timePeriods = "pm";
}
else{
  timePeriods ="am";
}
document.addEventListener("DOMContentLoaded", ()=>{
  time.innerHTML = "Today  is "+ currentDate + "th "+ classObj.months[currentMonth] + " "+ currentYear+" "+classObj.days[currentDay]+" "+currentHr+":"+currentMn+" "+timePeriods;

})

var currentTime = currentHr*60+currentMn;
function monDay(){
  if(currentTime >= classObj.time[0] &&  currentTime <= classObj.time[1]){
      text.innerHTML = (classObj.teacher[2]+classObj.room[4]+"Par"+classObj.subject[1]+"ka"+classObj.type[0]+"Season Le raha hai")+"<hr>"+(classObj.teacher[1] + " " + classObj.room[3]+" Par "+classObj.subject[0]+" ka "+classObj.type[0]+" Season Le raha hai. ");
  }
  else if(currentTime >= classObj.time[1] &&  currentTime <= classObj.time[2]){
      text.innerHTML = (classObj.teacher[2]+classObj.room[4]+"Par"+classObj.subject[1]+"ka"+classObj.type[0]+"Season Le raha hai")+"<hr>"+(classObj.teacher[1] + " " + classObj.room[3]+" Par "+classObj.subject[0]+" ka "+classObj.type[0]+" Season Le raha hai. ");
  }
  else if(currentTime >= classObj.time[2] &&  currentTime <= classObj.time[3]){
      text.innerHTML = (classObj.teacher[3] + " " + classObj.room[2]+" Par "+classObj.subject[2]+" ka "+classObj.type[1]+" Season Le raha hai. ");
  }
  else if(currentTime >= classObj.time[3] &&  currentTime <= classObj.time[4]){
        text.innerHTML = ("Abhi Break Chal raha hai");
  }
  else if(currentTime >= classObj.time[4] &&  currentTime <= classObj.time[5]){
      text.innerHTML = (classObj.teacher[1] + " " + classObj.room[3]+" Par "+classObj.subject[0]+" ka "+classObj.type[0]+" Season Le raha hai. ")+"<hr>"+(classObj.teacher[2] + " " + classObj.room[4]+" Par "+classObj.subject[0]+" ka "+classObj.type[0]+" Season Le raha hai. ");
  }
  else if(currentTime >= classObj.time[5] &&  currentTime <= classObj.time[6]){
      text.innerHTML = (classObj.teacher[1] + " " + classObj.room[4]+" Par "+classObj.subject[0]+" ka "+classObj.type[0]+" Season Le raha hai. ")+"<hr>"+(classObj.teacher[2] + " " + classObj.room[3]+" Par "+classObj.subject[0]+" ka "+classObj.type[0]+" Season Le raha hai. ");
  }
  else if(currentTime >= classObj.time[6] &&  currentTime <= classObj.time[7]){
    text.innerHTML = (classObj.teacher[1] + " " + classObj.room[4]+" Par "+classObj.subject[0]+" ka "+classObj.type[0]+" Season Le raha hai. ")+"<hr>"+(classObj.teacher[2] + " " + classObj.room[3]+" Par "+classObj.subject[0]+" ka "+classObj.type[0]+" Season Le raha hai. ");
        // text.innerHTML = ("Somthing");
  }
  else{
    text.innerHTML = ("College Khatam")
  }
}
function tuesDay(){
    if(currentTime >= classObj.time[0] &&  currentTime <= classObj.time[1]){
        text.innerHTML = (classObj.teacher[1]+classObj.room[2]+"Par"+classObj.subject[0]+"ka"+classObj.type[1]+"Season Le raha hai");
    }
    else if(currentTime >= classObj.time[1] &&  currentTime <= classObj.time[2]){
        text.innerHTML = (classObj.teacher[2]+classObj.room[2]+"Par"+classObj.subject[1]+"ka"+classObj.type[0]+"Season Le raha hai");
       
    }
    else if(currentTime >= classObj.time[2] &&  currentTime <= classObj.time[3]){
        text.innerHTML = (classObj.teacher[1] + " " + classObj.room[3]+" Par "+classObj.subject[2]+" ka "+classObj.type[0]+" Season Le raha hai. ")+"<hr>"+(classObj.teacher[2] + " " + classObj.room[4]+" Par "+classObj.subject[1]+" ka "+classObj.type[0]+" Season Le raha hai. ");
    }
    else if(currentTime >= classObj.time[3] &&  currentTime <= classObj.time[4]){
          text.innerHTML = ("Abhi Break Chal raha hai");
    }
    else if(currentTime >= classObj.time[4] &&  currentTime <= classObj.time[5]){
        text.innerHTML = (classObj.teacher[3] + " " + classObj.room[2]+" Par "+classObj.subject[2]+" ka "+classObj.type[1]+" Season Le raha hai. ");
    }
    else if(currentTime >= classObj.time[5] &&  currentTime <= classObj.time[6]){
        text.innerHTML = (classObj.teacher[0] + " " + classObj.room[3]+" Par "+classObj.subject[7]+" ka "+classObj.type[0]+" Season Le raha hai. ")+"<hr>"+(classObj.teacher[4] + " " + classObj.room[4]+" Par "+classObj.subject[6]+" ka "+classObj.type[0]+" Season Le raha hai. ");
    }
    else if(currentTime >= classObj.time[6] &&  currentTime <= classObj.time[7]){
      text.innerHTML = (classObj.teacher[0] + " " + classObj.room[3]+" Par "+classObj.subject[7]+" ka "+classObj.type[1]+" Season Le raha hai. ")+"<hr>"+(classObj.teacher[4] + " " + classObj.room[3]+" Par "+classObj.subject[6]+" ka "+classObj.type[1]+" Season Le raha hai. ");
    }
    else{
     text.innerHTML = ("College Khatam")
  }
}
function wednesDay(){
   if(currentTime >= classObj.time[0] &&  currentTime <= classObj.time[1]){
        text.innerHTML = (classObj.teacher[2]+classObj.room[2]+"Par"+classObj.subject[1]+"ka"+classObj.type[1]+"Season Le raha hai");
    }
    else if(currentTime >= classObj.time[1] &&  currentTime <= classObj.time[2]){
        text.innerHTML = (classObj.teacher[2]+classObj.room[2]+"Par"+classObj.subject[1]+"ka"+classObj.type[1]+"Season Le raha hai");
       
    }
    else if(currentTime >= classObj.time[2] &&  currentTime <= classObj.time[3]){
        text.innerHTML = (classObj.teacher[4] + " " + classObj.room[4]+" Par "+classObj.subject[1]+" ka "+classObj.type[0]+" Season Le raha hai. ")+"<hr>"+(classObj.teacher[1] + " " + classObj.room[3]+" Par "+classObj.subject[0]+" ka "+classObj.type[0]+" Season Le raha hai. ");
    }
    else if(currentTime >= classObj.time[3] &&  currentTime <= classObj.time[4]){
          text.innerHTML = ("Abhi Break Chal raha hai");
    }
    else if(currentTime >= classObj.time[4] &&  currentTime <= classObj.time[5]){
        text.innerHTML = (classObj.teacher[1] + " " + classObj.room[3]+" Par "+classObj.subject[0]+" ka "+classObj.type[0]+" Season Le raha hai. ")+"<hr>"+(classObj.teacher[3] + " " + classObj.room[4]+" Par "+classObj.subject[2]+" ka "+classObj.type[0]+" Season Le raha hai. ");
    }
    else if(currentTime >= classObj.time[5] &&  currentTime <= classObj.time[6]){
        text.innerHTML = (classObj.teacher[0] + " " + classObj.room[3]+" Par "+classObj.subject[7]+" ka "+classObj.type[0]+" Season Le raha hai. ")+"<hr>"+(classObj.teacher[4] + " " + classObj.room[4]+" Par "+classObj.subject[6]+" ka "+classObj.type[0]+" Season Le raha hai. ");
    }
    else if(currentTime >= classObj.time[6] &&  currentTime <= classObj.time[7]){
      text.innerHTML = (classObj.teacher[0] + " " + classObj.room[3]+" Par "+classObj.subject[7]+" ka "+classObj.type[1]+" Season Le raha hai. ")+"<hr>"+(classObj.teacher[4] + " " + classObj.room[4]+" Par "+classObj.subject[6]+" ka "+classObj.type[0]+" Season Le raha hai. ");
    }
    else{
     text.innerHTML = ("College Khatam")
  }
}
function thursDay(){
    if(currentTime >= classObj.time[0] &&  currentTime <= classObj.time[1]){
        text.innerHTML = (classObj.teacher[2]+classObj.room[4]+"Par"+classObj.subject[1]+"ka"+classObj.type[0]+"Season Le raha hai")+"<hr>"+(classObj.teacher[1]+classObj.room[3]+"Par"+classObj.subject[0]+"ka"+classObj.type[0]+"Season Le raha hai");
    }
    else if(currentTime >= classObj.time[1] &&  currentTime <= classObj.time[2]){
        text.innerHTML = (classObj.teacher[1]+classObj.room[3]+"Par"+classObj.subject[0]+"ka"+classObj.type[0]+"Season Le raha hai")+"<hr>"+(classObj.teacher[2]+classObj.room[4]+"Par"+classObj.subject[1]+"ka"+classObj.type[0]+"Season Le raha hai");
    }
    else if(currentTime >= classObj.time[2] &&  currentTime <= classObj.time[3]){
        text.innerHTML = (classObj.teacher[1] + " " + classObj.room[3]+" Par "+classObj.subject[0]+" ka "+classObj.type[1]+" Season Le raha hai. ");
    }
    else if(currentTime >= classObj.time[3] &&  currentTime <= classObj.time[4]){
          text.innerHTML = ("Abhi Break Chal raha hai");
    }
    else if(currentTime >= classObj.time[4] &&  currentTime <= classObj.time[5]){
        text.innerHTML = (classObj.teacher[4] + " " + classObj.room[4]+" Par "+classObj.subject[6]+" ka "+classObj.type[0]+" Season Le raha hai. ")+"<hr>"+(classObj.teacher[0] + " " + classObj.room[3]+" Par "+classObj.subject[7]+" ka "+classObj.type[0]+" Season Le raha hai. ");
    }
    else if(currentTime >= classObj.time[5] &&  currentTime <= classObj.time[6]){
        text.innerHTML = (classObj.teacher[0] + " " + classObj.room[3]+" Par "+classObj.subject[5]+" ka "+classObj.type[0]+" Season Le raha hai. ")+"<hr>"+(classObj.teacher[4] + " " + classObj.room[0]+" Par "+classObj.subject[4]+" ka "+classObj.type[0]+" Season Le raha hai. ");
    }
    else if(currentTime >= classObj.time[6] &&  currentTime <= classObj.time[7]){
      text.innerHTML = (classObj.teacher[2] + " " + classObj.room[2]+" Par "+classObj.subject[3]+" ka "+classObj.type[0]+" Season Le raha hai. ")+"<hr>"+(classObj.teacher[4] + " " + classObj.room[4]+" Par "+classObj.subject[8]+" ka "+classObj.type[0]+" Season Le raha hai. ")+"<hr>"+(classObj.teacher[2] + " " + classObj.room[2]+" Par "+classObj.subject[3]+" ka "+classObj.type[1]+" Season Le raha hai. ");
    }
    else if(currentTime >= classObj.time[7] &&  currentTime <= classObj.time[8]){
        text.innerHTML = (classObj.teacher[4] + " " + classObj.room[4]+" Par "+classObj.subject[6]+" ka "+classObj.type[1]+" Season Le raha hai. ")+"<hr>"+(classObj.teacher[0] + " " + classObj.room[3]+" Par "+classObj.subject[7]+" ka "+classObj.type[1]+" Season Le raha hai. ");
    }
    else{
     text.innerHTML = ("College Khatam")
  }
}
function friDay(){
    if(currentTime >= classObj.time[0] &&  currentTime <= classObj.time[1]){
        text.innerHTML = (classObj.teacher[1]+classObj.room[4]+"Par"+classObj.subject[0]+"ka"+classObj.type[1]+"Season Le raha hai");
    }
    else if(currentTime >= classObj.time[1] &&  currentTime <= classObj.time[2]){
        text.innerHTML = (classObj.teacher[1]+classObj.room[3]+"Par"+classObj.subject[2]+"ka"+classObj.type[0]+"Season Le raha hai")+"<hr>"+(classObj.teacher[2]+classObj.room[4]+"Par"+classObj.subject[1]+"ka"+classObj.type[0]+"Season Le raha hai");
    }
    else if(currentTime >= classObj.time[2] &&  currentTime <= classObj.time[3]){
        text.innerHTML = (classObj.teacher[1] + " " + classObj.room[3]+" Par "+classObj.subject[0]+" ka "+classObj.type[0]+" Season Le raha hai. ")+"<hr>"+(classObj.teacher[0] + " " + classObj.room[4]+" Par "+classObj.subject[1]+" ka "+classObj.type[0]+" Season Le raha hai. ");
    }
    else if(currentTime >= classObj.time[3] &&  currentTime <= classObj.time[4]){
          text.innerHTML = ("Abhi Break Chal raha hai");
    }
    else if(currentTime >= classObj.time[4] &&  currentTime <= classObj.time[5]){
        text.innerHTML = (classObj.teacher[0] + " " + classObj.room[2]+" Par "+classObj.subject[5]+" ka "+classObj.type[1]+" Season Le raha hai. ")+"<hr>"+(classObj.teacher[5] + " " + classObj.room[0]+" Par "+classObj.subject[4]+" ka "+classObj.type[1]+" Season Le raha hai. ");
         text.innerHTML = (classObj.teacher[2] + " " + classObj.room[1]+" Par "+classObj.subject[3]+" ka "+classObj.type[0]+" Season Le raha hai. ");
    }
    else if(currentTime >= classObj.time[5] &&  currentTime <= classObj.time[6]){
        text.innerHTML = (classObj.teacher[4] + " " + classObj.room[4]+" Par "+classObj.subject[8]+" ka "+classObj.type[0]+" Season Le raha hai. ");
    }
    else if(currentTime >= classObj.time[6] &&  currentTime <= classObj.time[7]){
      text.innerHTML = (classObj.teacher[0] + " " + classObj.room[2]+" Par "+classObj.subject[5]+" ka "+classObj.type[1]+" Season Le raha hai. ")+"<hr>"+(classObj.teacher[5] + " " + classObj.room[0]+" Par "+classObj.subject[4]+" ka "+classObj.type[1]+" Season Le raha hai. ")+"<hr>"+(classObj.teacher[2] + " " + classObj.room[1]+" Par "+classObj.subject[3]+" ka "+classObj.type[0]+" Season Le raha hai. ")+"<hr>"+(classObj.teacher[4] + " " + classObj.room[4]+" Par "+classObj.subject[8]+" ka "+classObj.type[0]+" Season Le raha hai. ");
    }
    else if(currentTime >= classObj.time[7] &&  currentTime <= classObj.time[8]){
        text.innerHTML = (classObj.teacher[0] + " " + classObj.room[1]+" Par "+classObj.subject[5]+" ka "+classObj.type[0]+" Season Le raha hai. ")+"<hr>"+(classObj.teacher[5] + " " + classObj.room[0]+" Par "+classObj.subject[4]+" ka "+classObj.type[0]+" Season Le raha hai. ")+"<hr>"+(classObj.teacher[2] + " " + classObj.room[2]+" Par "+classObj.subject[3]+" ka "+classObj.type[1]+" Season Le raha hai. ")+"<hr>"+(classObj.teacher[4] + " " + classObj.room[4]+" Par "+classObj.subject[8]+" ka "+classObj.type[0]+" Season Le raha hai. ");
    }
    else{
     text.innerHTML = ("College Khatam")
  }
}
function saturDay(){
    text.innerHTML = ("Sir GharPar  Rest Kar rahi hai tum  bhi so  jao");
}
function sunDay(){
    text.innerHTML = ("Sir GharPar  Rest Kar rahi hai tum  bhi so  jao");
  
}


switch(currentDay){
  case 1: 
    monDay();
    break;
  case 2:
    tuesDay();
    break;
  case 3: 
    wednesDay();
    break;
  case 4: 
    thursDay();
    break;
  case 5:
    friDay();
    break;
  case 6:
    saturDay();
    break;
  case 7: 
    sunDay();
    break;

}









// let monday = {
// if(currentTime >= classObj.time[0] &&  currentTime <= classObj.time[1]){
//     text.innerHTML = ("Somthing");
// }
// else if(currentTime >= classObj.time[1] &&  currentTime <= classObj.time[2]){
//       text.innerHTML = ("Somthing");
// }
// else if(currentTime >= classObj.time[2] &&  currentTime <= classObj.time[3]){
//       text.innerHTML = ("Somthing");
// }
// else if(currentTime >= classObj.time[3] &&  currentTime <= classObj.time[4]){
//       text.innerHTML = ("Somthing");
// }
// else if(currentTime >= classObj.time[4] &&  currentTime <= classObj.time[5]){
//       text.innerHTML = ("Somthing");
// }
// else if(currentTime >= classObj.time[5] &&  currentTime <= classObj.time[6]){
//       text.innerHTML = ("Somthing");
// }
// else if(currentTime >= classObj.time[6] &&  currentTime <= classObj.time[7]){
//       text.innerHTML = ("Somthing");
// }
// }
// let monday = {
//   if(currentTime >= classObj.time[0] &&  currentTime <= classObj.time[1]){
//     text.innerHTML = ("Somthing");
// }
// else if(currentTime >= classObj.time[1] &&  currentTime <= classObj.time[2]){
//       text.innerHTML = ("Somthing");
// }
// else if(currentTime >= classObj.time[2] &&  currentTime <= classObj.time[3]){
//       text.innerHTML = ("Somthing");
// }
// else if(currentTime >= classObj.time[3] &&  currentTime <= classObj.time[4]){
//       text.innerHTML = ("Somthing");
// }
// else if(currentTime >= classObj.time[4] &&  currentTime <= classObj.time[5]){
//       text.innerHTML = ("Somthing");
// }
// else if(currentTime >= classObj.time[5] &&  currentTime <= classObj.time[6]){
//       text.innerHTML = ("Somthing");
// }
// else if(currentTime >= classObj.time[6] &&  currentTime <= classObj.time[7]){
//       text.innerHTML = ("Somthing");
// }
// }

