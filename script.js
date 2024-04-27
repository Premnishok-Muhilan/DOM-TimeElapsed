var input_date = document.createElement("input");
input_date.setAttribute("type", "date");
input_date.id = "dob";

var button = document.createElement("button");
button.setAttribute("type", "button");
button.className = "btn btn-primary";
button.innerHTML = "Display date";

button.addEventListener("click", get_date);

var ele = document.createElement("div");
ele.className = "main";
ele.append(input_date, button);
document.body.append(ele);

//Holds the result div
var res = document.createElement("div");
res.className = "result";
res.innerHTML = "";

function get_date() {
  var input = document.getElementById("dob").value;
  var timestamp = Date.parse(input);

  var inputdate = new Date(timestamp);
  console.log(`Input date is :${inputdate}`);

  var curentdate = new Date();
  console.log(`Current date is: ${curentdate}`);

  //Milli-seconds elapsed from the given date
  var millsecdiff = parseInt(curentdate.getTime() - inputdate.getTime());
  console.log(`Milliseconds Difference:${millsecdiff}`);

  //Seconds elapsed from the given date
  var secondsdiff = Math.floor(millsecdiff / 1000);
  console.log(`seconds Difference:${secondsdiff}`);

  //Minutes elapsed from the given date
  var mindiff = Math.floor(secondsdiff / 60);
  console.log(`Min Diff Difference:${mindiff}`);

  //Hours elapsed from the given date
  var hoursdiff = Math.floor(mindiff / 60);
  console.log(`Hours Difference:${hoursdiff}`);

  //Days elapsed from the given date
  var daydiff = Math.floor(hoursdiff / 24);
  console.log(`Day Difference:${daydiff}`);

  //Years elapsed from the given date
  var yeardiff = curentdate.getFullYear() - inputdate.getFullYear();
  console.log(`Year Difference:${yeardiff}`);

  inputdate.getFullYear();
  var monthdiff =
    yeardiff * 12 + (curentdate.getMonth() - inputdate.getMonth());
  console.log(`Month Difference:${monthdiff}`);

  res.innerHTML = `Given input date is ${curentdate} <br/> year ${yeardiff} <br/> month ${monthdiff} <br/> day ${daydiff} <br/> hour ${hoursdiff} <br/> minute ${mindiff} <br/> second ${secondsdiff} <br/> milli socond ${millsecdiff}`;

  document.body.append(res);
}
