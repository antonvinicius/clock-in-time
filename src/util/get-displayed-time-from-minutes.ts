export function getDisplayedTimeFromMinutes(minutes: number) {
  const hours = Math.floor(minutes / 60);
  const min = minutes % 60;

  return `${hours}h${min}m`;
}
