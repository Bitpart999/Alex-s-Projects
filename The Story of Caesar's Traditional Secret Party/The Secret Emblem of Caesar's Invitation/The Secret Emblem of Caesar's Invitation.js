const emblemClue1 = "Eagle";
const emblemClue2 = "Laurel";
const emblemClue3 = 7;

let locationStart = "";

if (emblemClue1 === "Eagle") {
  locationStart = "Forum";
}
else if (emblemClue1 === "Lion") {
  locationStart = "Colosseum";
}
else{
  locationStart = "Villa";
}

if (emblemClue2 === "Laurel" && locationStart === "Forum") {
  locationStart += " of Augustus";
}
else if (emblemClue2 === "Grapes" || locationStart === "Villa") {
  locationStart += " of Pompey";
}

switch (emblemClue3)
{
  case 7:
    locationStart += " North";
    break;
  case 3:
    locationStart += " South";
    break;
  case 9:
    locationStart += " East";
    break;
  case 4:
    locationStart += " West";
    break;
}

//Question: It's important to be careful when using "==" and "===" because "==" does type conversion and "===" does not. 