export default function timeSince(timeStamp) {
  if(typeof timeStamp === 'string') timeStamp = new Date(timeStamp);

  let now = new Date(),
    secondsPast = (now.getTime() - timeStamp.getTime()) / 1000;
  if (secondsPast < 60) {
    return parseInt(secondsPast) + 'secs ago';
  }
  if (secondsPast < 3600) {
    return parseInt(secondsPast / 60) + 'mins ago';
  }
  if (secondsPast <= 86400) {
    return parseInt(secondsPast / 3600) + 'hours ago';
  }
  if (secondsPast > 86400) {
    let day = timeStamp.getDate();
    let month = timeStamp.toDateString().match(/ [a-zA-Z]*/)[0].replace(" ", "");
    let year = timeStamp.getFullYear() == now.getFullYear()
      ? ""
      : " " + timeStamp.getFullYear();
    return month + " " + day + year;
  }
}
