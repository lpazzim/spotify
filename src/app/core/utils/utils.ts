export function convertDurationToTimeString(duration: number){
  var minutes = Math.floor(duration / 60000);
  var seconds = ((duration % 60000) / 1000).toFixed(0);
  return minutes + ":" + (Number(seconds) < 10 ? '0' : '') + seconds;
}