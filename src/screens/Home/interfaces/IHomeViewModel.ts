export interface IHomeViewModel {
  exitSeconds: number

  handleSaveCurrentTime: () => void
  handleStartBreak: () => void
  handleStopBreak: () => void
  handleStartLunch: () => void
  handleStopLunch: () => void
}