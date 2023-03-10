export interface IHomeViewModel {
  exitTime: string

  handleSaveCurrentTime: () => void
  handleStartBreak: () => void
  handleStopBreak: () => void
  handleStartLunch: () => void
  handleStopLunch: () => void
}