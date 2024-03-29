AOS.init();

const eventDate = new Date('2024-12-31 19:00:00');
const eventTimestamp = eventDate.getTime();

const countTime = setInterval(() => {
  const now = new Date();
  const nowTimestamp = now.getTime();
  
  const eventTime = eventTimestamp - nowTimestamp;
  
  const daysInMilliseconds = 1000 * 60 * 60 * 24;
  const hoursInMilliseconds = 1000 * 60 * 60;
  const minutesInMilliseconds = 1000 * 60;
  
  const eventDays = Math.floor(eventTime / daysInMilliseconds);
  const eventHours = Math.floor((eventTime % daysInMilliseconds) / hoursInMilliseconds);
  const eventMinutes = Math.floor((eventTime % hoursInMilliseconds) / minutesInMilliseconds);
  const eventSeconds = Math.floor((eventTime % minutesInMilliseconds) / 1000);
  
  document.getElementById('counter').innerHTML = `${eventDays}d ${eventHours}h ${eventMinutes}m ${eventSeconds}s`;
  
  if (eventTime < 0) {
    clearInterval(countTime)
    document.getElementsByName('counter').innerHTML = 'Evento expirado'
  }
}, 1000)