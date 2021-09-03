export const formatDate = (date) => {
  const year = date.getFullYear();
  let month = date.getMonth() + 1 + '';
  let day = date.getDate() + '';
  const hours = date.getHours();
  let minutes = date.getMinutes();

  if (month.length === 1) month = '0' + month;
  if (day.length === 1) day = '0' + day;
  if (minutes < 10) minutes = '0' + minutes;

  const formatted = `${day}/${month}/${year} ${hours}:${minutes}`
  return formatted
}

export const makeDuration = (duration) => {
  const minutes = Math.floor(duration / 60);
  let seconds = Math.floor(duration % 60);

  if (seconds < 10) seconds = `0${seconds}`
  return `${minutes}:${seconds}`
}