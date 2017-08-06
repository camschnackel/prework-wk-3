function checkDay( today ){
  // use a switch check if 'today' is the weekend ('saturday' or 'sunday')
  // DAYS MUST BE IN ALL lowercase LETTERS AND FULL NAMES
  // ex: 'wednesday', not 'Wednesday' or 'wed'
  // return true if it is the weekend, false if not
var today = (today.toLowerCase());
switch (today) {
  case 'sunday':
    return true;
    break;
  case 'monday':
    return false;
    break;
  case 'tuesday':
    return false;
    break;
  case 'wednesday':
    return false;
    break;
  case 'thursday':
    return false;
    break;
  case 'friday':
    return false;
    break;
  case 'saturday':
    return true;
    break;
  default:
    return "Error 404, day not found";
    break;
  }
} // end checkDay

// test your function checkDay by calling it below and logging the result
console.log(checkDay('humpday'));
