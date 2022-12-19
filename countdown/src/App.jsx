import { useState, useEffect } from 'react'
import './App.css'

export default function App() {
  var countDownDate = new Date("Dec 23, 2022 16:00:00").getTime();
  var now = new Date().getTime();

  const [time, setTime] = useState(now);
  var distance = countDownDate - now;
  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  function secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return [h, m, s];
  }

  var [hours, minutes, seconds] = secondsToHms(distance / 1000)

  // Time calculations for days, hours, minutes and seconds
  // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  // var hours = Math.floor((distance / (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  // var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  // var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  return (
    <div>
      <h1>Bye Bye ML6!</h1>
      <div className='countdown'>
        {hours}:{minutes}:{seconds}
      </div>
    </div>)

}
