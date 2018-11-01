function isValidReservationDatetime(datetime) {
  // Only allows Monday, Thursday, Sunday and 19:00, 20:00, 21:00 i.e. nine hours a week.
  var day = datetime.getDay();
  var hour = datetime.getHours();
  var minute = datetime.getMinutes();
  
  if ((day !== 0) && (day !== 1) && (day !== 4)) { // not sunday
    return false;
  }

  if ((hour !== 19) && (hour !== 20) && (hour !== 21)) {
    return false;
  }
  
  if (minute !== 0) {
    return false;
  }
  
  return true;
}
