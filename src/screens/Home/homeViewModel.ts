export interface HomeViewModel {
  previewExitTime: string,
  workedTimeInMinutes: number,
  exitTime: string,
  timeArray: string[],
  handleNewTime: () => void,
}