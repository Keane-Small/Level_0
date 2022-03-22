function hoursAndMinutes(num) {
  const numHours = Math.floor(num / 60);
  const numMinutes = num % 60;

  if (numHours == 1 && numMinutes == 1) {
    console.log(numHours + " hour, " + numMinutes + " minute ");
  } else if (numHours > 1 && numMinutes > 1) {
    console.log(numHours + " hours, " + numMinutes + " minutes");
  } else if (numHours > 1 && numMinutes == 1) {
    console.log(numHours + " hours, " + numMinutes + " minute");
  } else if (numHours > 1 && numMinutes < 1) {
    console.log(numHours + " hours, " + numMinutes + " minutes");
  } else {
    console.log(numHours + " hour, " + numMinutes + " minutes");
  }
}

hoursAndMinutes(180);
hoursAndMinutes(120);
