export default function getTime() {
  let today = new Date();
  let date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  let time = today.getHours() * 60 + today.getMinutes();
  let dateTime = { date: date, time: time };
  return dateTime;
}
